import React from 'react'
import Link from 'next/link'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='barra'>
        <Link href={"/pagina11"}>Chef </Link>
        <Link href={"/orden"}>Mi Orden </Link>
        <Link href={"/historial"}>Historial </Link>
    </div>
  )
}

export default Navbar