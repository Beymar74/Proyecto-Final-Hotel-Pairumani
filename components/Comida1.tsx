"use client";

import React from "react";
import Buttonrepetir from "@/components/Buttonrepetir";
import "./Comida1.css"; 

interface Platillo {
  titulo: string;
  plaimagen: string;
  extra: string;
  cantidad: number;
}

interface Orden {
  id: string;
  username: string;
  correo: string;
  orden: number;
  lugar: string;
  fecha: string;
  hora: string;
  total: number;
  nhabitacionOpersonas: string;
  estado: string;
  ordenpla: Platillo[];
}

interface Comida1Props {
  orden: Orden;
  apiUrl: string;
}

const Comida1: React.FC<Comida1Props> = ({ orden, apiUrl }) => {
  const handleRepetirPedido = async () => {
    try {
      const nuevaOrden = { ...orden, id: undefined }; 

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaOrden),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Pedido repetido con éxito.`);
      } else {
        alert("Error al repetir el pedido.");
      }
    } catch (error) {
      console.error("Error al repetir el pedido:", error);
      alert("Hubo un problema al repetir el pedido.");
    }
  };

  return (
    <div className="cuadro">
      <div>
        <h1 className="comid">#Orden {orden.id}</h1>
        <h1 className="tema">
          Contenido:{" "}
          {orden.ordenpla
            .map((platillo) => `${platillo.titulo} (${platillo.cantidad})`)
            .join(", ")}
        </h1>
        <h1 className="tema">Total: {orden.total} Bs</h1>
      </div>
      <Buttonrepetir onClick={handleRepetirPedido} />
    </div>
  );
};

export default Comida1;

