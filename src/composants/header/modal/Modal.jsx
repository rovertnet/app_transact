import { useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function Modal({onClose}) {
  const [ isLogin, setIslogin ] = useState(true)
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
        onClose();
    }
  }
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="md:px-14 p-4 fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        ref={modalRef}
        onClick={closeModal}
        className="my-5 flex flex-col gap-5"
      >
        <button
          onClick={onClose}
          className="place-self-end font-semibold text-white text-2xl"
        >
          <HiOutlineXMark />
        </button>
        <div className=" bg-slate-200 rounded-xl md:px-14 px-8 py-8 flex flex-col gap-5 items-center mx-4">
          <h2 className="font-extrabold text-2xl">Sign Up</h2>
          <form action="">
            {!isLogin && (
              <input
                className="md:w-full w-full px-4 py-3 mb-3 rounded-xl"
                type="text"
                placeholder="Votre nom"
              />
            )}
            <input
              className="md:w-full w-full px-4 py-3 mb-3 rounded-xl"
              type="text"
              placeholder="Votre e-mail"
            />
            <input
              className="md:w-full w-full px-4 py-3 mb-3 rounded-xl"
              type="password"
              placeholder="Votre mot de passe"
            />
            {isLogin ? (
              <div className=" flex justify-between items-center py-2">
                <div className=" flex justify-start md:text-base space-x-1">
                  <input
                    type="checkbox"
                    value=""
                    placeholder="se souvenir de moi"
                  />
                  <span>se souvenir</span>
                </div>
                <a className=" text-blue-600 md:text-base" href="#">
                  Mot de passe oublié
                </a>
              </div>
            ) : (
              <div className=" flex justify-start md:text-base space-x-1 px-5 py-2">
                <input
                  type="checkbox"
                  value=""
                  placeholder="se souvenir de moi"
                />
                <span>J'accepte toutes les conditions</span>
              </div>
            )}
            <button className="bg-[#096cff] px-4 py-2 text-white rounded-xl place-self-end text-xl font-semibold md:w-full w-full">
              {isLogin ? "connectez-vous" : " Inscrivez-vous"}
            </button>
          </form>
          {isLogin ? (
            <p className="text-center">
              Vous n'avez pas de compte?{" "}
              <button
                onClick={() => setIslogin(false)}
                className="text-[#096cff] "
              >
                Inscrivez-vous
              </button>
            </p>
          ) : (
            <p className="text-center">
              Vous avez déjà un compte?{" "}
              <button
                onClick={() => setIslogin(true)}
                className="text-[#096cff] "
              >
                Connectez-vous
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
