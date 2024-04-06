"use client"
import Image from "next/image";
import github from "@/assets/social-icons/github.svg"
import gmail from "@/assets/social-icons/gmail.svg"
import linkedin from "@/assets/social-icons/linkedin.svg"
import instagram from "@/assets/social-icons/instagram.svg"
import { useState } from "react";
import { IUser } from "@/lib/util/types/user";

interface props {
  aboutSection?: IUser["aboutSection"]
}

export default function SocialLinks({aboutSection}:props) {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="flex w-full md:w-fit justify-around md:items-start py-4 px-5 bg-pink-200 bg-opacity-40 shadow-xl shadow-pink-400 rounded-2xl items-center md:flex-col md:gap-10 hover:ring-4 hover:ring-violet-500 text-white transition-all duration-700 ease-out ">
    <a href={`${aboutSection?.githubLink}`} className="flex flex-col md:flex-row gap-2 items-center">
      <Image alt="github" width={30} height={30} src={github} />
      <p className={`cursor-pointer transition-all duration-500 ${isHover ? 'opacity-100 w-fit md:w-16 md:ml-0 h-6' : 'md:-ml-5 opacity-0 md:w-0 h-0'} hover:bg-gray-800 text-center rounded-lg px-2`}>Github</p>
    </a>
    <a href={`${aboutSection?.instagramLink}`} className="flex flex-col md:flex-row gap-2 items-center">
      <Image alt="instagram" width={30} height={30} src={instagram} />
      <p className={`cursor-pointer transition-all duration-500  ${isHover ? 'opacity-100 w-fit md:w-24 md:ml-0 h-6' : 'md:-ml-5 opacity-0 md:w-0 h-0'} hover:bg-gradient-to-br text-center hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 rounded-lg px-2`}>Instagram</p>
    </a>
    <a href={`mailto:${aboutSection?.email}`} className="flex flex-col md:flex-row gap-2 items-center">
      <Image alt="gmail" width={30} height={30} src={gmail} />
      <p className={`cursor-pointer transition-all duration-500  ${isHover ? 'opacity-100 w-fit md:w-16 md:ml-0 h-6' : 'md:-ml-5 opacity-0 md:w-0 h-0'} hover:bg-gradient-to-br text-center hover:from-red-600 hover:via-blue-500 hover:to-green-500 rounded-lg px-2`}>Gmail</p>
    </a>
    <a href={`${aboutSection?.linkedinLink}`} className="flex flex-col md:flex-row gap-2 items-center">
      <Image alt="linkedin" width={30} height={30} src={linkedin} />
      <p className={`cursor-pointer transition-all duration-500  ${isHover ? 'opacity-100 w-fit md:w-20 md:ml-0 h-6' : 'md:-ml-5 opacity-0 md:w-0 h-0'} hover:bg-blue-400 rounded-lg px-2`}>Linkedin</p>
    </a>
  </div>
  );
}
