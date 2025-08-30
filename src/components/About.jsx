import img from "../assets/img_04.jpg";

export const About = () => {
  return (
    <div>
      <header className="base-300 shadow-sm  sm:pb-28 mb-8">
        <div className="w-full mb-8 ">
          <img
            src={img}
            alt="about"
            className="w-full object-cover h-75 shadow-sm base-300 rounded rounded-top "
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold text-2xl md:text-4xl mb-7">
            À propos de moi
          </h1>
          <p className="text-gray-900 font-thin mb-7">
            Dans l’ombre des lignes de code, je trace mon chemin comme un
            shinobi à la recherche de la perfection. 🖤 Mon parcours est une
            série de quêtes techniques : exploration de frameworks puissants,
            maîtrise des langages ancestraux, et défis professionnels relevés
            avec persévérance.
          </p>
          <p className="text-gray-900 mb-7">
            Mes techniques secrètes incluent TailwindCSS, React, PHP et Laravel, affinées au fil des batailles numériques ⚔️. Chaque projet est une arène, chaque bug un adversaire à vaincre.
          </p>
          <p className="text-gray-900 mb-7">
            Au-delà des batailles professionnelles, je cultive des passions qui nourrissent mon esprit : lecture de mangas, sessions gaming stratégiques, et veille sur les dernières tendances du monde tech 🌌..
          </p>
          <p className="text-gray-900 mb-7">
            Mon objectif ? Élever mes compétences à leur niveau légendaire, et continuer à créer des expériences qui laissent une empreinte durable dans le monde digital ✨.
          </p>
        
        </div>
      </header>
    </div>
  );
};
