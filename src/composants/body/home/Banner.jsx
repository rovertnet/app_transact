import {motion} from "framer-motion";
import AnimeText from "./AnimeText";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function Banner() {
  const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <div
        className=" md:px-14 px-4 max-w-screen-2xl mx-auto mt-16 mb-8"
        id="accueil"
      >
        <div className=" md:p-9 px-4 py-9 bg-gradient-to-r from-indigo-500 ... rounded-tl-[100px] rounded-br-[100px]">
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* image */}
            <div>
              <img
                className=" lg:h-full md:h-full w-full"
                src="../../../../public/img_banner.png"
                alt="a propos"
              />
            </div>
            {/* La présentation */}
            <div className=" md:w-full">
              <motion.h2
                variants={itemVariants}
                className=" md:text-3xl text-2xl font-bold text-white mb-6 leading-relaxed"
              >
                <AnimeText deley={1} />
              </motion.h2>
              <motion.p
                variants={animationVariants}
                initial="initial"
                animate="animate"
                className=" text-[#f3f4f5] text-xl mb-5 md:text-justify text-justify"
              >
                Simplifiez votre vie financière avec notre plateforme de
                paiement des factures. Payez vos factures en toute sécurité,
                rapidement et sans tracas. Profitez de la commodité d'un
                processus simple et efficace pour gérer vos paiements en ligne.
              </motion.p>
              <a className=" space-x-5 space-y-4 " href="#paie">
                <button className=" py-3 px-6 text-xl text-white font-semibold border-2 border-white rounded-3xl hover:bg-[#8064f9] hover:text-white hover:border-none transition-all duration-300">
                  Payer votre facture
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
