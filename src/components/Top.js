import React from "react";

import TopElements from "./Top/TopElements";

export default function Top() {
  return (
    <div
      id="top-card"
      className="min-h-screen bg-cover text-white flex flex-col justify-center items-center mb-9"
      style={{ backgroundImage: "url('/img/test.jpg')" }}
    >
      <TopElements />
    </div>
  );
}
