import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  window.onscroll = () => {
    if (window.pageYOffset > document.querySelector("#header-card").offsetTop) {
      document
        .querySelector("#header-card")
        .classList.remove("absolute", "text-white");
      document
        .querySelector("#header-card")
        .classList.add(
          "bg-white",
          "fixed",
          "text-black",
          "border-b",
          "border-gray-400"
        );
    } else {
      document
        .querySelector("#header-card")
        .classList.add("absolute", "text-white");
      document
        .querySelector("#header-card")
        .classList.remove(
          "bg-white",
          "fixed",
          "text-black",
          "border-b",
          "border-gray-200"
        );
    }
  };
  return (
    <div
      id="header-card"
      className="flex justify-between items-center text-white w-full absolute py-2 z-10"
    >
      <a
        id="logo"
        className="ml-6 py-0.5 px-1 border border-zinc-400 font-bold"
        href="/"
      >
        RS
      </a>
      <ul id="header-list" className="w-128 hidden sm:flex justify-evenly">
        <li className="hover:border-b border-blue-200">
          <a href="#top-card">Home</a>
        </li>
        <li className="hover:border-b border-blue-200">
          <a href="#resume-section">Resume</a>
        </li>
        <li className="hover:border-b border-blue-200">
          <a href="#portfolio-sect">Portfolio</a>
        </li>
        <li className="hover:border-b border-blue-200">
          <a href="#contact-sect">Contact</a>
        </li>
        <li className="hover:border-b border-blue-200">
          <a href="file/" download={"renijShrestha.pdf"}>
            <FontAwesomeIcon icon={faCircleDown} className="mr-2" />
            CV
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="mr-4 h-5 sm:hidden"
        onClick={props.onNavChanged}
      />
    </div>
  );
}
