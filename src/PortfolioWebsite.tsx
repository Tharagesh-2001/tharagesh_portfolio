import { useEffect, useState } from "react";
import tharageshimg from "./assets/tharagesh.jpg";

export default function PortfolioWebsite() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantInput, setAssistantInput] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const themes = {
    cyber: {
      bg: "bg-black",
      primary: "from-cyan-400 to-blue-500",
      accent: "text-cyan-200",
      button: "bg-cyan-300 text-black",
    },
    luxury: {
      bg: "bg-[#0f0b14]",
      primary: "from-amber-300 to-orange-400",
      accent: "text-amber-200",
      button: "bg-amber-200 text-black",
    },
    royal: {
      bg: "bg-[#0b0615]",
      primary: "from-violet-400 to-fuchsia-500",
      accent: "text-violet-200",
      button: "bg-violet-300 text-black",
    },
    emerald: {
      bg: "bg-[#07110d]",
      primary: "from-emerald-400 to-green-500",
      accent: "text-emerald-200",
      button: "bg-emerald-300 text-black",
    },
  };

  const [activeTheme, setActiveTheme] = useState<keyof typeof themes>("cyber");

  const currentTheme = themes[activeTheme];

  const assistantReplies: Record<string, string> = {
    aws: "Experienced in AWS cloud systems, EC2 automation, SES integrations, Lambda, API Gateway and scalable infrastructure engineering.",
    ai: "Worked on Machine Learning systems including FIFA20 analytics, insurance prediction and AI-powered backend applications.",
    backend:
      "Strong backend engineering expertise using Python, Django, Flask, PostgreSQL, Docker and scalable REST APIs.",
    devops:
      "Hands-on experience with Docker, CI/CD, deployment pipelines and cloud automation workflows.",
    contact:
      "Reach out via email at tharagesh.cs@gmail.com or connect through LinkedIn and GitHub.",
  };

  const [assistantMessages, setAssistantMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I'm the AI Engineering Assistant. Ask about AWS, backend engineering, AI systems, or DevOps.",
    },
  ]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / 35,
        y: e.clientY / 35,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleAssistantSend = () => {
    if (!assistantInput.trim()) return;

    const userMessage = {
      role: "user",
      content: assistantInput,
    };

    const input = assistantInput.toLowerCase();

    let response =
      "Tharagesh is a Backend & AI Systems Engineer specializing in scalable backend systems, cloud-native infrastructure, DevOps automation and Machine Learning engineering.";

    Object.keys(assistantReplies).forEach((key) => {
      if (input.includes(key)) {
        response = assistantReplies[key];
      }
    });

    setAssistantMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content: response,
      },
    ]);

    setAssistantInput("");
  };

  const achievements = [
    {
      title: "Cloud Infrastructure",
      metric: "40+ Deployments",
      icon: "☁",
      description:
        "Designed scalable backend architectures, distributed APIs and cloud-native infrastructure systems.",
    },
    {
      title: "AI Engineering",
      metric: "15+ ML Models",
      icon: "◈",
      description:
        "Built predictive ML systems, analytics pipelines and intelligent automation workflows.",
    },
    {
      title: "DevOps Systems",
      metric: "CI/CD Automation",
      icon: "⬡",
      description:
        "Worked with Docker, CI/CD workflows, monitoring systems and scalable deployment pipelines.",
    },
  ];

  const techStack = [
    {
      name: "Python",
      level: 95,
      category: "Backend",
      description: "High-performance backend systems and AI workflows",
    },
    {
      name: "AWS",
      level: 90,
      category: "Cloud",
      description: "Cloud-native infrastructure and deployment automation",
    },
    {
      name: "Django",
      level: 92,
      category: "Framework",
      description: "Scalable enterprise-grade REST API architectures",
    },
    {
      name: "Docker",
      level: 88,
      category: "DevOps",
      description: "Containerized deployment and orchestration workflows",
    },
    {
      name: "Machine Learning",
      level: 85,
      category: "AI",
      description: "Predictive analytics and intelligent ML systems",
    },
    {
      name: "PostgreSQL",
      level: 90,
      category: "Database",
      description: "Optimized relational database engineering systems",
    },
  ];

  const stats = [
    "Backend Systems",
    "Cloud Architecture",
    "AI Infrastructure",
    "Scalable APIs",
    "Machine Learning",
    "DevOps Automation",
    "Enterprise Engineering",
    "AWS Cloud",
  ];

  const projects = [
    {
      title: "ML-Powered Voice Assistant Platform",
      category: "Backend Architecture • Django • NLP",
    },
    {
      title: "AWS Cloud Automation Infrastructure",
      category: "AWS • DevOps • Automation",
    },
    {
      title: "FIFA 20 Analytics & Clustering",
      category: "Machine Learning • PCA • K-Means",
    },
  ];

  const textPrimary = darkMode ? "text-white" : "text-slate-900";
  const textSecondary = darkMode ? "text-zinc-300" : "text-slate-600";
  const borderClass = darkMode ? "border-white/10" : "border-black/10";
  const glassBg = darkMode ? "bg-white/[0.04]" : "bg-white/70";
  const overlayBg = darkMode ? "bg-black/80" : "bg-white/75";

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${currentTheme.bg} ${textPrimary}`}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes glow {
          0%,100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes rotateGrid {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseGlow {
          0%,100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        @keyframes slideBeam {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes floatingCard {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes aurora {
          0% {
            transform: translateX(-10%) translateY(0%) rotate(0deg);
          }
          50% {
            transform: translateX(10%) translateY(-5%) rotate(180deg);
          }
          100% {
            transform: translateX(-10%) translateY(0%) rotate(360deg);
          }
        }

        @keyframes cinematicReveal {
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.96);
            filter: blur(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes floatingParticles {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes videoGlow {
          0%,100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }
          from {
            opacity: 0;
            transform: translateY(80px) scale(0.96);
            filter: blur(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes gridMove {
          from {
            background-position: 0px 0px;
          }
          to {
            background-position: 120px 120px;
          }
        }

        .glass {
          backdrop-filter: blur(22px);
        }

        .smooth {
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

         .shimmer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transform: translateX(-120%);
          animation: shimmer 5s linear infinite;
        }

        .tech-card:hover .tech-overlay {
          opacity: 1;
        }

        .beam-animation {
          animation: slideBeam 6s linear infinite;
        }

        .pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }

         .rotate-grid {
          animation: rotateGrid 20s linear infinite;
        }

        .floating-card {
          animation: floatingCard 8s ease-in-out infinite;
        }

         .marquee-track {
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .cinematic-reveal {
          animation: cinematicReveal 1.2s cubic-bezier(0.16,1,0.3,1);
        }

        .luxury-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 120px 120px;
          animation: gridMove 20s linear infinite;
        }

        .aurora-bg {
          animation: aurora 24s linear infinite;
        }

        .hero-title span {
          display: block;
          overflow: hidden;
        }

        .hero-title span div {
          animation: cinematicReveal 1s cubic-bezier(0.16,1,0.3,1);
        }

        .floating-particle {
          animation: floatingParticles 10s ease-in-out infinite;
        }

        .video-glow {
          animation: videoGlow 8s ease-in-out infinite;
        }

        .premium-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.15),
            rgba(0,0,0,0.75)
          );
        }

        .hero-title span div {
          animation: cinematicReveal 1s cubic-bezier(0.16,1,0.3,1);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="AI Background"
          className="absolute inset-0 h-full w-full object-cover scale-110 mix-blend-screen opacity-45"
        />

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Cloud Infrastructure"
          className="absolute right-0 top-0 h-full w-full object-cover mix-blend-overlay opacity-35"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-programming-on-a-computer-1563743651907?download=1080p"
            type="video/mp4"
          />
        </video>
      </div>

      <div className={`absolute inset-0 ${darkMode ? 'bg-black/55' : 'bg-white/60'}`} />

      <div className="luxury-grid absolute inset-0 opacity-[0.08]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(0,255,255,0.08),transparent_25%)]" />

      <div className={`aurora-bg absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-gradient-to-r ${currentTheme.primary} blur-[140px] opacity-[0.12]`} />

      <div className="floating-particle absolute left-[8%] top-[20%] h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-xl" />

      <div className="floating-particle absolute right-[10%] top-[30%] h-40 w-40 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 blur-2xl" style={{ animationDelay: '2s' }} />

      <div className="floating-particle absolute bottom-[10%] left-[20%] h-32 w-32 rounded-full border border-emerald-400/20 bg-emerald-400/10 blur-2xl" style={{ animationDelay: '4s' }} />

      <div
        className={`absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full blur-3xl bg-gradient-to-r ${currentTheme.primary} opacity-20 animate-[float_10s_ease-in-out_infinite]`}
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />

      <div
        className="absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-3xl animate-[glow_8s_ease-in-out_infinite]"
        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}
      />

      <div className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-2xl md:flex">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`smooth flex h-10 w-10 items-center justify-center rounded-full ${glassBg}`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {Object.keys(themes).map((theme) => (
          <button
            key={theme}
            onClick={() => setActiveTheme(theme as keyof typeof themes)}
            className={`smooth rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] ${
              activeTheme === theme
                ? "bg-white text-black"
                : `${glassBg} ${textSecondary}`
            }`}
          >
            {theme}
          </button>
        ))}
      </div>

      <header className="fixed left-0 right-0 top-0 z-40 px-6 pt-6">
        <div
          className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-full border px-7 py-4 ${glassBg} ${borderClass}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r ${currentTheme.primary} font-semibold text-black`}
            >
              TC
            </div>

            <h1 className="text-sm font-semibold tracking-[0.35em]">
              THARAGESH C
            </h1>
          </div>

          <nav className={`hidden items-center gap-8 text-sm md:flex ${textSecondary}`}>
            <a href="#about" className="smooth hover:text-white">
              About
            </a>
            <a href="#projects" className="smooth hover:text-white">
              Projects
            </a>
            <a href="#contact" className="smooth hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 flex min-h-screen items-center px-6 pt-32 cinematic-reveal">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          <div>
            <div
              className={`glass mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-3 ${glassBg} ${borderClass}`}
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={`text-xs uppercase tracking-[0.28em] ${currentTheme.accent}`}>
                Backend Engineer • AI Systems • Cloud Architecture
              </span>
            </div>

            <h2 className="hero-title text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.5rem] font-semibold leading-[0.88] md:leading-[0.82] tracking-[-0.07em] md:tracking-[-0.09em]">
              <span><div>Elite backend</div></span>
              <span><div style={{ animationDelay: '0.15s' }}>engineering &</div></span>
              <span><div style={{ animationDelay: '0.3s' }}>AI systems</div></span>
              <span><div style={{ animationDelay: '0.45s' }}>for modern</div></span>
              <span><div style={{ animationDelay: '0.6s' }}>companies.</div></span>
            </h2>

            <p className={`mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed ${textSecondary}`}>
              Backend Engineer and Data Science Professional specializing in scalable REST APIs, AI-powered systems, cloud-native infrastructure and DevOps automation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#projects" className={`smooth rounded-full px-8 py-4 ${currentTheme.button}`}>
                View Projects
              </a>

              <a
                href="mailto:tharagesh.cs@gmail.com"
                className={`smooth rounded-full border px-8 py-4 ${glassBg} ${borderClass}`}
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative flex justify-center cinematic-reveal">
            <div className={`absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px] rounded-full border ${borderClass}`} />

            <div
              className={`video-glow glass card-hover smooth shimmer relative overflow-hidden rounded-[40px] border p-4 ${glassBg} ${borderClass}`}
              style={{
                transform: `perspective(1600px) rotateY(${mousePosition.x / 14}deg) rotateX(${-mousePosition.y / 14}deg)`
              }}
            >
              <div className="premium-overlay absolute inset-0 z-10 opacity-70" />

              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-man-working-on-holographic-interface-1564592186318?download=1080p"
                  type="video/mp4"
                />
              </video>

              <div className="absolute bottom-6 left-6 z-20">
                <div className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 ${glassBg} ${borderClass}`}>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.28em]">
                    Available For Opportunities
                  </span>
                </div>
              </div>

              <img
                src={tharageshimg}
                alt="Tharagesh"
                className="h-[340px] w-[260px] sm:h-[440px] sm:w-[340px] lg:h-[520px] lg:w-[400px] rounded-[30px] object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-4 sm:px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className={`mb-5 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
              About
            </p>

            <h3 className="text-5xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              Backend engineering,
              <br />
              AI systems & cloud innovation.
            </h3>
          </div>

          <div>
            <p className={`text-lg leading-[1.9] ${textSecondary}`}>
              I'm Tharagesh C, a Backend Engineer and Data Science Professional with experience building scalable backend systems, AI-powered applications, enterprise APIs and cloud-native infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden px-4 sm:px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`mb-5 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
                Engineering Excellence
              </p>

              <h3 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl leading-[0.92]">
                Building scalable
                <br />
                systems with impact.
              </h3>
            </div>

            <p className={`max-w-2xl text-lg leading-relaxed ${textSecondary}`}>
              Combining backend engineering, cloud infrastructure, AI systems and DevOps automation to build production-grade digital experiences.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`tech-card glass card-hover smooth group relative overflow-hidden rounded-[42px] border p-10 ${glassBg} ${borderClass}`}
              >
                <div className="tech-overlay absolute inset-0 opacity-0 smooth bg-gradient-to-br from-white/[0.06] to-transparent" />

                <div className={`pulse-glow mb-10 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-r ${currentTheme.primary} text-4xl text-black shadow-[0_0_40px_rgba(255,255,255,0.08)]`}>
                  {item.icon}
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <h4 className="text-3xl font-semibold tracking-[-0.05em]">
                    {item.title}
                  </h4>

                  <div className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.24em] ${glassBg} ${borderClass}`}>
                    {item.metric}
                  </div>
                </div>

                <p className={`leading-relaxed ${textSecondary}`}>
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden opacity-40">
                  <div className={`beam-animation h-full w-[40%] bg-gradient-to-r ${currentTheme.primary}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 py-20 sm:py-28 overflow-hidden">
        <div className={`glass mx-auto max-w-7xl overflow-hidden rounded-[50px] border p-12 md:p-16 ${glassBg} ${borderClass}`}>
          <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`mb-5 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
                Technical Expertise
              </p>

              <h3 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl leading-[0.92]">
                Core Technologies
                <br />
                & Engineering Stack.
              </h3>
            </div>

            <p className={`max-w-2xl text-lg leading-relaxed ${textSecondary}`}>
              Modern backend engineering stack focused on scalable infrastructure, cloud-native systems, AI workflows and high-performance architectures.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`tech-card glass smooth card-hover relative overflow-hidden rounded-[38px] border p-8 ${glassBg} ${borderClass}`}
              >
                <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/[0.03] blur-3xl" />

                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <div className={`mb-4 inline-flex rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.28em] ${glassBg} ${borderClass}`}>
                      {tech.category}
                    </div>

                    <h4 className="text-3xl font-semibold tracking-[-0.05em]">
                      {tech.name}
                    </h4>
                  </div>

                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className={`rotate-grid absolute h-full w-full rounded-full border ${borderClass}`} />

                    <div className={`glass flex h-16 w-16 items-center justify-center rounded-full border text-lg font-semibold ${glassBg} ${borderClass}`}>
                      {tech.level}%
                    </div>
                  </div>
                </div>

                <p className={`max-w-xl leading-relaxed ${textSecondary}`}>
                  {tech.description}
                </p>

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`relative h-full rounded-full bg-gradient-to-r ${currentTheme.primary}`}
                    style={{ width: `${tech.level}%` }}
                  >
                    <div className="beam-animation absolute inset-0 bg-white/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden py-10">
        <div className="marquee-track flex gap-6 whitespace-nowrap opacity-70">
          {[...stats, ...stats].map((item, index) => (
            <div
              key={index}
              className={`glass flex items-center gap-4 rounded-full border px-8 py-4 text-sm uppercase tracking-[0.3em] ${glassBg} ${borderClass}`}
            >
              <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${currentTheme.primary}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`mb-5 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
                Client Impression
              </p>

              <h3 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl leading-[0.92]">
                Built for
                <br />
                modern companies.
              </h3>
            </div>

            <p className={`max-w-2xl text-lg leading-relaxed ${textSecondary}`}>
              This portfolio is designed to communicate strong engineering capability, production-grade thinking and enterprise-level execution.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className={`floating-card glass rounded-[42px] border p-10 ${glassBg} ${borderClass}`}>
              <div className={`mb-8 inline-flex rounded-full bg-gradient-to-r px-5 py-2 text-xs uppercase tracking-[0.3em] text-black ${currentTheme.primary}`}>
                Architecture
              </div>

              <h4 className="text-4xl font-semibold tracking-[-0.05em] leading-tight">
                Enterprise-ready backend systems.
              </h4>

              <p className={`mt-6 leading-relaxed ${textSecondary}`}>
                Focused on scalable API systems, cloud-native infrastructure and intelligent engineering workflows.
              </p>
            </div>

            <div className={`floating-card glass rounded-[42px] border p-10 ${glassBg} ${borderClass}`} style={{ animationDelay: '1s' }}>
              <div className={`mb-8 inline-flex rounded-full bg-gradient-to-r px-5 py-2 text-xs uppercase tracking-[0.3em] text-black ${currentTheme.primary}`}>
                Performance
              </div>

              <h4 className="text-4xl font-semibold tracking-[-0.05em] leading-tight">
                Built with modern engineering standards.
              </h4>

              <p className={`mt-6 leading-relaxed ${textSecondary}`}>
                Strong understanding of deployment systems, DevOps automation, backend optimization and scalable architectures.
              </p>
            </div>

            <div className={`floating-card glass rounded-[42px] border p-10 ${glassBg} ${borderClass}`} style={{ animationDelay: '2s' }}>
              <div className={`mb-8 inline-flex rounded-full bg-gradient-to-r px-5 py-2 text-xs uppercase tracking-[0.3em] text-black ${currentTheme.primary}`}>
                Innovation
              </div>

              <h4 className="text-4xl font-semibold tracking-[-0.05em] leading-tight">
                AI + cloud integrated engineering.
              </h4>

              <p className={`mt-6 leading-relaxed ${textSecondary}`}>
                Combining backend engineering, AI systems and cloud automation to create future-ready digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden px-6 py-20 cinematic-reveal">
        <div className={`glass mx-auto grid max-w-7xl gap-8 rounded-[50px] border p-10 md:grid-cols-4 ${glassBg} ${borderClass}`}>
          <div>
            <p className={`text-sm uppercase tracking-[0.3em] ${textSecondary}`}>
              Experience
            </p>
            <h4 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
              1+
            </h4>
            <p className={`mt-3 ${textSecondary}`}>
              Years Engineering Experience
            </p>
          </div>

          <div>
            <p className={`text-sm uppercase tracking-[0.3em] ${textSecondary}`}>
              Cloud
            </p>
            <h4 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
              AWS
            </h4>
            <p className={`mt-3 ${textSecondary}`}>
              Cloud & Infrastructure Systems
            </p>
          </div>

          <div>
            <p className={`text-sm uppercase tracking-[0.3em] ${textSecondary}`}>
              Focus
            </p>
            <h4 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
              AI
            </h4>
            <p className={`mt-3 ${textSecondary}`}>
              ML + Intelligent Backend Systems
            </p>
          </div>

          <div>
            <p className={`text-sm uppercase tracking-[0.3em] ${textSecondary}`}>
              Stack
            </p>
            <h4 className="mt-5 text-5xl font-semibold tracking-[-0.06em]">
              DevOps
            </h4>
            <p className={`mt-3 ${textSecondary}`}>
              CI/CD + Automation Pipelines
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-4 sm:px-6 py-20 sm:py-28 cinematic-reveal">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className={`mb-5 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
              Featured Projects
            </p>

            <h3 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Selected Work.
            </h3>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass card-hover smooth relative overflow-hidden rounded-[40px] border p-10 ${glassBg} ${borderClass}`}
              >
                <p className={`mb-4 text-sm uppercase tracking-[0.25em] ${textSecondary}`}>
                  {project.category}
                </p>

                <h4 className="text-4xl font-semibold tracking-[-0.04em]">
                  {project.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        {!assistantOpen ? (
          <button
            onClick={() => setAssistantOpen(true)}
            className={`glass smooth rounded-[28px] border p-5 ${glassBg} ${borderClass}`}
          >
            <p className={`text-xs uppercase tracking-[0.3em] ${currentTheme.accent}`}>
              AI Assistant
            </p>

            <h4 className="mt-3 text-lg font-semibold">
              Engineering Support
            </h4>
          </button>
        ) : (
          <div
            className={`glass w-[92vw] max-w-[380px] overflow-hidden rounded-[32px] border ${glassBg} ${borderClass}`}
          >
            <div className={`flex items-center justify-between border-b px-5 py-4 ${borderClass}`}>
              <div>
                <p className={`text-xs uppercase tracking-[0.3em] ${currentTheme.accent}`}>
                  AI Assistant
                </p>
                <h4 className="mt-1 text-lg font-semibold">
                  Engineering Support
                </h4>
              </div>

              <button
                onClick={() => setAssistantOpen(false)}
                className={`rounded-full border px-3 py-1 text-sm ${borderClass}`}
              >
                ✕
              </button>
            </div>

            <div className="h-[320px] space-y-4 overflow-y-auto p-5">
              {assistantMessages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "assistant"
                      ? darkMode
                        ? "border border-cyan-400/10 bg-cyan-400/10 text-zinc-100"
                        : "border border-cyan-200 bg-cyan-50 text-slate-800"
                      : `ml-auto ${glassBg}`
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>

            <div className={`border-t p-4 ${borderClass}`}>
              <div className="flex items-center gap-3">
                <input
                  value={assistantInput}
                  onChange={(e) => setAssistantInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAssistantSend();
                    }
                  }}
                  placeholder="Ask about AWS, AI, Backend..."
                  className={`flex-1 rounded-2xl border px-4 py-3 text-sm outline-none ${glassBg} ${borderClass} ${textPrimary}`}
                />

                <button
                  onClick={handleAssistantSend}
                  className={`rounded-2xl px-5 py-3 text-sm font-medium ${currentTheme.button}`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <section id="contact" className="relative z-10 px-4 sm:px-6 pb-20 sm:pb-24 pt-10">
        <div
          className={`glass mx-auto max-w-7xl rounded-[50px] border p-16 text-center md:p-24 ${glassBg} ${borderClass}`}
        >
          <p className={`mb-6 text-sm uppercase tracking-[0.35em] ${textSecondary}`}>
            Contact
          </p>

          <h3 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Let’s build something unforgettable.
          </h3>

          <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-5">
            <a
              href="mailto:tharagesh.cs@gmail.com"
              className={`smooth rounded-full px-8 py-4 ${currentTheme.button}`}
            >
              tharagesh.cs@gmail.com
            </a>

            <a
              href="https://github.com/Tharagesh-2001"
              target="_blank"
              rel="noopener noreferrer"
              className={`smooth rounded-full border px-8 py-4 ${glassBg} ${borderClass}`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tharagesh-c-51a8aa1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className={`smooth rounded-full border px-8 py-4 ${glassBg} ${borderClass}`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
