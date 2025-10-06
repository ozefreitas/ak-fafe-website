import facebook from "../assets/icons/icons8-facebook-50.png";
import instagram from "../assets/icons/icons8-instagram-50.png";
import linkedin from "../assets/icons/icons8-linkedin-50.png";
import x from "../assets/icons/icons8-x-50.png";
import { useState, useEffect } from "react";
import { Button } from "../components";

const Trainers = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const Trainers = [
    {
      name: "Sónia Marinho",
      description: "Diretora Técnica/Treinadora",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
    {
      name: "Dinís Pires",
      description: "Treinador",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Jorge Gomes",
      description: "Treinador",
      image:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
    {
      name: "Andreia Rodrigues",
      description: "Treinadora",
      image:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
    {
      name: "Gabriela Durães",
      description: "Treinadora",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
    {
      name: "Sérgio Moniz",
      description: "Treinador",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
    {
      name: "José Freitas",
      description: "Treinador",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      facebook: "",
      instagram: "",
      linkedin: "",
      x: "",
    },
  ];

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
    <section className="relative max-sm:px-5 max-container z-99">
      <div
        className={`grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 lg:gap-5 xl:gap-10 gap-8 max-sm:gap-3 items-center max-sm:px-10 ${
          showAll
            ? "max-h-full"
            : width < 640
            ? "max-h-[84rem] overflow-hidden"
            : "max-h-[30rem] overflow-hidden"
        }`}
      >
        {/* Intro card */}
        <div className="max-sm:h-50 max-sm:w-full h-90 bg-akfafe-red flex flex-col justify-center px-5 text-white rounded-2xl">
          <h1 className="text-4xl font-semibold">Equipa</h1>
          <p className="mt-10">Conheça os nossos treinadores de Campeões</p>
        </div>

        {/* Trainers */}
        {Trainers.map((item: any, index: any) => (
          <div
            key={index}
            className="group relative h-120 bg-akfafe-blue rounded-t-3xl rounded-b-2xl overflow-hidden cursor-pointer text-center"
          >
            {/* Image section */}
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="h-4/5 bg-cover bg-center rounded-t-2xl transition-all duration-500 ease-in-out group-hover:opacity-40"
            ></div>

            {/* Info section (expands on hover) */}
            <div
              id={`trainer-info-${item.name}`}
              className="absolute bottom-0 left-0 w-full h-1/5 flex flex-col items-center justify-center text-white bg-akfafe-blue rounded-t-2xl transition-all duration-500 ease-in-out group-hover:h-full group-hover:rounded-b-2xl px-3"
            >
              <h2 className="text-xl max-md:text-lg font-semibold transition-all duration-300 group-hover:text-2xl mt-25 group-hover:mt-0">
                {item.name}
              </h2>
              <p className="transition-opacity duration-500 group-hover:opacity-100 opacity-0 mt-3 px-5 mb-7 text-lg">
                {item.description}
              </p>
              <div className="transition-opacity duration-500 group-hover:opacity-100 opacity-0 mt-3 px-5 flex gap-5">
                <a
                  href={item.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="hover:scale-135 duration-200"
                    width="30"
                    height="30"
                    src={facebook}
                    alt="facebook--v1"
                  />
                </a>
                <a
                  href={item.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="hover:scale-135 duration-200"
                    width="30"
                    height="30"
                    src={instagram}
                    alt="instagram--v1"
                  />
                </a>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="hover:scale-135 duration-200"
                    width="30"
                    height="30"
                    src={linkedin}
                    alt="linkedin--v1"
                  />
                </a>
                <a href={item.x} target="_blank" rel="noopener noreferrer">
                  <img
                    className="hover:scale-135 duration-200"
                    width="30"
                    height="30"
                    src={x}
                    alt="x--v1"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}

      {!showAll ? (
        <div className="w-full flex justify-center mt-10">
          <Button
            label="Mostrar Mais"
            icon="expand"
            onClick={() => setShowAll(true)}
          ></Button>
        </div>
      ) : (
        <div className="w-full flex justify-center mt-10">
          <Button
            label="Mostrar Menos"
            icon="colapse"
            onClick={() => setShowAll(false)}
          ></Button>
        </div>
      )}
    </section>
  );
};

export default Trainers;
