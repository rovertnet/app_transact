
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Paiement from "./Paiement";

function Paie() {
  const [viewMod, setViewMod] = useState(false);
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto" id="paie">
        <h2 className="text-center text-3xl font-extrabold  pb-3 text-black">
          paiement
        </h2>
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-3 border-t-4 border-indigo-500  rounded-xl px-8 pb-5 shadow-md">
          <div className=" md:w-1/2">
            <img src="../../public/P2.png" alt="ùission" />
          </div>
          <div className=" md:w-4/5 bg-[#bfe2ff] md:h-full h-full px-12 lg:py-6 py-6 rounded-xl">
            <h2 className=" md:text-3xl text-3xl text-center font-bold leading-normal ">
              Paiement de facture
            </h2>
            <div className="px-6">
              <div className="mt-2">
                <p className="text-blue-950 text-center pb-3">
                  Simplifiez votre vie financière avec notre plateforme de
                  paiement des factures.
                </p>
              </div>

              <div className="">
                <button
                  onClick={() => setViewMod(true)}
                  type="submit"
                  className="p-3 w-full flex justify-between space-x-20 bg-[#4180ff] rounded-xl text-lg text-white font-semibold hover:bg-[#5b97ff] transition-all duration-300"
                >
                  Payer la facture <BiRightArrowAlt className=" text-2xl font-semibold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {viewMod &&
        <Paiement close={() => setViewMod(false)} />
      }
    </>
  );
}

export default Paie