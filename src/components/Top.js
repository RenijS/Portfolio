import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TopElements from "./Top/TopElements";

export default function Top() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="top-card"
      className="min-h-screen bg-cover text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/img/test.jpg')" }}
      data-aos="fade-up"
    >
      <TopElements />
    </div>
  );
}
