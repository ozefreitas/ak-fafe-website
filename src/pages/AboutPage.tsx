import React from "react";
import { Achievements } from "../sections";

import blueBrushBachground from "./assets/images/border_1.png";

const AboutPage = () => {
  return (
    <div>
      <div
        className="h-[142px]"
        style={{ backgroundImage: `url(${blueBrushBachground})` }}
      ></div>
      <section className="bg-akfafe-blue">
        <Achievements></Achievements>
      </section>
      <div
        className="h-[142px] rotate-180"
        style={{ backgroundImage: `url(${blueBrushBachground})` }}
      ></div>
    </div>
  );
};

export default AboutPage;
