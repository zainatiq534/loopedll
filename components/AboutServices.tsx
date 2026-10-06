"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    label: "AVAILABLE WORLDWIDE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "AVAILABLE FOR FREELANCE PROJECTS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "CLEAN & MODERN DESIGNS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 20h8M12 17v3" strokeLinecap="round" />
        <path d="M7 13.5l2.8-3.2 2.2 2.2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "ON-TIME DELIVERY EVERY TIME",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
        <path d="M9.5 15.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "WEB DEVELOPMENT",
    description: "Custom, responsive and high-performance websites.",
    icon: "/icons/webdev.png",
  },
  {
    title: "SHOPIFY STORE",
    description: "Professional Shopify stores that convert and scale.",
    icon: "/icons/shopify.png",
  },
  {
    title: "UI/UX DESIGN",
    description: "Clean, modern and user-friendly designs that engage users.",
    icon: "/icons/uiux.png",
  },
  {
    title: "META ADS",
    description: "Targeted ad campaigns that drive traffic and sales.",
    icon: "/icons/meta.png",
  },
  {
    title: "SPEED OPTIMIZATION",
    description: "Lightning-fast websites for better user experience.",
    icon: "/icons/speed.png",
  },
  {
    title: "SEO OPTIMIZATION",
    description: "On-page SEO to rank higher and grow organic traffic.",
    icon: "/icons/seo.png",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutServices() {
  return (
    <section id="about" className="w-full bg-black px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-8 lg:px-10 lg:pt-16 lg:pb-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[minmax(280px,0.9fr)_1.6fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col p-2 sm:p-4 lg:p-6"
          >
            <p className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[0.18em] text-brand uppercase sm:text-sm">
              ABOUT ME
            </p>

            <h2 className="mt-2 inline-block font-[family-name:var(--font-display)] text-5xl leading-none tracking-wide text-white sm:text-7xl lg:text-8xl">
              <span className="relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-brand after:content-['']">
                ME
              </span>
            </h2>

            <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-white/90 sm:text-[15px]">
              I&apos;m a Web Developer &amp; Shopify Expert passionate about
              creating fast, modern, and high-converting eCommerce websites. I
              also specialize in Meta Ads and helping businesses grow their
              online presence.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-brand">{item.icon}</span>
                  <span className="font-[family-name:var(--font-body)] text-[11px] font-semibold leading-snug tracking-[0.06em] text-white uppercase sm:text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-auto pt-12 font-[family-name:var(--font-script)] text-4xl text-white sm:text-5xl">
              Zain Atiq
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
            className="p-2 pt-8 sm:p-4 lg:p-6 lg:pt-6"
          >
            <div className="mb-8 flex items-center gap-3 sm:mb-10">
              <span className="h-px flex-1 bg-brand/70" />
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <h2 className="px-2 font-[family-name:var(--font-body)] text-lg font-extrabold tracking-[0.16em] text-white uppercase sm:text-2xl sm:tracking-[0.2em] lg:text-3xl">
                SERVICES
              </h2>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span className="h-px flex-1 bg-brand/70" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease }}
                  whileHover={{ y: -3 }}
                  className="flex min-h-[170px] flex-col items-center justify-center rounded-md border border-white/10 bg-white/[0.02] px-4 py-6 text-center sm:min-h-[190px] sm:px-5"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-body)] text-sm font-bold tracking-[0.08em] text-white uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[200px] font-[family-name:var(--font-body)] text-xs leading-relaxed text-white/75">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
