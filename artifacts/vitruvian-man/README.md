# Vitruvian Man — Renaissance

A static, 144 × 72 ASCII study for the Renaissance essay. The figure keeps
Leonardo's two superimposed poses, framed by a circle and a square. Silhouette
masks remove the handwritten notes and paper texture; the geometry is redrawn
before sampling the remaining ink into ASCII characters. The page uses an SVG
text grid in the site's Berkeley Mono font and inherits its foreground color.

Reference: Leonardo da Vinci, *Vitruvian Man*, public-domain reproduction on
[Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg).
The photograph is credited there to Luc Viatour. The source image is not shipped
with the website.

Source image:
https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg

SHA-256:
`a4b9fa3f4ae65266c8f5d90f885ea968675d1ff079646612296ff792260603e6`

To regenerate after downloading that reference, run from the repository root:

```bash
node artifacts/vitruvian-man/build-art.mjs /path/to/Da_Vinci_Vitruve_Luc_Viatour.jpg
```

This authoring script uses the project's existing `sharp` dependency. Normal
site builds use the generated `app/thoughts/renaissance/vitruvian-data.ts` and
do not require the reference image or an MCP connection.

`vitruvian.txt` is the plain ASCII source. `vitruvian-man.asciimtn` is the
editable ASCII Motion project, saved through the running MCP server. After
editing the project, export its frame as text and regenerate the TypeScript
line array from that text to keep the website and editor in sync.

The essay preserves the wording and paragraph breaks of
[Mihir's original X post](https://x.com/TheMihirSahu/status/2109193343435415927),
published October 11, 2026 at 08:04:14 UTC.
