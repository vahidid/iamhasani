'use client';

import { motion } from "framer-motion";
import { Boxes, Code2, Laptop, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description: "Designing scalable React and TypeScript systems with component boundaries, performance focus, and maintainable code.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Boxes,
    title: "Monorepo Modularization",
    description: "Introducing Nx-style monorepos, shared libraries, and modular project structure across fintech and blockchain products.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Laptop,
    title: "Design Systems",
    description: "Building cohesive product UI with Material UI, Tailwind CSS, shadcn/ui, responsive patterns, and reusable components.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Quality Leadership",
    description: "Mentoring engineers, improving PR review workflows, raising Cypress E2E coverage, and aligning delivery with product teams.",
    gradient: "from-pink-500 to-cyan-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Bring</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical frontend leadership for fintech, blockchain, and SaaS products that need to scale across web, mobile, and teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Gradient glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-r ${feature.gradient} mb-4`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
