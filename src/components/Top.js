import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TopElements from "./Top/TopElements";
import ImgContainer from "./UI/ImgContainer";

export default function Top() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="top-card"
      className="h-screen text-white flex flex-col justify-center items-center relative"
      data-aos="fade-up"
    >
      <ImgContainer
        imgSrc={"/img/test.jpg"}
        imgClass={"h-full w-full object-cover absolute"}
      />
      <TopElements />
    </div>
  );
}
