import React, { useState } from "react";
import "./PlanetList.css";

const PlanetList = ({ planets, selectPlanet, isMobileView }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const planetsElement = planets.map((planet) => (
    <button
      key={planet.id}
      onClick={() => selectPlanet(planet.id)}
      className="menu-item"
    >
      {planet.name}
    </button>
  ));

  return (
    <div>
      {isMobileView ? (
        <div>
          <button className="menuButton" onClick={toggleMenu}>
            {menuOpen ? "X" : "☰"}
          </button>
          {menuOpen && <div className="menuContainer">{planetsElement}</div>}
        </div>
      ) : (
        <div className={"planetMenu"}>{planetsElement}</div>
      )}
    </div>
  );
};

export default PlanetList;
