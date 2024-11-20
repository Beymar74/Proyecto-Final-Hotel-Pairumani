import React from 'react'
import Image from "next/image";
import Link from "next/link";
import "./Barpro.css"

const Barpro = () => {
  return (
    <div className="profileco">
      <Link href={"/acceso"} passHref>
        <button className="button">Acceso</button>
      </Link>
      <div>
      <Image
        className="profile"
        src="/usuario.png"
        width={100}
        height={100}
        alt={"Icono del perfil"}
      />

    </div>
    </div>
    
  )
}

export default Barpro