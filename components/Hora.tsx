import React from "react";
import ClockComponent from "@/components/Clock"; // Renombrar esta importación

import "./Hora.css";

const Hora = () => {
  return (
    <div className="horablock">
      <h1 className="horatext">Elija la hora</h1>
      <div className="cloki">
        <ClockComponent />
      </div>
    </div>
  );
};

export default Hora;