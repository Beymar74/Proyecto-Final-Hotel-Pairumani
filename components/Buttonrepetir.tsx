import React from "react";
import "./Buttorepetir.css"; 

interface ButtonrepetirProps {
  onClick: () => void;
}

const Buttonrepetir: React.FC<ButtonrepetirProps> = ({ onClick }) => {
  return (
    <button className="boton-repetir" onClick={onClick}>
      Repetir pedido
    </button>
  );
};

export default Buttonrepetir;