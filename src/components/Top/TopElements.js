import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ImgContainer from "../UI/ImgContainer";

export default function TopElements() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        id="top-ele-container"
        className="flex flex-row items-center gap-9"
      >
        <div className="flex flex-col items-center text-lg xsm:text-4xl">
          <div className="w-48 h-44 rounded-t-full overflow-hidden object-cover xsm:w-72 xsm:h-64 xsmall:w-10/12">
            <ImgContainer imgSrc={"img/myImg.jpg"} desc={"me"} />
          </div>
          <span className="mt-1">Hello</span>
          <span>I'm Renij Shrestha</span>
        </div>
        <span
          className="w-96 tracking-wide italic text-gray-300 xsm:hidden"
          data-aos="fade-right"
        >
          Motivated and positive IT professional with hands-on experience in
          technical support, troubleshooting, and software development.
          Developed and demonstrated a reliable work ethic and adaptability
          through work and university experience.
        </span>
      </div>
      <a
        href="#resume-section"
        className="fixed bottom-0 mb-20 w-1/2 md:w-1/3 py-2 mt-2 rounded-xl text-center text-xl bg-black/50 hover:shadow-md hover:shadow-gray-800"
      >
        View <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </>
  );
}
