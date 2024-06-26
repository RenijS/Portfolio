import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ImgContainer from "../UI/ImgContainer";

export default function ProjectCard(props) {
  return (
    <>
      {props.projInfo.map((info, index) => {
        return (
          <div
            className="text-center bg-blue-200 rounded-3xl p-2 group/imgContain overflow-hidden"
            key={index}
          >
            <div className={"relative p-5 "}>
              {info.live !== "" && (
                <a href={info.live}>
                  <div
                    className={
                      props.activeState === "web"
                        ? "h-80 w-full rounded-2xl overflow-hidden"
                        : "2xl h-114 w-full rounded-2xl overflow-hidden"
                    }
                  >
                    <ImgContainer
                      imgSrc={info.img}
                      desc="project portfolio"
                      imgClass=" object-cover transition-transform duration-500 group-hover/imgContain:scale-105"
                    />
                  </div>
                </a>
              )}
              {info.live === "" && (
                <div
                  className={
                    props.activeState === "web"
                      ? "rounded-2xl h-80 w-full overflow-hidden"
                      : "rounded-2xl h-114 w-full overflow-hidden"
                  }
                >
                  <ImgContainer
                    imgSrc={info.img}
                    desc={"project portfolio"}
                    imgClass={
                      "object-cover transition-transform duration-500 group-hover/imgContain:scale-105"
                    }
                  />
                </div>
              )}
            </div>
            <div className="px-5 flex flex-col gap-1">
              <div className="flex justify-between">
                <p className="text-xl font-medium">{info.title}</p>
                <div>
                  {info.live !== "" && (
                    <a
                      href={info.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-4"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="h-5 hover:text-sky-700"
                      />
                    </a>
                  )}
                  <a
                    href={info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="h-5 hover:text-sky-700"
                    />
                  </a>
                </div>
              </div>
              <span className="text-slate-600">{info.desc}</span>
              <div className="hidden justify-end items-center text-slate-500 text-sm xl:flex">
                <ul className="opacity-0 flex gap-2 transition-opacity duration-500 group-hover/imgContain:opacity-100 ">
                  {info.techs.map((tech, index) => (
                    <li className="inline" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <span className="mx-2">
                  <FontAwesomeIcon icon={faArrowLeft} /> Tech
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
