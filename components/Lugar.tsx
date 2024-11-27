// Lugar.tsx
import React from 'react';
import "./Lugar.css";

type LugarProps = {
  onComedorClick: () => void;
  onHabitacionClick: () => void;
};

const Lugar: React.FC<LugarProps> = ({ onComedorClick, onHabitacionClick }) => {
  return (
    <div className='conteiner'>  
      <h3 className='titulo'>Lugar</h3>
      <button className='habitacion' onClick={onHabitacionClick}>Habitación</button>
      <button className='comedor' onClick={onComedorClick}>Comedor</button>
    </div>
  );
};

export default Lugar;
