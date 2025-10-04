import React from "react";
import { Button } from "../components";

const History = () => {
  const history = [
    {
      date: "1978",
      text: "Constituída em 1978 por José Marinho, a AKFAFE é uma organização pioneira das Artes Marciais em Portugal, sendo a associação mais antiga do país.",
      color: "bg-white",
    },
    {
      date: "2007",
      text: "A 1 de Agosto de 2007, a anteriormente denominada Academia de Karate de Fafe, autonomizou-se, constituindo a Associação de Karate de Fafe.",
      color: "bg-akfafe-blue",
    },
    {
      date: "2009",
      text: "Inauguração das atuais instalações da AKFAFE.",
      color: "bg-akfafe-red",
    },
    {
      date: "2018",
      text: "Comemoração dos 40 anos da AKFAFE.",
      color: "bg-white",
    },
  ];

  return (
    <section className="max-container justify-center items-center flex flex-row max-lg:flex-wrap max-lg:flex-col-reverse">
      <div className="lg:w-4/5 pb-1 flex justify-center w-full m-auto max-2xl:ml-0 sm:pr-0 relative flex-col max-lg:px-0 max-lg:pb-0">
        <div className="grid grid-cols-2 max-md:grid-cols-1 lg:gap-5 xl:gap-10 gap-8 max-sm:gap-10 max-sm:px-5">
          {history.map((item, index) => (
            <div
              key={index}
              className="hover:scale-112 transition-transform duration-300"
            >
              <div
                className={`group relative h-70 max-w-full rounded-3xl flex justify-center items-center backdrop-blur-3xl ${
                  item.color
                } ${item.color === "bg-white" ? "border" : "border-spacing-0.5"}`}
              >
                <h3
                  className={`font-bold text-5xl transition-opacity duration-500 group-hover:opacity-0 ${
                    item.color !== "bg-white" ? "text-white" : null
                  }`}
                >
                  {item.date}
                </h3>
                <p
                  className={`absolute font-semibold max-xl:text-lg xl:text-xl inset-0 flex items-center justify-center p-10 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    item.color !== "bg-white" ? "text-white" : null
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 2xl:w-2/5 max-lg:w-full pl-25 max-lg:pb-15 max-lg:p-8 rounded-2xl max-lg:bg-none bg-center bg-cover duration-500">
        <h1 className="sm:text-7xl xl:text-8xl text-6xl font-bold text-akfafe-blue">
          <p className="text-xl text-black">Um pedaço da</p>
          História
          <p className="text-2xl text-black font-semibold">
            do Karate Nacional
          </p>
        </h1>
        <p className="mb-0 pb-0">Conheça um pouco o caminho da AKFafe</p>
        <Button
          label="Passe nas Cartas para saber mais"
          to="#about"
          icon="eye"
          disableHover
          disableRoute
        ></Button>
      </div>
    </section>
  );
};

export default History;
