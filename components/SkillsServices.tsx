"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";

const SectionBackground3D = dynamic(() => import("@/components/SectionBackground3D"), {
  ssr: false,
});

const services = [
  {
    title: "UI/UX Design",
    description: "Creating user-friendly interfaces and seamless digital experiences.",
    accent: "rgba(229, 9, 20, 0.14)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <path d="M12 19l7-7 2.5 2.5-7 7H12v-2.5z" strokeLinejoin="round" />
        <path d="M16.5 9.5l-2-2L6 16v2h2l8.5-8.5z" strokeLinejoin="round" />
        <path d="M14 7l2-2 2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Building fast, modern and responsive websites that perform.",
    accent: "rgba(229, 9, 20, 0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 20h8M12 17v3" strokeLinecap="round" />
        <path d="M8 9h.01M11 9h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    description: "Designing unique brand identities that make a lasting impression.",
    accent: "rgba(229, 9, 20, 0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <path
          d="M12 3a9 9 0 1 0 0 18c1.5 0 2.2-1.2 1.5-2.4-.5-.9.1-2.1 1.2-2.1H18a3 3 0 0 0 0-6h-.5c-1 0-1.5-.8-1.2-1.7C17 6.2 14.8 3 12 3z"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="9.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="13.5" cy="8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Helping brands grow through strategic and creative marketing.",
    accent: "rgba(229, 9, 20, 0.16)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <path d="M3 10v4c0 1 1 2 2 2h2l5 4V4L7 8H5c-1 0-2 1-2 2z" strokeLinejoin="round" />
        <path d="M16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SkillsServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 24 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["15%", "85%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["20%", "80%"]);
  const strokeX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const cursorGlow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle 180px at ${x} ${y}, rgba(229,9,20,0.1), transparent 70%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-14 lg:px-10 lg:pt-8 lg:pb-16"
    >
      <SectionBackground3D variant="skills" />

      <motion.div
        aria-hidden
        style={{ background: cursorGlow, x: strokeX }}
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
          className="mb-8 text-center sm:mb-10"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.22em] text-white/80 uppercase sm:text-sm">
            WHAT I DO
          </p>

          <h2 className="relative mt-3 inline-flex flex-wrap items-start justify-center gap-x-2 gap-y-1 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span className="relative">
              Skills
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand" />
            </span>
            <span className="relative">
              &amp; Services
              <svg
                aria-hidden
                viewBox="0 0 36 28"
                className="absolute -top-3 -right-6 h-4 w-5 text-brand sm:-top-4 sm:-right-8 sm:h-6 sm:w-7"
              >
                <path d="M18 2 L19.5 12 L28 8 L21 14 L32 16 L20 18 L26 26 L18 20 L10 26 L16 18 L4 16 L15 14 L8 8 L16.5 12 Z" fill="currentColor" />
              </svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              whileHover={{
                y: -10,
                scale: 1.035,
                boxShadow: "0 18px 40px rgba(229,9,20,0.28)",
              }}
              className="group relative flex min-h-[220px] cursor-pointer flex-col rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-brand/70 hover:bg-black/60 sm:min-h-[280px] sm:p-7"
              style={{ backgroundImage: `linear-gradient(160deg, ${service.accent}, transparent 55%)` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand/20 group-hover:text-brand">
                {service.icon}
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-body)] text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-brand sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/90">
                {service.description}
              </p>

              <div className="mt-auto flex justify-end pt-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-black transition-all duration-300 group-hover:scale-110 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
