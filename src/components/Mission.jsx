import img from "../assets/img_001.jpeg";
import img2 from "../assets/img_02.png"
import img3 from "../assets/img_03.png"

const Mission = () => {
  return (
    <div class="card card-side bg-base-200 shadow-sm mb-8">
      <figure>
        <img src={img} className="w-2xl" />
      </figure>
      <div class="card-body  mt-28">
        <h2 class="card-title text-3xl font-extrabold mb-8">
          Arc Narratif : Mission [Numéro]
        </h2>
        <p className=" text-gray-900 md:text-[15px] px-4">
          Pour le compte de la <span className="font-bold">Guilde</span><span className="text-blue-500"> [Nom du Client]</span>, j'ai déployé mes
          compétences de [Votre Rôle Otaku] pour affronter et vaincre la menace
          de [Problème]. Le dénouement ?<span className="text-green-400"> Un succès critique : [Résultat Clé]</span> !
          (Nani?!).
        </p>
        <span className="text-gray-400"> 20XX - 20XX · Art du Code (Web Ninja)</span>
      </div>
    </div>
  );
};
 export const Mission2 = () => {
  return (
    <div class="card card-side bg-base-200 shadow-sm mb-8 flex flex-column sm:flex-row">
      <div class="card-body  mt-28">
        <h2 class="card-title text-3xl font-extrabold mb-8"> Saga Numérique : [Titre de   la Quête]
        </h2>
        <p className=" text-gray-900 max-w-6xl md:text-[15px] px-4">
            Pour la Guilde de [Nom du Client], j'ai enfilé mon armure de Web Samurai 
            pour déjouer une sombre énigme technique. Armé des jutsus du HTML, 
            <span className="text-green-400 font-semibold"> des scrolls</span> du CSS, de la magie du JavaScript, et des <span className="text-blue-400 font-extrabold">arcanes de React</span>, j'ai 
            terrassé les bugs et optimisé les performances jusqu'à atteindre un niveau 
            de puissance inouï ! Le résultat ?<span className="font-bold"> Une victoire retentissante</span>, digne des plus 
            grands mangas shonen ! Osu!
        </p>
        <span className="text-gray-400"> 20XX - 20XX · Voie du Web</span>
      </div>
      <figure>
        <img src={img3} className="w-2xl  h-full md:h-[554px] object-cover" />
      </figure>
    </div>
  );
};
 export const Mission3 = () => {
  return (
    <div class="card card-side bg-base-200 shadow-sm mb-8 flex flex-column sm:flex-row">
      <figure>
        <img src={img2} className="w-2xl  h-full md:h-[554px] object-cover" />
      </figure>
      <div class="card-body  mt-28">
        <h2 class="card-title text-3xl font-extrabold mb-8"> [Quête Épique #3]
        </h2>
        <p className=" text-gray-900 max-w-6xl md:text-[15px] px-4">
          Plongez au coeur  de cette <span className="font-semibold">quête</span> ! Je vous dévoilerai le <span className="font-semibold">Maître</span> pour qui cette 
        artefact numérique a été forgé, mon rôle de Héros dans cette aventure, le 
        boss de fin de niveau que j'ai vaincu, et les récompenses <span className="font-semibold">épiques</span> que j'ai 
        débloquées.
        </p>
        <span className="text-gray-400"> 20XX - 20XX · Maîtrise du Web-Ninjutsu ( ウェブ忍術 )</span>
      </div>
    </div>
  );
};

export default Mission;
