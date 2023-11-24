import { useForm } from "react-hook-form";

function Paie() {
  const {isform, setForm, formState : {errors}} = useForm();
  function Submit (data) {
    console.log(data);
  }
  return (
    <>
      <div className=" md:px-14 p-4 max-w-s mx-auto space-y-12">
        <div className=" flex flex-col  md:flex-row justify-between items-center gap-8">
          <div className=" md:w-1/2">
            <img src="../../public/P2.png" alt="ùission" />
          </div>
          <div className=" md:w-4/5 bg-[#bff2ff]">
            <h2 className=" md:text-4xl text-3xl font-extrabold mb-2 leading-normal text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Paiement de facture
            </h2>
            <hr />
            <div>
              <form action="" onSubmit={isform(Submit)}>
                <div>
                  <input
                    type="text"
                    placeholder="Tapez le montant et le frais"
                  />
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