import "../sass/index.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Animation from "../components/Animation/Animation";
import Proficencies from "../components/Proficencies/Proficencies";
import Footer from "../components/Footer/Footer";

export default () => (
  <div>
    <Navbar />
    <Hero />
    <Projects />
    <Animation />
    <Proficencies />
    <Footer />
  </div>
);
