"use client";
import Image from "next/image";

export function NewsletterSection() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#13140e", color: "#fbfbfb", overflow: "hidden" }}
    >
      {/* ── Big coral heading block ── */}
      <div style={{ padding: "80px 0 60px", textAlign: "center" }}>
        <p style={{
          fontFamily: '"Druk", Arial, sans-serif',
          fontWeight: 800,
          fontSize: "clamp(24px, 3vw, 48px)",
          color: "#f2695c",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          lineHeight: 1,
          margin: "0 0 8px",
        }}>
          Sign Up To Our
        </p>

        <h2 style={{
          fontFamily: '"Druk", Arial, sans-serif',
          fontWeight: 800,
          fontSize: "clamp(80px, 16vw, 220px)",
          color: "#f2695c",
          textTransform: "uppercase",
          lineHeight: 0.88,
          margin: "0 0 16px",
          letterSpacing: "-0.01em",
        }}>
          NEWSLETTER
        </h2>

        <p style={{
          fontFamily: '"Druk", Arial, sans-serif',
          fontWeight: 800,
          fontSize: "clamp(40px, 7vw, 100px)",
          color: "#f2695c",
          textTransform: "uppercase",
          lineHeight: 0.9,
          margin: 0,
        }}>
          AND STAY<br />CONNECTED<br />WITH US
        </p>
      </div>

      {/* ── Illustration + Form ── */}
      <div
        className="site-grid"
        style={{ display: "flex", alignItems: "flex-end", gap: "0", paddingBottom: "0", position: "relative", minHeight: "520px" }}
      >
        {/* Left — Roman Fitness mascot (floating cutout like Fantom skater) */}
        <div
          className="hidden md:block"
          style={{ flex: "0 0 42%", position: "relative", alignSelf: "flex-end" }}
        >
          <Image
            src="/gym/logoroman.png"
            alt="Roman Fitness mascot"
            width={560}
            height={560}
            style={{
              width: "100%",
              maxWidth: "560px",
              height: "auto",
              objectFit: "contain",
              mixBlendMode: "screen",
              display: "block",
              marginBottom: "-4px",
            }}
          />
        </div>

        {/* Right — Form */}
        <div style={{ flex: "0 0 55%", paddingBottom: "80px" }}>
          <form onSubmit={e => e.preventDefault()}>

            {/* Email input */}
            <div style={{ marginBottom: "40px" }}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL HERE"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(251,251,251,0.35)",
                  color: "rgba(251,251,251,0.45)",
                  fontFamily: '"Arial-Narrow", Arial, sans-serif',
                  fontSize: "clamp(16px, 1.8vw, 24px)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  padding: "16px 0",
                  width: "100%",
                  outline: "none",
                }}
              />
            </div>

            {/* Checkbox 1 */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px", cursor: "pointer" }}>
              <span style={{
                flexShrink: 0,
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#f2695c",
                display: "inline-block",
                marginTop: "2px",
              }} />
              <span>
                <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "16px", color: "#fbfbfb", display: "block" }}>
                  I agree to opt-in to Roman Fitness communications
                </span>
                <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "13px", color: "rgba(251,251,251,0.45)", display: "block", marginTop: "4px" }}>
                  By clicking &ldquo;Start Training&rdquo; you agree to our Privacy Policy.
                </span>
              </span>
              <input type="checkbox" defaultChecked style={{ display: "none" }} />
            </label>

            {/* Checkbox 2 */}
            <label style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px", cursor: "pointer" }}>
              <span style={{
                flexShrink: 0,
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#f2695c",
                display: "inline-block",
              }} />
              <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "16px", color: "#fbfbfb" }}>
                I would like to receive updates from Roman Fitness partners
              </span>
              <input type="checkbox" defaultChecked style={{ display: "none" }} />
            </label>

            {/* SUBSCRIBE / START TRAINING button */}
            <button
              type="submit"
              style={{
                fontFamily: '"Druk", Arial, sans-serif',
                fontWeight: 800,
                fontSize: "clamp(48px, 6vw, 80px)",
                textTransform: "uppercase",
                color: "#f2695c",
                background: "none",
                border: "none",
                padding: "0",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
                display: "block",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              START TRAINING
            </button>

            {/* Phone */}
            <a
              href="tel:8098834154"
              style={{
                display: "block",
                marginTop: "20px",
                fontFamily: "Helvetica-Now, Arial, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "rgba(251,251,251,0.25)",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              080988 34154
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
