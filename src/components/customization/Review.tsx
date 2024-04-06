import { useEffect, useState } from "react";
import { Button } from "@medusajs/ui";
import { useSelector } from "react-redux";
import Table from "../shared-components/table/table";
import Card from "../shared-components/Card/card";
import { Client } from "@/lib/client";
import { useToast } from "@medusajs/ui";
import { useRouter } from "next/navigation"

export default function Review({ }) {

  const aboutData = useSelector((state: any) => state.portfolio.aboutSection)
  const summaryData = useSelector((state: any) => state.portfolio.summary)
  const skillData = useSelector((state: any) => state.portfolio.skills)
  const projectData = useSelector((state: any) => state.portfolio.projects)

  const client = new Client()
  const { toast } = useToast()
  const router = useRouter()

  const handlePortfolioCreate = async () => {
    if (!aboutData || !summaryData || !skillData.length || !projectData.length) {
      toast({
        title: "Error",
        description: "Please Fill in all section details",
        variant: "error"
      })
      return
    }
    const body = {
      aboutSection: aboutData,
      summarySection: summaryData,
      skills: skillData,
      projects: projectData
    }
    const res = await client.userCreate(body)
    toast({
      title: "Success",
      description: "Portfolio Created Redirecting...",
      variant: "success"
    })

    if (res) {
      router.push(`/portfolio/${res.id}`)
    }
  }

  return (
    <div className="flex flex-col w-full gap-y-10">
      <div className="text-center flex flex-col gap-y-4 justify-center items-center">
        <p className="py-2 px-4 rounded-full bg-slate-300 bg-opacity-35 w-fit">
          Hero Section
        </p>
        <Card data={summaryData} />
      </div>
      <div className="text-center flex flex-col gap-y-4 justify-center items-center">
        <p className="py-2 px-4 rounded-full bg-slate-300 bg-opacity-35 w-fit">
          About Section
        </p>
        <Card data={aboutData} />
      </div>
      <div className="text-center flex flex-col gap-y-4 justify-center items-center">
        <p className="py-2 px-4 rounded-full bg-slate-300 bg-opacity-35 w-fit">
          Skills Section
        </p>
        <Table data={skillData} />
      </div>
      <div className="text-center flex flex-col gap-y-4 justify-center items-center">
        <p className="py-2 px-4 rounded-full bg-slate-300 bg-opacity-35 w-fit">
          Projects Section
        </p>
        <Table data={projectData} />
      </div>
      <div className="w-full flex justify-center py-10">
        <Button onClick={() => handlePortfolioCreate()} className="">Create Portfolio</Button>
      </div>
    </div>
  );
}
