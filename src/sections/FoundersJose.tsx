import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components";
import senseiMarinho from "../assets/images/sensei_marinho.png";

const FoundersJose = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleHoverActive = () => {
    setHovered(true);
  };

  const handleHoverOff = () => {
    setHovered(false);
  };

  const handleToogleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const [width, setWidth] = useState(window.innerWidth);

  // Function to update the width state
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <motion.div
      className=" shadow-xl border p-10 lg:w-[75%] lg:rounded-r-[100px] xl:px-30 justify-around items-center flex max-lg:flex-col flex-row my-5 overflow-hidden"
      initial={{ x: "-100%", opacity: 0 }} // start hidden (off left)
      whileInView={{ x: 0, opacity: 1 }} // slide in when visible
      exit={{ x: "100%", opacity: 0 }} // slide out left
      transition={{ duration: 0.8, ease: "easeOut" }}
      animate={{ width: width < 1024 ? "100%" : isClicked ? "97%" : "75%" }}
    >
      <div className="flex flex-col max-lg:text-center gap-10 max-lg:p-8 rounded-2xl max-lg:bg-none bg-center bg-cover duration-500 lg:max-w-fit">
        <p className="text-3xl font-semibold">Mentor</p>
        <h1 className="sm:text-6xl text-5xl font-bold">
          <span className="text-akfafe-red">
            José <br /> Marinho
          </span>
        </h1>
        <p className="font-semibold text-lg">
          Sensei/Fundador AKFAFE
        </p>
        <div className="max-lg:flex max-lg:justify-center">
          <Button
            label="Saber Mais"
            to="#"
            icon="cursor"
            onClick={handleToogleClick}
            disableRoute
            // onHover={handleHoverActive}
            // onHoverOut={handleHoverOff}
          ></Button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={
          isClicked
            ? { opacity: 1, x: 0 }
            : {
                opacity: 0,
                x: width < 1024 ? 0 : -20,
                y: width < 768 ? -20 : 0,
              }
        }
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={`rounded-lg lg:text-lg xl:text-2xl lg:w-[200px] xl:w-80`}
      >
        <p
          className={`text-center max-md:mx-7 max-lg:mx-20 ${
            width < 1024 ? "h-30" : "h-full"
          } transition-all duration-200`}
        >
          Nascido a 31 de julho de 1951, na freguesia de Silvares São Martinho,
          concelho de Fafe, foi o Fundador, Diretor Técnico e sócio nº 1 da
          Associação de Karate de Fafe, que se aproxima agora dos 50 anos de
          existência.
        </p>
      </motion.div>
      <div className="m-10">
        <img
          src={senseiMarinho}
          width={180}
          alt="sensei_jose_marinho"
          className="scale-120"
        />
      </div>
    </motion.div>
  );
};

export default FoundersJose;
