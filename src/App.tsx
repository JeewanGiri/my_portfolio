import { Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import Navbar from "./components/Navbar";
import GalaxyBackground from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "indigo",
        fontFamily: "Inter, sans-serif",
        headings: { fontFamily: "Sora, sans-serif" },
      }}
    >
      <div className="app">
        <Container size="xl">
          <Navbar />
          <GalaxyBackground />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;
