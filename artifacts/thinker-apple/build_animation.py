"""Authored ASCII poses and trajectories; preserves the landing-page resting pose."""
import html
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT.parent / 'thinker-motion' / 'source.txt'
W, H, OX, OY, FPS = 100, 78, 4, 24, 10
INK, WOOD, FRUIT = '#e7e3d9', '#98aa8f', '#e7a07b'
BASE = {(x, y): c for y, row in enumerate(SOURCE.read_text().splitlines())
        for x, c in enumerate(row) if c != ' '}

def ease(t):
    t = max(0, min(1, t))
    return t*t*(3-2*t)

def lerp(a, b, t):
    return tuple(x+(y-x)*t for x,y in zip(a,b))

def inside(x, y, poly):
    result = False
    j = len(poly)-1
    for i, (xi, yi) in enumerate(poly):
        xj, yj = poly[j]
        if (yi > y) != (yj > y) and x < (xj-xi)*(y-yi)/(yj-yi)+xi:
            result = not result
        j = i
    return result

HEAD = [(23,-1),(31,-1),(36,2),(37,6),(34,9),(29,10),(23,9),(19,7),(18,2)]
ARM = [(23,10),(29,9),(34,12),(40,17),(42,21),(36,23),(29,22),(25,17),(23,14)]
HEAD_CELLS = {p:c for p,c in BASE.items() if inside(*p,HEAD)}
# The body underpainting completes contours hidden by the original arm.
# Render it before the head and moving arm; never erase source cells afterward.
BODY = {(x, y): c for y, row in enumerate((ROOT / 'body-under-arm.txt').read_text().splitlines())
        for x, c in enumerate(row) if c != ' '}

class Canvas:
    def __init__(self, source=BASE):
        self.cells = {p:(c,INK) for p,c in source.items()}
    def set(self, x, y, ch, color=INK):
        x,y=round(x),round(y)
        if 0<=x+OX<W and 0<=y+OY<H:
            if ch==' ': self.cells.pop((x,y),None)
            else: self.cells[x,y]=(ch,color)
    def line(self,a,b,color=INK):
        dx,dy=b[0]-a[0],b[1]-a[1]
        n=max(1,math.ceil(max(abs(dx),abs(dy))*3))
        ch=':' if abs(dy)>abs(dx)*.55 else '.'
        for i in range(n+1):
            p=lerp(a,b,i/n);self.set(*p,ch,color)
    def path(self,points,color=INK):
        for a,b in zip(points,points[1:]):self.line(a,b,color)
    def bezier(self,a,b,c,color=INK):
        points=[]
        for i in range(61):
            t=i/60
            points.append(((1-t)**2*a[0]+2*(1-t)*t*b[0]+t*t*c[0],
                           (1-t)**2*a[1]+2*(1-t)*t*b[1]+t*t*c[1]))
        self.path(points,color)
    def clear_polygon(self,poly):
        for p in list(self.cells):
            if inside(*p,poly):self.cells.pop(p)
    def data(self):
        return {f'{x+OX},{y+OY}':{'char':c,'color':color,'bgColor':'transparent'}
                for (x,y),(c,color) in sorted(self.cells.items(),key=lambda v:(v[0][1],v[0][0]))}

def head(canvas, amount):
    if amount<=0:return
    for p in HEAD_CELLS:canvas.cells.pop(p,None)
    angle=math.radians(32)*amount
    pivot=(34,8)
    for (x,y),ch in HEAD_CELLS.items():
        px=(x-pivot[0])*.55;py=y-pivot[1]
        nx=(px*math.cos(angle)-py*math.sin(angle))/.55+pivot[0]
        ny=px*math.sin(angle)+py*math.cos(angle)+pivot[1]-amount
        canvas.set(nx,ny,ch)
    # Short neck connection follows the jaw while the shoulder stays planted.
    canvas.path([(34,8-amount),(38,8),(41,8)])

def body_pose(i):
    # The head leads the uncoiling torso; the shoulder follows as he reaches.
    look=ease((i-30)/12)*(1-ease((i-81)/11))
    reach=ease((i-46)/15)*(1-ease((i-67)/15))
    release=math.sin(math.pi*max(0,min(1,(i-63)/8)))
    return math.radians(8*look-4*reach+.65*release), .95*reach, .025*reach

def torso_point(x,y,pose):
    angle,lift,turn=pose
    # Blend into the planted pelvis. Knee, lap and legs at row 22 and below
    # never move. Above the ribs this is a rigid, aspect-correct rotation.
    weight=ease((22-y)/9)
    px=(x-51)*.55;py=y-25
    rx=(px*math.cos(angle)-py*math.sin(angle))/.55+51
    ry=px*math.sin(angle)+py*math.cos(angle)+25-lift
    rx-=(x-47)*turn
    return x+(rx-x)*weight,y+(ry-y)*weight

