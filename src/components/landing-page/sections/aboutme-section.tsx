import Image from "next/image";
import blackGrow from "@/assets/landing-page/black-glow.svg"
import SocialLinks from "@/components/shared-components/social-links/social-links";
import Effect3 from "@/assets/landing-page/ellipse-3.svg"
import { detailedSummary } from "@/lib/const"
import Effect4 from "@/assets/landing-page/effect-4.svg"
import dots from "@/assets/landing-page/effects-5.svg"

export default function AboutMe() {
  return (
    <main id="about" className="w-full">
      <div className="absolute bg-cover left-0 mt-48 -z-10">
        <Image src={blackGrow} alt="blackGrow" />
      </div>
      <div className="flex flex-col mx-10 gap-y-20 justify-center md:flex-row pt-20 md:justify-around">
        <SocialLinks />
        <span className="flex flex-col gap-y-5 p-10 items-center md:items-start">
          <p className="text-white text-[450%] w-full text-center font-extrabold leading-1 ">About Me</p>
          <p className=" text-white md:w-[40rem] text-justify md:text-left font-semibold">{detailedSummary}</p>
          <button className="w-fit rounded-full bg-fuchsia-500 my-10 shadow-2xl shadow-fuchsia-500 text-white px-5 py-2 hover:bg-blue-200 hover:text-black transition-all duration-300 ease-in-out delay-100 hover:-translate-x-1">Contact Me</button>
          <Image className="md:hidden absolute left-0" src={Effect4} alt="Effect4" />
        </span>
        <Image  className="mx-auto absolute -z-10 md:hidden" src={dots} alt="dots"/>
      </div>
      <Image className="md:hidden absolute left-0 " src={Effect3} alt="Effect3" />
    </main>
  )
}