
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Galaxy from "./components/Galaxy";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      
      <div style={{ width: '100%', height:'100vh', position: 'fixed' }}>
        <Galaxy />
      </div>
      {/* Website content */}
      <div >
       <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
