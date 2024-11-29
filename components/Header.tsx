import React from "react";
import Image from "next/image";
import "./Header.css";
import Barpro from "./Barpro";

const Header = () => {
  return (
    <header>
      <div className="cont">
        <div className="divimagenpairu">
          <Image
            className="pairumani"
            src="/logoP.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
          <div className="divtextpairu">
            <h1 className="ht">Hotel Pairumani</h1>
          </div>
        </div>

        <Barpro />
      </div>
      <Image
        className="inicio"
        src="/inicio.png"
        width={375}
        height={300}
        alt={"Imagen Inicio"}
      />
      <h2 className="bien">Bienvenido al Hotel</h2>
      <h2 className="bien">Pairumani</h2>
    </header>
  );
};

export default Header;
