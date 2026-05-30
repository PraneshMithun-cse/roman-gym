"use client";

import { useRef, useState } from "react";

const REELS = [
  { id: "DYabhXUydez", caption: "120 Days Transformation Challenge" },
  { id: "DXCSyVxjs3C", caption: "Join Our New Gym" },
  { id: "DY3ynzzxpWC", caption: "Get In Shape With Us" },
  { id: "DYw_sRDOA8p", caption: "120 Days Challenge" },
  { id: "DYreHG9x_9v", caption: "Get In Shape With Us" },
  { id: "DYnCKUzO3ao", caption: "120 Days Transformation" },
];

function ReelCard({ reel, index }: { reel: typeof REELS[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function handleEnded() {
    setPlaying(false);
  }

  const showIcon = !playing || hovered;

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "9/16",
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgba(242,199,91,0.12)",
        animation: `slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`,
        backgroundColor: "#000",
      }}
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <video
        ref={videoRef}
        src={`/videos/reel-${reel.id}.mp4`}
        poster={`/images/reel-thumb-${reel.id}.jpg`}
        playsInline
        onEnded={handleEnded}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 45%)",
        pointerEvents: "none",
      }} />

      {/* Play/Pause icon */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: showIcon ? 1 : 0,
        transition: "opacity 0.25s ease",
        pointerEvents: "none",
      }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.55)",
          border: "2px solid rgba(242,199,91,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}>
          {playing ? (
            /* Pause icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c75b">
              <rect x="5" y="4" width="4" height="16" rx="1"/>
              <rect x="15" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            /* Play icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#f2c75b" style={{ marginLeft: "3px" }}>
              <polygon points="5,3 19,12 5,21"/>
            </svg>
          )}
        </div>
      </div>

      {/* Caption */}
      <div style={{
        position: "absolute",
        bottom: "14px",
        left: "14px",
        right: "14px",
        opacity: hovered || !playing ? 1 : 0,
        transition: "opacity 0.25s ease",
        pointerEvents: "none",
      }}>
        <p style={{
          fontFamily: "Helvetica-Now, Arial, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(251,251,251,0.75)",
          margin: 0,
          lineHeight: 1.4,
        }}>
          {reel.caption}
        </p>
      </div>

      {/* IG badge top-right */}
      <div style={{
        position: "absolute",
        top: "12px",
        right: "12px",
        pointerEvents: "none",
        opacity: 0.6,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fbfbfb">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <section style={{ backgroundColor: "#0d0e09", padding: "100px 0", overflow: "hidden" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "1360px" }}>

        <p style={{
          fontFamily: "Helvetica-Now, Arial, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: "rgba(251,251,251,0.3)",
          marginBottom: "16px",
        }}>
          @ROMANFITNESS_JOTHIPURAM
        </p>

        <div style={{ display: "flex", alignItems: "baseline", gap: "24px", marginBottom: "8px", flexWrap: "wrap" }}>
          <h2 style={{
            fontFamily: '"Druk", Arial, sans-serif',
            fontWeight: 800,
            fontSize: "clamp(72px, 10vw, 140px)",
            lineHeight: 0.88,
            textTransform: "uppercase",
            color: "#fbfbfb",
            margin: 0,
          }}>
            OUR
          </h2>
          <span style={{
            fontFamily: '"Druk", Arial, sans-serif',
            fontWeight: 800,
            fontSize: "clamp(72px, 10vw, 140px)",
            lineHeight: 0.88,
            textTransform: "uppercase",
            color: "#f2c75b",
            margin: 0,
          }}>
            STORY
          </span>
        </div>

        <p style={{
          fontFamily: "Helvetica-Now, Arial, sans-serif",
          fontSize: "15px",
          color: "rgba(251,251,251,0.4)",
          marginTop: "24px",
          marginBottom: "60px",
          maxWidth: "480px",
          lineHeight: 1.6,
        }}>
          Follow our journey on Instagram — real training, real people, real results.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}>
          {REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        <div style={{ marginTop: "64px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a
            href="https://www.instagram.com/romanfitness_jothipuram/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontFamily: '"Druk", Arial, sans-serif',
              fontWeight: 800,
              fontSize: "18px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#13140e",
              backgroundColor: "#f2c75b",
              padding: "18px 40px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#e0b63e")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f2c75b")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow On Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
