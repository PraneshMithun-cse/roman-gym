"use client";

import { useRef, type MouseEvent } from "react";

interface Plan {
  id:       string;
  name:     string;
  duration: string;
  price:    string;
  period:   string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "basic", name: "Basic", duration: "3 + 3 Months",
    price: "₹3,099", period: "3 Months",
    features: ["Full Gym Access", "All Equipment", "Locker Access", "Cardio Zone", "Personal Training", "Diet Plan"],
  },
  {
    id: "pro", name: "Pro", duration: "6 + 6 Months",
    price: "₹4,699", period: "6 Months",
    features: ["Full Gym Access", "All Equipment", "Locker Access", "Cardio Zone", "Basic Diet Guidance", "Progress Tracking"],
    popular: true,
  },
  {
    id: "elite", name: "Elite", duration: "1 + 1 Year",
    price: "₹6,699", period: "1 Year",
    features: ["Full Gym Access", "All Equipment", "Locker Access", "Cardio Zone", "Personal Training", "AI Diet Plan"],
  },
];

const MAX_TILT = 18;

function PlanCard({ plan }: { plan: Plan }) {
  const cardRef = useRef<HTMLElement>(null);

  const baseTransform = plan.popular
    ? "translateY(-16px) scale(1.03)"
    : "none";

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    const rotY =  x * MAX_TILT;
    const rotX = -y * MAX_TILT;
    el.style.transition = "transform 0.08s linear";
    el.style.transform = plan.popular
      ? `translateY(-16px) scale(1.03) rotateX(${rotX}deg) rotateY(${rotY}deg)`
      : `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`;
    el.style.boxShadow = "0 40px 80px rgba(0,0,0,0.5)";
  }

  function onMouseLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.55s ease";
    el.style.transform = baseTransform;
    el.style.boxShadow = "";
  }

  function onMouseEnter() {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition = "transform 0.08s linear";
  }

  return (
    <article
      ref={cardRef}
      className="plan-card"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        backgroundColor: plan.popular ? "#13140e" : "rgba(19,20,14,0.08)",
        padding: "40px 32px",
        position: "relative",
        transform: baseTransform,
        willChange: "transform",
        cursor: "default",
      }}
    >
      {plan.popular && (
        <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#f2c75b", padding: "4px 20px" }}>
          <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#13140e", whiteSpace: "nowrap" }}>
            MOST POPULAR
          </span>
        </div>
      )}

      <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: plan.popular ? "rgba(251,251,251,0.4)" : "rgba(19,20,14,0.4)", marginBottom: "8px", marginTop: plan.popular ? "16px" : "0" }}>
        {plan.duration}
      </p>

      <h3 style={{ fontFamily: "Druk, sans-serif", fontWeight: 800, fontSize: "56px", color: plan.popular ? "#fbfbfb" : "#13140e", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "24px" }}>
        {plan.name}
      </h3>

      <p className="plan-price" style={{ fontFamily: "Druk, sans-serif", fontWeight: 800, fontSize: "48px", color: plan.popular ? "#f2c75b" : "#13140e", lineHeight: 1, marginBottom: "4px" }}>
        {plan.price}
      </p>

      <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "13px", color: plan.popular ? "rgba(251,251,251,0.4)" : "rgba(19,20,14,0.4)", marginBottom: "32px" }}>
        {plan.period}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {plan.features.map(f => (
          <li key={f} style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "14px", color: plan.popular ? "rgba(251,251,251,0.75)" : "rgba(19,20,14,0.75)", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: plan.popular ? "#f2695c" : "#13140e", flexShrink: 0 }} />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="/signup"
        className="plan-cta"
        style={{
          display: "block",
          width: "100%",
          padding: "16px",
          textAlign: "center",
          fontFamily: "Druk, sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          textDecoration: "none",
          backgroundColor: plan.popular ? "#fbfbfb" : "#13140e",
          color:            plan.popular ? "#13140e" : "#fbfbfb",
          transition: "opacity 0.2s",
        }}
      >
        Choose {plan.name}
      </a>
    </article>
  );
}

export function FeaturedProducts() {
  return (
    <section id="plans" className="overflow-hidden" style={{ backgroundColor: "#219292", color: "#13140e", padding: "120px 0" }}>
      <div className="mx-auto px-6" style={{ maxWidth: "1360px" }}>

        <h2 style={{ fontFamily: "Druk, sans-serif", fontWeight: 800, fontSize: "clamp(64px, 11vw, 160px)", lineHeight: 0.9, color: "#13140e", textTransform: "uppercase" }}>
          Premium Plans,
        </h2>

        <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(19,20,14,0.45)", marginTop: "16px", marginBottom: "80px" }}>
          PRICING · NO ADMISSION FEE. JUST RESULTS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1400px" }}>
          {plans.map(plan => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <h2 className="text-right" style={{ fontFamily: "Druk, sans-serif", fontWeight: 800, fontSize: "clamp(64px, 11vw, 160px)", lineHeight: 0.9, color: "#13140e", marginTop: "80px" }}>
          Train Harder.
        </h2>
      </div>
    </section>
  );
}
