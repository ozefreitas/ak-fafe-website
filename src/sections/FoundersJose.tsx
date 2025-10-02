import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components";
import senseiMarinho from "../assets/images/sensei_marinho.png";

const FoundersJose = () => {
  const [hovered, setHovered] = useState(false);

  const handleHoverActive = () => {
    setHovered(true);
  };

  const handleHoverOff = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className="bg-black shadow-xl p-10 md:w-[75%] w-full md:rounded-r-[100px]  justify-around items-center flex flex-row my-5 overflow-hidden"
      initial={{ x: "-100%", opacity: 0 }} // start hidden (off left)
      whileInView={{ x: 0, opacity: 1 }} // slide in when visible
      exit={{ x: "100%", opacity: 0 }} // slide out left
      transition={{ duration: 0.8, ease: "easeOut" }}
      animate={{ width: hovered ? "97%" : "75%" }}
    >
      <div className="flex flex-col gap-10 2xl:w-2/5 max-lg:w-full max-lg:p-8 rounded-2xl max-lg:bg-none bg-center bg-cover duration-500">
        <p className="text-3xl text-white">Mentor</p>
        <h1 className="sm:text-5xl text-4xl font-bold">
          <span className="text-akfafe-red">José Marinho</span>
        </h1>
        <p className="font-semibold text-white">Sensei/Fundador AKFAFE</p>
        <Button
          label="Saber Mais"
          to="#"
          icon="cursor"
          onHover={handleHoverActive}
          onHoverOut={handleHoverOff}
        ></Button>
      </div>
      <div className="m-10">
        <img src={senseiMarinho} width={240} alt="" />
      </div>
    </motion.div>
  );
};

export default FoundersJose;
