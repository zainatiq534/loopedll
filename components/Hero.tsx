"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    label: "E-COMMERCE SOLUTIONS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 sm:h-[18px] sm:w-[18px]">
        <path d="M3 5h2l1.5 10h11L20 8H7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "FAST PERFORMANCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 sm:h-[18px] sm:w-[18px]">
        <path d="M12 21a9 9 0 1 1 9-9" strokeLinecap="round" />
        <path d="M12 12l5-3" strokeLinecap="round" />
        <path d="M12 7v1M17 12h1M7 12H6M12 17v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "MOBILE FRIENDLY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 sm:h-[18px] sm:w-[18px]">
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M11 17h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "SEO OPTIMIZED",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 sm:h-[18px] sm:w-[18px]">
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
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh w-full overflow-hidden bg-black lg:h-dvh lg:overflow-hidden"
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
          className="object-cover object-[center_20%] brightness-110 contrast-[1.06] saturate-110 sm:object-[center_18%] [transform:scale(1.08)_translateY(3%)] sm:[transform:scale(1.06)_translateY(2.5%)] [transform-origin:center_top]"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.35)_18%,transparent_40%,transparent_60%,rgba(0,0,0,0.35)_82%,rgba(0,0,0,0.7)_100%),linear-gradient(180deg,rgba(0,0,0,0.35)_0%,transparent_20%,transparent_70%,rgba(0,0,0,0.55)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_14%,transparent_32%,transparent_68%,rgba(0,0,0,0.18)_86%,rgba(0,0,0,0.55)_100%),linear-gradient(180deg,rgba(0,0,0,0.12)_0%,transparent_18%,transparent_72%,rgba(0,0,0,0.4)_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_45%_at_50%_80%,rgba(200,10,20,0.28)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col px-5 pb-8 pt-10 sm:px-8 lg:h-dvh lg:flex-row lg:items-center lg:px-10 lg:pb-0 lg:pt-0 xl:px-14">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="order-1 z-30 w-full shrink-0 lg:absolute lg:top-[16%] lg:left-10 lg:w-[400px] xl:left-14 xl:w-[440px]"
        >
          <p className="font-[family-name:var(--font-script)] text-3xl leading-none text-brand sm:text-4xl lg:text-[42px]">
            Hello, I&apos;m
          </p>

          <h1 className="mt-1 font-[family-name:var(--font-display)] text-[3.4rem] leading-[0.86] tracking-[0.02em] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.2rem]">
            <span className="block text-white">ZAIN</span>
            <span className="block text-brand">ATIQ</span>
          </h1>

          <p className="mt-4 font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.04em] uppercase sm:text-sm lg:mt-5 lg:text-base">
            <span className="text-white">Web Developer &amp; </span>
            <span className="text-brand">Shopify Expert</span>
          </p>

          <p className="mt-3 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/90 sm:text-[15px] lg:mt-4">
            Building fast, modern &amp; high-converting websites that help
            businesses grow online and stand out.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mt-5 inline-flex cursor-default items-center gap-2 rounded-full border border-brand px-3.5 py-2 font-[family-name:var(--font-body)] text-xs font-medium text-white sm:mt-6 sm:text-[13px] lg:mt-7"
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

        <div className="order-2 relative z-20 mx-auto mt-4 flex w-full max-w-[420px] flex-1 items-end justify-center sm:mt-6 sm:max-w-[480px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[92%] lg:max-w-none lg:w-[560px] lg:-translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            style={{ x: portraitX }}
            className="relative flex h-[48vh] min-h-[280px] w-full items-end justify-center sm:h-[52vh] lg:h-full"
          >
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[48%] w-[70%] -translate-x-1/2 rounded-full bg-brand/35 blur-[55px]" />
            <Image
              src="/hero-portrait.png"
              alt="Zain Atiq"
              width={1400}
              height={1875}
              priority
              quality={100}
              sizes="(max-width: 1024px) 80vw, 560px"
              className="relative z-[1] h-full w-auto max-w-full select-none object-contain object-bottom drop-shadow-[0_24px_55px_rgba(0,0,0,0.75)]"
            />
          </motion.div>
        </div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
          }}
          className="order-3 z-30 mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-4 sm:gap-5 lg:absolute lg:top-1/2 lg:right-10 lg:mt-0 lg:flex lg:w-[260px] lg:-translate-y-1/2 lg:flex-col lg:gap-7 xl:right-14"
        >
          {features.map((item) => (
            <motion.li
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              whileHover={{ scale: 1.04, x: 4 }}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white text-white sm:h-11 sm:w-11 lg:h-[46px] lg:w-[46px]">
                {item.icon}
              </span>
              <span className="hidden h-[1.5px] w-3 shrink-0 bg-brand sm:block" />
              <span className="font-[family-name:var(--font-body)] text-[10px] font-semibold leading-tight tracking-[0.08em] text-white uppercase sm:text-[11px] lg:text-[11.5px] lg:tracking-[0.1em]">
                {item.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
