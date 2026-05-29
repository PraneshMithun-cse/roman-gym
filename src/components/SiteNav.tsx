"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "Features",   href: "#features" },
  { label: "Trainers",   href: "#trainers" },
  { label: "Membership", href: "#plans" },
  { label: "Rankings",   href: "/dashboard/ranking" },
  { label: "Diet AI",    href: "/diet" },
  { label: "Contact",    href: "#contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[10]"
        style={{
          padding: "16px 0",
          backgroundColor: scrolled ? "#13140e" : "transparent",
          transition: "background-color 0.25s ease-out",
        }}
      >
        <div className="site-grid">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>

            {/* Logo */}
            <div style={{ flex: "0 0 20%" }}>
              <Link href="/" aria-label="Roman Fitness home">
                <Image
                  src="/gym/logoroman.png"
                  alt="Roman Fitness"
                  width={240}
                  height={80}
                  style={{ objectFit: "contain", height: 76, width: "auto", mixBlendMode: "screen" }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop nav links */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex"
              style={{ flex: "0 0 58%", gap: "32px", alignItems: "center", justifyContent: "center" }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: '"Druk", Arial, sans-serif',
                    fontWeight: 700,
                    fontSize: "28px",
                    textTransform: "uppercase",
                    color: "#fbfbfb",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                    lineHeight: 1,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div style={{ flex: "0 0 22%", display: "flex", gap: "20px", alignItems: "center", justifyContent: "flex-end" }}>
              <button aria-label="Search" style={{ color: "#fbfbfb", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
                <SearchIcon width={28} height={28} style={{ color: "#fbfbfb" }} />
              </button>
              <Link
                href="/signup"
                style={{
                  fontFamily: '"Druk", Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: "18px",
                  textTransform: "uppercase",
                  color: "#13140e",
                  background: "#fbfbfb",
                  padding: "6px 16px",
                  textDecoration: "none",
                  lineHeight: 1.2,
                }}
                className="hidden md:inline-flex items-center"
              >
                Join Now
              </Link>
              {/* Hamburger */}
              <button
                aria-label="Open menu"
                className="flex md:hidden"
                onClick={() => setMobileOpen(true)}
                style={{ color: "#fbfbfb", background: "none", border: "none", cursor: "pointer", padding: 0, flexDirection: "column", gap: "5px" }}
              >
                <span style={{ display: "block", width: 28, height: 3, backgroundColor: "#fbfbfb", borderRadius: 2 }} />
                <span style={{ display: "block", width: 28, height: 3, backgroundColor: "#fbfbfb", borderRadius: 2 }} />
                <span style={{ display: "block", width: 28, height: 3, backgroundColor: "#fbfbfb", borderRadius: 2 }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col" style={{ backgroundColor: "#13140e" }}>
          <div style={{ padding: "16px 24px", display: "flex", justifyContent: "flex-end", alignItems: "center", height: "74px" }}>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)} style={{ color: "#fbfbfb", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}>
              <CloseIcon width={32} height={33} style={{ color: "#fbfbfb" }} />
            </button>
          </div>
          <nav aria-label="Mobile navigation" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0 32px", gap: "20px" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 700, fontSize: "clamp(32px, 9vw, 64px)", textTransform: "uppercase", color: "#fbfbfb", textDecoration: "none", lineHeight: 1.1 }}>
                {label}
              </Link>
            ))}
            <Link href="/signup" onClick={() => setMobileOpen(false)} style={{ fontFamily: '"Druk", Arial, sans-serif', fontWeight: 700, fontSize: "clamp(32px, 9vw, 64px)", textTransform: "uppercase", color: "#f2695c", textDecoration: "none", lineHeight: 1.1 }}>
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
