import cmfafe from "../assets/images/cm_fafe.png";
import ipdj from "../assets/images/ipdg.png";
import skip from "../assets/images/skip-logo.png";
import facebook from "../assets/icons/icons8-facebook-50.png";
import instagram from "../assets/icons/icons8-instagram-50.png";

const Footer = () => {
  return (
    <footer className="opacity-80 padding-x bg-gradient-to-t from-[#2d558a] via-[#bf0303]/80 to-[#fefefe]/80 text-white py-10">
      <div className="w-full flex items-center justify-between">
        <p className="text-lg font-medium">Com o apoio de:</p>
        <a href="https://skiportugal.pt/" target="_blank">
          <img
            src={skip}
            alt="skip"
            width={120}
            height={120}
            className="cursor-pointer"
          />
        </a>
        <a href="https://cm-fafe.pt/" target="_blank">
          <img
            src={cmfafe}
            alt="cmfafe"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </a>
        <a href="https://ipdj.gov.pt/" target="_blank">
          <img
            src={ipdj}
            alt="ipdj"
            width={110}
            height={110}
            className="cursor-pointer"
          />
        </a>
        <a href="" target="_blank">
          <img src="" alt="lili" className="cursor-pointer" />
        </a>
        <a href="" target="_blank">
          <img src="" alt="imob" className="cursor-pointer" />
        </a>
      </div>
      <div className="w-full flex items-center gap-10 py-10">
        <p className="text-lg font-medium">Visite as nossas redes sociais:</p>
        <a href="https://www.facebook.com/akfafe" target="_blank">
          <img src={facebook} alt="face" />
        </a>
        <a href="https://www.instagram.com/ak.fafe/" target="_blank">
          <img src={instagram} alt="insta" />
        </a>
      </div>
      <div className="py-10 flex items-center flex-col">
        <h2 className="font-semibold tracking-wider mb-2">
          Juntos Somos Fortes. Unidos Somos Invencíveis.
        </h2>
        <p className="text-sm opacity-80">
          © 2025{" "}
          <a className="underline" href="https://github.com/ozefreitas">
            ozefreitas
          </a>{" "}
          freelancing. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
