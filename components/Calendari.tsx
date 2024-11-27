"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar"; // Asegúrate de que la importación sea correcta
import "./Calendari.css";

type Props = {
  setFecha: (value: Date | null) => void; // Recibe la función para actualizar la fecha en el componente padre
};

export function CalendarDemo({ setFecha }: Props) {
  // Estado local para manejar la fecha seleccionada
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Maneja el cambio de fecha
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate); // Actualiza el estado local
    setFecha(newDate || null); // Actualiza la fecha en el componente padre, convirtiendo undefined a null si es necesario
  };

  return (
    <div className="campcalend">
      <Calendar
        mode="single" // Selección de una única fecha
        selected={date} // Fecha seleccionada
        onSelect={handleDateChange} // Función para manejar cambios
        className="rounded-md border" // Clases para estilos
      />
    </div>
  );
}