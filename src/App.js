import About from "./components/About";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <>
      <Navber />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Tours />
      <Education />
      <Footer />
    </>
  );
}

export default App;
