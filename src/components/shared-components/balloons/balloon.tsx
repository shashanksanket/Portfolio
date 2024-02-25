import React, { useEffect, useState } from "react";
import { ISkill } from "@/lib/const";

interface BalloonProps {
  item: ISkill;
  handleClickSkill: (item:ISkill)=>void
}

export default function Balloon({ item, handleClickSkill }: BalloonProps) {

  return (
    <img
      onClick={()=>{handleClickSkill(item)}}
      className="md:my-5 md:mx-12 cursor-pointer"
      src={item.image}
      alt={item.name}
    />
  );
}
