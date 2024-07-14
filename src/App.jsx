import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div className=" max-container border-[#fff] ">
        <NavBar />
        <section id="home" className="h-[100vh]  ">
          <Home />
        </section>
        <section id="about" className=" bg-gray-100">
          <About />
        </section>
        <section id="projects" className="py-12">
          <Projects />
        </section>
        <section id="contact" className="h-[100vh] bg-gray-100">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