def torso(canvas,pose):
    if not any(pose):return
    source=canvas.cells
    result={p:v for p,v in source.items() if p[1]>=22}
    # Inverse sample the connected surface, including its negative space.
    # This moves the reconstructed body and its shared lines together.
    for y in range(-14,22):
        for x in range(8,82):
            sx,sy=float(x),float(y)
            for _ in range(8):
                tx,ty=torso_point(sx,sy,pose)
                sx+=x-tx;sy+=y-ty
            key=(round(sx),round(sy))
            if key[1]<22 and key in source:result[(x,y)]=source[key]
    canvas.cells=result

def arm(canvas, wrist, shoulder, moving):
    if not moving:return
    # Solve the elbow from fixed bone lengths so the arm bends instead of stretching.
    ux,uy=shoulder[0]*.55,shoulder[1]
    vx,vy=wrist[0]*.55-ux,wrist[1]-uy
    distance=math.hypot(vx,vy)
    upper=math.hypot((40-34)*.55,10-20)
    lower=math.hypot((34-27)*.55,20-11)
    assert abs(upper-lower)<distance<=upper+lower, "Wrist must stay within reach"
    along=(upper*upper-lower*lower+distance*distance)/(2*distance)
    height=math.sqrt(max(0,upper*upper-along*along))
    elbow=((ux+vx/distance*along+vy/distance*height)/.55,
           uy+vy/distance*along-vx/distance*height)
    # Transport the source artwork, including its empty highlights, with each
    # bone. Nearest-cell inverse sampling keeps the original punctuation and
    # avoids holes caused by forward rotation of sparse character coordinates.
    source_shoulder=(40,10)
    source_elbow=(34,20)
    source_wrist=(27,11)
    patches=[
        (source_shoulder,source_elbow,shoulder,elbow,
         [(35,9),(42,9),(43,15),(42,20),(36,23),(32,21),(34,17),(33,12)]),
        (source_elbow,source_wrist,elbow,wrist,
         [(30,22),(36,23),(41,20),(38,17),(33,14),(30,10),(24,9),(23,14),(25,17)])
    ]
    for sa,sb,da,db,mask in patches:
        sv=((sb[0]-sa[0])*.55,sb[1]-sa[1])
        dv=((db[0]-da[0])*.55,db[1]-da[1])
        sl=math.hypot(*sv);dl=math.hypot(*dv)
        su=(sv[0]/sl,sv[1]/sl);du=(dv[0]/dl,dv[1]/dl)
        def inverse(x,y):
            px=(x-da[0])*.55;py=y-da[1]
            along=(px*du[0]+py*du[1])*sl/dl
            across=-px*du[1]+py*du[0]
            return (sa[0]+(along*su[0]-across*su[1])/.55,
                    sa[1]+along*su[1]+across*su[0])
        for y in range(-14,29):
            for x in range(8,52):
                sx,sy=inverse(x,y)
                if inside(sx,sy,mask):
                    ch=BASE.get((round(sx),round(sy)),' ')
                    canvas.set(x,y,ch)

def branch(canvas, amount, tug=0):
    if amount<=0:return
    # Authored at the same cell scale as the statue: broken contours, dense
    # colon shadows, sparse highlights and a few short dash accents.
    rows = [
        # Small shaded leaves on fine twigs, with a tapered two-row bough.
        (40,-20, "   .:.                         ..:."),
        (40,-19, " .: .::.                     .: . .:"),
        (40,-18, "   .::.                       .:.::.."),
        (42,-17, "     :..                      .:       ...::.."),
        (35,-16, "      ...::....       ....:::..  ...:::..   ..::..  ..::...::.."),
        (25,-15, " ....:::..   ...::::...   ...::....    ...::...     ..::...  .:..:.."),
        (18,-14, ".:..::...                ...:::..          ...::....    ...:::..     .:::..::.."),
        (18,-13, ":                      .:                      .:               ...::..::.."),
        (18,-12, ":                  ..::.                    .::."),
        (33,-11, "  .:. .:..                   .: . .:."),
        (33,-10, "    .::..                     .:.::."),
    ]
    threshold=95-82*amount
    for x,y,row in rows:
        for dx,ch in enumerate(row):
            xx=x+dx
            if ch!=' ' and xx>=threshold and xx<96:
                # The pluck flexes the slender tip, leaving the trunk rooted.
                yy=y+tug*max(0,1-(xx-18)/50)
                canvas.set(xx,yy,ch,WOOD)

