import Image from "next/image";
import bg from "../../public/background/bgnew3.png"
import Wizard from "@/components/models/Wizard";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25"/>
      <div className="w-full h-screen">
        <Navigation/>
        <RenderModel>
          <Wizard/>
        </RenderModel>
      </div>
    </main>
  );
}
