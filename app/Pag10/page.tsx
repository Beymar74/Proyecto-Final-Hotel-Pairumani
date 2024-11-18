"use client"; 
import React, { useState } from 'react';
import Confirmplus from '@/components/Confirmplus';
import Head from '@/components/Head';
import Comidas from '@/components/Comidas';
import Lugar from '@/components/Lugar';
import Opccomedor from '@/components/Opccomedor';
import Contipedido from '@/components/Contipedido';

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
