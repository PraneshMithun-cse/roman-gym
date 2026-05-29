import Image from "next/image";

interface Trainer {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

const trainers: Trainer[] = [
  {
    name:      "Roman Prabhur",
    role:      "Head Trainer & Founder",
    specialty: "BODYBUILDING · TRANSFORMATION",
    bio:       "Founder of Roman Fitness with years of experience in competitive bodybuilding and personal transformation coaching.",
    image:     "/gym/trainer-roman.jpg",
  },
  {
    name:      "Pradesh Rajan",
    role:      "Fitness Trainer",
    specialty: "STRENGTH · CONDITIONING",
    bio:       "Certified strength and conditioning specialist dedicated to helping clients achieve peak physical performance.",
    image:     "/gym/trainer-pradesh.jpg",
  },
  {
    name:      "Logesh",
    role:      "Fitness Trainer",
    specialty: "FUNCTIONAL · HIIT",
    bio:       "Expert in functional training and high-intensity programs, focused on building real-world athletic ability.",
    image:     "/gym/trainer-logesh.jpg",
  },
];

const MARQUEE_TEXT = Array.from({ length: 8 }, () => "Train With Us ").join("");

export function SkateFlicks() {
  return (
    <section
      id="trainers"
      style={{ backgroundColor: "#f2c75b", color: "#13140e", padding: "80px 0" }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: "1360px" }}>

        {/* Heading */}
        <h2 aria-label="Elite Trainers" className="flex items-baseline gap-4 mb-12 overflow-visible">
          <span style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "10rem", lineHeight: 0.9, textTransform: "uppercase", color: "#13140e", display: "inline-block" }}>
            Elite
          </span>
          <span style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: 1, color: "#13140e", display: "inline-block", transform: "rotate(5deg) translateY(10px)" }}>
            Trainers
          </span>
        </h2>

        <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(19,20,14,0.4)", marginBottom: "48px" }}>
          OUR TEAM
        </p>

        {/* Trainer grid — 1 col mobile, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map(t => (
            <article key={t.name}>
              <div className="trainer-card block" style={{ color: "inherit" }}>
                <figure style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", marginBottom: "16px" }}>
                  <Image src={t.image} alt={t.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="(max-width:768px) 100vw, 33vw" />
                  {/* Marquee overlay */}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, overflow: "hidden", backgroundColor: "rgba(19,20,14,0.7)", padding: "8px 0" }}>
                    <div className="marquee-track">
                      {MARQUEE_TEXT.split(" ").map((word, i) => (
                        <span key={i} className="marquee-item" style={{ color: "#f2c75b", fontSize: "20px" }}>{word} </span>
                      ))}
                    </div>
                  </div>
                </figure>
                <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(19,20,14,0.5)", marginBottom: "6px" }}>{t.specialty}</p>
                <h3 style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", textTransform: "uppercase", color: "#13140e", lineHeight: 1, marginBottom: "4px" }}>
                  {t.name}
                </h3>
                <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "13px", color: "rgba(19,20,14,0.55)", marginBottom: "10px" }}>{t.role}</p>
                <p style={{ fontFamily: "Helvetica-Now, Arial, sans-serif", fontSize: "13px", color: "rgba(19,20,14,0.65)", lineHeight: 1.6 }}>{t.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <a href="/signup" style={{ fontFamily: "Druk, Arial, sans-serif", fontWeight: 800, fontSize: "40px", textTransform: "uppercase", color: "#13140e", textDecoration: "none", display: "block", textAlign: "center", marginTop: "64px" }}>
          Meet The Team →
        </a>
      </div>
    </section>
  );
}
