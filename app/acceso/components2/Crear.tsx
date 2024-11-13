import React from "react";
import "./Crear.css";
import Link from "next/link";

const Crear = () => {
  return (
    <div>
      <div className="cuenta">
        <Link href={"/acceso"} passHref>
          <button className="crear">Crear una cuenta</button>
        </Link>
      </div>
      <div className="ingresar">
        <div className="cajita">
          <Link href={"/acceso"} passHref>
            <button className="google">Continuar con Google</button>
          </Link>
          <Link href={"/acceso"} passHref>
            <button className="facebook">Continuar con Facebook</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Crear;
