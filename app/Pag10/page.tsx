// ConfirmarPage.tsx
"use client"; 
import React, { useState } from 'react';
import Confirmplus from '@/components/Confirmplus';
import Head from '@/components/Head';
import Comidas from '@/components/Comidas';
import Lugar from '@/components/Lugar';
import Opccomedor from '@/components/Opccomedor';
import Contipedido from '@/components/Contipedido';
import { CalendarDemo } from '@/components/Calendari';
import Opchabitacion from '@/components/Opchabitacion';
import Hora from '@/components/Hora'; // Renombrar esta importación


const ConfirmarPage = () => {
  const [mostrarOpcComedor, setMostrarOpcComedor] = useState(false);
  const [mostrarOpcHabitacion, setMostrarOpcHabitacion] = useState(false);

  const handleComedorClick = () => {
    setMostrarOpcComedor(true);
    setMostrarOpcHabitacion(false);
  };
  
  const handleHabitacionClick = () => {
    setMostrarOpcComedor(false);
    setMostrarOpcHabitacion(true);
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
      {mostrarOpcHabitacion && <Opchabitacion />}
      <Hora />
      <CalendarDemo />
      <Contipedido />
    </div>
  );
};

export default ConfirmarPage;