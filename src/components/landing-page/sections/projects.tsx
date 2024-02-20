
import Image from "next/image";
import backGlow from "@/assets/landing-page/back-glow-projects.svg"
import Carousel from "./carousel";
import { projects } from "@/lib/project";
import projectPreview1 from "@/assets/landing-page/ProjectPreview-1.png"

export default function Projects() {
  return (
    <div className=" mt-24 mx-10 flex flex-col gap-y-28">
      <div className="absolute md:hidden left-0 -z-10">
        <Image src={backGlow} width={1000} height={15000} alt="backGlow" />
      </div>
      <p className="text-white text-6xl text-center font-extrabold">Projects</p>
      <div className="overflow-x-auto md:overflow-hidden">
        <div className="flex gap-x-10 flex-wrap justify-around md:hidden">
          <Carousel />
        </div>
        <div className=" gap-x-10 md:flex-wrap justify-around gap-y-5 hidden md:flex">
          {projects.map((item, index) => (
            <div key={index} className="flex flex-col justify-between items-center gap-y-10">
              <Image src={projectPreview1} className="" alt="projectPreview1" />
              <span className="flex flex-col text-center text-white">
                <p className="font-bold text-4xl">
                  {item.title}
                </p>
                <p className="font-normal text-nowrap text-2xl">
                  Date: {item.date}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}