import Navbar from "./components/Navbar"
import Home from "./components/Home"
import TapSocial from "./components/TapSocial"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Portfolio/>
      <Skill/>
      <Contact/>

      <TapSocial/>
    </div>
  );
}

export default App;
