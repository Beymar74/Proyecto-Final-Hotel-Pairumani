import React from "react";
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
  };
  onEliminar: (id: string) => void; 
}

const Comidas = ({ comidas, onEliminar }: ComidasProps) => {
  const { id, titulo, plaimagen, precio, cantidad, total } = comidas;

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
          />
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