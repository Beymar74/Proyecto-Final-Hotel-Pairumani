import React from "react";
import "./Plate.css";

interface PlateProps {
  plate: {
    id: string;
    name: string;
    plaimagen: string;
    precio: number;
  };
}

const Plate = ({ plate }: PlateProps) => {
  return (
    <div className="plate-container">
      <img src={plate.plaimagen} alt={plate.name} />
      <div className="plate-details">
        <h2>{plate.name}</h2>
        <p>Bs. {plate.precio}</p>
      </div>
    </div>
  );
};

export default Plate;
