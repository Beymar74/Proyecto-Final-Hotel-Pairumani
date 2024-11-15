// ConfirmarPage.tsx
"use client"; 
import React, { useState } from 'react';
import Confirmplus from '@/Notaespecial/Confirmplus';
import Head from '@/Notaespecial/Head';
import Comidas from '@/Notaespecial/Comidas';
import Lugar from '@/Notaespecial/Lugar';
import Opccomedor from '@/Notaespecial/Opccomedor';
import Contipedido from '@/Notaespecial/Contipedido';
import Hora from '@/Notaespecial/Hora';
import { CalendarDemo } from '@/Notaespecial/Calendari';

const ConfirmarPage = () => {
  const [mostrarOpcComedor, setMostrarOpcComedor] = useState(false);

  const handleComedorClick = () => {
    setMostrarOpcComedor(true);
  };

  const handleHabitacionClick = () => {
    setMostrarOpcComedor(false);
  };

  return (
    <div>
      <Head />
      <Confirmplus />
      <Comidas />
      <Comidas />
      <Comidas />
      <Lugar 
        onComedorClick={handleComedorClick} 
        onHabitacionClick={handleHabitacionClick} 
      />
      {mostrarOpcComedor && <Opccomedor />}
      <Hora />
      <CalendarDemo />
      <Contipedido />
    </div>
  );
};

export default ConfirmarPage;
