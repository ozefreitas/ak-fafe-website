import { motion, setDragLock, useScroll, useTransform } from "framer-motion";

const Achievements = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      title: "Ola",
      text: "Tudo bem?",
      icon: "",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      title: "",
      text: "",
      icon: "",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      title: "",
      text: "",
      icon: "",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      title: "",
      text: "",
      icon: "",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      title: "",
      text: "",
      icon: "",
    },
  ];

  return (
    <section className="max-container">
      {slides.map((slide, index) => (
        <div key={index} className="w-full flex justify-around py-20">
          <div className="space-y-10 w-3/6">
            <div
              style={{ backgroundImage: `url(${slide.url})` }}
              className="w-full h-[70vh] rounded-2xl bg-center bg-cover duration-500"
            ></div>
          </div>
          <div className="lg:w-2/6 h-[25vh] sticky top-50 flex">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 backdrop-blur-3xl shadow-2xl p-5 text-white flex flex-col items-center justify-center align-middle">
              {slide.icon}
              <h1>{slide.title}</h1>
              <h3>{slide.text}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
