import React from "react";
import "./Accessories.css";
import { accessories } from "../../data";

const Accessories = () => {
  return (
    <div className="partsContainer">
      {accessories.map((data) => (
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

export default Accessories;
