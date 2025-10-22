import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      {/* page sections go here */}
      {/* <Hero /> */}
      <Hero />

      {/* <About /> */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Skills */}
      <Skills />

      {/* <Projects /> */}
      <Projects />

      {/* <Contact /> */}
      <ContactUs />
    </Layout>
  );
}

export default App;
