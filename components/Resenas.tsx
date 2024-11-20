import React from 'react'
import Image from 'next/image'
import "./Resenas.css"

const Resenas = () => {
  return (
    <section className='blockresenas'>
      <h1 className='title'>Reseñas</h1>
      <div className='coment'>
      <Image
            className="perfil"
            src="/avatar.png"
            width={50}
            height={50}
            alt={"Icono de Comidas"}
          />

        <div className='comentario'>
            <div className='estrellitas'>
                <img src="../star.png" alt="+" />
                <img src="../star.png" alt="+" />
                <img src="../star.png" alt="+" />
                <img src="../star.png" alt="+" />
                <img src="../star.png" alt="+" />
            </div>
            

        </div>
      </div>
    </section>
  )
}

export default Resenas
