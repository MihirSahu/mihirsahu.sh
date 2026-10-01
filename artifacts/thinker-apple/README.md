# The Thinker — an apple interrupts

An 11.6-second ASCII animation at 10 fps. The branch grows in, a single apple appears, the thinker looks up and reaches for it, then lowers it onto his knee and resumes the original pose. The branch and apple disappear to close the loop.

- `preview.html`: self-contained player with pause, restart, and scrubbing.
- `thinker-apple-native.asciimtn`: editable native v2 project saved from the connected ASCII Motion editor. Open this to continue editing.
- `thinker-apple.asciimtn`: generated importable project, recreated by the build script.
- `storyboard.html`: eight key poses side by side.
- `animation.json`: the same frame data in JSON form.
- `build_animation.py`: reproducible pose generation, branch and apple drawings, head rotation, and fixed-length arm geometry with inverse-sampled texture from the original ASCII arm.
- `body-under-arm.txt`: body artwork with completed chest, resting-arm, and knee contours behind the moving arm. The torso deformation carries this repaired surface with it. Edit this to refine newly exposed anatomy.

Regenerate from the repository root with `python3 artifacts/thinker-apple/build_animation.py`.

Generated exports (`animation.json` and `thinker-apple.asciimtn`), HTML previews,
PNG snapshots, and Python caches are ignored by Git. Run the generator before
the web exporter on a fresh checkout. The native v2 project and source artwork
remain versioned for future editing.

The seated figure comes from the existing landing-page artwork, preserved in `../thinker-motion/source.txt`. Both ends of the loop match that artwork exactly. The project contains 88 content frames occupying 116 timeline frames. The landing page now uses a compact export of this study, generated with `node scripts/export-thinker-animation.mjs` from the repository root.

Style revision: the moving arm reuses source punctuation and shading, including negative space, instead of drawing smooth outline strokes. The branch is hand-authored with bark grain, knots, and shaded leaf clusters using the source character palette.

Occlusion repair: moving poses begin with the completed body underneath, then draw the head and moving arm over it. Shared source contours stay with the body instead of being erased along with the original arm. The exact source artwork is used at rest. Generation checks the exposed chest, resting-arm, and knee anchors in the fully raised pose.

Body motion: the upper body leans back eight degrees as the head lifts, then shifts four degrees toward the apple with a small shoulder lift during the reach. The arm follows the moving shoulder while its hand meets the fixed apple. A brief recoil follows the pluck, and the torso settles as the hand returns. The deformation tapers into the planted pelvis; the lap, legs, and base remain fixed. The repaired contours move with the torso and are checked in the raised pose.
