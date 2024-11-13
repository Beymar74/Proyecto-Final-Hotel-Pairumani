import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import "./Header3.css";

const Header3 = () => {
  return (
    <header>
      <div className="cont2">
        <Image
          className="pairumani1"
          src="/logoP.png"
          width={100}
          height={100}
          alt={"Logo Hotel Pairumani"}
        />
        <h1 className="h1-2">Hotel Pairumani</h1>
        <Navbar />
        <Image
          className="profile1"
          src="/icono.png"
          width={100}
          height={100}
          alt={"Icono del perfil"}
        />
      </div>
    </header>
  );
};

export default Header3;
