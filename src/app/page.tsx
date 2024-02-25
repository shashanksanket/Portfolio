import Image from "next/image";
import SectionSummary from "@/components/landing-page/sections/section-summary";
import AboutMe from "@/components/landing-page/sections/aboutme-section"
import SkillsSection from "@/components/landing-page/sections/skills-section"
import Projects from "@/components/landing-page/sections/projects";
import Contact from "@/components/landing-page/sections/contact";
import Footer from "@/components/footer/footer";
export default function LandingPage() {
  return (
    <main className="flex flex-col ">
      <SectionSummary/>
      <AboutMe/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}