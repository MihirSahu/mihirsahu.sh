import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdir, mkdtemp, readFile, rename, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Export the shipped animation, including its authored holds, without changing
// the page player or requiring the ASCII Motion authoring project at build time.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const animation = JSON.parse(await readFile(join(root, "public/animations/thinker-apple.json"), "utf8"));
const output = join(root, "public/link-previews/thinker-apple.mp4");
const width = 1200;
const height = 630;
const fps = 10;
const colors = ["#fafafa", "#98aa8f", "#e7a07b"];
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// Include the branch outside the page's figure viewport; a video cannot overflow.
const rows = animation.frames.flatMap((frame) => frame.layers.flat());
const left = Math.min(...rows.map(([x]) => x)) * 18 - 18;
const top = Math.min(...rows.map(([, y]) => y)) * 36;
const right = Math.max(...rows.map(([x, , text]) => x + text.length)) * 18 + 18;
const bottom = Math.max(...rows.map(([, y]) => y + 1)) * 36 + 18;
const artHeight = 550;
const artWidth = (right - left) / (bottom - top) * artHeight;

for (const { duration } of animation.frames) {
  if (duration <= 0 || duration % (1000 / fps) !== 0) {
    throw new Error(`Frame duration ${duration}ms cannot be represented at ${fps}fps`);
  }
}

const temp = await mkdtemp(join(tmpdir(), "thinker-preview-"));
try {
  const staged = join(temp, "thinker-apple.mp4");
  const encoder = spawn("ffmpeg", [
    "-hide_banner", "-loglevel", "error", "-y",
    "-f", "image2pipe", "-framerate", String(fps), "-vcodec", "png", "-i", "pipe:0",
    "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "20",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", staged,
  ], { stdio: ["pipe", "ignore", "pipe"] });
  let errors = "";
  encoder.stderr.setEncoding("utf8").on("data", (chunk) => { errors += chunk; });
  // Attach error handlers before producing any frames (including missing ffmpeg).
  const completed = once(encoder, "close");
  completed.catch(() => {});
  let inputError;
  encoder.stdin.on("error", (error) => { inputError = error; });
  try {
    for (const frame of animation.frames) {
      const layers = frame.layers.map((layer, index) => `<text font-family="monospace" font-size="30" font-weight="bold" fill="${colors[index]}" stroke="${colors[index]}" stroke-width="5" xml:space="preserve">${layer.map(([x, y, text]) => `<tspan x="${x * 18}" y="${(y + 1) * 36}" textLength="${text.length * 18}" lengthAdjust="spacingAndGlyphs">${escape(text)}</tspan>`).join("")}</text>`).join("");
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#0a0a0a"/><svg x="${(width - artWidth) / 2}" y="40" width="${artWidth}" height="${artHeight}" viewBox="${left} ${top} ${right - left} ${bottom - top}">${layers}</svg></svg>`;
      const png = await sharp(Buffer.from(svg)).png().toBuffer();
      for (let repeat = 0; repeat < frame.duration * fps / 1000; repeat++) {
        if (inputError) throw inputError;
        if (!encoder.stdin.write(png)) await once(encoder.stdin, "drain");
      }
    }
    encoder.stdin.end();
    const [code] = await completed;
    if (code !== 0) throw new Error(`ffmpeg exited ${code}: ${errors}`);
  } catch (error) {
    encoder.kill();
    await completed.catch(() => {});
    throw error;
  }
  const { size } = await stat(staged);
  if (size > 5_000_000) throw new Error(`Preview is too large: ${size} bytes`);
  await mkdir(dirname(output), { recursive: true });
  await rename(staged, output);
  console.log(`Generated /link-previews/thinker-apple.mp4 (${width} × ${height}, ${animation.frames.reduce((sum, frame) => sum + frame.duration, 0) / 1000}s, ${size} bytes)`);
} finally {
  await rm(temp, { recursive: true, force: true });
}
