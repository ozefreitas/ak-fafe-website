import { motion, setDragLock, useScroll, useTransform } from "framer-motion";
import { Button } from "../components";
import DecryptedText from "../components/DecryptedText";
import CountUp from "../components/CountUp";

const Achievements = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      title: "Campeões Internacionais",
      number: 12,
      icon: "",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      title: "Campeões Nacionais",
      number: 21,
      icon: "",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      title: "Campeões Regionais",
      number: 30,
      icon: "",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      title: "Total de Medalhas",
      number: 72,
      icon: "",
    },
  ];

  return (
    <section className="max-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full flex max-md:flex-col max-md:place-items-center justify-around py-20
      ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          {/* Image side */}
          <div className="group relative space-y-10 md:w-3/6 w-5/6 overflow-hidden rounded-2xl">
            {/* Background image */}
            <div
              style={{ backgroundImage: `url(${slide.url})` }}
              className="w-full md:cursor-pointer md:h-[70vh] h-[50vh] rounded-2xl bg-center bg-cover duration-500 group-hover:shadow-2xl group-hover:brightness-70 transition-all"
            ></div>

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:opacity-100 max-md:translate-y-0">
              <p className="text-sm mt-2">
                akjshkdhasiud asdiuasybdiuasond <br />
                sduhasdibuasbdo shduaibd <br />
                sbcjish iu
              </p>
            </div>
          </div>

          {/* Sticky / Info side */}
          <div className="lg:w-2/6 md:h-[25vh] md:sticky top-50 flex max-md:justify-center">
            <div className="group w-full h-full border border-white rounded-2xl bg-center bg-cover duration-500 backdrop-blur-3xl shadow-2xl max-md:py-10 py-5 px-10 text-white flex flex-col gap-5 justify-center transition-transform md:cursor-pointer md:hover:scale-[1.05]">
              <div className="flex justify-between items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
                <CountUp
                  from={0}
                  to={slide.number}
                  separator=","
                  direction="up"
                  duration={3}
                  className="count-up-text text-6xl font-bold w-1/2"
                />
              </div>

              <div style={{ marginTop: "" }}>
                <DecryptedText
                  className="text-2xl"
                  speed={100}
                  sequential
                  text={slide.title}
                  animateOn="view"
                />
              </div>

              <div className="opacity-100 absolute top-44 translate-y-0 transition-all duration-300 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                <Button icon="front" label="Saber Mais" to="#achievements" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
