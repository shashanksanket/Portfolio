"use client"
import Image from "next/image"
import contactEffect from "@/assets/landing-page/contact-effect.svg"
import dots from "@/assets/landing-page/effects-5.svg"
import contactEffect1 from "@/assets/landing-page/contact-effext-1.svg"
import contactEffectMobile1 from "@/assets/landing-page/contact-effect-mobile-1.svg"
import verticalDots from "@/assets/landing-page/vertical-dots.svg"
export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <div className="text-white w-full mt-40 flex flex-col gap-y-20">
      <p className="text-center text-5xl font-extrabold">Contact Me</p>
      <Image className="mx-auto md:hidden" src={dots} alt="dots" />
      <Image className="absolute -z-10 md:-mt-96" src={contactEffect1} alt="contactEffect1" />
      <form className="flex flex-col justify-between items-center gap-y-5 w-full md:w-[30rem] mx-auto px-20" onSubmit={handleSubmit}>
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Name:</label>
          <input className="text-white bg-[#351e2e] rounded-2xl px-3 py-3" placeholder="Enter your name here" />
        </span>
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Email:</label>
          <input className="text-white bg-[#351e2e] rounded-2xl px-3 py-3" placeholder="Enter your name here" />
        </span>
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Message:</label>
          <textarea className="text-white bg-[#351e2e] rounded-2xl px-3 py-3" placeholder="Enter your name here" />
        </span>
        <button className="w-fit rounded-full bg-fuchsia-500 my-10 shadow-2xl shadow-fuchsia-500 text-white px-5 py-2 hover:bg-blue-200 hover:text-black hover:shadow-blue-200 transition-all duration-300">Contact Me</button>
      </form>
      <Image className="absolute hidden md:block -mt-48 -z-50" alt="contactEffectMobile1" src={contactEffectMobile1} />
      <div className="absolute  hidden md:flex justify-end w-full">
      <Image className="absolute " alt="vertical-dots" src={verticalDots} />
      </div>
    </div>
  )
}