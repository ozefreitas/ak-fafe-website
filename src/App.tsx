import { Nav } from "./components";
import {
  FoundersJose,
  FoundersSonia,
  About,
  Achievements,
  Footer,
  History,
  Invite,
  PositivesRulesKarate,
  Reviews,
  Classes,
  Trainers,
  SloganPhotos,
} from "./sections";
import background from "./assets/346.jpg";
import redBrushBachground from "./assets/images/border_1_red.png";

const App = () => {
  return (
    <main className="relative font-montserrat">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md -z-40"
        style={{ backgroundImage: `url(${background})` }}
      />
      <Nav></Nav>
      <section className="padding-x padding-y-about-sec">
        <About></About>
      </section>
      <section>
        <PositivesRulesKarate></PositivesRulesKarate>
      </section>
      <section className="padding-x padding-b">
        <History></History>
      </section>
      <section className=" padding-b">
        <SloganPhotos></SloganPhotos>
      </section>
      <div className="flex justify-center md:text-7xl text-4xl font-bold">
        AS NOSSAS AULAS
      </div>
      <section className="padding-l padding-y">
        <Classes></Classes>
      </section>
      <div
        className="h-[142px] flex justify-center md:text-7xl text-4xl font-bold"
        style={{ backgroundImage: `url(${redBrushBachground})` }}
      ></div>
      <div className="flex justify-center md:text-xl text-lg pb-10 bg-akfafe-red text-white">
        TESTEMUNHOS
      </div>
      <div className="flex justify-center md:text-4xl text-3xl font-bold bg-akfafe-red text-white text-center">
        Uma Família Grande, Satisfeita e Unida
      </div>
      <div
        className="h-[142px] rotate-180"
        style={{ backgroundImage: `url(${redBrushBachground})` }}
      ></div>
      <section className="padding-x padding-b">
        <Reviews></Reviews>
      </section>
      <section className="padding-x padding-t">
        <Trainers></Trainers>
      </section>
      <section className="padding-t">
        <FoundersJose></FoundersJose>
      </section>
      <section className="padding-y">
        <FoundersSonia></FoundersSonia>
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
