'use client';

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { RetroGrid } from "@/components/ui/retro-grid";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    image: "🛍️"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, file sharing, and end-to-end encryption.",
    tech: ["React", "WebSocket", "OpenAI", "MongoDB"],
    gradient: "from-purple-500 via-pink-500 to-red-500",
    image: "💬"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard with real-time analytics, custom reports, and predictive insights.",
    tech: ["Vue.js", "D3.js", "Python", "Redis"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    image: "📊"
  },
  {
    title: "DevOps Automation",
    description: "CI/CD pipeline automation tool with deployment monitoring and rollback capabilities.",
    tech: ["Docker", "Kubernetes", "GitLab", "AWS"],
    gradient: "from-orange-500 via-yellow-500 to-green-500",
    image: "🚀"
  }
];

export function ProjectsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
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
            Featured <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of my recent work and side projects
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
                  <div className="text-6xl mb-4">{project.image}</div>
                  
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
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
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
