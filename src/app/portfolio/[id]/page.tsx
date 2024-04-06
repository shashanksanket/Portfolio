"use client"
import '../../../styles/global.css';
import SectionSummary from "@/components/landing-page/sections/section-summary";
import AboutMe from "@/components/landing-page/sections/aboutme-section"
import SkillsSection from "@/components/landing-page/sections/skills-section"
import Projects from "@/components/landing-page/sections/projects";
import Contact from "@/components/landing-page/sections/contact";
import { useSearchParams } from 'next/navigation'
import { Client } from "@/lib/client";
import { useEffect, useState } from "react";
import { IUser } from "@/lib/util/types/user";

export default function LandingPage({ params }: { params: { id: string } }) {

  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<IUser>();
  const [summarySection, setSummarySection] = useState<IUser["summarySection"]>()
  const [aboutSection, setAboutSection] = useState<IUser["aboutSection"]>()
  const [SkillSection, setSkillSection] = useState<IUser["skills"]>()
  const [project, setProjects] = useState<IUser["projects"]>()
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const client = new Client()

  useEffect(() => {
    const fetchUserData = async () => {

      const portfolioId = params.id
      setIsLoading(true)
      try {
        if(portfolioId){
          const fetchedData:IUser = await client.userGetById(portfolioId) as unknown as IUser;
          console.log(fetchedData)
          setUserData(fetchedData as unknown as IUser);
          setSummarySection(fetchedData.summarySection)
          setAboutSection(fetchedData.aboutSection)
          setSkillSection(fetchedData.skills)
          setProjects(fetchedData.projects)
        }
        } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
    setIsLoading(true)


  }, [searchParams]);

  return (<>
    {!isLoading ? (
      <main className="flex flex-col overflow-x-hidden ">
        <SectionSummary summarySection={summarySection} />
        <AboutMe aboutSection={aboutSection} />
        <SkillsSection skillsSection={SkillSection} />
        <Projects project={project} />
        <Contact />
      </main>
    ) : (
      <div className='absolute top-0 left-0 w-screen h-screen backdrop-blur-md opacity-35'></div>
    )}
  </>
  );
}