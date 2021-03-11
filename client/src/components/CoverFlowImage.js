import React, { useState } from "react";
import Coverflow from "react-coverflow";

const CoverFlowImage = () => {
  const [images] = useState([
    {
      src: "https://via.placeholder.com/800/FFFF00",
      alt: "Album One",
    },
    {
      src: "https://via.placeholder.com/800/FFFFFF",
      alt: "Album Two",
    },
    {
      src: "https://via.placeholder.com/800/0000FF",
      alt: "Album Three",
    },
    {
      src: "https://via.placeholder.com/800/F0F0F0",
      alt: "Album Four",
    },
    {
      src: "https://via.placeholder.com/800",
      alt: "Album Five",
    },
  ]);
  return (
    <Coverflow
      width={960}
      height={480}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
    >
      {images.map(({ src, alt }) => (
        <img
          key={src}
          src={src}
          alt={alt}
        //   data-action="https://facebook.github.io/react/"
        />
      ))}
    </Coverflow>
  );
};

export default CoverFlowImage;
