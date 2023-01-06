import React from "react";

export default function EducationCard(props) {
  return (
    <div id="education-card">
      <div>
        <span>{props.edu.degree}</span> <span>{props.edu.date}</span>
      </div>

      <div>
        <span>{props.edu.school}</span> <span>{props.edu.location}</span>
      </div>
    </div>
  );
}
