### mihirsahu.sh

A place for my thoughts.

## Development

```bash
sfw pnpm install
sfw pnpm dev
```

Use `sfw pnpm` for this project.

## Analytics

PostHog initializes in the root `instrumentation-client.ts` file. Set these
variables in `.env` or `.env.local`, and in your hosting provider before building:

```dotenv
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=your_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Use the ingestion host for your PostHog project's region and its public project
token, not a personal API key. Next.js includes these public values in the browser
bundle at build time, so changing them in production requires a rebuild.

Analytics stays inactive when either variable is missing. When configured,
PostHog captures page views, client-side route changes, and interactions
automatically. Visitors remain anonymous unless explicitly identified; session
recording is disabled.

To verify delivery, open the site, navigate to a thought, click a link, and check
PostHog's activity feed for the resulting events. Development visits also send
events when these variables are configured.

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
