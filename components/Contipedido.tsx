import React from "react";
import "./Contipedido.css";
import Link from 'next/link';

type ContipedidoProps = {
  total: number;
  onConfirmar: () => void; 
};

const Contipedido: React.FC<ContipedidoProps> = ({ total, onConfirmar }) => {
  return (
    <div className="container">
      <div className="detalles">
        <div className="seccion">
          <h3>Total</h3>
          <h3>Bs. {total}</h3>
        </div>
      </div>
      <Link href={"/PantallaConfirmacion"} passHref>
      <div className="boton">
        <button className="continuar" onClick={onConfirmar}>
          Continuar el pedido
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Contipedido;