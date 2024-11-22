import React from 'react'
import Link from 'next/link'
import "./Buttonregreso.css"
const Buttonrepetir = () => {
  return (
    
    <div className="boton1">
      <Link className="texto" href={"#"} passHref>
          Repetir pedido  
        </Link>
    </div>
  )
}

export default Buttonrepetir
