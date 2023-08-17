import React from "react";
import "./Parts.css";
import { parts } from "../../data";

const Parts = () => {
  return (
    <div className="partsContainer">
      {parts.map((data) => (
        <div className="cardContainer" key={data.id}>
          <div className="card">
            <img src={data.img} alt="" />
          </div>
          <div className="name">{data.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Parts;
