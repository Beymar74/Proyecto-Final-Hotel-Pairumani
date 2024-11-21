import React from 'react'
import "./Canconfi.css"
import Link from "next/link"

const Canconfi = () => {
  return (
    <section className='section'>
      <button className='cancelar'>
        <span>Cancelar</span><img src="../cancel.png" alt="x" />
      </button>
      <Link href={"/PantallaConfirmacion"} passHref>
        <button className='confirmar'>
          <span>Confirmar</span><img src="../Carrito.png" alt="R" />
        </button>
      </Link>
    </section>
  )
}

export default Canconfi
