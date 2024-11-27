import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Head1.css";

const Head = () => {
  return (
    <section className="cabeza">
      <div className="izq">
        <Link href={"/menuini"} passHref>
          <Image
            className="atras"
            src="/Atras.png"
            width={100}
            height={100}
            alt={"Icono Atrás"}
          />
        </Link>
        
      </div>
      <h1 className="historial"> Historial</h1>
    </section>
  );
};

export default Head;
