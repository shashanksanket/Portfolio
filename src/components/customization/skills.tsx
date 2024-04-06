import { IUser } from "@/lib/util/types/user";
import { useEffect, useState } from "react";
import Image from "next/image";
import SkillModal from "../modal/skill-modal";
import { Button } from "@medusajs/ui";
import { useDispatch, useSelector } from "react-redux";
import { setSkillSectionData } from "@/store/portfolio-data/slice";
import Table from "../shared-components/table/table";


export default function Skills({ }) {
  const skillsData = useSelector((state: any) => state.portfolio.skills)
  const [showSkillModal, setShowSkillModal] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-full gap-y-10">
      <Table data={skillsData} />
      <Button onClick={() => setShowSkillModal(true)}>Add Skill</Button>
      {showSkillModal && (
        <SkillModal setShowSkillModal={setShowSkillModal} />
      )}
    </div>
  );
}
