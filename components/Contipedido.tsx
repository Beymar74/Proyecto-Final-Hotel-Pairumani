import React from "react";
import "./Contipedido.css";
import Link from 'next/link';

type ContipedidoProps = {
  total: number;
  onConfirmar: () => void; // Función para confirmar el pedido
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
      <div className="boton">
      <Link href={"/PantallaConfirmacion"} passHref>
        <button className="continuar" onClick={onConfirmar}>
          Continuar el pedido
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Contipedido;