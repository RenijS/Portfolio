import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faLocationDot,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function EducationCard(props) {
  return (
    <div
      id="education-card"
      className="flex flex-col gap-3 mb-4 pb-4 border-b-2"
    >
      <div className="flex justify-between flex-wrap">
        <span className="text-black text-xl">{props.edu.degree}</span>
        <span className="flex items-center">
          <FontAwesomeIcon icon={faGraduationCap} />
          {props.edu.date}
        </span>
      </div>

      <div className="flex justify-between flex-wrap">
        <span className="flex items-center">
          <FontAwesomeIcon icon={faSchool} />
          {props.edu.school}
        </span>
        <span className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          {props.edu.location}
        </span>
      </div>
    </div>
  );
}
