import { useEffect, useRef } from "react";
import { activeAnimations, motion, setDragLock, useScroll, useTransform } from "framer-motion";
import { NavOptions } from "../constants";

const TrainingSubHeaders = (props: { active: any; setActive: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        props.setActive(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.setActive]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed left-1/2 text-center -translate-x-1/2 w-[45%] bg-white leading-normal text-lg text-akfafe-blue font-semibold shadow-2xl p-5 lg:w-[35%] lg:rounded-3xl justify-around items-start flex max-lg:flex-col flex-row my-5 z-100 border-l-8 border-akfafe-red"
      initial={{ y: 150, opacity: 0 }} // start hidden (off left)
      exit={{ y: 150, opacity: 0 }} // slide out left
      transition={{ duration: 0.5, ease: "easeOut" }}
      animate={props.active ? { opacity: 1, x: 0 } : { opacity: 0, y: "100%" }}
    >
      <div className="p-3">Planos de Treino</div>
      <div className="w-fit border-l-1 text-left pl-10">
        <ul className="w-fit">
          {NavOptions.find(
            (item) => item.label === "Plano de Treino"
          )?.children?.map((item, index) => (
            <li
              className={`relative p-3 w-fit text-akfafe-blue flex items-center gap-2 hover:text-akfafe-red cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-akfafe-red before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-akfafe-red after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]`}
              key={index}
            >
              <button className="cursor-pointer">{item.label}</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TrainingSubHeaders;
