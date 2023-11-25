import { HiOutlineXMark } from "react-icons/hi2";

function Modal() {
  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm">
      <div>
        <button>
          <HiOutlineXMark />
        </button>
        <div>
          <h2>Sign Up</h2>
          <form action="">
            <div>
              <input type="text" placeholder="Votre nom" />
              <input type="text" placeholder="Votre e-mail" />
              <input type="password" placeholder="Votre mot de passe" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
