import { useState } from "react";
import { Button } from "../components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const About = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="max-container min-h-screen justify-between items-center flex flex-row max-lg:flex-wrap">
      <div className="flex flex-col gap-10 2xl:w-2/5 max-lg:w-full max-lg:p-8 rounded-2xl max-lg:bg-none bg-center bg-cover duration-500">
        <p className="text-xl">
          Uma associação para <span className="font-semibold">TODOS</span>
        </p>
        <h1 className="sm:text-8xl text-6xl font-bold">
          Associação de Karate <span className="text-akfafe-red">Fafe</span>
        </h1>
        <p className="font-semibold">
          Dedicação, Disciplina, Compromisso, Controlo, Defesa Pessoal
        </p>
        <p className="mb-0 pb-0">Mais do que um deporto, um espaço seguro</p>
        <Button label="Sobre Nós" to="#about" icon="front"></Button>
      </div>
      <div className="lg:w-3/5 h-[860px] pb-1 flex w-full m-auto max-2xl:ml-0 ml-40 sm:pr-0 pt-40 relative group flex-col max-lg:px-0 max-lg:pb-0 z-50">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-akfafe-red">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:text-akfafe-red">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2 ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={{ color: currentIndex === slideIndex ? "red" : undefined }}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer hover:text-akfafe-red"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
