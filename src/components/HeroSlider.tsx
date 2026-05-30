"use client";

const STATS = [
  ["5 AM",  "OPENS DAILY"],
  ["₹0",    "ADMISSION FEE"],
  ["2026",  "EST."],
  ["120",   "DAY PROGRAMS"],
] as const;

export function HeroSlider() {
  return (
    <section style={{ backgroundColor: "#13140e", position: "relative", overflow: "hidden", width: "100%" }}>

      {/* Video background */}
      <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        >
          <source src="/gym/herobg.mp4" type="video/mp4" />
        </video>

        {/* Subtle vignette */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(19,20,14,0.55) 0%, transparent 40%)" }} />
      </div>

      {/* Stats bar */}
      <div className="site-grid" style={{ borderTop: "1px solid rgba(251,251,251,0.1)", padding: "24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {STATS.map(([num, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 800, fontSize: "32px", color: "#fbfbfb", lineHeight: 1 }}>{num}</span>
                <span style={{ fontFamily: '"Helvetica-Now", Arial, sans-serif', fontSize: "10px", color: "rgba(251,251,251,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "3px" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
