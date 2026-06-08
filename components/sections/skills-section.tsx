'use client';

import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

const skillCategories = [
  {
    category: "Languages and Frameworks",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "React Native"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    category: "UI Systems",
    skills: ["Material UI", "Ant Design", "Tailwind CSS", "shadcn/ui", "Design Systems"],
    color: "from-blue-500 to-purple-500"
  },
  {
    category: "State and Data",
    skills: ["Redux Toolkit", "React Query", "Zustand", "React Hook Form", "Formik", "Yup", "Zod"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Engineering and Domain",
    skills: ["Nx / Turborepo", "Cypress", "Vite", "Webpack", "Rspack", "Docker", "Stellar", "RSA / Ed25519"],
    color: "from-pink-500 to-cyan-500"
  }
];

export function SkillsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <GridPattern
        width={60}
        height={60}
        className="opacity-20"
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [11, 3],
          [2, 8],
        ]}
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
            Tech <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The stack behind maintainable product interfaces, frontend platforms, testing workflows, and blockchain-adjacent products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
                {/* Gradient header */}
                <div className={`h-1 w-full rounded-full bg-linear-to-r ${category.color} mb-4`}></div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800/70 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
