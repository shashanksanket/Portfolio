"use client"
import Image from "next/image";
import backGlow from "@/assets/landing-page/back-glow-1.svg"
import { skills } from "@/lib/const";
import skillCircle from "@/assets/landing-page/skill-circle.svg"
export default function SkillsSection() {
  return (
    <main className="flex flex-col px-24">
      <div className="absolute left-0 ">
        <Image alt="back-grow" width={640} height={0} src={backGlow} />
      </div>
      <p className="text-9xl font-bold mt-20">My Skills</p>
      <div>
        
      </div>
    </main>
  )
}