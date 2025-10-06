import React from "react";
import slogan1 from "../assets/images/slogan_fotos_1.png";
import slogan2 from "../assets/images/slogan_fotos_2.png";

const SloganPhotos = () => {
  return (
    <>
      <div
        className="w-full md:h-180 h-130 bg-cover bg-center flex flex-col justify-start text-white max-md:bg-[position:50%_center] p-10"
        style={{ backgroundImage: `url(${slogan2})` }}
      >
        <h1 className="text-8xl max-md:text-4xl max-xl:text-6xl font-bold md:px-5">
          JUNTOS SOMOS
        </h1>
        <h1 className="text-massive max-md:text-7xl max-xl:text-9xl font-bold outlined-text">
          FORTES
        </h1>
      </div>
      <div
        className="w-full md:h-180 h-130 bg-cover bg-center flex flex-col justify-end items-end text-white max-md:bg-[position:45%_center] p-10"
        style={{ backgroundImage: `url(${slogan1})` }}
      >
        <h1 className="text-8xl max-md:text-4xl max-xl:text-6xl font-bold md:px-5">
          UNIDOS SOMOS
        </h1>
        <h1 className="text-massive max-md:text-6xl max-xl:text-8xl font-bold outlined-text">
          INVENCÍVEIS
        </h1>
      </div>
    </>
  );
};

export default SloganPhotos;
