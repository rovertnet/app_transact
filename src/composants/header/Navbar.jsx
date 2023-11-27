import { useState } from "react";
import {Link} from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import Modal from "./modal/Modal";

function Navbar() {
  const [ showModal, setShowModal ] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "A propos", path: "about" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <>
      <nav className=" bg-blue-950 md:px-14 p-1 max-w-screen-2xl mx-auto text-yellow-400 fixed top-0 right-0 left-0 shadow-md">
        <div className="text-lg container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <a href="#">
              <img className="h-12" src="../../public/snl1.svg" alt="logo" />
            </a>

            <ul className=" md:flex space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  className=" block hover:border-b-4 hover:border-white hover:pb-2 hover:text-white font-semibold cursor-pointer "
                  onactiveclass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          <div className=" space-x-12 hidden md:flex items-center">
            <button
              onClick={() => setShowModal(true)}
              className=" bg-yellow-400 py-2 px-4 text-base font-semibold translate-all duration-300 rounded-3xl text-blue-950   hover:text-yellow-400 hover:bg-[#0c0071]"
            >
              Sign Up
            </button>
            {/* modal */}
          </div>
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none focus:text-[#feff5b]"
            >
              {showMenu ? (
                <HiOutlineXMark className=" h-8 w-8 text-yellow-400 transition-all duration-300" />
              ) : (
                <BiMenuAltRight className=" h-10 w-10 text-yellow-400 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="px-10">
        <div
          className={` space-y-4 mt-16 w-[400] justify-center px-6 py-3 pb-5 bg-blue-950 ${
            showMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              key={link}
              to={path}
              className=" block text-yellow-400 hover:text-white hover:bg-blue-200 hover:py-2 cursor-pointer font-semibold text-xl text-center"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
          <div className=" space-x-12 ">
            <button
              onClick={() => setShowModal(true)}
              offset={-80}
              className=" bg-yellow-400 text-xl w-full py-2 px-4 translate-all duration-300 rounded-3xl text-blue-950 font-semibold hover:text-blue-600 hover:bg-white hover:font-semibold hover:text "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Navbar