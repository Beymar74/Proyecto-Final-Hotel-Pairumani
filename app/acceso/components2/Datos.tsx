import React from "react";
import "./Datos.css";
import Link from "next/link";

const Datos = () => {
  return (
    <div className="subcaja">
      <div className="tit">
        <h2 className="titulo">Iniciar sesión o crear una cuenta</h2>
      </div>

      <div className="email">
        <div className="caja">
          <div className="texto">
            <h2 className="tex">Email</h2>
          </div>
          <div className="llenar">
            <h2 className="llen">ejemplo@dominio.com</h2>
          </div>
        </div>
      </div>

      <div className="contrasena">
        <div className="caja">
          <div className="texto">
            <h2 className="tex">Contraseña</h2>
          </div>
          <div className="llenar">
            <h2 className="llen">Contraseña</h2>
          </div>
        </div>
      </div>
      <div className="iniciarSesion">
      <Link href={"/acceso"} passHref>
        <button className="button">Iniciar sesión</button>
      </Link>
      </div>
      <div className="olvidarContra">
      <Link href={"/acceso"} passHref>
        <h2 className="linksini">¿Olvidaste tu contraseña?</h2>
      </Link>
      </div>
    </div>
  );
};

export default Datos;
