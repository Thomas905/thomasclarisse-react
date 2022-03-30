import React from "react";
import { NavLink } from "react-router-dom";
import profilimg from "../assets/images/profil.jpg";

const HomePage = () => {
  
  return (
    <div>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/projet">Projet</NavLink>
      <NavLink to="/tarif">Tarif</NavLink>
      <NavLink to="/competences">Compétences</NavLink>
      <NavLink to="/about">À propos</NavLink>
      <img src={profilimg} alt="profil image" />
    </div>
  );
};

export default HomePage;
