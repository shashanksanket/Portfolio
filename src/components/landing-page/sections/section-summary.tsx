import { name, summary, resumeLink } from "@/lib/const";
import ellipse from "@/assets/landing-page/ellipse.svg"
import Image from "next/image";
import Line from "@/assets/landing-page/line.svg"
import ellipse1 from "@/assets/landing-page/ellipse-1.svg"
import ellipse2 from "@/assets/landing-page/ellipse-2.svg"
import mobileEllipse from "@/assets/landing-page/mobile/mobile-ellipse.svg"
import EllipseSvg from "@/assets/svg-components/ellipse";

export default function SectionSummary() {
  return (
    <div id="home" className="w-full flex flex-col md:flex-row items-center justify-between pt-10 gap-y-5  font-mono text-sm text-white rounded-b-2xl ">
      <div className="-z-20">
        <Image className="absolute top-0 left-0 hidden  md:block bg-cover" height={1000} src={ellipse1} alt="ellipse1" />
        <Image className="absolute top-0 right-0 bg-cover h-[40rem]" src={ellipse2} alt="ellipse2"/>
      </div>
      <div className="flex flex-col mx-20 gap-y-2 items-center text-center w-full">
        <p className="text-[400%] font-extrabold leading-snug bg-gradient-to-r from-sky-700 to-pink-300 bg-clip-text text-transparent">{name}</p>
        <div className="flex items-center justify-center w-full px-5">
          <Image alt="line" width={3} height={12} src={Line} />
          <p className="text-[140%]">{summary}</p>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div className="md:block hidden">
        <EllipseSvg resumeLink={resumeLink}/>
        </div>
        <Image className="md:hidden block" src={mobileEllipse} alt="ellipse" />
      </div>
    </div>
  );
}