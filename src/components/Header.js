import React from "react";

export default function Header() {
  window.onscroll = () => {
    if (window.pageYOffset > document.querySelector("#header-card").offsetTop) {
      document.querySelector("#header-card").classList.remove("absolute");
      document
        .querySelector("#header-card")
        .classList.add("bg-white", "fixed", "text-black");
    } else {
      document.querySelector("#header-card").classList.add("absolute");
      document
        .querySelector("#header-card")
        .classList.remove("bg-white", "fixed", "text-black");
    }
  };
  return (
    <div
      id="header-card"
      className="flex justify-between items-center text-white w-full absolute py-2"
    >
      <div
        id="logo"
        className="ml-6 py-0.5 px-1 border border-zinc-400 font-bold"
      >
        RS
      </div>
      <ul id="header-list" className="w-128 flex justify-evenly">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
