import React, { useState } from "react";
import { Button, Input, Label } from "@medusajs/ui";
import { useDispatch, useSelector } from "react-redux";
import { setAboutSectionData } from "@/store/portfolio-data/slice";
import { useToast } from "@medusajs/ui";

export default function About({ }) {

  const aboutData = useSelector((state: any) => state.portfolio.aboutSection)
  const [githubLink, setGithubLink] = useState<string>(aboutData.githubLink);
  const [instagramLink, setInstagramLink] = useState<string>(aboutData.instagramLink);
  const [linkedinLink, setLinkedinLink] = useState<string>(aboutData.linkedinLink);
  const [detailedSummary, setDetailedSummary] = useState<string>(aboutData.detailedSummary);
  const [email, setEmail] = useState<string>(aboutData.email);
  const { toast } = useToast();

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!githubLink || !instagramLink || !linkedinLink || !detailedSummary || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "error"
      });
      return;
    }
    dispatch(setAboutSectionData({
      githubLink: githubLink,
      email: email,
      instagramLink: instagramLink,
      linkedinLink: linkedinLink,
      detailedSummary: detailedSummary,
    }))
    toast({
      title: "Succes",
      description: "About Section Data Saved",
      variant: "success"
    })
  };

  return (
    <div className="bg-opacity-40 bg-slate-700 backdrop-blur-lg w-full max-w-md flex flex-col justify-end gap-8 text-white p-8 rounded-2xl">
      <p className="text-center text-xl font-extrabold">About Section</p>
      <div className="flex flex-col gap-3">
        <Label>Detailed Summary</Label>
        <Input value={detailedSummary} onChange={(e) => setDetailedSummary(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Linkedin Link</Label>
        <Input value={linkedinLink} onChange={(e) => setLinkedinLink(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Github Link</Label>
        <Input value={githubLink} onChange={(e) => setGithubLink(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Instagram Link</Label>
        <Input value={instagramLink} onChange={(e) => setInstagramLink(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Email</Label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
      <div className="flex px-1 w-full justify-between">
        <Button onClick={handleSubmit} className="">Submit</Button>
      </div>
    </div>
  );
}
