import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Certifications from "./components/homepage/certifications";
import Extracurriculars from "./components/homepage/extracurriculars";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
    <Experience />
    <Extracurriculars />
      <Projects />
      <Education />
      <Certifications />
      <ContactSection />
    </div>
  )
};