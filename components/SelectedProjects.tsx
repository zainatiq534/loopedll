"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState } from "react";

const SectionBackground3D = dynamic(() => import("@/components/SectionBackground3D"), {
  ssr: false,
});

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  summary: string;
  description: string;
  tools: string[];
  features: string[];
  results: string[];
};

const projects: Project[] = [
  {
    id: "modern-dashboard",
    title: "Modern Dashboard",
    category: "Web App Design",
    image: "/projects/modern-dashboard.jpg",
    year: "2025",
    client: "Nova Analytics",
    role: "UI Design & Frontend",
    duration: "6 weeks",
    summary: "A clean analytics workspace built for fast decision-making.",
    description:
      "Designed and built a responsive admin dashboard with real-time charts, smart filters, and modular widgets. Focused on clarity, speed, and a layout that scales from startup teams to larger ops crews.",
    tools: ["Figma", "Next.js", "Tailwind", "Framer Motion"],
    features: [
      "Live KPI cards and trend charts",
      "Role-based sidebar navigation",
      "Dark UI with red accent system",
      "Exportable reports and filters",
    ],
    results: ["+38% task completion speed", "4.8/5 usability score", "Shipped in 2 sprints"],
  },
  {
    id: "travel-mobile-app",
    title: "Travel Mobile App",
    category: "UI/UX Design",
    image: "/projects/travel-mobile-app.jpg",
    year: "2024",
    client: "Wanderly",
    role: "Product Designer",
    duration: "8 weeks",
    summary: "A travel booking experience that feels premium and effortless.",
    description:
      "Crafted a mobile-first travel app flow covering discovery, destination details, and booking. Prioritized large imagery, clear CTAs, and a frictionless checkout path for on-the-go users.",
    tools: ["Figma", "Prototype", "User Flows", "Design System"],
    features: [
      "Destination discovery feed",
      "One-tap trip booking flow",
      "Saved collections & itineraries",
      "High-contrast mobile UI kit",
    ],
    results: ["-27% booking drop-off", "+52% session time", "Validated with 12 user tests"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Branding",
    image: "/projects/brand-identity.jpg",
    year: "2024",
    client: "Lumo Studio",
    role: "Brand Designer",
    duration: "5 weeks",
    summary: "A bold identity system for a modern creative studio.",
    description:
      "Developed a full brand kit including logo system, color rules, packaging mockups, and stationery. Built around a sharp visual language that feels premium without looking generic.",
    tools: ["Illustrator", "Photoshop", "Brand Guidelines"],
    features: [
      "Logo & wordmark system",
      "Packaging & stationery suite",
      "Color & type guidelines",
      "Social launch templates",
    ],
    results: ["Full brand kit delivered", "Used across 8 touchpoints", "Ready for web & print"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SelectedProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 24 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["25%", "75%"]);
  const cursorGlow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle 200px at ${x} ${y}, rgba(229,9,20,0.1), transparent 70%)`
  );

  const selected = projects.find((p) => p.id === selectedId) ?? null;
  const isOpen = Boolean(selected);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black px-4 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-16 lg:px-10 lg:pt-10 lg:pb-20"
    >
      <SectionBackground3D variant="projects" />

      <motion.div
        aria-hidden
        style={{ background: cursorGlow }}
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 flex flex-col items-center gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <p className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.22em] text-white/80 uppercase sm:text-sm">
              FEATURED WORK
            </p>
            <h2 className="relative mt-2 inline-flex flex-wrap items-start justify-center gap-x-2 gap-y-1 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:justify-start sm:text-6xl lg:text-7xl">
              <span className="relative">
                Selected
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand" />
              </span>
              <span className="relative">
                Projects
                <svg
                  aria-hidden
                  viewBox="0 0 36 28"
                  className="absolute -top-3 -right-6 h-4 w-5 text-brand sm:-top-4 sm:-right-8 sm:h-6 sm:w-7"
                >
                  <path
                    d="M18 2 L19.5 12 L28 8 L21 14 L32 16 L20 18 L26 26 L18 20 L10 26 L16 18 L4 16 L15 14 L8 8 L16.5 12 Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {isOpen ? (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-white/85 transition-colors hover:text-brand"
            >
              ← Back to Projects
            </button>
          ) : (
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-white/85 transition-colors hover:text-brand"
            >
              View All Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedId(project.id)}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-black/50 p-3 text-left backdrop-blur-md transition-colors duration-300 hover:border-brand/60 hover:bg-black/65 hover:shadow-[0_16px_40px_rgba(229,9,20,0.22)] sm:p-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={100}
                      sizes="(max-width: 1024px) 90vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3 px-1 pb-1">
                    <div>
                      <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-white transition-colors group-hover:text-brand sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-white/60">
                        {project.category}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease }}
              className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-7"
            >
              <motion.article
                layoutId={`card-${selected!.id}`}
                className="overflow-hidden rounded-2xl border border-brand/70 bg-black/55 p-3 shadow-[0_16px_40px_rgba(229,9,20,0.2)] backdrop-blur-md sm:p-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/11]">
                  <Image
                    src={selected!.image}
                    alt={selected!.title}
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3 px-1 pb-1">
                  <div>
                    <h3 className="font-[family-name:var(--font-body)] text-xl font-bold text-white sm:text-2xl">
                      {selected!.title}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-white/60">
                      {selected!.category}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </motion.article>

              <motion.aside
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.08, ease }}
                className="rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand/40 bg-brand/15 px-3 py-1 font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-wide text-brand uppercase">
                    {selected!.category}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 font-[family-name:var(--font-body)] text-[11px] text-white/70">
                    {selected!.year}
                  </span>
                </div>

                <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-5xl">
                  {selected!.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/75">
                  {selected!.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    ["Client", selected!.client],
                    ["Role", selected!.role],
                    ["Duration", selected!.duration],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2.5">
                      <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.14em] text-white/45 uppercase">
                        {label}
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-body)] text-sm font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <p className="font-[family-name:var(--font-body)] text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
                    Tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selected!.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1 font-[family-name:var(--font-body)] text-xs text-white/80"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
                      Features
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {selected!.features.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-[family-name:var(--font-body)] text-xs text-white/75 sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-body)] text-[11px] font-bold tracking-[0.16em] text-brand uppercase">
                      Results
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {selected!.results.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-[family-name:var(--font-body)] text-xs text-white/75 sm:text-sm"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
