import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, Label, useToast } from "@medusajs/ui";
import { setProjectSectionData } from "@/store/portfolio-data/slice";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  setShowProjectModal: (showModal: boolean) => void;
}

export default function ProjectModal({ setShowProjectModal }: ModalProps) {
  const [title, setTitle] = useState<string>("");
  const [liveLink, setLiveLink] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [sourceCode, setSourceCode] = useState<string>("");
  const [image, setImage] = useState<Blob>(new Blob());

  const projects = useSelector((state: any) => state.portfolio.projects)

  const dispatch = useDispatch()
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result as ArrayBuffer]);
        setImage(blob);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleInput = (id: string) => {
    const fileInput = document.getElementById(id);
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSubmit = () => {
    if (!title || !date || !liveLink || !sourceCode || !image.size) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "error"
      });
      return;
    }
    dispatch(setProjectSectionData([...projects, {
      title: title,
      date: date,
      sourceCode: sourceCode,
      liveLink: liveLink,
      image: image
    }]))
    setShowProjectModal(false)
    toast({
      title: "Succes",
      description: "About Section Data Saved",
      variant: "success"
    })
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center p-20 transition-all duration-300 backdrop-blur-3xl">
      <div className="bg-opacity-90 bg-slate-700 backdrop-blur-2xl w-full max-w-md flex flex-col justify-end gap-8 text-white p-8 rounded-2xl">
        <p className="text-center text-xl font-extrabold">Add a new Project</p>
        <div className="flex flex-col gap-3">
          <Label>Project Title</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Project Date</Label>
          <Input value={date} onChange={(e) => setDate(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Live Link</Label>
          <Input value={liveLink} onChange={(e) => setLiveLink(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Source Code</Label>
          <Input value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Upload Preview Image</Label>
          <div onClick={() => handleInput("fileInput")} className="flex space-x-3 items-center cursor-pointer border py-2 rounded-lg border-dashed justify-center border-white">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="fileInput"
              className="hidden"
            />
            {!image.size && (
              <Image
                src={"/assets/misc/before-upload.svg"}
                alt="upload"
                className="mx-2"
                width={40}
                height={41}
              />
            )}
            {image.size && (
              <Image
                src={"/assets/misc/after-upload.svg"}
                alt="uploaded"
                width={32}
                height={33}
              />
            )}
            <span>{image ? "File selected" : "No file selected"}</span>
          </div>
        </div>

        <div className="flex px-1 w-full justify-between">
          <Button onClick={handleSubmit} className="">Submit</Button>
          <Button onClick={() => setShowProjectModal(false)} className="">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
