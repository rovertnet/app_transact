

function Paie() {
  // const {isform, setForm, formState : {errors}} = useForm();
  // function Submit (data) {
  //   console.log(data);
  // }
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto" id="paie">
        <h2 className="text-center text-3xl font-extrabold  pb-3 text-blue-600">
          Effectuez votre paiement
        </h2>
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-3 border-t-4 border-blue-600 rounded-xl px-8 pb-5 shadow-md">
          <div className=" md:w-1/2">
            <img src="../../public/P2.png" alt="ùission" />
          </div>
          <div className=" md:w-4/5 bg-[#096cff] md:h-full h-full px-12 lg:py-6 py-6 rounded-xl">
            <h2 className=" md:text-3xl text-xl text-center font-bold leading-normal text-white">
              Paiement de facture
            </h2>
            <div className="px-6">
              <div className="mt-2">
                <p className="text-white text-center pb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Veuillez cliquer sur le bouton ci-bas.
                </p>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="p-3 w-full bg-amber-400 rounded-xl text-lg text-blue-950 font-semibold hover:bg-yellow-100 transition-all duration-300"
                >
                  Payer la facture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paie