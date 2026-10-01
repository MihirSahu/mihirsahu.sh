"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { thinkerStill } from "./thinker-still";

type AsciiRow = readonly [x: number, y: number, text: string];
type Frame = { duration: number; layers: readonly (readonly AsciiRow[])[] };
type Animation = { width: number; height: number; frames: Frame[] };

const INITIAL_DELAY_MS = 3_000;
const REST_MS = 10_000;
const COLORS = ["currentColor", "#98aa8f", "#e7a07b"];
const ANIMATION_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
const getAnimationAllowed = () => window.matchMedia(ANIMATION_QUERY).matches;
const getAnimationServerSnapshot = () => false;
const getPageVisible = () => document.visibilityState === "visible";
const getServerSnapshot = () => true;

function subscribeToAnimation(callback: () => void) {
  const query = window.matchMedia(ANIMATION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function subscribeToVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

export default function Thinker({ className }: { className?: string }) {
  const animationAllowed = useSyncExternalStore(subscribeToAnimation, getAnimationAllowed, getAnimationServerSnapshot);
  const pageVisible = useSyncExternalStore(subscribeToVisibility, getPageVisible, getServerSnapshot);
  const [animation, setAnimation] = useState<Animation | null>(null);
  const [frameIndex, setFrameIndex] = useState(-1);
  const enabled = animationAllowed && pageVisible;

  useEffect(() => {
    if (!enabled || animation) return;
    const controller = new AbortController();
    fetch("/animations/thinker-apple.json", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Animation unavailable");
        return response.json() as Promise<Animation>;
      })
      .then(setAnimation)
      .catch(() => { /* Keep the original pose if this decorative asset fails to load. */ });
    return () => controller.abort();
  }, [enabled, animation]);

  useEffect(() => {
    if (!enabled || !animation) return;
    let timer: ReturnType<typeof setTimeout>;
    const playFrame = (index: number) => {
      if (index === animation.frames.length) {
        setFrameIndex(-1);
        timer = setTimeout(() => playFrame(0), REST_MS);
        return;
      }
      setFrameIndex(index);
      timer = setTimeout(() => playFrame(index + 1), animation.frames[index].duration);
    };
    // Reset when returning to the tab or desktop width; never overlap playthroughs.
    timer = setTimeout(() => {
      setFrameIndex(-1);
      timer = setTimeout(() => playFrame(0), INITIAL_DELAY_MS);
    }, 0);
    return () => clearTimeout(timer);
  }, [animation, enabled]);

  const layers = enabled && frameIndex >= 0 && animation
    ? animation.frames[frameIndex].layers
    : thinkerStill;

  return (
    <figure className="mx-auto w-[483.333333px] max-w-full">
      <svg
        // Match the original 1740 × 1800 viewport and remove the editor's
        // four-column / 24-row padding. The branch can extend above it.
        viewBox="72 864 1740 1800"
        className={className}
        role="img"
        aria-label="The Thinker"
        data-animation-frame={enabled ? frameIndex : -1}
      >
        <title>The Thinker</title>
        {layers.map((rows, layer) => (
          <text
            key={layer}
            style={{ fontFamily: "var(--font-berkeley-mono), monospace" }}
            fontSize="30"
            fontWeight="bold"
            fill={COLORS[layer]}
            stroke={COLORS[layer]}
            strokeWidth="5"
            xmlSpace="preserve"
            aria-hidden="true"
          >
            {rows.map(([x, y, text]) => (
              <tspan key={y} x={x * 18} y={(y + 1) * 36} textLength={text.length * 18} lengthAdjust="spacingAndGlyphs">
                {text}
              </tspan>
            ))}
          </text>
        ))}
      </svg>
    </figure>
  );
}
