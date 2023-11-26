
function Footer() {
  return (
    <>
      <div className=" bg-[#0d0828ed] md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className=" py-12 flex flex-col md:flex-row gap-10">
          <div className=" md:w-1/2 space-y-5">
            <a
              href="/"
              className=" text-2xl font-semibold flex items-center space-x-3 text-violet-400 py-4"
            >
              <img
                className=" h-12 inline-block items-center"
                src="../../public/snl1.svg"
                alt="logo"
              />
            </a>
            <p className=" md:w-1/2 text-slate-200">
              Bienvenue sur le site de notre agence de maquillage et coiffure
              pour femmes!
            </p>
            <div className=" py-4">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" bg-[#faebff] py-1 px-4 rounded-tl-md rounded-bl-md focus:outline-none"
                placeholder="votre e-mail"
              />
              <input
                type="submit"
                value="Envoyer"
                className=" px-4 py-1 -ml-4 rounded-tr-md rounded-br-md bg-blue-500 text-base cursor-pointer text-white hover:bg-slate-300 hover:text-[#410078] transition-all duration-700"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between items-start">
            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Menu</h5>
              <ul className=" space-y-2">
                <a
                  href="#accueil"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="#about"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  A propos
                </a>
                <a
                  href="#contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>

            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Politique</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  CGT
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Politique de confidentialité
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* hr */}
        <hr />
        <div className=" flex flex-col sm:flex-row gap-8 sm:items-center justify-between py-8">
          <p className=" text-base text-slate-300">
            @ snl transaction 2023, tous droits réservés
          </p>
          <div className="flex items-center space-x-5">
            <img
              className=" w-10 h-10 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/X.png"
              alt="réseaux"
            />
            <img
              className=" w-10 h-10 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/facebook.png"
              alt="réseaux"
            />
            <img
              className=" w-22 h-12 cursor-pointer hover:-translate-y-4 transition-all duration-300"
              src="../../public/tiktok.png"
              alt="réseaux"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer