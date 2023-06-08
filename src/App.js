import React from "react";
import Title from "../src/components/Title";
import Home from "../src/components/Home";
import About from "../src/components/About";
import News from "../src/components/News";
import Music from "../src/components/Music";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css";

const App = () => {
  return (
    <div>
      <Title />
      <Home />
      <About />
      <News />
      <Music />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
