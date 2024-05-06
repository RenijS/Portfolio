import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImgContainer = ({ imgSrc, desc, imgClass }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoaded(true);
    };
    image.src = imgSrc;
  }, [imgSrc]);

  return (
    <>
      {isLoaded === true ? (
        <img src={imgSrc} alt={desc} loading="lazy" className={imgClass} />
      ) : (
        <Blurhash
          hash={"LEHV6nWB2yk8pyo0adR*.7kCMdnj"}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </>
  );
};

export default ImgContainer;
