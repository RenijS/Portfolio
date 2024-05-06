import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import EducationCard from "./Resume/EducationCard";
import WorkCard from "./Resume/WorkCard";
import ImgContainer from "./UI/ImgContainer";

export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const experiences = [
    {
      title: "Support Specialist",
      employment: "Contract",
      company: "Education Horizons",
      location: "Australia",
      date: "July 2023 – February 2024",
    },
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
    <div id="resume-section" className="pt-10">
      <h3 className=" text-5xl text-black text-center mb-9">Resume</h3>
      <div className="flex gap-16" data-aos="fade-up">
        <div id="img-contain" className="w-2/4 h-144 xmd:hidden">
          <ImgContainer
            imgSrc={"/img/myImg2.jpg"}
            desc="me"
            imgClass="max-h-screen w-full h-full  object-cover"
          />
        </div>
        <div id="resume-info" className="w-full">
          <div>
            <h3 className="text-3xl text-black mb-6">Work Experience</h3>
            {experiences.length !== 0 &&
              experiences.map((exp, index) => {
                return <WorkCard exp={exp} index={index} />;
              })}
          </div>
          <div>
            <h3 className="text-3xl text-black mb-6">Education</h3>
            {education.length !== 0 &&
              education.map((edu, index) => {
                return <EducationCard edu={edu} index={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
