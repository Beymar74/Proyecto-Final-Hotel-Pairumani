import React from "react";
import Image from "next/image";
import "./Header.css";
import Barpro from "./Barpro";

const Header = () => {
  return (
    <header>
      <div className="cont">
        <Image
          className="pairumani"
          src="/logoP.png"
          width={500}
          height={500}
          alt={'Logo Hotel Pairumani'}
        />
        <h1>Hotel Pairumani</h1>
      <Barpro/>
      </div>
    </header>
  );
};

export default Header;
