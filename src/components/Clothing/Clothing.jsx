import React from "react";
import "./Clothing.css";
import { clothing } from "../../data";

const Clothing = () => {
  return (
    <div className="partsContainer">
      {clothing.map((data) => (
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

export default Clothing;
