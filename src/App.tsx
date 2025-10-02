import { Nav } from "./components";
import {
  Founders,
  About,
  Achievements,
  Footer,
  History,
  Invite,
  PositivesRulesKarate,
  Reviews,
} from "./sections";
import background from "./assets/346.jpg";

import React from "react";

const App = () => {
  return (
    <main
      className="relative font-montserrat "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Nav></Nav>
      <section className="padding-x padding-y-about-sec">
        <About></About>
      </section>
      <section>
        <PositivesRulesKarate type="positives"></PositivesRulesKarate>
        {/* <PositivesRulesKarate type="rules"></PositivesRulesKarate> */}
      </section>
      <section className="padding-x">
        <History></History>
      </section>
      <section className="padding-x">
        <Founders></Founders>
      </section>
      <section className="padding-x">Fotos/Albuns</section>
      <section className="padding-x">
        <Founders></Founders>
      </section>
      <section className="padding-x">
        <Reviews></Reviews>
      </section>
      <section className="padding-x">
        <Achievements></Achievements>
      </section>
      <section className="padding-x">
        <Invite></Invite>
      </section>
      <section className="padding-x">
        <Footer></Footer>
      </section>
    </main>
  );
};

export default App;
