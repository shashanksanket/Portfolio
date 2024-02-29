"use client"
import Image from "next/image";
import backGlow from "@/assets/landing-page/back-glow-projects.svg"
import Carousel from "./carousel";
import { projects } from "@/lib/project";
import projectPreview1 from "@/assets/landing-page/ProjectPreview-1.png"
import Link from "next/link";
import github from "@/assets/social-icons/github-white.svg"
import link from "@/assets/social-icons/links.svg"
import projectsGlow from "@/assets/landing-page/projects-glow.svg"

export default function Projects() {
  return (
    <div id="projects" className=" mt-36 mx-10 flex flex-col gap-y-28">
      <div className="absolute md:hidden left-0 -z-10">
        <Image src={backGlow} width={1000} height={15000} alt="backGlow" />
      </div>
      <div className="absolute hidden md:block -z-20">
        <Image src={projectsGlow} alt="projects-glow" />
      </div>
      <p className="text-white text-6xl text-center font-extrabold">Projects</p>
      <div className="overflow-x-auto md:overflow-hidden">
        <div className="flex gap-x-10 flex-wrap justify-around md:hidden">
          <Carousel />
        </div>
        <div className=" gap-x-10 md:flex-wrap justify-around gap-y-14 hidden md:flex">
          {projects.map((item, index) => (
            <div key={index} className="flex flex-col justify-between items-center gap-y-10">
              <a href={item.liveLink}>
                <Image src={projectPreview1} className="hover:opacity-40 transition-all duration-500 cursor-pointer" alt="projectPreview1" />
              </a>
              <span className="flex flex-col text-center text-white">
                <p className="font-bold text-4xl">
                  {item.title}
                </p>
                <p className="font-normal text-nowrap text-2xl">
                  Date: {item.date}
                </p>
              </span>
              <span className="flex gap-x-10 items-center">
                <a href={item.sourceCode} target="_blank" rel="noopener noreferrer">
                  <Image className="hover:-translate-y-2 transition-all duration-200" src={github} alt="github" width={30} height={30} />
                </a>
                <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                  <Image className="hover:-translate-y-2 transition-all duration-200" src={link} alt="link" width={30} height={10} />
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}