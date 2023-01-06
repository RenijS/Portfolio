import React from "react";

export default function WorkCard(props) {
  return (
    <div id="work-card">
      <div>
        <span>{props.exp.title}</span>
        <span>{props.exp.employment}</span>
      </div>
      <div>
        <div>
          <span>{props.exp.company}</span> <span>{props.exp.location}</span>
        </div>
        <span>{props.exp.date}</span>
      </div>
    </div>
  );
}
