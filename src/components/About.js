import React from "react";

export default function About() {
  const skills = [
    "Java",
    "JavaScript",
    "Kotlin",
    "HTML",
    "CSS",
    "Python",
    "NodeJS",
    "MongoDB",
    "React",
    "Agile",
    "Bootstrap",
    "Tailwind",
    "JavaFX",
    "LISP",
    "IT Helpdesk",
  ];

  return (
    <div id="about-sect" className="flex max-h-screen gap-16 py-16 box-content">
      <div className="w-full">
        <img
          src="/img/test.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div id="about-info" className="text-lg">
        <div id="bio">
          <h2 className="text-5xl">My Bio</h2>
          <p>
            Recent IT graduate with a keen interest in software engineering.
            Developed and demonstrated a reliable work ethic and adaptability
            through work and university experience.
          </p>
        </div>
        <div>
          <span>Tech Exposure +</span>
          <ul id="skills" className="flex flex-wrap">
            {skills.map((skill) => (
              <li className="mr-4">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2.5">
          <button className="py-1 px-1 border border-zinc-400 rounded-xl">
            LinkedIn
          </button>
          <button className="py-1 px-1 border border-zinc-400 rounded-xl">
            Github
          </button>
          <button className="py-1 px-2 border border-zinc-400 rounded-xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
