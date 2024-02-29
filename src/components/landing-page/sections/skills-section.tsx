"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import backGlow from "@/assets/landing-page/back-glow-1.svg";
import { skills, ISkill } from "@/lib/const";
import Balloon from "@/components/shared-components/balloons/balloon";

export default function SkillsSection() {
  const [skillDetail, setSkillDetail] = useState<ISkill>({})
  const handleClickSkill = (item: ISkill) => {
    setSkillDetail(item)
  }

  return (
    <main id="skills" className="flex flex-col z-40 px-10 md:mt-28 md:px-24 text-white relative">
      <div className="absolute left-0">
        <Image alt="back-glow" width={640} height={0} src={backGlow} />
      </div>
      <p className="text-[400%] text-center font-bold ">Skills</p>
      <div className="flex pt-5 justify-between items-center relative">
        <div className="flex z-40 flex-wrap justify-between">
          {skills.map((item, index) => (
            <Balloon handleClickSkill={handleClickSkill} key={index} item={item} />
          ))}
        </div>
      </div>
      <div className=" absolute hidden lg:block top-96 left-96 h-[20rem] w-[40rem] rounded-full blur-3xl opacity-40 bg-gradient-to-r from-sky-700 via-orange-300 to-purple-800"></div>
      <div className="md:mx-auto bg-slate-900 w-fit rounded-2xl bg-opacity-50 shadow-2xl shadow-indigo-600 backdrop-blur-3xl my-3 px-5 py-2 text-white">
        {skillDetail.name && (
          <div className="flex flex-col gap-y-3 justify-between">
            <span className="flex items-center gap-x-2">
              <p className="text-lg font-bold">Skill:</p>
              <p> {skillDetail.name}</p>
            </span>
            <span className="flex items-center gap-x-2">
              <p className="text-lg font-bold">Project:</p>
              <p> <a href={skillDetail.projectLink} className="text-blue-500 hover:underline">{skillDetail.projectLink?.split('/')[skillDetail.projectLink?.split('/').length-1]}</a></p>
            </span>
            <span className="flex items-center gap-x-2">
              <p className="text-lg font-bold">Type:</p>
              <p>{skillDetail.type}</p>
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
