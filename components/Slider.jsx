import React from "react";
import Image from "next/image";

const Slider = ({ slides }) => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {slides.map((slide, index) => (
          <div key={index}>
            <Image  src={slide.image}  width="1440" height="600" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
