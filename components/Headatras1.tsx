import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Headatras1.css";

const Headatras = () => {
  return (
    <div className="block">
      <div className="contenedorimagenflecha">
        <Link href={"/"} passHref>
          <Image
            className="atras"
            src="/VectorAtras.png"
            width={100}
            height={100}
            alt={"Icono Atrás"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Headatras;
