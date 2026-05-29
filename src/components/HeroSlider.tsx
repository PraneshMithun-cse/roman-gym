"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

interface Slide {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
}

const SLIDES: Slide[] = [
  {
    title:    "BUILT DIFFERENT.",
    subtitle: "THIS IS NOT A GYM. THIS IS A MOVEMENT.",
    cta:      "JOIN THE MOVEMENT",
    href:     "/signup",
  },
  {
    title:    "ELITE EQUIPMENT.",
    subtitle: "State-of-the-art premium facility designed for serious training.",
    cta:      "VIEW PLANS",
    href:     "#plans",
  },
] as const;

const STATS = [
  ["5 AM",  "OPENS DAILY"],
  ["₹0",    "ADMISSION FEE"],
  ["2026",  "EST."],
  ["120",   "DAY PROGRAMS"],
] as const;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading,  setFading]  = useState(false);

  const goTo = useCallback((i: number) => {
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 250);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[current];

  return (
    <section style={{ backgroundColor: "#13140e", position: "relative", overflow: "hidden", width: "100%" }}>

      {/* Video background — full viewport height */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }}>

        {/* Desktop video */}
        <video
          key="desktop-video"
          autoPlay muted loop playsInline
          className="hidden sm:block"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/gym/herobg.mp4" type="video/mp4" />
        </video>

        {/* Mobile video */}
        <video
          key="mobile-video"
          autoPlay muted loop playsInline
          className="block sm:hidden"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/gym/mobilehero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(19,20,14,0.88) 35%, rgba(19,20,14,0.15) 100%), linear-gradient(to top, rgba(19,20,14,0.7) 0%, transparent 45%)" }} />


        {/* Slide text — animated crossfade */}
        <div
          style={{ position: "absolute", bottom: "80px", left: 0, right: 0, pointerEvents: "none", opacity: fading ? 0 : 1, transition: "opacity 0.5s ease-in-out" }}
        >
          <div className="site-grid">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }} className="flex-col sm:flex-row">
              <div style={{ flex: "0 0 55%", pointerEvents: "auto" }}>
                <a href={slide.href} style={{ textDecoration: "none" }}>
                  <h1
                    className="text-[40px] sm:text-[80px]"
                    style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, textTransform: "uppercase", color: "#fbfbfb", lineHeight: 0.9, margin: 0 }}
                  >
                    {slide.title}
                  </h1>
                  <p style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontWeight: 700, fontSize: "20px", color: "rgba(251,251,251,0.8)", margin: "12px 0 0", letterSpacing: "0.05em" }}>
                    {slide.subtitle}
                  </p>
                </a>
              </div>
              <div style={{ flex: "0 0 35%", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", pointerEvents: "auto" }}>
                <a
                  href={slide.href}
                  className="text-[32px] sm:text-[64px]"
                  style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, textTransform: "uppercase", color: "#fbfbfb", padding: "12px 8px", lineHeight: 0.9, textDecoration: "none", display: "inline-block" }}
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar + arrows */}
      <div className="site-grid" style={{ borderTop: "1px solid rgba(251,251,251,0.1)", padding: "24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Stats */}
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {STATS.map(([num, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "32px", color: "#fbfbfb", lineHeight: 1 }}>{num}</span>
                <span style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontSize: "10px", color: "rgba(251,251,251,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "3px" }}>{label}</span>
              </div>
            ))}
          </div>
          {/* Arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <button aria-label="Previous" onClick={prev} style={{ background: "none", border: "none", padding: 0, display: "flex", color: "#fbfbfb" }}>
              <ArrowLeftIcon  width={72} height={60} style={{ color: "#fbfbfb" }} />
            </button>
            <button aria-label="Next"     onClick={next} style={{ background: "none", border: "none", padding: 0, display: "flex", color: "#fbfbfb" }}>
              <ArrowRightIcon width={72} height={60} style={{ color: "#fbfbfb" }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
