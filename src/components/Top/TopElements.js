import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TopElements() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="top-ele-container"
      className="flex flex-row items-center gap-9"
    >
      <div className="flex flex-col items-center text-lg xsm:text-4xl">
        <div className="w-48 h-44 rounded-t-full overflow-hidden object-cover xsm:w-72 xsm:h-64">
          <img src="img/myImg.jpg" alt="" />
        </div>
        <span className="mt-1">Hello</span>
        <span>I'm Renij Shrestha</span>
        <a
          href="#portfolio-sect"
          className="w-full py-1 mt-2 border border-zinc-400 rounded-xl text-center"
        >
          View <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
      <span className="w-96 tracking-wide italic text-gray-300 xsm:hidden">
        Recent IT graduate with a keen interest in software engineering.
        Developed and demonstrated a reliable work ethic and adaptability
        through work and university experience.
      </span>
    </div>
  );
}
