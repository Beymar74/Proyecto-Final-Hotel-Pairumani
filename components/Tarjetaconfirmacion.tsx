import React from "react";
import "./Tarjetaconfirmacion.css";
import Image from "next/image";

const Tarjetaconfirmacion = () => {
  return (
    <div className="estructuratarjeta">
      <div className="datostarjcon">
        <Image
          className="comiditatarjcon"
          src="/DesayunAmeri.png"
          width={500}
          height={500}
          alt={"Logo Hotel Pairumani"}
        />
        <div className="detallestarjcon">
          <p className="nomplattarcon">Desayuno Americano</p>
          <p className="detalleplattarcon">Bs. 50</p>
        </div>
      </div>
      <p className="precioplattarcon">Bs. 50</p>
    </div>
  );
};

export default Tarjetaconfirmacion;
