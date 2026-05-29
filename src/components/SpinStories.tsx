import Image from "next/image";

interface Feature {
  num: string;
  title: string;
  excerpt: string;
  image: string;
}

const features: Feature[] = [
  { num: "01", title: "Elite Equipment",       excerpt: "State-of-the-art machines and free weights from premium brands engineered for maximum performance.", image: "/gym/dumbbells.jpg" },
  { num: "02", title: "Strength Training",     excerpt: "Dedicated zones for powerlifting, bodybuilding, and functional strength development.",              image: "/gym/bench-press.jpg" },
  { num: "03", title: "Personal Coaching",     excerpt: "Expert certified trainers building personalised programs around your body and your goals.",           image: "/gym/shoulder-press.jpg" },
  { num: "04", title: "Body Transformation",   excerpt: "Proven 60 and 120-day programs with nutrition guidance and weekly progress benchmarks.",              image: "/gym/motivation.jpg" },
  { num: "05", title: "Cardio Zone",           excerpt: "Modern cardio theatre with treadmills, bikes, and cross-trainers for sustained endurance.",          image: "/gym/lateral-raise.jpg" },
  { num: "06", title: "Functional Training",   excerpt: "Dynamic HIIT, circuit, and athletic-performance zone designed for real-world results.",               image: "/gym/cable-machine.jpg" },
];

export function SpinStories() {
  return (
    <section
      id="features"
      style={{ backgroundColor: "#13140e", color: "#fbfbfb", padding: "80px 0" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1360px" }}>

        {/* Heading */}
        <h2 aria-label="Gym Features" className="flex items-baseline gap-4 mb-12 overflow-visible">
          <span style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "10rem", lineHeight: 0.9, textTransform: "uppercase", color: "#fbfbfb", display: "inline-block" }}>
            Gym
          </span>
          <span style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: 1, color: "#fbfbfb", display: "inline-block", transform: "rotate(-5deg) translateY(-20px)" }}>
            Features
          </span>
        </h2>

        <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(251,251,251,0.3)", marginBottom: "48px" }}>
          WHAT WE OFFER
        </p>

        {/* Feature grid — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(f => (
            <article key={f.num}>
              <a href="#features" className="feature-card block no-underline" style={{ color: "inherit" }}>
                <figure style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", marginBottom: "16px" }}>
                  <Image src={f.image} alt={f.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" />
                </figure>
                <div>
                  <span style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.3em", color: "rgba(251,251,251,0.35)", textTransform: "uppercase" }}>{f.num}</span>
                  <h3 style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", textTransform: "uppercase", color: "#fbfbfb", lineHeight: 1, margin: "4px 0 10px" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "14px", color: "rgba(251,251,251,0.5)", lineHeight: 1.6 }}>
                    {f.excerpt}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* See more */}
        <a href="#contact" style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", textTransform: "uppercase", color: "#fbfbfb", textDecoration: "none", display: "block", textAlign: "center", marginTop: "64px" }}>
          Get Started →
        </a>
      </div>
    </section>
  );
}
