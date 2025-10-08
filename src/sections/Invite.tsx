import dojo1 from "../assets/images/dojo_1.jpg"
import slogan1 from "../assets/images/slogan_fotos_1.png";
import { Button } from "../components";

const Invite = () => {
  return (
    <section className="max-container min-h-screen justify-between items-center flex flex-row max-lg:flex-wrap relative">
      <div className="flex flex-col min-h-screen gap-10 2xl:w-2/5 max-lg:w-full max-lg:p-8 rounded-2xl max-lg:bg-none bg-center bg-cover duration-500">
        <h1 className="sm:text-6xl text-5xl font-bold mt-20 text-akfafe-red">Visite-nos</h1>
        <p className="text-lg">Primeiras aulas sem compromisso</p>
      </div>
      <div className="lg:w-3/5 h-[660px] pb-1 flex w-full ml-20 sm:pr-0 relative flex-col max-lg:px-0 max-lg:pb-0 z-50 ">
        <div
          style={{ backgroundImage: `url(${slogan1})` }}
          className="w-full h-full rounded-2xl bg-cover duration-500 bg-[position:40%_center]"
        ></div>
      </div>
      <div className="absolute bottom-10 flex w-[80%] h-80 z-60 justify-between">
        <div className="w-[45%] bg-white shadow-xl rounded-2xl flex flex-col justify-evenly items-center border">
          <img src={dojo1} alt="dojo1" className="h-15 w-15 rounded-full" />
          <h2 className="text-lg">Apareça nas nossas instalações</h2>
          <p className="text-sm">Estamos abertos todos os dias</p>
          <Button label="Ver Localização" icon="location" to="contacts"></Button>
        </div>
        <div className="w-[45%] bg-white shadow-xl rounded-2xl flex flex-col justify-evenly items-center border border-white">
          <h2 className="text-lg mt-10">Contacte-nos via telemóvel ou email</h2>
          <p className="text-sm">Podes esclarecer qualquer dúvida</p>
          <Button label="Contactar" icon="phone" to="contacts"></Button>
        </div>
      </div>
      {/* <button className="w-[40%] h-30 absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer rounded-b-4xl bg-akfafe-red border-1 px-6 p-3 text-white font-monts flex leading-none items-center gap-4 justify-center transition-transform duration-200 text-2xl">
        Venha visitar-nos sem compromisso
      </button> */}
    </section>
  );
};

export default Invite;
