import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectsList from "@/components/projects";
import { projectsData } from "../data";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-slate-950">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-fit object-center opacity-60"/>
      <ProjectsList projects={projectsData}/>
    </main>
  );
}
