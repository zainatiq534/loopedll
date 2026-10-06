"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    label: "E-COMMERCE SOLUTIONS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]">
        <path d="M3 5h2l1.5 10h11L20 8H7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "FAST PERFORMANCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]">
        <path d="M12 21a9 9 0 1 1 9-9" strokeLinecap="round" />
        <path d="M12 12l5-3" strokeLinecap="round" />
        <path d="M12 7v1M17 12h1M7 12H6M12 17v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "MOBILE FRIENDLY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]">
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M11 17h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "SEO OPTIMIZED",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });

  const bgX = useTransform(springX, [-0.5, 0.5], [10, -10]);
  const bgY = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const portraitX = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh w-full overflow-hidden bg-black lg:h-dvh"
    >
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src="/hero-cityscape.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_30%] brightness-110 contrast-[1.06] saturate-110 sm:object-[center_20%] lg:object-[center_18%] [transform:scale(1.05)] [transform-origin:center_top]"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.35)_28%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.65)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_14%,transparent_32%,transparent_68%,rgba(0,0,0,0.18)_86%,rgba(0,0,0,0.55)_100%),linear-gradient(180deg,rgba(0,0,0,0.12)_0%,transparent_18%,transparent_72%,rgba(0,0,0,0.4)_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(200,10,20,0.35)_0%,transparent_70%)]"
      />

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease }}
        className="absolute top-2 left-1/2 z-50 w-[min(100%-0.75rem,900px)] -translate-x-1/2 rounded-full bg-black/55 px-2 py-2 backdrop-blur-md sm:top-4 sm:px-5 sm:py-2.5 lg:top-6 lg:px-6 lg:py-3"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-11">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[11px] font-semibold tracking-[0.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-colors duration-300 hover:text-brand sm:text-sm md:text-base lg:text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col px-4 pb-0 pt-[3.75rem] sm:px-6 sm:pt-20 lg:h-dvh lg:px-10 lg:pt-0 xl:px-14">
        {/* Mobile/tablet top: intro left + features right. Desktop uses absolute placement. */}
        <div className="grid grid-cols-[1fr_auto] items-start gap-3 sm:gap-5 lg:contents">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="z-30 min-w-0 lg:absolute lg:top-[16%] lg:left-10 lg:w-[400px] xl:left-14 xl:w-[440px]"
          >
            <p className="font-[family-name:var(--font-script)] text-2xl leading-none text-brand sm:text-4xl lg:text-[42px]">
              Hello, I&apos;m
            </p>

            <h1 className="mt-1 font-[family-name:var(--font-display)] text-[2.6rem] leading-[0.88] tracking-[0.02em] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.2rem]">
              <span className="block text-white">ZAIN</span>
              <span className="block text-brand">ATIQ</span>
            </h1>

            <p className="mt-3 font-[family-name:var(--font-body)] text-[11px] font-bold tracking-[0.04em] uppercase sm:mt-4 sm:text-sm lg:mt-5 lg:text-base">
              <span className="text-white">Web Developer &amp; </span>
              <span className="text-brand">Shopify Expert</span>
            </p>

            <p className="mt-2 max-w-[16rem] font-[family-name:var(--font-body)] text-xs leading-relaxed text-white/90 sm:mt-3 sm:max-w-md sm:text-sm sm:text-[15px] lg:mt-4">
              Building fast, modern &amp; high-converting websites that help
              businesses grow online and stand out.
            </p>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="mt-3 inline-flex cursor-default items-center gap-2 rounded-full border border-brand px-3 py-1.5 font-[family-name:var(--font-body)] text-[11px] font-medium text-white sm:mt-6 sm:px-3.5 sm:py-2 sm:text-[13px] lg:mt-7"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-3.5 w-3.5 shrink-0 text-brand"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
                  strokeLinecap="round"
                />
              </svg>
              UK • USA • Worldwide
            </motion.div>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
            className="z-30 flex w-[7.5rem] flex-col gap-3 sm:w-[11rem] sm:gap-4 lg:absolute lg:top-1/2 lg:right-10 lg:mt-0 lg:w-[260px] lg:-translate-y-1/2 lg:gap-7 xl:right-14"
          >
            {features.map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
                whileHover={{ scale: 1.04, x: 4 }}
                className="flex items-center gap-1.5 sm:gap-2.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white bg-black/35 text-white sm:h-10 sm:w-10 lg:h-[46px] lg:w-[46px]">
                  {item.icon}
                </span>
                <span className="hidden h-[1.5px] w-2 shrink-0 bg-brand sm:block sm:w-3" />
                <span className="font-[family-name:var(--font-body)] text-[8px] font-semibold leading-tight tracking-[0.04em] text-white uppercase sm:text-[10px] lg:text-[11.5px] lg:tracking-[0.1em]">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Portrait: bottom-center on mobile, full figure visible */}
        <div className="relative z-20 mt-auto flex w-full flex-1 items-end justify-center pt-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-0 lg:mt-0 lg:pt-0 lg:pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            style={{ x: portraitX }}
            className="relative flex h-[46vh] min-h-[260px] w-full max-w-[340px] items-end justify-center sm:h-[50vh] sm:max-w-[420px] lg:h-[92%] lg:max-w-[560px] lg:pointer-events-auto"
          >
            <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-[42%] w-[75%] -translate-x-1/2 rounded-full bg-brand/35 blur-[45px]" />
            <Image
              src="/hero-portrait.png"
              alt="Zain Atiq"
              width={1400}
              height={1875}
              priority
              quality={100}
              sizes="(max-width: 1024px) 85vw, 560px"
              className="relative z-[1] h-full w-auto max-w-full select-none object-contain object-bottom drop-shadow-[0_24px_55px_rgba(0,0,0,0.75)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
