"use client";

import Image from "next/image";
import { useState } from "react";

interface Transform {
  id:     number;
  before: string;
  after:  string;
  days:   string;
  label:  string;
}

const transforms: Transform[] = [
  { id: 1, before: "/gym/transform-before-1.png", after: "/gym/transform-after-1.png", days: "120 DAYS", label: "Member 1" },
  { id: 2, before: "/gym/transform-before-2.png", after: "/gym/transform-after-2.png", days: "120 DAYS", label: "Member 2" },
  { id: 3, before: "/gym/transform-before-3.png", after: "/gym/transform-after-3.png", days: "120 DAYS", label: "Member 3" },
];

function CompareCard({ t }: { t: Transform }) {
  const [active, setActive] = useState<"before" | "after">("before");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {/* Image container with cross-fade */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#000" }}>
        {/* BEFORE */}
        <div style={{ position: "absolute", inset: 0, opacity: active === "before" ? 1 : 0, transition: "opacity 0.5s ease", zIndex: active === "before" ? 2 : 1 }}>
          <Image src={t.before} alt="Before" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="(max-width:768px) 100vw, 33vw" />
        </div>
        {/* AFTER */}
        <div style={{ position: "absolute", inset: 0, opacity: active === "after" ? 1 : 0, transition: "opacity 0.5s ease", zIndex: active === "after" ? 2 : 1 }}>
          <Image src={t.after} alt="After" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="(max-width:768px) 100vw, 33vw" />
        </div>

        {/* Active label badge */}
        <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 5 }}>
          <span style={{
            fontFamily: '"Druk", Arial, sans-serif',
            fontWeight: 800,
            fontSize: "12px",
            letterSpacing: "0.25em",
            color: active === "after" ? "#13140e" : "#fbfbfb",
            backgroundColor: active === "after" ? "#f2c75b" : "rgba(0,0,0,0.6)",
            padding: "5px 12px",
            textTransform: "uppercase",
            transition: "background-color 0.3s, color 0.3s",
          }}>
            {active === "before" ? "BEFORE" : "AFTER"}
          </span>
        </div>

        {/* Days badge */}
        <div style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", zIndex: 5, backgroundColor: "rgba(19,20,14,0.85)", padding: "5px 16px", border: "1px solid rgba(242,199,91,0.4)" }}>
          <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "11px", letterSpacing: "0.2em", color: "#f2c75b", textTransform: "uppercase", whiteSpace: "nowrap" }}>{t.days}</span>
        </div>
      </div>

      {/* Toggle buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
        <button
          onClick={() => setActive("before")}
          style={{
            fontFamily: '"Druk", Arial, sans-serif',
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "16px 0",
            border: "none",
            cursor: "pointer",
            backgroundColor: active === "before" ? "#13140e" : "rgba(19,20,14,0.4)",
            color:            active === "before" ? "#fbfbfb" : "rgba(251,251,251,0.35)",
            borderBottom:     active === "before" ? "2px solid #fbfbfb" : "2px solid transparent",
            transition: "all 0.25s ease",
          }}
        >
          BEFORE
        </button>
        <button
          onClick={() => setActive("after")}
          style={{
            fontFamily: '"Druk", Arial, sans-serif',
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "16px 0",
            border: "none",
            cursor: "pointer",
            backgroundColor: active === "after" ? "#f2c75b" : "rgba(242,199,91,0.08)",
            color:            active === "after" ? "#13140e" : "rgba(242,199,91,0.5)",
            borderBottom:     active === "after" ? "2px solid #f2c75b" : "2px solid transparent",
            transition: "all 0.25s ease",
          }}
        >
          AFTER
        </button>
      </div>
    </div>
  );
}

export function TransformationSection() {
  return (
    <section style={{ backgroundColor: "#13140e", padding: "100px 0", overflow: "hidden" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "1360px" }}>

        {/* Label */}
        <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(251,251,251,0.3)", marginBottom: "16px" }}>
          REAL RESULTS
        </p>

        {/* Heading */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "24px", marginBottom: "8px", flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "clamp(80px, 12vw, 160px)", lineHeight: 0.88, textTransform: "uppercase", color: "#fbfbfb", margin: 0 }}>
            BODY
          </h2>
          <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "40px", color: "#f2c75b", textTransform: "uppercase", transform: "rotate(-4deg) translateY(-8px)", display: "inline-block" }}>
            Transformation
          </span>
        </div>

        <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "15px", color: "rgba(251,251,251,0.4)", marginTop: "20px", marginBottom: "56px", maxWidth: "480px", lineHeight: 1.6 }}>
          Tap BEFORE or AFTER on each card to see the full transformation. Real members, real results — 120-day programs with expert coaching.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transforms.map((t, i) => (
            <div key={t.id} style={{ animation: `slideUpFade 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.12}s both` }}>
              <CompareCard t={t} />
              <div style={{ marginTop: "14px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(251,251,251,0.25)", textTransform: "uppercase" }}>0{t.id}</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(251,251,251,0.08)" }} />
                <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "12px", letterSpacing: "0.15em", color: "#f2c75b", textTransform: "uppercase" }}>{t.days}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(251,251,251,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "15px", color: "rgba(251,251,251,0.35)", maxWidth: "400px", lineHeight: 1.6, margin: 0 }}>
            No admission fee. Expert coaching. Start your 120-day transformation today.
          </p>
          <a href="#contact"
            style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "clamp(32px, 4vw, 56px)", textTransform: "uppercase", color: "#fbfbfb", textDecoration: "none", lineHeight: 0.9, transition: "color 0.2s ease" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f2c75b")}
            onMouseLeave={e => (e.currentTarget.style.color = "#fbfbfb")}
          >
            START NOW →
          </a>
        </div>
      </div>
    </section>
  );
}
