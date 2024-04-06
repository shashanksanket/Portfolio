import { useState } from "react";
import { Button } from "@medusajs/ui";
import ProjectModal from "../modal/project-modal";
import { useSelector } from "react-redux";
import Table from "../shared-components/table/table";

export default function Projects({ }) {
  const projects = useSelector((state:any)=>state.portfolio.projects)
  const [showProjectModal, setShowProjectModal] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-full gap-y-10">
    <Table data={projects} />
      <Button onClick={()=>setShowProjectModal(true)}>Add Projects</Button>
      {showProjectModal && (
        <ProjectModal setShowProjectModal={setShowProjectModal}/>
      )}
    </div>
  );
}
