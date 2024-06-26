import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import RenderModel from "../RenderModel";
import Staff from "../models/Staff";

const AboutDetails = () => {
  return (
    <section className="py-2 w-full">
        <div className="flex justify-between w-full">
        <div className="w-[30%]">
            <RenderModel>
                <Staff/>
            </RenderModel>
        </div>
      <div className=" ">
        <div className="flex flex-col gap-8">
        <ItemLayout
          className={
            ""
          }
        >
          <h2 className=" text-2xl md:text-3xl text-left w-full capitalize font-semibold ">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>
        <div className="flex gap-8">
        <ItemLayout
          className={""}
        >
          <img
            className="w-full h-auto bg-transparent"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=ramneet04&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout>
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com/?user=ramneet04&theme=transparent&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        </div>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,js,mongodb,nextjs,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Ramneet04&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
      </div>
      </div>
    </section>
  );
};

export default AboutDetails;