import { useRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function Paiement(onclose) {
  const modRef = useRef();
  const closeMod = (r) => {
    if (modRef.current === r.target) {
      onclose();
    }
  };
  return (
    <>
      <div ref={modRef} onClick={closeMod} className="md:px-14 p-4 fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
        <div className="my-5 flex flex-col gap-5">
          <button onClick={onclose} className="place-self-end font-semibold text-white text-2xl">
            <HiOutlineXMark />
          </button>
          <div className=" bg-slate-200 rounded-xl md:px-14 px-8 py-8 flex flex-col gap-5 items-center mx-4">
            <h2 className="font-extrabold text-2xl">Paiement</h2>
            <form action="">
              <input
                className="md:w-full w-full px-4 py-3 mb-3 rounded-xl"
                type="number"
                placeholder="Tapez le montant à payer"
              />
              <button className="bg-blue-600 text-white rounded-xl px-2 py-1 w-full text-center text-xl font-semibold mt-3 hover:bg-blue-300 hover:text-blue-950">
                Payez maintenant
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paiement;
