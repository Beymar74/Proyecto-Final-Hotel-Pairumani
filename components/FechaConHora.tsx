
"use client";
import React, { useState, useEffect } from "react";
import "./FechaConHora.css"

const FechaConhora = () => {
  const [fechaHora, setFechaHora] = useState(new Date());

  
  const obtenerDiaSemana = (fecha: Date) => {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    return dias[fecha.getDay()];
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setFechaHora(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="hora-fecha">
      <span className="dia">{obtenerDiaSemana(fechaHora)},</span>
      <span className="hora">
        {fechaHora.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </span>
    </div>
  );
};

export default FechaConhora;



