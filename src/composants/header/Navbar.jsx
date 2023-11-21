import {Link} from "react-scroll";

function Navbar() {
  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "Tarif", path: "tarif" },
    { link: "Nous", path: "about" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <>
      <div className="bg-[#3b4bff] md:px-14 p-4 max-w-screen-2xl mx-auto text-purple-500 fixed top-0 right-0 left-0 shadow-md">
        <div className="text-lg container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <a href="#">
              <img className="h-12" src="../../public/snl1.svg" alt="logo" />
            </a>

            <ul className=" md:flex space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  className=" block hover:text-[#c654c6] cursor-pointer"
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
            <div className=" space-x-12 hidden md:flex items-center">
              <button className=" bg-purple-500 py-2 px-4 translate-all duration-300 rounded-3xl text-white hover:border-2 hover:border-purple-500 hover:text-purple-500 hover:bg-white">
                connexion
              </button>
              {/* modal */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar