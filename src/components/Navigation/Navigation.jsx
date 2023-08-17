import React, { useState } from "react";
import "./Navigation.css";
import Parts from "../Parts/Parts";
import Accessories from "../Accessories/Accessories";
import Clothing from "../Clothing/Clothing";

const Navigation = () => {
  const [selectedSection, setSelectedSection] = useState("parts");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  let mainBackgroundColor = "var(--color-primary)"; // Default background color

  if (selectedSection === "accessories") {
    mainBackgroundColor = "var(--color-secondary)";
  } else if (selectedSection === "clothing") {
    mainBackgroundColor = "var(--color-tertiary)";
  }

  return (
    <div className="navigationContainer">
      <div className="sections">
        <span
          style={{
            backgroundColor:
              selectedSection === "parts"
                ? "var(--color-primary)"
                : "var(--color-primary)",
          }}
          onClick={() => handleSectionClick("parts")}
        >
          Parts
        </span>
        <span
          style={{
            backgroundColor:
              selectedSection === "accessories"
                ? "var(--color-secondary)"
                : "var(--color-secondary)",
          }}
          onClick={() => handleSectionClick("accessories")}
        >
          Accessories
        </span>
        <span
          style={{
            backgroundColor:
              selectedSection === "clothing"
                ? "var(--color-tertiary)"
                : "var(--color-tertiary)",
          }}
          onClick={() => handleSectionClick("clothing")}
        >
          Clothing
        </span>
      </div>
      <div className="main" style={{ backgroundColor: mainBackgroundColor }}>
        {selectedSection === "parts" && <Parts />}
        {selectedSection === "accessories" && <Accessories />}
        {selectedSection === "clothing" && <Clothing />}
        <div className="carouselDots">
          <span
            className="dot"
            onClick={() => handleSectionClick("parts")}
          ></span>
          <span
            className="dot"
            onClick={() => handleSectionClick("accessories")}
          ></span>
          <span
            className="dot"
            onClick={() => handleSectionClick("clothing")}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
