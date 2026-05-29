"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const YELLOW = "#f2c75b";
const WHITE  = "#ffffff";

/* ─── 6 logo states cycling at 180ms each ─────────────────────────────────── */
const STATES = [
  // 0: compact text only — yellow
  { key: "a", color: YELLOW },
  // 1: bolt + text — white
  { key: "b", color: WHITE  },
  // 2: mascot image
  { key: "c", color: WHITE  },
  // 3: globe + agency info + star
  { key: "d", color: YELLOW },
  // 4: bolt + text — yellow
  { key: "e", color: YELLOW },
  // 5: compact text — white, slightly bigger
  { key: "f", color: WHITE  },
] as const;

const INTERVAL_MS = 180; // fast cycle like Major
const TOTAL_MS    = 3400; // total bootloader duration

export function Bootloader() {
  const [stateIdx, setStateIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible,  setVisible]  = useState(true);
  const [exiting,  setExiting]  = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Cycle logo states rapidly
    const cycle = setInterval(() => {
      setStateIdx(i => (i + 1) % STATES.length);
    }, INTERVAL_MS);

    // Fill progress bar over TOTAL_MS
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min(((now - start) / TOTAL_MS) * 100, 100);
      setProgress(Math.floor(p));
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    // Exit
    const exitT = setTimeout(() => {
      clearInterval(cycle);
      setExiting(true);
    }, TOTAL_MS);
    const removeT = setTimeout(() => setVisible(false), TOTAL_MS + 600);

    return () => {
      clearInterval(cycle);
      clearTimeout(exitT);
      clearTimeout(removeT);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!visible) return null;

  const s = STATES[stateIdx];
  const c = s.color;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.55s ease-out" : "none",
        overflow: "hidden",
      }}
    >
      {/* ─── Center logo area (hard-cut between states, no fade) ─── */}
      <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>

        {/* STATE a — compact text, no icon */}
        {s.key === "a" && (
          <span style={{ fontFamily: '"Courier New", monospace', fontWeight: 700, fontSize: "28px", color: c, letterSpacing: "0.35em", textTransform: "uppercase" }}>
            ROMAN FITNESS
          </span>
        )}

        {/* STATE b — bolt + ROMAN FITNESS (white) */}
        {s.key === "b" && (
          <>
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
              <path d="M12 0L0 15H9L7 28L22 11H13L12 0Z" fill={c} />
            </svg>
            <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "30px", color: c, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              ROMAN FITNESS
            </span>
          </>
        )}

        {/* STATE c — mascot small centered */}
        {s.key === "c" && (
          <Image
            src="/gym/logoroman.png"
            alt="RF"
            width={100}
            height={100}
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
            priority
          />
        )}

        {/* STATE d — globe + text info + star (like Major's info panel) */}
        {s.key === "d" && (
          <>
            {/* Globe */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <ellipse cx="22" cy="22" rx="20" ry="8"  stroke={c} strokeWidth="1.2" fill="none" />
              <ellipse cx="22" cy="22" rx="8"  ry="20" stroke={c} strokeWidth="1.2" fill="none" />
              <circle  cx="22" cy="22" r="20"          stroke={c} strokeWidth="1.2" fill="none" />
              <line x1="2"  y1="22" x2="42" y2="22" stroke={c} strokeWidth="0.8" />
              <line x1="22" y1="2"  x2="22" y2="42" stroke={c} strokeWidth="0.8" />
            </svg>
            {/* Text */}
            <div>
              <p style={{ fontFamily: '"Courier New", monospace', fontWeight: 700, fontSize: "16px", color: c, letterSpacing: "0.25em", lineHeight: 1.6, margin: 0 }}>
                ROMAN  FITNESS
              </p>
              <p style={{ fontFamily: '"Courier New", monospace', fontWeight: 700, fontSize: "16px", color: c, letterSpacing: "0.25em", lineHeight: 1.6, margin: 0 }}>
                EST.  2026
              </p>
            </div>
            {/* Star */}
            <span style={{ fontSize: "32px", color: WHITE, lineHeight: 1, fontWeight: 300 }}>✦</span>
          </>
        )}

        {/* STATE e — bolt + text (yellow, slightly smaller) */}
        {s.key === "e" && (
          <>
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
              <path d="M10 0L0 13H7L5 24L18 9H11L10 0Z" fill={c} />
            </svg>
            <span style={{ fontFamily: '"Courier New", monospace', fontWeight: 700, fontSize: "22px", color: c, letterSpacing: "0.3em", textTransform: "uppercase" }}>
              ROMAN  FITNESS
            </span>
          </>
        )}

        {/* STATE f — compact text (white, slightly larger) */}
        {s.key === "f" && (
          <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "34px", color: c, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ROMAN FITNESS
          </span>
        )}
      </div>

      {/* ─── Progress bar (always visible) ─── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "32px",
          backgroundColor: "#000",
        }}
      >
        {/* Gradient fill bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress}%`,
            background: `linear-gradient(
              90deg,
              #f2695c 0%,
              #f2c75b 35%,
              #ffffff 65%,
              #f2c75b 80%,
              #f2695c 100%
            )`,
            backgroundSize: "200% 100%",
            animation: "gradientShift 1.2s linear infinite",
            transition: "width 0.04s linear",
            boxShadow: "0 0 20px rgba(242,199,91,0.6), 0 0 60px rgba(242,105,92,0.3)",
          }}
        />
        {/* Glow blur layer behind */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: `${progress}%`,
            height: "8px",
            background: "linear-gradient(90deg, #f2695c, #f2c75b, #fff)",
            filter: "blur(8px)",
            opacity: 0.5,
            transition: "width 0.04s linear",
            pointerEvents: "none",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: '"Courier New", monospace',
            fontSize: "12px",
            fontWeight: 700,
            color: progress > 85 ? "#000" : YELLOW,
            letterSpacing: "0.1em",
            zIndex: 1,
            textShadow: progress > 85 ? "none" : "0 0 8px rgba(242,199,91,0.8)",
          }}
        >
          {String(progress).padStart(2, " ")} %
        </span>
      </div>
    </div>
  );
}
