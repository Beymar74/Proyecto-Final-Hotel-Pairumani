import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Head.css";

const Head = () => {
  return (
    <section className="cabeza">
      <div className="orden">
        <div className="izq">
          <Link href={"/acceso"} passHref>
            <Image
              className="atras"
              src="/VectorAtras.png"
              width={100}
              height={100}
              alt={"Icono Atrás"}
            />
          </Link>
        </div>
        <div className="der">
          <Link href={"/acceso"} passHref>
            <button className="button">Acceso</button>
          </Link>

          <Image
            className="profile"
            src="/usuario.png"
            width={100}
            height={100}
            alt={"Icono del perfil"}
          />
        </div>
      </div>
    </section>
  );
};

export default Head;
