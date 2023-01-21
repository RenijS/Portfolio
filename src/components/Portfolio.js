import React, { useState } from "react";
import ProjectCard from "./Portfolio/ProjectCard";
import PhotoCard from "./Portfolio/PhotoCard";

export default function Portfolio() {
  const [activeState, setActiveState] = useState("web");

  const onOptClicked = (state) => {
    setActiveState(state);
  };

  const mobInfo = [
    {
      title: "Workout App",
      desc: "An app where user can set up their own time, check their BMI, check workout history.",
      techs: ["Kotlin", "Sqlite", "Android Studio"],
      img: "/img/mobile/workout.png",
      github: "https://github.com/RenijS/Android_WorkoutApp_Kotlin",
      live: "",
    },
    {
      title: "Drawing App",
      desc: "A drawing app like Etch A Sketch",
      techs: ["Kotlin", "Android Studio"],
      img: "/img/mobile/draw.png",
      github: "https://github.com/RenijS/Android_DrawingApplication_Kotlin",
      live: "",
    },
    {
      title: "Shoe Store App",
      desc: "An app where user can add new item and look through list.",
      techs: ["Kotlin", "Firebase", "Android Studio"],
      img: "/img/mobile/instruction.png",
      github: "https://github.com/RenijS/Android_ShoeStore_Kotlin",
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

  const photographyInfo = ["p1", "p2", "p3", "p4", "p5", "p6"];

  return (
    <div id="portfolio-sect" className="flex flex-col items-center mb-9">
      <h2 className="text-5xl text-black mb-6">My Portfolio</h2>
      <ul id="portfolio-opts" className="flex gap-6 text-slate-400 mb-6">
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
          <div className="flex flex-wrap gap-6">
            <PhotoCard photographyInfo={photographyInfo} />
          </div>
        )}
        {activeState === "web" && (
          <div className="grid grid-cols-2 gap-10">
            <ProjectCard projInfo={webInfo} activeState={activeState} />
          </div>
        )}
        {activeState === "android" && (
          <div className="grid grid-cols-3 gap-10">
            <ProjectCard projInfo={mobInfo} activeState={activeState} />
          </div>
        )}
      </div>
    </div>
  );
}
