import type { CSSProperties } from "react";
import Image from "next/image";

const LEFT_LINKS = [
  { label: "Privacy Policy",  href: "#" },
  { label: "Terms of Service", href: "#" },
] as const;

const RIGHT_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Youtube",   href: "https://www.youtube.com/" },
  { label: "Contact",   href: "#contact" },
] as const;

const linkStyle: CSSProperties = {
  fontFamily: "Helvetica-Now, Arial, sans-serif",
  fontSize: "16px",
  color: "#f2695c",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#13140e", padding: "24px 0", color: "#f2695c" }}>
      <div className="site-grid">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            minHeight: "64px",
          }}
        >
          {/* Left — policy links */}
          <div style={{ flex: "0 0 38%", display: "flex", gap: "40px", alignItems: "flex-end" }}>
            {LEFT_LINKS.map(({ label, href }) => (
              <a key={label} href={href} style={linkStyle}>
                {label}
              </a>
            ))}
          </div>

          {/* Center — Roman Fitness full logo */}
          <div style={{ flex: "0 0 24%", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
            <a href="/" aria-label="Roman Fitness home" style={{ display: "flex" }}>
              <Image
                src="/gym/logoroman.png"
                alt="Roman Fitness"
                width={180}
                height={180}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "110px",
                  mixBlendMode: "screen",
                }}
              />
            </a>
          </div>

          {/* Right — social links */}
          <div style={{ flex: "0 0 38%", display: "flex", gap: "40px", alignItems: "flex-end", justifyContent: "flex-end" }}>
            {RIGHT_LINKS.map(({ label, href }) => (
              <a key={label} href={href} style={linkStyle} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
