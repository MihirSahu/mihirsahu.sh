### mihirsahu.sh

A place for my thoughts.

## Development

```bash
sfw pnpm install
sfw pnpm dev
```

Use `sfw pnpm` for this project.

## Thinker animation

On desktop (1024 px and wider), the landing page plays the approved 11.6-second
apple-picking sequence after a 3-second initial delay, then repeats with a
10-second rest between playthroughs. Mobile and tablet show only the original static thinker and do
not download the animation. Resizing below 1024 px stops playback immediately.
The original pose also displays when the page is hidden or reduced motion is
requested.

The figure uses its original 1740 × 1800 SVG viewport at 500 px tall on desktop.
The branch extends above that viewport. The figure adds no top margin on mobile
or desktop, retaining the existing header gap. There are no playback controls.

The SVG player is in `app/components/thinker.tsx`. The compact frame asset is
`public/animations/thinker-apple.json`; `app/components/thinker-still.ts` supplies
the initial pose without waiting for that download.

After editing the source study in `artifacts/thinker-apple`, regenerate and export
it from the repository root:

```bash
python3 artifacts/thinker-apple/build_animation.py
node scripts/export-thinker-animation.mjs
```

The intermediate `animation.json`, generated import project, and local previews
are ignored by Git. The Python step recreates the input required by the exporter.

The exporter checks every character and color against the authored frames before
writing the web asset. Normal builds use the exported files and do not need the
ASCII Motion editor or the authoring artifacts.
