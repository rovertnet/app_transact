import { BsFillSendFill } from "react-icons/bs";

function Contacts() {
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto">
        <h2 className=" md:text-4xl text-center text-3xl font-extrabold pb-10">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-2">
          <div className="md:w-1/2 w-full">
            <img src="../../../public/contact.png" alt="contact" />
          </div>

          <div
            className="md:w-3/4 bg-blue-400 px-6 py-6 rounded-xl"
            id="contact"
          >
            <form action="">
              <div className=" py-6">
                <div className=" ">
                  <input
                    className=" w-full mb-3 border-0 px-6 py-3 rounded-xl"
                    type="text"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="">
                  <input
                    className=" w-full mb-3 border-0 px-6 py-3 rounded-xl"
                    type="text"
                    placeholder="Votre email"
                  />
                </div>
                <div className="">
                  <textarea
                    className=" w-full mb-3 border-0 px-6 py-3 rounded-xl"
                    name="message"
                    placeholder="Votre message"
                    id=""
                    cols="20"
                    rows="5"
                    offset
                  ></textarea>
                </div>
                <button
                  className=" flex bg-blue-600 rounded-xl hover:bg-blue-500 transition-all duration-300 text-white text-xl font-semibold px-6 py-3"
                  type="submit"
                >
                  Envoyer
                  <BsFillSendFill className="font-semibold text-xl text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