def apple(canvas, center, scale=1, attached=False):
    if scale<=0:return
    x,y=center
    outline=[(-1,-2),(-3,-2),(-4,-1),(-4,0),(-3,1),(-1,2),(1,2),(3,1),(4,0),(4,-1),(3,-2),(1,-2),(0,-1)]
    poly=[(x+px*scale,y+py*scale) for px,py in outline]
    canvas.clear_polygon(poly)
    canvas.path(poly+[poly[0]],FRUIT)
    canvas.set(x-2*scale,y-1*scale,'.',FRUIT)
    if not attached:canvas.path([(x,y-2*scale),(x+1,y-3*scale)],WOOD)

def render(i):
    moving=30<i<93
    canvas=Canvas(BODY if moving else BASE)
    growth=ease((i-10)/13)
    vanish=1-ease((i-100)/6)
    growth*=vanish
    gaze=ease((i-30)/9)*(1-ease((i-83)/9))
    head(canvas,gaze)
    pose=body_pose(i)
    torso(canvas,pose)
    # Environment stays fixed while the completed figure moves in front of it.
    figure=canvas.cells
    canvas=Canvas({})
    branch(canvas,growth,tug=.8*math.sin(math.pi*max(0,min(1,(i-61)/6))))
    canvas.cells.update(figure)
    rest_wrist=torso_point(27,11,pose)
    ready_wrist=torso_point(27,13,pose)
    shoulder=torso_point(40,10,pose)
    pick_wrist=(19,-6)
    lap_wrist=(25,25)
    if i<40:
        wrist=lerp(rest_wrist,ready_wrist,ease((i-30)/9))
    elif i<46:wrist=ready_wrist
    elif i<62:
        wrist=lerp(ready_wrist,pick_wrist,ease((i-46)/15))
    elif i<67:
        wrist=lerp(pick_wrist,(20,-4),ease((i-62)/4))
    elif i<81:
        wrist=lerp((20,-4),lap_wrist,ease((i-67)/13))
    elif i<93:
        wrist=lerp(lap_wrist,rest_wrist,ease((i-81)/11))
    else:wrist=rest_wrist
    arm(canvas,wrist,shoulder,moving)
    fruit_scale=ease((i-24)/5)*vanish
    if i<62:
        center=(18,-9);attached=True
    elif i<81:
        center=(wrist[0]-1,wrist[1]-3);attached=False
    else:
        center=(24,22);attached=False
    apple(canvas,center,fruit_scale,attached)
    if i<10:label='The familiar pose'
    elif i<24:label='A branch appears'
    elif i<30:label='One apple'
    elif i<40:label='Looking up'
    elif i<46:label='A moment of curiosity'
    elif i<62:label='Reaching'
    elif i<67:label='Picking the apple'
    elif i<81:label='Lowering it to his knee'
    elif i<93:label='Returning to thought'
    elif i<100:label='Back in the original pose'
    else:label='The scene dissolves'
    return canvas.data(),label

def main():
    ROOT.mkdir(parents=True,exist_ok=True)
    frames=[]
    for i in range(116):
        data,label=render(i)
        if frames and frames[-1]['data']==data and frames[-1]['name']==label:
            frames[-1]['duration']+=100
        else:frames.append({'id':f'apple-{i:03}','name':label,'duration':100,'data':data})
    project={'version':'1.0.0','name':'The Thinker — an apple interrupts',
             'canvas':{'width':W,'height':H,'canvasBackgroundColor':'#111411','showGrid':False},
             'animation':{'frames':frames,'currentFrameIndex':0,'frameRate':FPS,'looping':True},
             'tools':{'selectedColor':INK,'selectedBgColor':'transparent','selectedCharacter':'.'}}
    (ROOT/'thinker-apple.asciimtn').write_text(json.dumps(project,separators=(',',':')))
    (ROOT/'animation.json').write_text(json.dumps(project,separators=(',',':')))
    # Compact frame strings grouped by color for a self-contained preview.
    preview=[]
    for f in frames:
        layers={color:[[' ']*W for _ in range(H)] for color in [INK,WOOD,FRUIT]}
        for k,v in f['data'].items():
            x,y=map(int,k.split(','));layers[v['color']][y][x]=v['char']
        preview.append({'name':f['name'],'duration':f['duration'],
                        'layers':['\n'.join(''.join(row).rstrip() for row in layers[c]) for c in [INK,WOOD,FRUIT]]})
    (ROOT/'preview.html').write_text(PREVIEW.replace('__FRAMES__',json.dumps(preview)).replace('__COLORS__',json.dumps([INK,WOOD,FRUIT])))
    picks=[0,29,44,61,65,79,97,115]
    panels=[]
    for i in picks:
        data,label=render(i)
        texts=''.join(f'<text x="{int(k.split(",")[0])*6}" y="{int(k.split(",")[1])*12+10}" fill="{v["color"]}">{html.escape(v["char"])}</text>' for k,v in data.items())
        panels.append(f'<section><h2>{i/10:.1f}s · {label}</h2><svg viewBox="0 0 600 936" style="font:12px monospace">{texts}</svg></section>')
    (ROOT/'storyboard.html').write_text('<!doctype html><meta charset="utf-8"><title>Thinker apple storyboard</title><style>body{margin:0;padding:24px;background:#111411;color:#dedfd4;font:14px monospace;display:grid;grid-template-columns:repeat(4,1fr);gap:24px}h2{font:12px monospace;color:#a9b59b}svg{width:100%;display:block}section{border:1px solid #30372e;padding:12px}</style>'+''.join(panels))
    # Verify the loop begins and ends at the exact existing pose, with no branch/apple.
    expected={f'{x+OX},{y+OY}':c for (x,y),c in BASE.items()}
    assert {k:v['char'] for k,v in frames[0]['data'].items()}==expected
    assert frames[0]['data']==frames[-1]['data']
    assert sum(f['duration'] for f in frames)==11600
    assert all(len(v['char'])==1 for f in frames for v in f['data'].values())
    # The planted lower body is an exact copy through every weight shift.
    for f in frames:
        for (x,y),ch in BASE.items():
            if y>=29:assert f['data'][f'{x+OX},{y+OY}']['char']==ch
    # The repaired body surface carries the shared contours through the lean.
    # Test the exposed chest and resting arm against that deformed surface.
    raised,_=render(61)
    plate=Canvas(BODY);head(plate,1);torso(plate,body_pose(61))
    for (x,y),(ch,color) in plate.cells.items():
        if 14<=y<=22 and 31<=x<=48:
            assert raised[f'{x+OX},{y+OY}']['char']==ch
    print(f'{len(frames)} authored content frames, 116 timeline frames, 11.6 seconds; exact original pose at both ends.')

