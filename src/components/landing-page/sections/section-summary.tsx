import { name, summary } from "@/lib/const";
import ellipse from "@/assets/landing-page/ellipse.svg"
import Image from "next/image";
import Line from "@/assets/landing-page/line.svg"
import ellipse1 from "@/assets/landing-page/ellipse-1.svg"
import ellipse2 from "@/assets/landing-page/ellipse-2.svg"
import mobileEllipse from "@/assets/landing-page/mobile/mobile-ellipse.svg"
import mobileEllipse1 from "@/assets/landing-page/mobile/mobile-ellipse-1.svg"

export default function SectionSummary() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 gap-y-5  font-mono text-sm text-white rounded-b-2xl shadow-2xl shadow-sky-950">
      <div className="-z-20">
        <Image className="absolute top-0 left-0 hidden  md:block bg-cover" height={1000} src={ellipse1} alt="ellipse1" />
        <Image className="absolute top-0 right-0 bg-cover h-[40rem]" src={ellipse2} alt="ellipse2"/>
      </div>
      <div className="flex flex-col mx-20 gap-y-5 items-center text-center w-full">
        <p className="text-[400%] leading-snug">{name}</p>
        <div className="flex items-center justify-center w-full px-8">
          <Image alt="line" width={3} height={12} src={Line} />
          <p className="text-[160%]">{summary}</p>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <Image className="hidden md:block" src={ellipse} alt="ellipse" />
        <Image className="md:hidden block" src={mobileEllipse} alt="ellipse" />
      </div>
    </div>
  );
}