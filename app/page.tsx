import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { readFileSync } from "fs";
import path from "path";

export default function Home() {
  const resumeTex = readFileSync(
    path.join(process.cwd(), "assets", "vahid_hasani_resume.tex"),
    "utf8"
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection resumeTex={resumeTex} />
      <FeaturesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