PREVIEW='''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>The Thinker · an apple interrupts</title>
<style>*{box-sizing:border-box}body{margin:0;background:#111411;color:#e7e3d9;font:14px system-ui}main{max-width:1100px;margin:auto;padding:28px}header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #343c31;padding-bottom:18px}h1{font-size:18px;font-weight:500;margin:0}small{color:#99a28f}#stage{position:relative;width:min(100%,600px);aspect-ratio:600/936;margin:14px auto}pre{position:absolute;margin:0;inset:0;font:10px/12px 'Courier New',monospace;white-space:pre;transform-origin:top left}footer{display:flex;gap:14px;align-items:center;flex-wrap:wrap;border-top:1px solid #343c31;padding-top:18px;position:sticky;bottom:0;background:#111411;padding-bottom:18px}button{background:#253021;color:#e7e3d9;border:1px solid #526048;border-radius:6px;padding:9px 15px;cursor:pointer}input{flex:1;min-width:180px;accent-color:#a7b99a}#label{min-width:210px}a{color:#b7c4a9}#time{font-variant-numeric:tabular-nums;color:#a9b59b} @media(min-width:850px){#stage{width:480px;aspect-ratio:600/936}}</style>
<main><header><div><h1>The Thinker · an apple interrupts</h1><small>ASCII motion study · 11.6-second loop</small></div><a href="thinker-apple.asciimtn" download>Editable project ↗</a></header><div id="stage"><pre></pre><pre></pre><pre></pre></div><footer><button id="play">Pause</button><button id="restart">Restart</button><input id="scrub" aria-label="Animation position" type="range" min="0" max="11599" value="0"><span id="time"></span><span id="label"></span></footer></main>
<script>const frames=__FRAMES__,colors=__COLORS__,els=[...document.querySelectorAll('pre')],stage=document.querySelector('#stage'),scrub=document.querySelector('#scrub'),btn=document.querySelector('#play');let starts=[],total=0;for(const f of frames){starts.push(total);total+=f.duration}let position=0,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,last=performance.now();function draw(){let i=starts.findLastIndex(t=>t<=position);i=Math.max(0,i);els.forEach((el,j)=>{el.textContent=frames[i].layers[j];el.style.color=colors[j];el.style.transform=`scale(${stage.clientWidth/600})`});scrub.value=position;document.querySelector('#label').textContent=frames[i].name;document.querySelector('#time').textContent=(position/1000).toFixed(1)+' / 11.6s';btn.textContent=playing?'Pause':'Play'}function tick(now){if(playing)position=(position+Math.min(now-last,100))%total;last=now;draw();requestAnimationFrame(tick)}btn.onclick=()=>{playing=!playing;draw()};document.querySelector('#restart').onclick=()=>{position=0;playing=true};scrub.oninput=()=>{position=+scrub.value;playing=false;draw()};document.addEventListener('keydown',e=>{if(e.code==='Space'&&e.target.tagName!=='INPUT'){e.preventDefault();playing=!playing}});addEventListener('resize',draw);draw();requestAnimationFrame(tick);</script></html>'''

if __name__=='__main__':main()
