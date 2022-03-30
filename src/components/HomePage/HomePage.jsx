import React from "react";
import { NavLink } from "react-router-dom";
import profilimg from "../../assets/images/profil.jpg";
import "./HomePage.css";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  
  return (
    <div>
      <div className="projet-nav">
        <NavLink to="/projet" className={"slide-line"}>Mes projets</NavLink>
      </div>
      <div className="desktopnav">
        <div className="tarif-nav">
          <NavLink to="/tarif" className={"slide-line-tarif"}>Mes tarifs</NavLink>
        </div>
        <div className="competence-nav">
          <NavLink to="/competences" className={"slide-line-competence"}>Compétences</NavLink>
        </div>
        <div className="why">
          <div className="profil-img">
            <img src={profilimg} alt="profil image" />
          </div>
          <h1 className="white title">THOMAS CLARISSE</h1>
          <span className="orange sub-title">
          <Typewriter
              options={{
                strings: ["Développeur PHP / Symfony", "Développeur REACT ", "UI / UX Designer ", "Free-lance "],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
      <div className="btn-go"><NavLink to="/about">Prêt pour voyager ?</NavLink></div>
    </div>
  );
};

export default HomePage;
