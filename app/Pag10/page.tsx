"use client"; 
import React, { useState } from 'react';
import Confirmplus from '@/Notaespecial/Confirmplus';
import Head from '@/Notaespecial/Head';
import Comidas from '@/Notaespecial/Comidas';
import Lugar from '@/Notaespecial/Lugar';
import Opccomedor from '@/Notaespecial/Opccomedor';
import Contipedido from '@/Notaespecial/Contipedido';

const Page = () => {
  const [mostrarOpcComedor, setMostrarOpcComedor] = useState(false);

  const handleComedorClick = () => {
    setMostrarOpcComedor(true);
  };

  return (
    <div>
      <Head />
      <Confirmplus />
      <Comidas />
      <Comidas />
      <Comidas />
      <Lugar onComedorClick={handleComedorClick} /> {/* Pasamos la función como prop */}
      {mostrarOpcComedor && <Opccomedor />} {/* Renderizamos Opccomedor solo si mostrarOpcComedor es true */}
      <Contipedido />
    </div>
  );
};

export default Page;
