import React from "react";
import { Button } from "../components";

const About = () => {
  return (
    <section className="border max-container min-h-screen justify-between items-center flex flex-row">
      <div className="flex flex-col gap-10 lg:w-2/5 ">
        <p>Uma associação para TODOS</p>
        <h1 className="text-6xl">Associação de Karate Fafe</h1>
        <p>Dedicação, Disciplina, Compromisso, Controlo, Defesa Pessoal</p>
        <Button label="Sobre Nós" to="#about"></Button>
      </div>
      <div></div>
    </section>
  );
};

export default About;
