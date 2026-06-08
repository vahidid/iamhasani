'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import TypingText from "@/components/ui/typing-text";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Code2, Sparkles, Terminal, Rocket, FileText, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!isResumeOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsResumeOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isResumeOpen]);

  const floatingIcons = [
    { Icon: Code2, delay: 0, position: "top-20 left-[10%]" },
    { Icon: Sparkles, delay: 0.2, position: "top-40 right-[15%]" },
    { Icon: Terminal, delay: 0.4, position: "bottom-40 left-[15%]" },
    { Icon: Rocket, delay: 0.6, position: "bottom-32 right-[10%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <BackgroundBeams className="opacity-30" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            delay, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${position} hidden lg:block`}
        >
          <Icon className="w-8 h-8 text-cyan-500/30" />
        </motion.div>
      ))}

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-cyan-400 text-sm font-medium">Senior Frontend Developer</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="text-white">Hi, I&apos;m</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Vahid Hasani
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl text-gray-400 font-light"
                >
                  <TypingText
                    text={[
                      "Scaling fintech and blockchain products",
                      "Leading React and TypeScript teams",
                      "Building monorepos and design systems",
                      "Shipping web and React Native apps"
                    ]}
                    typingSpeed={80}
                    pauseDuration={2000}
                    deletingSpeed={40}
                    className="text-2xl md:text-3xl"
                  />
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                Senior Frontend Developer with 5+ years of experience building and scaling web and mobile
                applications across fintech, blockchain, and SaaS. I specialize in React, Next.js, React Native,
                TypeScript, front-end architecture, monorepos, design systems, performance, testing, and clean delivery.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex gap-8 pt-4"
              >
                {[
                  { label: "Years Experience", value: "5+" },
                  { label: "Frontend Engineers Led", value: "5+" },
                  { label: "End Users Served", value: "100K+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  type="button"
                  onClick={() => setIsResumeOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    View Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-cyan-500/50 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="/vahid-hasani-resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-700 rounded-xl font-semibold text-lg text-gray-300 hover:bg-white/10 hover:border-gray-500 hover:text-white transition-all backdrop-blur-sm"
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex gap-4 pt-4"
              >
                {[
                  { icon: Github, href: "https://github.com/vahidid", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/vahidhasani77", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:vahidhasani09@gmail.com", label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full aspect-square max-w-lg mx-auto"
              >
                {/* Main Card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 shadow-2xl overflow-hidden"
                  style={{ transform: "translateZ(50px)" }}
                >
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
                      backgroundSize: "50px 50px"
                    }}
                  />
                  
                  {/* Animated Gradient */}
                  <motion.div
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center mb-6"
                    >
                      <div className="w-44 h-44 rounded-full bg-black flex items-center justify-center">
                        <Terminal className="w-24 h-24 text-cyan-400" />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Senior Frontend Developer</h3>
                    <p className="text-gray-400">React, Next.js, and React Native systems for fintech and blockchain products</p>
                    
                    {/* Tech Indicators */}
                    <div className="flex gap-3 mt-6">
                      {["React", "Next.js", "RN", "TS"].map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-60"
                  style={{ transform: "translateZ(100px)" }}
                />
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 blur-xl opacity-60"
                  style={{ transform: "translateZ(100px)" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-3 sm:p-6 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setIsResumeOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-cyan-500/25 bg-gray-950 shadow-2xl shadow-cyan-950/30"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/60 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Vahid Hasani Resume</p>
                <p className="text-xs text-gray-400">Preview generated from the LaTeX resume file</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/vahid-hasani-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-medium text-gray-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open
                </a>
                <button
                  type="button"
                  onClick={() => setIsResumeOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                  aria-label="Close resume preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <iframe
              src="/vahid-hasani-resume.pdf#view=FitH"
              title="Vahid Hasani resume preview"
              className="min-h-0 flex-1 bg-white"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
