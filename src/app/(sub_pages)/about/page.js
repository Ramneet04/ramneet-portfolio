import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import HatModel from "@/components/models/HatModel";
import RenderModel from "@/components/RenderModel";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image"  className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"/>

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel/>
        </RenderModel>
      </div>
    </>
  );
}
