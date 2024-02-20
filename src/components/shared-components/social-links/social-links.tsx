"use client"
import Image from "next/image";
import github from "@/assets/social-icons/github.svg"
import gmail from "@/assets/social-icons/gmail.svg"
import linkedin from "@/assets/social-icons/linkedin.svg"
import instagram from "@/assets/social-icons/instagram.svg"
import ball from "@/assets/landing-page/ball.svg"
import { useState } from "react";


export default function SocialLinks() {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="flex w-full md:w-fit justify-around items-start py-4 px-5 bg-pink-200 bg-opacity-40 shadow-xl shadow-pink-400 rounded-2xl md:flex-col gap-10  text-white">
      <span className="flex flex-col md:flex-row gap-x-2 items-center">
        <Image alt="github" width={30} height={30} src={github} />
        <p className={`cursor-pointer transition-all duration-300  ${isHover ? 'visible' : 'hidden'} hover:bg-gray-800 rounded-lg px-2`}>Github</p>
      </span>
      <span className="flex flex-col md:flex-row gap-x-2 items-center">
        <Image alt="instagram" width={30} height={30} src={instagram} />
        <p className={`cursor-pointer transition-all duration-300  ${isHover ? 'visible' : 'hidden'} hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 rounded-lg px-2`}>Instagram</p>
      </span>
      <span className="flex flex-col md:flex-row gap-x-2 items-center">
        <Image alt="gmail" width={30} height={30} src={gmail} />
        <p className={`cursor-pointer transition-all duration-300  ${isHover ? 'visible' : 'hidden'} hover:bg-gradient-to-br hover:from-red-600 hover:via-blue-500 hover:to-green-500 rounded-lg px-2`}>Gmail</p>
      </span>
      <span className="flex flex-col md:flex-row gap-x-2 items-center">
        <Image alt="linkedin" width={30} height={30} src={linkedin} />
        <p className={`cursor-pointer transition-all duration-300  ${isHover ? 'visible' : 'hidden'} hover:bg-blue-400 rounded-lg px-2`}>Linkedin</p>
      </span>
    </div>
  );
}
