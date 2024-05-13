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
import { Toast, Toaster } from '@medusajs/ui';

export default function LandingPage({ params }: { params: { id: string } }) {

  const searchParams = useSearchParams();
  const [userData, setUserData] = useState<IUser>();
  const [summarySection, setSummarySection] = useState<IUser["summarySection"]>()
  const [aboutSection, setAboutSection] = useState<IUser["aboutSection"]>()
  const [SkillSection, setSkillSection] = useState<IUser["skills"]>()
  const [project, setProjects] = useState<IUser["projects"]>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

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
    setIsLoading(false)


  }, [searchParams]);

  return (<>
    <Toaster />
    {userData ? (
      <main className="flex flex-col overflow-x-hidden text-white ">
        <SectionSummary summarySection={summarySection} />
        <AboutMe aboutSection={aboutSection} />
        <SkillsSection skillsSection={SkillSection} />
        <Projects project={project} />
        <Contact />
      </main>
    ) : (
      <div className='absolute top-0 left-0 w-screen h-screen backdrop-blur-2xl z-[5000000000]'>
        <div className="flex flex-col gap-y-4 justify-center items-center h-screen">
          <div className="flex gap-x-4">
            <div className="rounded-full h-20 w-20 bg-[#f742fb] animate-pulse  hover:translate-y-4 duration-1000"></div>
            <div className="rounded-full h-20 w-20 bg-[#f742fb] animate-pulse  hover:translate-y-4 duration-1000"></div>
            <div className="rounded-full h-20 w-20 bg-[#f742fb] animate-pulse  hover:translate-y-4 duration-1000"></div>
          </div>
          <p className="font-bold text-2xl bg-gradient-to-r from-sky-700 to-pink-300 bg-clip-text text-transparent">Crafting your personalized portfolio...</p>
        </div>
      </div>
    )}
  </>
  );
}