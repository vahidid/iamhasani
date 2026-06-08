'use client';

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";

const projects = [
  {
    title: "Canadian Lending Platform",
    description: "Built a React, TypeScript, and MUI v5 lending platform for the Canadian market, improving page load time with code splitting and lazy loading.",
    tech: ["React", "React Native", "TypeScript", "MUI v5"],
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    image: "CAD"
  },
  {
    title: "Kuknos Blockchain Products",
    description: "Delivered CBDC clients, Stellar-based DEX and NFT marketplace flows, wallet interactions, browser extensions, and Secure KYC systems.",
    tech: ["React", "React Native", "Stellar", "KYC"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    image: "DEX"
  },
  {
    title: "Digital Certification App",
    description: "Implemented digital certification and PDF signing flows using RSA and Ed25519 keys, reducing manual signing effort.",
    tech: ["React", "Digital Signature", "RSA", "Ed25519"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    image: "PDF"
  },
  {
    title: "Commerce, Analytics, and OTT",
    description: "Managed Jimbo Market delivery, built behavior analytics services processing 1M+ monthly events, and developed an OTT/VOD subscription platform.",
    tech: ["NestJS", "Next.js", "Laravel", "PostgreSQL"],
    gradient: "from-orange-500 via-yellow-500 to-green-500",
    image: "OTT"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <RetroGrid
        className="opacity-30"
        angle={65}
        cellSize={80}
        darkLineColor="#1e293b"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Product work from fintech, blockchain infrastructure, identity verification, marketplace, analytics, and media platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`mb-4 inline-flex h-16 min-w-16 items-center justify-center rounded-2xl bg-linear-to-br ${project.gradient} px-4 text-xl font-black tracking-[0.2em] text-white shadow-lg shadow-black/30`}>
                    {project.image}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-cyan-400">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Professional project</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
