import React from "react";
import Tarjetaconfirmacion from "@/components/Tarjetaconfirmacion";
import "./ContenidoConfirmar.css";
const ContenidoConfirmar = () => {
  return (
    <div className="contenidoconfi">
      <p className="advice">¿Estás seguro de que quieres realizar el pedido?</p>
      <div className="suggerenciaa">
        <p className="revisaaa">Revisa tu pedido antes de continuar.</p>
      </div>
      <div className="tarjetinisconfi">
        <Tarjetaconfirmacion />
        <Tarjetaconfirmacion />
        <Tarjetaconfirmacion />
        <Tarjetaconfirmacion />
        <Tarjetaconfirmacion />
        <Tarjetaconfirmacion />
      </div>
      <div className="butonconfi">
        <div className="butonciniconfi">
          <div className="contenedortextconf">
            <p className="textbutconf">Aceptar</p>
          </div>
        </div>
        <div className="butoncinicancelar">
          <div className="contenedortextconf">
            <p className="textbutcancel">Aceptar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoConfirmar;
