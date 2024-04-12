import React, { useState, useEffect } from "react";
import axios from "axios";
import PlanetList from "./components/PlanetList";
import SelectedPlanet from "./components/SelectedPlanet";

function App() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isMobileView, setMobileView] = useState(false);

  const apiUrl = "https://planets-app-api.vercel.app";

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/planets`);
      setPlanets(response.data);
      selectPlanet(response.data[0].id);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  };

  const selectPlanet = async (planetId) => {
    try {
      const response = await axios.get(`${apiUrl}/api/planet/${planetId}`);
      setSelectedPlanet(response.data);
    } catch (error) {
      console.error("Error fetching planet details:", error);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      {planets && (
        <div className={"menu"}>
          <span style={{ padding: "20px" }}>The planets</span>
          <PlanetList
            planets={planets}
            selectPlanet={selectPlanet}
            isMobileView={isMobileView}
          />
        </div>
      )}
      {selectedPlanet && (
        <SelectedPlanet planet={selectedPlanet} isMobileView={isMobileView} />
      )}
    </div>
  );
}

export default App;
