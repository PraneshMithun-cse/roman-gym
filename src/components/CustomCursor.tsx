"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero   = document.querySelector("main > section:first-child") as HTMLElement | null;
    const footer = document.querySelector("footer") as HTMLElement | null;
    if (!hero) return;

    const heroObs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) document.body.classList.add("past-hero");
      else                   document.body.classList.remove("past-hero");
    }, { threshold: 0 });

    const footerObs = footer ? new IntersectionObserver(([e]) => {
      if (e.isIntersecting) document.body.classList.remove("past-hero");
      else if (window.scrollY > (hero.offsetHeight ?? 0)) document.body.classList.add("past-hero");
    }, { threshold: 0 }) : null;

    heroObs.observe(hero);
    if (footer && footerObs) footerObs.observe(footer);

    return () => {
      heroObs.disconnect();
      footerObs?.disconnect();
    };
  }, []);

  useEffect(() => {
    const dot   = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;

    const d = dot;
    const tr = trail;
    let trailX = 0, trailY = 0;
    let raf: number;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function onMove(e: MouseEvent) {
      d.style.left = e.clientX + "px";
      d.style.top  = e.clientY + "px";
      trailX = lerp(trailX, e.clientX, 0.15);
      trailY = lerp(trailY, e.clientY, 0.15);
    }

    function tick() {
      tr.style.left = trailX + "px";
      tr.style.top  = trailY + "px";
      raf = requestAnimationFrame(tick);
    }

    function onEnter(e: MouseEvent) {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button]")) d.classList.add("hovering");
    }
    function onLeave() { d.classList.remove("hovering"); }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout",  onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout",  onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor"       ref={dotRef}   />
      <div id="custom-cursor-trail" ref={trailRef} />
    </>
  );
}
