"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";

const SectionBackground3D = dynamic(() => import("@/components/SectionBackground3D"), {
  ssr: false,
});

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Founder, TechHive",
    quote:
      "Zain is a fantastic designer! He understood my vision perfectly and delivered beyond expectations.",
    image: "/testimonials/ahmed-raza-hq.jpg",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Marketing Manager",
    quote:
      "Professional, creative and reliable. The whole process was smooth and the results were outstanding.",
    image: "/testimonials/sara-khan-hq.jpg",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "CEO, BrightLab",
    quote:
      "Amazing work and great communication. Highly recommended for anyone looking for quality design.",
    image: "/testimonials/bilal-ahmed-hq.jpg",
    rating: 5,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-brand sm:h-4 sm:w-4">
          <path d="M10 1.5l2.4 5.1 5.6.7-4.1 3.9 1.1 5.5L10 14.1 5 16.7l1.1-5.5L2 7.3l5.6-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black px-4 pt-6 pb-14 sm:px-6 sm:pt-8 sm:pb-16 lg:px-10 lg:pt-10 lg:pb-20"
    >
      <SectionBackground3D variant="testimonials" />

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
          className="mb-8 text-center sm:mb-10"
        >
          <p className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.22em] text-white/80 uppercase sm:text-sm">
            TESTIMONIALS
          </p>
          <h2 className="relative mt-2 inline-flex flex-wrap items-start justify-center gap-x-2 gap-y-1 px-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            <span>What Clients</span>
            <span className="relative">
              Say
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-brand" />
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
        </motion.div>

        <div className="relative">
          <motion.svg
            aria-hidden
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            viewBox="0 0 60 80"
            className="pointer-events-none absolute -left-1 top-8 hidden h-16 w-12 text-brand/80 lg:block xl:-left-4"
          >
            <path
              d="M48 8 C20 18, 10 40, 18 58 C24 70, 38 74, 50 68"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M42 62 L50 68 L40 72"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 18px 40px rgba(229,9,20,0.24)",
                }}
                className="group relative flex min-h-[210px] flex-col rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md transition-colors duration-300 hover:border-brand/60 hover:bg-black/65 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand/50 shadow-[0_0_18px_rgba(229,9,20,0.25)] sm:h-[72px] sm:w-[72px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      quality={100}
                      sizes="72px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/80 sm:text-[15px]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-body)] text-sm font-bold text-white sm:text-base">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-white/55 sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                  <Stars count={item.rating} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
