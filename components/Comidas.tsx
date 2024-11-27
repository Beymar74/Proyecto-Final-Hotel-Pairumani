import React, { useState } from "react";
import Image from "next/image";
import "./Comida.css";

interface ComidasProps {
  comidas: {
    id: string;
    titulo: string;
    plaimagen: string;
    precio: number;
    cantidad: number;
    total: number;
    extra?: string;
  };
  onExtraSubmit: (id: string, value: string) => void; // Función para guardar el extra
  onEliminar: (id: string) => void; // Función para eliminar un elemento
}

const Comidas = ({ comidas, onExtraSubmit, onEliminar }: ComidasProps) => {
  const { id, titulo, plaimagen, total, cantidad } = comidas;
  const [localExtra, setLocalExtra] = useState(comidas.extra || ""); // Estado local para manejar el input

  const handleSubmit = () => {
    console.log(`Guardando extra para el plato con ID ${id}:`, localExtra);

  // Llama a la función de actualización
  onExtraSubmit(id, localExtra);

  // Mensaje de confirmación
  alert("Extra guardado correctamente.");
  };

  return (
    <section className="container">
      <div className="descripcion" key={id}>
        <div className="nombre">
          <img className="comidas" src={plaimagen} alt={titulo} />
          <div className="texto">
            <h3 className="name">{titulo}</h3>
            <h2 className="mintexto">Cantidad: {cantidad}</h2>
          </div>
          <div className="precio1">
            <span>Total Bs.</span>
            <span>{total}</span>
          </div>
        </div>
        <div className="notelim">
          <input
            className="comentario"
            type="text"
            placeholder="Alergias o ingredientes a excluir"
            value={localExtra} // Controlado por el estado local
            onChange={(e) => setLocalExtra(e.target.value)} // Actualiza el estado local
          />
          <button className="submit" onClick={handleSubmit}>
            Guardar
          </button>
          <button className="eliminar" onClick={() => onEliminar(id)}>
            <Image
              className="plato"
              src="/Delete.png"
              width={20}
              height={20}
              alt="Icono de Eliminar"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comidas;