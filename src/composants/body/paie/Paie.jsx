

function Paie() {
  // const {isform, setForm, formState : {errors}} = useForm();
  // function Submit (data) {
  //   console.log(data);
  // }
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-5">
          <div className=" md:w-1/2">
            <img src="../../public/P2.png" alt="ùission" />
          </div>
          <div className=" md:w-4/5 bg-[#096cff] md:h-full h-full px-12 py-6 rounded-md">
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
                  <button type="submit" className="p-3 bg-amber-400 rounded-br-xl">Payer</button>
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