import React from "react";

const PositivesRulesKarate = () => {
  const texts = [
    { title: "Respeito", description: "Tudo Bem?" },
    { title: "Condição Física", description: "Tudo Bem?" },
    { title: "Disciplina", description: "Tudo Bem?" },
    { title: "Concentração", description: "Tudo Bem?" },
    { title: "Controlo", description: "Tudo Bem?" },
    { title: "Espítiro", description: "Tudo Bem?" },
    { title: "Competição", description: "Tudo Bem?" },
    { title: "Tradição", description: "Tudo Bem?" },
    { title: "Bem-estar", description: "Tudo Bem?" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden py-15 group">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group group-hover:stop_animation">
        {texts.map((item, index) => (
          <li key={index} className="w-100 h-80 py-5 m-0">
            <div
              className={`shadow-md  p-4 max-w-100 h-full rounded-xl ${
                index % 2 === 0 ? "bg-bg-grey-card" : "bg-bg-dark-grey-card"
              }`}
            >
              <p className="text-2xl font-semibold p-2 text-akfafe-blue">
                {item.title}
              </p>
              <p className="p-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll hover:stop_animation"
        aria-hidden="true"
      >
        {texts.map((item, index) => (
          <li key={index} className="w-100 h-80 py-5 m-0">
            <div
              className={`shadow-md  p-4 max-w-100 h-full rounded-xl ${
                index % 2 !== 0 ? "bg-bg-grey-card" : "bg-bg-dark-grey-card"
              }`}
            >
              <p className="text-2xl font-semibold p-2 text-akfafe-blue">
                {item.title}
              </p>
              <p className="p-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PositivesRulesKarate;
