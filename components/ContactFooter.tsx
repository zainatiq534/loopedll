"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";

const SectionBackground3D = dynamic(() => import("@/components/SectionBackground3D"), {
  ssr: false,
});

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zain-atiq534",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M6.5 8.5H3.7V20h2.8V8.5zM5.1 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.1 4zM20.3 20h-2.8v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.6-.1.9V20h-2.8s0-9.4 0-11.5h2.8v1.6c.4-.6 1.1-1.8 2.9-1.8 2.1 0 3.7 1.4 3.7 4.4V20z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zainrajput534",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M4.5 10.5c3.5 0 8.2-.4 12.8-3.5M6 18c2.2-3.5 5.4-6.2 10.5-7.8M9 4.8c2 3.4 4.4 8.8 5 14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M8.7 11.2c1 0 1.7-.6 1.7-1.5S9.7 8.2 8.5 8.2H5.8v3h2.9zm-.2 1.5H5.8v3.4h2.9c1.3 0 2.1-.7 2.1-1.8s-.8-1.6-2.3-1.6zM12.2 7.2h5v1.2h-5V7.2zm5.6 5.4c-.3-1.5-1.5-2.5-3.4-2.5-2.2 0-3.7 1.6-3.7 3.8s1.5 3.8 3.8 3.8c1.8 0 3.1-.9 3.5-2.4h-1.8c-.2.6-.8 1-1.6 1-1.1 0-1.8-.8-1.9-2h5.2c0-.2.1-.5.1-.7 0-.1 0-.2 0-.3zm-5.1-.2c.2-1 .9-1.6 1.8-1.6.9 0 1.5.6 1.7 1.6h-3.5zM3.5 5.5h7.2v1.2H3.5V5.5z" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 24 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["25%", "75%"]);
  const cursorGlow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle 220px at ${x} ${y}, rgba(229,9,20,0.12), transparent 70%)`
  );
  const imageY = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const imageX = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10 lg:px-10 lg:pt-10"
    >
      <SectionBackground3D variant="footer" />
      <motion.div
        aria-hidden
        style={{ background: cursorGlow }}
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-screen"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black/45 backdrop-blur-md"
        >
          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[0.9fr_1.15fr_0.95fr] lg:gap-8 lg:p-8">
            <motion.div
              style={{ x: imageX, y: imageY }}
              className="relative mx-auto aspect-[4/3] w-full max-w-[360px] overflow-hidden rounded-2xl border border-brand/30 shadow-[0_16px_40px_rgba(229,9,20,0.25)] lg:mx-0 lg:max-w-none"
            >
              <Image
                src="/footer/cta-visual.jpg"
                alt="Creative workspace"
                fill
                quality={100}
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover"
              />
              <motion.div
                aria-hidden
                animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.05, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(229,9,20,0.45),transparent_55%)]"
              />
              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm"
              >
                Let&apos;s build together
              </motion.div>
            </motion.div>

            <div className="flex flex-col justify-center">
              <p className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.18em] text-white/80 uppercase sm:text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                LET&apos;S WORK TOGETHER —
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-wide text-white sm:text-5xl lg:text-6xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/70 sm:text-[15px]">
                Let&apos;s create something amazing together. I&apos;m always open to
                discussing new ideas, opportunities and creative projects.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white shadow-[0_10px_28px_rgba(229,9,20,0.35)] transition-colors hover:bg-[#ff1a24]"
                >
                  Get in Touch →
                </motion.a>
                <p className="font-[family-name:var(--font-script)] text-2xl leading-none text-brand sm:text-3xl">
                  Great Ideas Start
                  <br />
                  with a Conversation ♥
                </p>
              </div>
            </div>

            <motion.form
              id="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5"
            >
              <h3 className="font-[family-name:var(--font-body)] text-lg font-bold text-white">
                Contact
              </h3>
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs text-white/55">
                Send a message — I usually reply within 24 hours.
              </p>

              <label className="mt-4 block">
                <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.12em] text-white/60 uppercase">
                  Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5 font-[family-name:var(--font-body)] text-sm text-white outline-none transition focus:border-brand/70 focus:bg-white/[0.06]"
                />
              </label>

              <label className="mt-3 block">
                <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.12em] text-white/60 uppercase">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  className="mt-1.5 w-full rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5 font-[family-name:var(--font-body)] text-sm text-white outline-none transition focus:border-brand/70 focus:bg-white/[0.06]"
                />
              </label>

              <label className="mt-3 block">
                <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.12em] text-white/60 uppercase">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={3}
                  placeholder="Tell me about your project..."
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5 font-[family-name:var(--font-body)] text-sm text-white outline-none transition focus:border-brand/70 focus:bg-white/[0.06]"
                />
              </label>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full rounded-full border border-brand bg-brand px-4 py-2.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition hover:bg-[#ff1a24]"
              >
                {submitted ? "Message Sent ✓" : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease }}
          className="mt-5 rounded-3xl border border-white/10 bg-black/50 px-5 py-6 backdrop-blur-md sm:px-7 sm:py-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-white sm:text-5xl">
                Zain<span className="text-brand">.</span>
              </p>
              <p className="mt-2 font-[family-name:var(--font-body)] text-sm text-white/60">
                Designing a Better Digital Tomorrow.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="flex items-center gap-2.5">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.08 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-brand hover:bg-brand/20 hover:text-brand"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="font-[family-name:var(--font-body)] text-xs text-white/45">
                © 2026 Zain Atiq. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
