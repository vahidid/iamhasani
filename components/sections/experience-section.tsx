'use client';

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

const experiences = [
  {
    company: "Kuknos Co.",
    role: "Frontend Team Lead",
    period: "Mar 2023 - Present",
    location: "Iran",
    points: [
      "Led front-end developers in building scalable React applications with a focus on performance and maintainability.",
      "Implemented a monorepo architecture for shared components and libraries across multiple projects.",
      "Built and maintained a design system with Material UI, Tailwind CSS, and Shadcn UI."
    ],
    accent: "from-cyan-500 to-blue-500"
  },
  {
    company: "Sahand ICT",
    role: "Frontend Team Lead",
    period: "May 2023 - Aug 2024",
    location: "Remote",
    points: [
      "Developed a lending platform based in Canada.",
      "Built a cross-platform React Native application for Android and iOS.",
      "Delivered a React, TypeScript, and MUI v5 web application."
    ],
    accent: "from-blue-500 to-purple-500"
  },
  {
    company: "Kuknos Co.",
    role: "Frontend Developer",
    period: "Mar 2021 - Present",
    location: "Iran",
    points: [
      "Developed CBDC client applications, DEX, NFT market, SKYC, Poolex, and browser extension products.",
      "Shipped features across mobile, desktop, and browser extension platforms.",
      "Created digital certification flows for PDF signing using RSA and ED25519 key pairs."
    ],
    accent: "from-purple-500 to-pink-500"
  },
  {
    company: "Areatak / Freelance",
    role: "Backend and Blockchain Developer",
    period: "Jul 2019 - Oct 2022",
    location: "Iran",
    points: [
      "Developed Hyperledger Fabric chain-code with JavaScript and TypeScript.",
      "Built backend services with NestJS and Laravel for wallet, marketplace, analytics, and OTT products.",
      "Worked across Next.js, React, PostgreSQL, queues, Redis, and product team management."
    ],
    accent: "from-pink-500 to-cyan-500"
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
            Professional <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            A track record across front-end leadership, fintech, blockchain, mobile apps, and product platforms.
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
