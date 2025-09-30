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

import React from "react";

const App = () => {
  return (
    <main className="relative font-montserrat">
      <Nav></Nav>
      <section className="padding">
        <About></About>
      </section>
      <section className="padding-x">
        <PositivesRulesKarate></PositivesRulesKarate>
      </section>
      <section className="padding-x">
        <PositivesRulesKarate></PositivesRulesKarate>
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
