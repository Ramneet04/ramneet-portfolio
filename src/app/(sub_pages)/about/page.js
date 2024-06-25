import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import ProjectsList from "@/components/projects";
import { projectsData } from "../../data";
import HatModel from "@/components/models/HatModel";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image"  className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-60"/>

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel/>
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-6xl sm:text-6xl  lg:text-7xl text-accent">
            Ramneet Singh
          </h1>
          <p className="mt-6 text-foreground text-2xl font-semibold text-yellow-400">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
