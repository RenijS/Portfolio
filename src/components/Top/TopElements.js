import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TopElements() {
  return (
    <div id="top-ele-container" className="flex flex-col">
      <span>I'm Renij Shrestha</span>
      <span>A Graduate Developer</span>
      <button className="py-1 border border-zinc-400 rounded-xl">
        View <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
}
