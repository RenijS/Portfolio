import React from "react";

export default function PhotoCard(props) {
  return (
    <>
      {props.photographyInfo.map((info) => {
        return (
          <div className="w-64 h-96 p-4 bg-blue-200 rounded-3xl">
            <img
              src={`img/photography/${info}.jpg`}
              alt=""
              className="h-full rounded-2xl object-cover"
            />
          </div>
        );
      })}
    </>
  );
}
