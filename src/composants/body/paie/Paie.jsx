

function Paie() {
  // const {isform, setForm, formState : {errors}} = useForm();
  // function Submit (data) {
  //   console.log(data);
  // }
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto">
        <h2 className="text-center text-3xl font-extrabold  pb-3">
          Effectuez votre paiement
        </h2>
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-3 border-t-4 border-blue-600 rounded-xl px-8 shadow-md">
          <div className=" md:w-1/2">
            <img src="../../public/P2.png" alt="ùission" />
          </div>
          <div className=" md:w-4/5 bg-[#096cff] md:h-full h-full px-12 py-6 rounded-xl">
            <h2 className=" md:text-3xl text-xl font-bold mb-2 leading-normal text-white pb-4">
              Paiement de facture
            </h2>
            <div>
              <form action="">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Tapez le montant et le frais"
                    className="md:w-full w-full border-none rounded-tl-xl px-7"
                  />
                  <button
                    type="submit"
                    className="p-3 bg-amber-400 rounded-br-xl"
                  >
                    Payer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paie