import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Competence from "./pages/Competence/Competence";
import Home from "./pages/Home/Home";
import Projet from "./pages/Projet/Projet";
import Tarif from "./pages/Tarif/Tarif";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/competences" element={<Competence />} />
        <Route path="/about" element={<About />} />
        /* Error 404 */
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
