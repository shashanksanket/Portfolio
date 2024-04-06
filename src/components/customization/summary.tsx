import React, { useState } from "react";
import { Button, Input, Label, useToast } from "@medusajs/ui";
import { useDispatch, useSelector } from "react-redux";
import { setSummarySectionData } from "@/store/portfolio-data/slice";

export default function SummaryModal({ }) {

  const summaryData = useSelector((state: any) => state.portfolio.summary)

  const [name, setName] = useState<string>(summaryData.name);
  const [summary, setSummary] = useState<string>(summaryData.summary);
  const [resumeLink, setResumeLink] = useState<string>(summaryData.resumeLink);
  const { toast } = useToast()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!name || !summary || !resumeLink) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "error"
      });
      return;
    }
    dispatch(setSummarySectionData({
      name: name,
      summary: summary,
      resumeLink: resumeLink,
    }))
    toast({
      title: "Succes",
      description: "Summary Section Data Saved",
      variant: "success"
    })
  };

  return (
    <div className="bg-opacity-40 bg-slate-700 backdrop-blur-lg w-full max-w-md flex flex-col justify-end gap-8 text-white p-8 rounded-2xl">
      <p className="text-center text-xl font-extrabold">Summary Section</p>
      <div className="flex flex-col gap-3">
        <Label>Full Name</Label>
        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Summary</Label>
        <Input value={summary} onChange={(e) => setSummary(e.target.value)} type="text" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Resume Link</Label>
        <Input value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} type="text" />
      </div>
      <div className="flex px-1 w-full justify-between">
        <Button onClick={handleSubmit} className="">Submit</Button>
      </div>
    </div>
  );
}
