export const Footer = () => {
  return (
    <div>
      <div className="base-300 shadow-sm  sm:pb-28 mb-8  pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold text-2xl md:text-4xl mb-7 text-center">
            Invoquez-moi !
          </h1>
          <p className="text-gray-900 mb-7 px-4">
            Prêt(e) à lancer votre prochaine quête épique ? Une question
            brûlante pour le maître ? Ou juste envie de me lancer un
            'Kon'nichiwa' ? Mon canal de communication est toujours ouvert, prêt
            à recevoir vos messages, chers aventuriers !
          </p>

          <div className=" px-4">
            <div className="tooltip mb-2 sm:mb-0">
              <div className="tooltip-content m-3 ">
                <div className="animate-bounce text-orange-400 -rotate-10 text-sm font-black  bg-transparent">
                 up +
                </div>
              </div>
              <button className="btn inline-block bg-secondary text-gray-100 w-fit ml-3 sm:ml-0">
                 Déposez votre Parchemin (E-mail)
              </button>
            </div>
            <div className="tooltip sm:ml-5" data-tip="😏">
              <button class="btn bg-transparent border border-purple-400 w-fit">
                Rejoignez-moi sur le Réseau Ninja (LinkedIn)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
