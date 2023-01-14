import React, { useState } from "react";
import ProjectCard from "./Portfolio/ProjectCard";

export default function Portfolio() {
  const [activeState, setActiveState] = useState("web");

  const onOptClicked = (state) => {
    setActiveState(state);
  };

  const mobInfo = [
    {
      title: "",
      desc: "",
      techs: [],
      img: "",
      github: "",
      live: "",
    },
  ];

  const webInfo = [
    {
      title: "RecipeCurious",
      desc: "A recipe website allows users to check various recipes.",
      techs: [
        "React",
        "JavaScript",
        "HTML & CSS",
        "Tasty API",
        "Font Awesome",
        "Netlify",
      ],
      img: "img/web/rc.png",
      github: "https://github.com/RenijS/RecipeCurious",
      live: "https://clever-mermaid-748d87.netlify.app/",
    },
    {
      title: "Travel Journal",
      desc: "A simple journal website using form.",
      techs: ["React", "JavaScript", "HTML & CSS", "Font Awesome", "Netlify"],
      img: "img/web/tj.png",
      github: "https://github.com/RenijS/Travel-Journal",
      live: "https://stellar-smakager-cb5f0d.netlify.app/",
    },
    {
      title: "Ghibli App",
      desc: "A simple responsive website using bootstrap.",
      techs: ["Bootstrap", "JavaScript", "HTML & CSS", "Font Awesome"],
      img: "img/web/gb.png",
      github: "https://github.com/RenijS/Ghibli",
      live: "https://renijs.github.io/Ghibli/",
    },
    {
      title: "Etch A Sketch",
      desc: "",
      techs: ["JavaScript", "HTML & CSS"],
      img: "img/web/et.png",
      github: "https://github.com/RenijS/Etch_A_Sketch",
      live: "https://renijs.github.io/Etch_A_Sketch/",
    },
    {
      title: "Rock Paper Scissor Game",
      desc: "",
      techs: ["JavaScript", "HTML & CSS"],
      img: "img/web/rpc.png",
      github: "https://github.com/RenijS/Rock_Paper_Scissors",
      live: "https://renijs.github.io/Rock_Paper_Scissors/",
    },
  ];

  const photographyInfo = ["p1", "p2", "p3", "p4", "p5"];

  return (
    <div id="portfolio-sect" className="flex flex-col items-center">
      <h2 className="text-5xl text-black mb-9">My Portfolio</h2>
      <ul id="portfolio-opts" className="flex gap-6 text-slate-400">
        <li
          onClick={() => onOptClicked("web")}
          className={
            activeState === "web"
              ? "text-sky-800 hover:text-sky-800 hover:cursor-pointer"
              : "hover:text-sky-800 hover:cursor-pointer"
          }
        >
          Web Dev
        </li>
        <li
          onClick={() => onOptClicked("android")}
          className={
            activeState === "android"
              ? "text-sky-800 hover:text-sky-800 hover:cursor-pointer"
              : "hover:text-sky-800 hover:cursor-pointer"
          }
        >
          Android Dev
        </li>
        <li
          onClick={() => onOptClicked("photography")}
          className={
            activeState === "photography"
              ? "text-sky-800 hover:text-sky-800 hover:cursor-pointer"
              : "hover:text-sky-800 hover:cursor-pointer"
          }
        >
          Photography
        </li>
      </ul>
      <div className="w-full">
        {activeState === "photography" && (
          <div className="flex flex-nowrap gap-6">
            {photographyInfo.map((info) => {
              return (
                <div className="w-64">
                  <img
                    src={`img/photography/${info}.jpg`}
                    alt=""
                    className="h-full rounded-2xl object-cover"
                  />
                </div>
              );
            })}
          </div>
        )}
        {activeState === "web" && <ProjectCard projInfo={webInfo} />}
      </div>
    </div>
  );
}
