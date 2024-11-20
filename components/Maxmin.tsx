"use client"
import React, { useState } from "react";
import Image from "next/image";
import "./Maxmin.css";

const Cantimaxmin = () => {
    const [personas, setPersonas] = useState<number>(1);

  // Función para aumentar el número de personas
  const aumentar = () => {
    if (personas < 10) {
      setPersonas(personas + 1);
    }
  };

  // Función para disminuir el número de personas
  const disminuir = () => {
    if (personas > 1) {
      setPersonas(personas - 1);
    }
  };
  return (
    <section className="blockmaxmin">
      <div className="opcnum">
        <h3 className="text">Cantidad</h3>
        <div className="maxmin">
          <button className="menos" onClick={disminuir}>
            <Image
              className="min"
              src="/menos.png"
              width={10}
              height={10}
              alt={"Icono Menos"}
            />
          </button>
          {/* Mostrar el número de personas */}
          <h2 className="contador">{personas}</h2>
          <button className="mas" onClick={aumentar}>
            <Image
              className="max"
              src="/mas.png"
              width={10}
              height={10}
              alt={"Icono Más"}
            />
          </button>
        </div>
      </div>
    </section>

  )
}

export default Cantimaxmin
