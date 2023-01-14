import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="grid grid-cols-2 gap-10">
      {props.projInfo.map((info) => {
        return (
          <div className="text-center">
            <div className="relative p-6 bg-blue-200 rounded-3xl overflow-hidden group/imgContain">
              <img
                src={info.img}
                alt=""
                className="rounded-2xl h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/[.74] text-white collapse group-hover/imgContain:visible">
                <div className="grid grid-rows-2 grid-cols-2 h-full text-lg">
                  <a
                    href={info.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center hover:cursor-pointer hover:text-xl hover:underline"
                  >
                    <span className="">Github</span>
                  </a>
                  <a
                    href={info.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center border-l-4 border-gray-400 hover:cursor-pointer hover:text-xl hover:underline"
                  >
                    <span className="">Live Preview</span>
                  </a>
                  <div className="col-span-2 flex flex-col justify-center items-center border-t-4 border-gray-400">
                    <span className="">Tech Used:</span>
                    <ul className="flex gap-4">
                      {info.techs.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>{info.title}</p>
            <span>{info.desc}</span>
          </div>
        );
      })}
    </div>
  );
}
