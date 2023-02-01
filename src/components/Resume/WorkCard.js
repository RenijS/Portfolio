import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function WorkCard(props) {
  return (
    <div
      id="work-card"
      className="flex flex-col gap-3 mb-4 pb-4 border-b-2"
      key={props.index}
    >
      <div className="flex justify-between flex-wrap">
        <span className="text-xl text-black">{props.exp.title}</span>
        <span className="text-sky-700 xsmall:hidden">
          {props.exp.employment}
        </span>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex gap-10 flex-wrap">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faBuilding} /> {props.exp.company}
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            {props.exp.location}
          </span>
        </div>
        <span>
          <FontAwesomeIcon icon={faCalendarDays} /> {props.exp.date}
        </span>
      </div>
    </div>
  );
}
