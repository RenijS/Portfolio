import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SlideNav(props) {
  return (
    <>
      <div
        id="slideNavBack"
        className="h-screen w-full fixed inset-y-0 z-10 bg-black/20"
        onClick={props.onNavChanged}
      ></div>
      <div
        id="slideNav"
        className="h-screen w-72 fixed right-0 inset-y-0 z-10 bg-white text-xl font-medium"
      >
        <div className="text-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="mr-4 mt-4 h-7"
            onClick={props.onNavChanged}
          />
        </div>
        <ul
          id="header-list"
          className="flex flex-col justify-center items-center mt-2 gap-4"
        >
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="#top-card">Home</a>
          </li>
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="#resume-section">Resume</a>
          </li>
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="#portfolio-sect">Portfolio</a>
          </li>
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="#contact-sect">Contact</a>
          </li>
        </ul>
        <ul className="flex justify-evenly px-5 mt-8 items-center gap-2">
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="file/" download={"renijShrestha.pdf"}>
              <FontAwesomeIcon icon={faCircleDown} className="mr-2 h-5" />
              CV
            </a>
          </li>
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="https://www.linkedin.com/in/renij-shrestha-a2ab53210/">
              <FontAwesomeIcon icon={faLinkedin} className="h-5" />
            </a>
          </li>
          <li className=" w-max" onClick={props.onNavChanged}>
            <a href="https://github.com/RenijS">
              <FontAwesomeIcon icon={faGithub} className="h-6" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
