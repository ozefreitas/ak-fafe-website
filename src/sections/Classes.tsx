import { useRef, useState, useEffect, type MouseEvent } from "react";
import kids from "../assets/images/KIDS.fw_.png";
import youth from "../assets/images/jovens22-1.png";
import adults from "../assets/images/adultos2.png";

export default function HorizontalSlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // -----------------------------
  // Scroll helpers
  // -----------------------------
  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = current.offsetWidth * 0.8;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const updateArrowState = () => {
    const current = scrollRef.current;
    if (!current) return;

    const maxScrollLeft = current.scrollWidth - current.clientWidth;
    setAtStart(current.scrollLeft <= 10);
    setAtEnd(current.scrollLeft >= maxScrollLeft - 10);
  };

  // Watch scroll changes
  useEffect(() => {
    const current = scrollRef.current;
    if (!current) return;
    updateArrowState();
    const handleScroll = () => updateArrowState();
    current.addEventListener("scroll", handleScroll);
    return () => current.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const classes = [
    {
      name: "Crianças",
      description:
        "O Karate pode ser praticado por todos e em todas as idades. A mesma prática facilita a concentração, melhora o equilíbrio nervoso, entre muitas outras vantagens.",
      categories: ["Infantis", "Iniciados", "Juvenis"],
      image: (
        <img
          src={kids}
          alt={"criancas"}
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Adultos",
      description:
        "Quem pratica Karate só tem a ganhar. A filosofia desta arte marcial é voltada para o desenvolvimento pessoal e para o cultivo de uma vida saudável.",
      categories: ["Cadetes", "Júniores", "Séniores"],
      image: (
        <img
          src={youth}
          alt={"adultos"}
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Idosos",
      description:
        "Com o treino adquado e profissionais competentes, é possível a pessoa melhorar as suas capacidades físicas, como força e flexibilidade.",
      categories: ["Veteranos"],
      image: (
        <img
          src={adults}
          alt={"idosos"}
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Comeptição Kata",
      description:
        "Treinos especializados numa vertente competitiva de Kata, lecionado por treinadores experientes em competições e titulados internacionalmente.",
      categories: [
        "Infantis, Iniciados, Juvenis",
        "Cadetes, Júniores, Séniores",
      ],
      image: (
        <img
          src={kids}
          alt={"criancas"}
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Competição Kumite",
      description:
        "Treinos especializados numa vertente competitiva de Kumite, lecionado por treinadores experientes em competições e titulados internacionalmente.",
      categories: [
        "Infantis, Iniciados, Juvenis",
        "Cadetes, Júniores, Séniores",
      ],
      image: (
        <img
          src={kids}
          alt={"criancas"}
          className="w-full h-full object-cover"
        />
      ),
    },
  ];

  return (
    <div className="flex max-md:flex-col m-auto select-none">
      {/* Arrows */}
      <div className="flex max-xl:pl-0 max-md:pl-10 w-120 mb-10 pl-10 gap-5 z-100">
        {/* Left Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => !atStart && scroll("left")}
          className={`size-12 cursor-pointer hover:scale-110 transition-transform ${
            atStart ? "opacity-30 cursor-default" : "hover:scale-110"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        {/* Right Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => !atEnd && scroll("right")}
          className={`size-12 cursor-pointer hover:scale-110 transition-transform ${
            atEnd ? "opacity-30 cursor-default" : "hover:scale-110"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-scroll mb-10 no-scrollbar cursor-grab active:cursor-grabbing rounded-l-3xl"
      >
        <div className="flex flex-nowrap z-91">
          {classes.map((item: any, index: any) => (
            <div key={index} className="inline-block px-6 snap-start">
              <div className="group relative xl:w-130 w-100 h-120 overflow-hidden rounded-lg shadow-md bg-white transition-all duration-500 ease-in-out p-10 hover:bg-black">
                {/* Card content */}
                <div className="relative z-10 transition-all duration-500 ease-in-out">
                  {/* Title */}
                  <h1 className="text-3xl font-semibold mb-2 flex items-center gap-10 duration-500 ease-in-out cursor-pointer group-hover:text-white group-hover:gap-20">
                    {item.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </h1>

                  {/* Categories + description fade out on hover */}
                  <div className="">
                    <ul className="text-lg text-akfafe-blue font-semibold duration-500 ease-in-out group-hover:text-akfafe-red">
                      {item.categories.map((subitem: any, subIndex: any) => (
                        <li key={subIndex}>{subitem}</li>
                      ))}
                    </ul>
                    <p className="text-gray-700 mt-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                      {item.description}
                    </p>
                  </div>

                  {/* Image container */}
                  <div className="flex justify-end mt-15">
                    <div className="transition-all duration-700 ease-in-out group-hover:scale-130 group-hover:-translate-x-1/3 group-hover:-translate-y-1/3 group-hover:z-20">
                      <div className="w-60 h-60 overflow-hidden">
                        {item.image}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional dark overlay for better contrast */}
                <div className="absolute inset-0 hover:bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
