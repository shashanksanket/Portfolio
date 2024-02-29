"use client"
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/project";
import projectPreview1 from "@/assets/landing-page/ProjectPreview-1.png"
import Link from "next/link";
import github from "@/assets/social-icons/github-white.svg"
import link from "@/assets/social-icons/links.svg"

export default function Carousel() {
  const INTERVAL_LENGTH = 5000;
  const AUTOPLAY = true;

  const items = projects.map((item, index) => (
    <div key={index} className="flex flex-col justify-between items-center gap-y-10">
      <Image src={projectPreview1} className="" alt="projectPreview1" />
      <span className="flex flex-col text-center text-white">
        <p className="font-bold text-4xl">{item.title}</p>
        <p className="font-normal text-nowrap text-2xl">Date: {item.date}</p>
      </span>
      <span className="flex gap-x-10 items-center">
        <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
          <Image className="hover:-translate-y-2 transition-all duration-200" src={github} alt="github" width={30} height={30} />
        </a>
        <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
          <Image className="hover:-translate-y-2 transition-all duration-200" src={link} alt="link" width={30} height={10} />
        </a>
      </span>
    </div>
  ));

  const [currentItem, setCurrentItem] = useState(0);

  const prev = () =>
    setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
  const next = () =>
    setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!AUTOPLAY) return;
    const interval = setInterval(next, INTERVAL_LENGTH);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-y-10">
      {items[currentItem]}
      <div className="text-white flex justify-between">
        <button className="rounded-full bg-fuchsia-500 px-2 py-1 " onClick={prev}>{'<'}-</button>
        <button className="rounded-full bg-fuchsia-500 px-2 py-1 " onClick={next}>-{'>'}</button>
      </div>
    </div>
  );
}
