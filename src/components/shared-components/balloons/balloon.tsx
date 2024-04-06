import React, { useEffect, useState } from "react";
import { ISkill } from "@/lib/const";
import RevealComp from "@/components/animation/reveal";
import { IUser } from "@/lib/util/types/user";
import { blob } from "stream/consumers";

interface BalloonProps {
  item: IUser["skills"][0];
  handleClickSkill: (item: IUser["skills"][0]) => void,
  image: string
}

export default function Balloon({ item, handleClickSkill, image }: BalloonProps) {

    return (
      <img
        onMouseEnter={() => { handleClickSkill(item) }}
        className="md:my-5 md:mx-12 cursor-pointer hover:-translate-y-4 transition-all duration-1000"
        src={image}
        alt={item.name}
      />
    );
  }

