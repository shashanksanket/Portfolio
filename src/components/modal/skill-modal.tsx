import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, Label } from "@medusajs/ui";
import { useDispatch, useSelector } from "react-redux";
import { setSkillSectionData } from "@/store/portfolio-data/slice";
import { useToast } from "@medusajs/ui";
import { IUploadImageToS3 } from "@/lib/util/types/upload";

import { UploadImage } from "@/lib/util/uploadImage";


interface ModalProps {
  setShowSkillModal: (showModal: boolean) => void;
}

export default function SkillModal({ setShowSkillModal }: ModalProps) {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const summaryData = useSelector((state: any) => state.portfolio.summary)
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const skillsData = useSelector((state: any) => state.portfolio.skills)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
      setImage(file)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", summaryData.name);
      formData.append("folderName", "nextjs-server-action");
      const data = await UploadImage(formData) as IUploadImageToS3; 
      if(data.imageUrl){
        setImageUrl(data.imageUrl)
      }
    }
  };

  const handleInput = (id: string) => {
    const fileInput = document.getElementById(id);
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleSubmit = () => {
    if (!name || !type || !projectLink || !imageUrl) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "error"
      });
      return;
    }
    dispatch(setSkillSectionData([...skillsData, {
      name: name,
      type: type,
      projectLink: projectLink,
      image: imageUrl
    }]));
    setShowSkillModal(false)
    toast({
      title: "Success",
      description: "Skill Section Data Saved",
      variant: "success"
    })
  };

  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 flex justify-center items-center p-20 transition-all duration-300 backdrop-blur-xl">
      <div className="bg-opacity-40 bg-slate-700 backdrop-blur-lg w-full max-w-md flex flex-col justify-end gap-8 text-white p-8 rounded-2xl">
        <p className="text-center text-xl font-extrabold">Add a new Project</p>
        <div className="flex flex-col gap-3">
          <Label>Name</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Type</Label>
          <Input value={type} onChange={(e) => setType(e.target.value)} type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Project Link</Label>
          <Input value={projectLink} onChange={(e) => setProjectLink(e.target.value)} type="text" />
        </div>
        <div onClick={() => handleInput("fileInput")} className="flex flex-col gap-3">
          <Label>Upload Preview Image</Label>
          <div className="flex space-x-3 cursor-pointer border py-2 rounded-lg border-dashed justify-center border-white">
          <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              id="fileInput"
              className="hidden"
            />
            {imageUrl.length==0 && (
              <Image
                src={"/assets/misc/before-upload.svg"}
                alt="upload"
                className="mx-2"
                width={40}
                height={41}
              />
            )}
            {imageUrl.length>0 && (
              <Image
                src={"/assets/misc/after-upload.svg"}
                alt="uploaded"
                width={32}
                height={33}
              />
            )}
            <span>{imageUrl.length>0 ? "File selected" : "No file selected"}</span>
          </div>
        </div>

        <div className="flex px-1 w-full justify-between">
          <Button onClick={handleSubmit} className="">Submit</Button>
          <Button onClick={() => setShowSkillModal(false)} className="">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
