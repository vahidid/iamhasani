'use client';

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

export function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <GridPattern
        width={50}
        height={50}
        className="opacity-10"
        strokeDasharray="4 4"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Reach out for senior frontend development, React/Next.js architecture, React Native apps, design systems, or fintech and blockchain product work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, title: "Email", value: "vahidhasani09@gmail.com", href: "mailto:vahidhasani09@gmail.com" },
            { icon: Phone, title: "Phone", value: "+98 901 721 8950", href: "tel:+989017218950" },
            { icon: MapPin, title: "Location", value: "Tehran, Iran", href: "https://www.google.com/maps/place/Tehran" }
          ].map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 text-center group"
            >
              <contact.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
              <p className="text-sm text-gray-400">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm border border-gray-800">
            <form action="mailto:vahidhasani09@gmail.com" encType="text/plain" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
            <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-gray-800 pt-6">
              {[
                { icon: Github, href: "https://github.com/vahidid", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vahidhasani77", label: "LinkedIn" },
                { icon: Send, href: "mailto:vahidhasani09@gmail.com", label: "Email" }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ y: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
                  aria-label={item.label}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
