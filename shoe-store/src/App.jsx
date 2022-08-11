import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Catalogue />
      <Footer />
    </div>
  );
}

export default App;
