'use client';

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

const experiences = [
  {
    company: "Kuknos Co.",
    role: "Senior Frontend Developer",
    period: "Sep 2024 - Present",
    location: "Tehran, Iran",
    points: [
      "Led a team of 5+ frontend engineers building scalable React and TypeScript applications across fintech and blockchain products.",
      "Introduced and maintained an Nx-style monorepo architecture, improving code reuse by about 40% and reducing cross-project inconsistencies.",
      "Built a cohesive MUI, Tailwind CSS, and shadcn/ui design system adopted across 4+ products, reducing UI delivery time by about 30%.",
      "Championed Cypress E2E standards and structured PR review workflows, raising test coverage by about 60% and reducing production bugs."
    ],
    accent: "from-cyan-500 to-blue-500"
  },
  {
    company: "Sahand ICT",
    role: "Senior Frontend Developer",
    period: "May 2023 - Aug 2024",
    location: "Remote / Canada",
    points: [
      "Built a lending web platform for the Canadian market using React, TypeScript, and Material UI v5.",
      "Improved page load time by about 35% through code splitting and lazy loading.",
      "Delivered a cross-platform React Native app for iOS and Android with 98% feature parity with the web platform.",
      "Improved accessibility through WCAG-focused implementation and API integration work."
    ],
    accent: "from-blue-500 to-purple-500"
  },
  {
    company: "Kuknos Co.",
    role: "Frontend Developer",
    period: "Mar 2021 - Mar 2023",
    location: "Tehran, Iran",
    points: [
      "Delivered CBDC client applications using React Native and React.js for 100K+ end users.",
      "Built a Stellar-based DEX and NFT marketplace with performant wallet and transaction flows.",
      "Created Chrome and Firefox browser extensions for blockchain-based transactions.",
      "Designed and developed Secure KYC flows processing 50K+ identity verifications.",
      "Implemented digital certification and PDF signing with RSA and Ed25519 keys."
    ],
    accent: "from-purple-500 to-pink-500"
  },
  {
    company: "Areatak",
    role: "Backend and Blockchain Developer",
    period: "Oct 2020 - Feb 2021",
    location: "Tehran, Iran",
    points: [
      "Developed enterprise chaincode on Hyperledger Fabric using JavaScript and TypeScript.",
      "Built NestJS wallet backend services supporting high-volume wallet operations."
    ],
    accent: "from-pink-500 to-cyan-500"
  },
  {
    company: "Freelance",
    role: "Backend Developer",
    period: "Jul 2019 - Sep 2020",
    location: "Remote",
    points: [
      "Managed product development for Jimbo Market, leading a team of 4+ engineers end to end.",
      "Developed Laravel backend services and a Node.js/NestJS user-behavior analytics microservice processing 1M+ events per month.",
      "Built a React and Ant Design PWA plus an OTT/VOD subscription service using NestJS, Next.js, PostgreSQL, Redis, and queues."
    ],
    accent: "from-cyan-500 to-purple-500"
  }
];

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      <GridPattern
        width={54}
        height={54}
        className="opacity-10"
        strokeDasharray="6 6"
        squares={[
          [2, 3],
          [7, 2],
          [10, 6],
          [4, 9],
        ]}
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A track record across frontend leadership, fintech, blockchain infrastructure, React Native apps, and product platforms.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 lg:block" />

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative lg:pl-14"
              >
                <div className={`absolute left-0 top-8 hidden h-8 w-8 rounded-full bg-linear-to-br ${item.accent} p-2 shadow-lg shadow-cyan-950/40 lg:flex`}>
                  <BriefcaseBusiness className="h-4 w-4 text-white" />
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-700">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.accent}`} />
                  <div className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`} />

                  <div className="relative z-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        {item.company}
                      </p>
                      <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                      <div className="mt-4 space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-cyan-400" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-cyan-400" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 text-gray-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
