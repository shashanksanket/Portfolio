"use client"
import { Client } from "@/lib/client"
import { IUser } from "@/lib/util/types/user"
import dots from "@/assets/landing-page/effects-5.svg"
import javascript from "@/assets/skills/javascript.svg"
import nodeJs from "@/assets/skills/nodeJs.svg"
import tailwind from "@/assets/skills/tailwind.svg"
import reactjs from "@/assets/skills/reactjs.svg"
import vuejs from "@/assets/skills/vuejs.svg"
import express from "@/assets/skills/express.svg"
import html from "@/assets/skills/html.svg"
import feathers from "@/assets/skills/feathers.svg"
import django from "@/assets/skills/django.svg"
import postgresql from "@/assets/skills/postgresql.svg"
import css from "@/assets/skills/css.svg"
import mongodb from "@/assets/skills/mongodb.svg"
import git from "@/assets/skills/git.svg"
import python from "@/assets/skills/python.svg"
import web3js from "@/assets/skills/web3js.svg"
import nextJs from "@/assets/skills/nextjs.svg"
import Link from "next/link"





export default function Footer() {
  const client = new Client()

  const convertToBlob = (svg:any) => {
    var svgBlob = new Blob([svg], { type: 'image/svg+xml' });
    return svgBlob
  }
  const handleCustomizePortfolio = async () => {
    const body: IUser = {
      summarySection: {
        "name": "Shashank Sanket",
        "summary": "Meet Shashank , a talented web developer with a passion for crafting elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, and more, Their keen eye for detail,coupled with their commitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but also optimizedfor peak performance.",
       
        "resumeLink": "https://drive.google.com/file/d/1gnwxK27k5E-nu3MFvH3_MELllFDkR6Bi/view?usp=sharing",
      },
      aboutSection: {
        "detailedSummary": "",
        "githubLink": "https://github.com/shashanksanket",
        "email": "shashank.sanket014@gmail.com",
        "instagramLink": "https://www.instagram.com/shashank.sanket/",
        "linkedinLink": "https://www.linkedin.com/in/shashank-sanket-89b30b209/",
      },
      skills: [
        { "name": "HTML", "image":convertToBlob(html) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "Javascript", "image": convertToBlob(javascript),  "type": "Frontend", "projectLink": "https://github.com/shashanksanket/comexmachine" },
        { "name": "Tailwind", "image": convertToBlob(tailwind) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/portfolio" },
        { "name": "NodeJs", "image": convertToBlob(nodeJs) , "type": "Backend", "projectLink": "https://github.com/shashanksanket/route-planning-tool" },
        { "name": "ReactJs", "image": convertToBlob(reactjs) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/resume-web-pdf" },
        { "name": "NextJs", "image": convertToBlob(nextJs) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/portfolio" },
        { "name": "VueJs", "image": convertToBlob(vuejs) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "ExpressJs", "image": convertToBlob(express) , "type": "Backend", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "Feathers", "image": convertToBlob(feathers) , "type": "Backend", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "Django", "image": convertToBlob(django) , "type": "Backend", "projectLink": "https://github.com/shashanksanket/UserPortal" },
        { "name": "PostgreSQL", "image": convertToBlob(postgresql) , "type": "Database", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "CSS", "image": convertToBlob(css) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/ComexDataEntry" },
        { "name": "MongoDb", "image": convertToBlob(mongodb) , "type": "Database", "projectLink": "https://github.com/shashanksanket/route-planning-tool" },
        { "name": "git", "image": convertToBlob(git) , "type": "utility", "projectLink": "https://github.com/shashanksanket/portfolio" },
        { "name": "Python", "image": convertToBlob(python) , "type": "Backend", "projectLink": "https://github.com/shashanksanket/UserPortal" },
        { "name": "Web3.Js", "image": convertToBlob(web3js) , "type": "Frontend", "projectLink": "https://github.com/shashanksanket/Verdoc" },
      ],
      projects: [
        {
          title: "Resume Maker",
          date: "12/12/2023",
          sourceCode: "https://github.com/shashanksanket/resume-web-pdf",
          liveLink: "https://resume-web-pdf.vercel.app/",
          image: new Blob()
        },
        {
          title: "Route Planning Tool",
          date: "17/02/2024",
          sourceCode: "https://github.com/shashanksanket/route-planning-tool",
          liveLink: "https://route-planning-tool.vercel.app/",
          image: new Blob()

        },
        {
          title: "CMS",
          date: "25/10/2023",
          sourceCode: "https://github.com/shashanksanket/ComexDataEntry",
          liveLink: "http://cms.comexcomputer.org/",
          image: new Blob()

        },
        {
          title: "UserPortal",
          date: "04/07/2022",
          sourceCode: "https://github.com/shashanksanket/UserPortal",
          liveLink: "https://github.com/shashanksanket/UserPortal/",
          image: new Blob()

        },
        {
          title: "WishIt App",
          date: "04/12/2023",
          sourceCode: "https://github.com/shashanksanket/wishit",
          liveLink: "https://github.com/shashanksanket/wishit",
          image: new Blob()

        },
        {
          title: "Weather App",
          date: "29/07/2022",
          sourceCode: "https://github.com/shashanksanket/Weather-App",
          liveLink: "https://github.com/shashanksanket/Weather-App",
          image: new Blob()

        },
        {
          title: "Project Apsis",
          date: "11/04/2022",
          sourceCode: "https://shashanksanket.github.io/Project_Apsis/main.html",
          liveLink: "https://resume-web-pdf.vercel.app/",
          image: new Blob()

        },
      ]
    }
    const res = await client.userCreate(body)
    console.log(res)

  }
  return (
    <div className="border-t backdrop-blur-lg z-50 items-center flex justify-around pt-4 text-white py-6">
      <p className=" text-center text-xs md:text-sm ">© All Right Reserved by Shashank Sanket</p>
      <Link href={"/custom/add"}>
      <button className="bg-gradient-to-r from-sky-700 to-pink-300 bg-opacity-20 ease-in-out delay-100 hover:-translate-x-1 hover:scale-110 w-fit text-nowrap text-white px-1 md:font-bold rounded-lg transition-all duration-700 hover:bg-clip-text ring-2 hover:ring-blue-300 hover:text-transparent">
        Customize
      </button>
      </Link>
    </div>
  )
}

