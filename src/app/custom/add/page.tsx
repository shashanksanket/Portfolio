"use client"
import About from "@/components/customization/about";
import Projects from "@/components/customization/project";
import Skills from "@/components/customization/skills";
import Summary from "@/components/customization/summary";
import Review from "@/components/customization/Review"
import '../../../styles/global.css';
import { useEffect, useState } from "react";

export default function LandingPage() {

  const [tab, setTab] = useState<string>("Summary")
  
  return (
    <div className="absolute overflow-x-hidden top-0 left-0 h-screen w-screen backdrop-blur-lg z-50">
      <main className="flex flex-col overflow-x-hidden p-20 items-center gap-y-10 justify-between ">
        <div className="flex text-white w-full justify-between">
          <div onClick={() => setTab("Summary")} className={`${tab == "Summary" ? 'border-b-2' : ''} pb-3 cursor-pointer hover:font-extrabold transition-all duration-500`}>
            Summary Section
          </div>
          <div onClick={() => setTab("About")} className={`${tab == "About" ? 'border-b-2' : ''} pb-3 cursor-pointer hover:font-extrabold transition-all duration-500`}>
            About Section
          </div>
          <div onClick={() => setTab("Skills")} className={`${tab == "Skills" ? 'border-b-2' : ''} pb-3 cursor-pointer hover:font-extrabold transition-all duration-500`}>
            Skills Section
          </div>
          <div onClick={() => setTab("Projects")} className={`${tab == "Projects" ? 'border-b-2' : ''} pb-3 cursor-pointer hover:font-extrabold transition-all duration-500`}>
            Projects Section
          </div>
          <div onClick={() => setTab("Review")} className={`${tab == "Review" ? 'border-b-2' : ''} pb-3 cursor-pointer hover:font-extrabold transition-all duration-500`}>
            Review
          </div>
        </div>
        <div className="flex mx-auto w-full justify-center">
          {tab == "About" && (
            <About />
          )}
          {tab == "Projects" && (
            <Projects />
          )}
          {tab == "Skills" && (
            <Skills />
          )}
          {tab == "Summary" && (
            <Summary />
          )}
          {tab == "Review" && (
            <Review />
          )}
        </div>
      </main>
    </div>
  );
}