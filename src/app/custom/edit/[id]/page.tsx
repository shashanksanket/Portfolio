"use client"
import Image from "next/image";
import SectionSummary from "@/components/landing-page/sections/section-summary";
import AboutMe from "@/components/landing-page/sections/aboutme-section"
import SkillsSection from "@/components/landing-page/sections/skills-section"
import Projects from "@/components/landing-page/sections/projects";
import Contact from "@/components/landing-page/sections/contact";
import Footer from "@/components/footer/footer";
import RevealComp from '@/components/animation/reveal'
import '../styles/global.css';
import { useSearchParams } from 'next/navigation'
import { adminId } from "@/lib/const";
import { Client } from "@/lib/client";
import { useEffect, useState } from "react";
import { IUser } from "@/lib/util/types/user";
export default function LandingPage() {
  const client = new Client()
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<IUser>();
  const [summarySection, setSummarySection] = useState<IUser["summarySection"]>()
  const [aboutSection, setAboutSection] = useState<IUser["aboutSection"]>()
  const [SkillSection, setSkillSection] = useState<IUser["skills"]>()
  const [project, setProjects] = useState<IUser["projects"]>()

  useEffect(() => {
    const fetchUserData = async () => {
      const portfolioId = searchParams.get('portfolioId') || '65e46909154016d3a229e1a0'
      try {
        const fetchedData: IUser = await client.userGetById(portfolioId) as unknown as IUser;
        setUserData(fetchedData as unknown as IUser);
        setSummarySection(fetchedData.summarySection)
        setAboutSection(fetchedData.aboutSection)
        setSkillSection(fetchedData.skills)
        setProjects(fetchedData.projects)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [searchParams]);

  return (<>
    {userData ? (
      <main className="flex flex-col overflow-x-hidden ">
        <SectionSummary summarySection={summarySection} />
        <AboutMe aboutSection={aboutSection} />
        <SkillsSection skillsSection={SkillSection} />
        <Projects project={project} />
        <Contact />
      </main>
    ) : (
      <p>Loading</p>
    )}
  </>
  );
}