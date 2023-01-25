import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previuosSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === current ? "opacity-[1]" : "opacity-0 "}
          >
            <FaArrowAltCircleLeft
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none  z-[2]"
              onClick={previuosSlide}
              size={30}
            />
            {index === current && (
              <Image
                src={slide.image}
                width="1440"
                height="600"
                objectFit="cover"
              />
            )}

            <FaArrowAltCircleRight
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none  z-[2]"
              onClick={nextSlide}
              size={30}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
