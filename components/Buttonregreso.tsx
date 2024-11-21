import React from 'react'
import "./Buttonregreso.css"
import Link from 'next/link'

const Buttonregreso = () => {
  return (
    <div className='boton'>
       <Link className="buttonregreso" href={"/acceso"} passHref>
          Regreso al inicio
        </Link>
    </div>
  )
}

export default Buttonregreso
