import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { ImGit } from "react-icons/im";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" class="background flex flex-col text">
      <div class="container mx-auto font-semibold">
        <div class="flex flex-col">
          <h1 class="sm:text-4xl text-2xl font-bold title-font mb-4"><span role="img" aria-label="fire-emoji">🔥</span> Skills</h1>
        </div>
        <div class="flex flex-wrap justify-evenly pb-5">
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <AiFillHtml5 size={70} />
            <p class="py-1">HTML5</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <DiCss3 size={70} />
            <p class="py-1">CSS3</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <IoLogoJavascript size={70} />
            <p class="py-1">Javascript</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <FaReact size={70} />
            <p class="py-1">React</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <BsFillBootstrapFill size={70} />
            <p class="py-1">Bootstrap</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <SiTailwindcss size={70} />
            <p class="py-1">Tailwind</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <FaPhp size={70} />
            <p class="py-1">PHP</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <GrMysql size={70} />
            <p class="py-1">MySQL</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <ImGit size={70} />
            <p class="py-1">Git</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <FaDocker size={70} />
            <p class="py-1">Docker</p>
          </div>
          <div class="flex flex-col items-center mx-2 md:mx-5 my-2 expand">
            <SiPostman size={70} />
            <p class="py-1">Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
}
