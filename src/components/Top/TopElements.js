import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TopElements() {
  return (
    <div id="top-ele-container" className="flex flex-row items-center gap-9">
      <div className="flex flex-col items-center text-lg">
        <div className="w-48 h-44 rounded-t-full overflow-hidden object-cover">
          <img src="img/myImg.jpg" alt="" />
        </div>
        <span>Hello</span>
        <span>I'm Renij Shrestha</span>
        <a
          href="#portfolio-sect"
          className="w-full py-1 border border-zinc-400 rounded-xl text-center"
        >
          View <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
      <span className="w-96 tracking-wide italic text-gray-300">
        Recent IT graduate with a keen interest in software engineering.
        Developed and demonstrated a reliable work ethic and adaptability
        through work and university experience.
      </span>
    </div>
  );
}
