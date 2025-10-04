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
} from "./sections";
import background from "./assets/346.jpg";
import blueBrushBachground from "./assets/images/border_1.png";

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
      <section className="padding-x">
        <History></History>
      </section>
      <section className="padding-t">
        <FoundersJose></FoundersJose>
      </section>
      <section className="padding-y">
        <FoundersSonia></FoundersSonia>
      </section>
      <section className="padding-x">Fotos/Albuns</section>
      <section className="padding-x">
        <Reviews></Reviews>
      </section>
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
