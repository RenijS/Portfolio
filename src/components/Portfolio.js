import React, { useState } from "react";

export default function Portfolio() {
  const [activeState, setActiveState] = useState("web");

  const onOptClicked = (state) => {
    setActiveState(state);
  };

  const portfolioInfo = [
    {
      type: "",
      title: "",
      techArr: [],
      desc: "",
      img: "",
      github: "",
      live: "",
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
                    className="h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
