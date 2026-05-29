"use client";

import Image from "next/image";

const GALLERY = [
  { src: "/gym/floor-wide.jpg",      alt: "Gym floor" },
  { src: "/gym/dumbbells.jpg",       alt: "Dumbbell rack" },
  { src: "/gym/cable-machine.jpg",   alt: "Cable machine" },
  { src: "/gym/shoulder-press.jpg",  alt: "Shoulder press" },
  { src: "/gym/chest-press.jpg",     alt: "Chest press" },
  { src: "/gym/lateral-raise.jpg",   alt: "Lateral raise" },
  { src: "/gym/motivation.jpg",      alt: "Training zone" },
  { src: "/gym/corridor-2.jpg",      alt: "Gym corridor" },
];

export function EmbeddedVideo() {
  return (
    <section style={{ backgroundColor: "#13140e", padding: "0 0 80px" }}>
      {/* Section label */}
      <div className="site-grid" style={{ paddingTop: "60px", paddingBottom: "32px" }}>
        <p style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontSize: "11px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(251,251,251,0.4)", marginBottom: "8px" }}>THE SPACE</p>
        <h2 style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "80px", color: "#fbfbfb", lineHeight: 0.9, textTransform: "uppercase" }}>SEE THE GYM</h2>
        <p style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontSize: "16px", color: "rgba(251,251,251,0.5)", marginTop: "16px", maxWidth: "480px" }}>
          State-of-the-art equipment across a premium facility designed for serious training.
        </p>
        <p style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(251,251,251,0.25)", marginTop: "12px" }}>
          JOTHIPURAM · COIMBATORE · EST. 2026
        </p>
      </div>

      {/* Photo grid — 4 col desktop, 2 col mobile */}
      <div className="site-grid">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map(({ src, alt }) => (
            <div key={src} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
              <Image src={src} alt={alt} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} sizes="(max-width:768px) 50vw, 25vw"
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
