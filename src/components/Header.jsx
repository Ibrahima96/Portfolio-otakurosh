import img from "../assets/img_01.png";

const Header = () => {
  return (
    <div>
      <header className="base-300 shadow-sm  sm:pb-28 mb-8 pb-8 ">
        <div className="w-full mb-8 ">
          <img
            src={img}
            alt="header"
            className="w-full object-cover h-75 shadow-sm base-300"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold text-2xl md:text-4xl mb-7 px-4 text-center sm:text-left">
            Bicomaru Shogunai
          </h1>
          <p className="font-semibold text-xl mb-7 px-4">
            Mon Rôle & Mes Jutsu de Code
          </p>
          <p className="text-gray-900 mb-7 px-4">
            Bienvenue, jeune Padawan du web ! Préparez-vous à plonger dans
            l'univers de mes <span className="text-green-400">compétences</span>{" "}
            et de ma <span className="text-secondary">passion</span> pour le
            développement. En tant que{" "}
            <span className="text-primary">Web Samurai</span>, je manie le code
            comme un katana, créant des expériences digitales dignes des
            meilleurs arcs d'anime !
          </p>
          <div className="px-4">
            <div className="tooltip mb-2 sm:mb-0">
              <div className="tooltip-right m-3 ">
                <div className="animate-bounce text-orange-400 -rotate-10 text-sm font-black  bg-transparent">
                  Linkedl
                </div>
              </div>
              <button className="btn inline-block bg-secondary text-gray-100 ml-3 sm:ml-0">
                Connecte-toi avec le Sensei
              </button>
            </div>
            <div className="tooltip sm:ml-5" data-tip="Mon CV">
              <button class="btn bg-transparent border border-purple-400 w-fit">Mon Grimoire de Compétences</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
