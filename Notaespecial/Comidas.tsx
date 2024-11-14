import React from "react";
import Image from "next/image";
import "./Comida.css";

const Comidas = () => {
  return (
    <section className="container">
      <div className="descripcion">
        <div className="nombre">
          <Image
            className="comidas"
            src="/DesayunAmeri.png"
            width={100}
            height={100}
            alt={"Icono de Comidas"}
          />
          <div className="texto">
            <h3 className="name">Desayuno Americano</h3>
            <h2 className="mintexto">Bs 50</h2>
          </div>

          <div className="num">1</div>
          <div className="precio">
            <span>Bs.</span><span>50</span> 
          </div>
        </div>
        <div className="notelim">
          <textarea
            className="comentario"
            id="nota"
            name="comentario"
            placeholder="Agregue una nota(opcional)"
          ></textarea>

          <button className="eliminar">
            <Image
              className="plato"
              src="/Delete.png"
              width={10}
              height={10}
              alt={"Icono de Eliminar"}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comidas;
