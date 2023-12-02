
import About from "./about/About";
import Contact from "./contact/Contacts";
import Banner from "./home/Banner"
import Paie from "./paie/Paie";


function Body() {
  return (
    <div>
      <Banner />
      <About />
      <Paie />
      <Contact />
    </div>
  );
}

export default Body