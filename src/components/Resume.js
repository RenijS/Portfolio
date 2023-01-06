import React from "react";
import EducationCard from "./Resume/EducationCard";
import WorkCard from "./Resume/WorkCard";

export default function Resume() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      employment: "Internship",
      company: "LanCul Co.",
      location: "Japan",
      date: "September 2021 – October 2021",
    },
    {
      title: "IT Engineer",
      employment: "Contract",
      company: "ITCS Group",
      location: "Japan",
      date: "June 2021 - August 2021",
    },
  ];
  const education = [
    {
      degree: "Bachelor of Information Technology",
      school: "La Trobe University",
      date: "December 2022",
      location: "Australia",
    },
  ];
  return (
    <div id="resume-section">
      <h3>Resume</h3>
      <div id="img-contain">
        <img src="" alt="" />
      </div>
      <div id="resume-info">
        <div>
          <h3>Work Experience</h3>
          {experiences.length != 0 &&
            experiences.map((exp) => {
              return <WorkCard exp={exp} />;
            })}
        </div>
        <div>
          <h3>Education</h3>
          {education.length != 0 &&
            education.map((edu) => {
              return <EducationCard edu={edu} />;
            })}
        </div>
      </div>
    </div>
  );
}
