import "./App.css"
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Work from "./components/Works/Work";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
