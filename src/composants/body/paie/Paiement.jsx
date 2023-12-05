
import { useRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function Paiement(close) {
  const refModal = useRef();
  const modalClose = (t) => {
    if (refModal.current === t.target) {
      close();
    }
  }
  return (
    <>
      <div ref={refModal} onClick={modalClose} className="md:px-14 p-4 fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
        <div className="my-5 flex flex-col gap-5">
          <button onClick={close} className="place-self-end font-semibold text-white text-2xl">
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
