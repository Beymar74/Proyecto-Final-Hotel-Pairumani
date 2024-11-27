"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar"; 
import "./Calendari.css";

type Props = {
  setFecha: (value: Date | null) => void; 
};

export function CalendarDemo({ setFecha }: Props) {
 
  const [date, setDate] = React.useState<Date | undefined>(new Date());

 
  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate); 
    setFecha(newDate || null); 
  };

  return (
    <div className="campcalend">
      <Calendar
        mode="single" 
        selected={date} 
        onSelect={handleDateChange} 
        className="rounded-md border" 
      />
    </div>
  );
}