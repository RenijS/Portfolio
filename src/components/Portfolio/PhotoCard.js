import React from "react";
import ImgContainer from "../UI/ImgContainer";

export default function PhotoCard(props) {
  return (
    <>
      {props.photographyInfo.map((info) => {
        return (
          <div className="w-64 h-96 p-4 bg-blue-200 rounded-3xl ">
            <div className="rounded-3xl h-full overflow-hidden">
              <ImgContainer
                imgSrc={`img/photography/${info}.jpg`}
                desc={"photography portfolio"}
                imgClass={"h-full  object-cover"}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
