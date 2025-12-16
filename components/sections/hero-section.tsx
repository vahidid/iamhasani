'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import TypingText from "@/components/ui/typing-text";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams className="opacity-40" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-cyan-400 text-lg md:text-xl font-mono">
              Hello World! 👋
            </span>
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            I&apos;m{" "}
            <GradientText
              text="Vahid Hasani"
              gradient="linear-gradient(90deg, #06b6d4 0%, #3b82f6 25%, #8b5cf6 50%, #d946ef 75%, #06b6d4 100%)"
              neon={true}
              className="text-5xl md:text-7xl lg:text-8xl font-bold"
            />
          </motion.h1>

          {/* Typing animation for role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
          >
            <TypingText
              text={[
                "Software Engineer",
                "Full Stack Developer",
                "Problem Solver",
                "Tech Enthusiast"
              ]}
              typingSpeed={100}
              pauseDuration={2000}
              deletingSpeed={50}
              className="text-2xl md:text-4xl"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting elegant solutions to complex problems. Passionate about building
            scalable applications and exploring cutting-edge technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-6 justify-center items-center"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
