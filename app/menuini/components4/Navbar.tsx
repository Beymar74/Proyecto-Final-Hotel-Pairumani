import React from 'react'
import Link from 'next/link'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='barra'>
        <Link href={"/resenas"}>Reseñas </Link>
        <Link href={"/acerca"}>Acerca de </Link>
        <Link href={"/orden"}>Mi Orden </Link>
        <Link href={"/historial"}>Historial </Link>
    </div>
  )
}

export default Navbar