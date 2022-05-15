import React from "react";
import { projects } from "../../../data";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import "../../../styles.css";

export default function Portfolio() {
  return (
    <section id="projects" className="body-font background py-4 flex flex-col">
      <div className="container mx-auto">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-2xl font-bold title-font mt-5 mb-4">
          <span role="img" aria-label="laptop-emoji">🧑‍💻</span> Portfolio
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-gray-800 background">
                  <img alt="gallery" className="inset-0" src={project.image} />
                  <h1 className="title-font text-2xl font-medium py-1 mt-2">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium project-subtitle py-2">
                    {project.subtitle}
                  </h2>
                  <p className="text-xl">{project.description}</p>
                  <div class="flex justify-end m-4 pt-5">
                    <div class="px-2 flex link">
                      <a href={project.gitlink} class="flex">
                        <p class="px-2 text-xl">GitHub</p>
                        <FaGithub size={28} />
                      </a>
                    </div>
                    <div class="px-2 flex link">
                      {project.livelink == null ? (
                        ""
                      ) : (
                        <a href={project.livelink} class="flex">
                          <p class="px-2 text-xl">Live App</p>
                          <BiLinkExternal size={28} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
