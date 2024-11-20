import React from 'react'
import "./Canconfi.css"

const Canconfi = () => {
  return (
    <section className='section'>
        <button className='cancelar'>
            <span>Cancelar</span><img src="../cancel.png" alt="x" />
        </button>
        <button className='confirmar'>
            <span>Confirmar</span><img src="../Carrito.png" alt="R" />
        </button>
      
    </section>
  )
}

export default Canconfi
