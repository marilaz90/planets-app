import React, { useState } from "react";
import "./SelectedPlanet.css";

const SelectedPlanet = ({ planet, isMobileView }) => {
  const [descriptionType, setDescriptionType] = useState("overview");

  const handleDescriptionChange = (type) => {
    setDescriptionType(type);
  };

  return (
    <div className="main">
      {isMobileView && (
        <div className="mobileDescriptionButtons">
          <button
            style={{
              opacity: descriptionType === "overview" ? 1 : 0.5,

              borderBottom:
                descriptionType === "overview"
                  ? "4px solid " + planet.color
                  : "none",
            }}
            className="mobileDescriptionButton"
            onClick={() => handleDescriptionChange("overview")}
          >
            Overview
          </button>
          <button
            style={{
              opacity: descriptionType === "internalStructure" ? 1 : 0.5,

              borderBottom:
                descriptionType === "internalStructure"
                  ? "4px solid " + planet.color
                  : "none",
            }}
            className="mobileDescriptionButton"
            onClick={() => handleDescriptionChange("internalStructure")}
          >
            Structure
          </button>
          <button
            style={{
              opacity: descriptionType === "surfaceGeology" ? 1 : 0.5,

              borderBottom:
                descriptionType === "surfaceGeology"
                  ? "4px solid " + planet.color
                  : "none",
            }}
            className="mobileDescriptionButton"
            onClick={() => handleDescriptionChange("surfaceGeology")}
          >
            Surface
          </button>
        </div>
      )}

      <div className="planetDescription">
        <div style={{ flex: "2" }}>
          {descriptionType === "overview" && (
            <div dangerouslySetInnerHTML={{ __html: planet.overviewSvg }}></div>
          )}
          {descriptionType === "internalStructure" && (
            <div
              dangerouslySetInnerHTML={{ __html: planet.internalStructureSvg }}
            ></div>
          )}
          {descriptionType === "surfaceGeology" && (
            <div
              dangerouslySetInnerHTML={{ __html: planet.surfaceGeologySvg }}
            ></div>
          )}
        </div>
        <div style={{ flex: "1" }} className="planetDesc">
          <div className="descriptionTexts">
            <div className="planetTitle">{planet.name}</div>

            <div>
              {descriptionType === "overview" && planet.overview}
              {descriptionType === "internalStructure" &&
                planet.internalStructure}
              {descriptionType === "surfaceGeology" && planet.surfaceGeology}
            </div>
            <div className="source">
              Source : <u>Wikipedia</u>
            </div>
          </div>
          {!isMobileView && (
            <div className="descriptionButtons">
              <button
                style={{
                  backgroundColor:
                    descriptionType === "overview"
                      ? planet.color
                      : "transparent",
                }}
                className="descriptionButton"
                onClick={() => handleDescriptionChange("overview")}
              >
                01 Overview
              </button>
              <button
                style={{
                  backgroundColor:
                    descriptionType === "internalStructure"
                      ? planet.color
                      : "transparent",
                }}
                className="descriptionButton"
                onClick={() => handleDescriptionChange("internalStructure")}
              >
                02 Internal Structure
              </button>
              <button
                style={{
                  backgroundColor:
                    descriptionType === "surfaceGeology"
                      ? planet.color
                      : "transparent",
                }}
                className="descriptionButton"
                onClick={() => handleDescriptionChange("surfaceGeology")}
              >
                03 Surface Geology
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="details">
        <div className="detailField">
          <div className="detailFieldName">ROTATION TIME</div>
          <div className="detailValue">{planet.rotationTime}</div>
        </div>
        <div className="detailField">
          <div className="detailFieldName">REVOLUTION TIME</div>
          <div className="detailValue">{planet.revolutionTime}</div>
        </div>
        <div className="detailField">
          <div className="detailFieldName">RADIUS</div>
          <div className="detailValue">{planet.radius}</div>
        </div>
        <div className="detailField">
          <div className="detailFieldName">AVERAGE TEMP.</div>
          <div className="detailValue">{planet.averageTemp}</div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlanet;
