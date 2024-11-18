import React from 'react';
import "./Lugar.css";

type LugarProps = {
  onComedorClick: () => void;
};

const Lugar: React.FC<LugarProps> = ({ onComedorClick }) => {
  return (
    <div className='conteiner'>
      <h3 className='titulo'>Lugar</h3>
      <button className='habitacion'>Habitacion</button>
      <button className='comedor' onClick={onComedorClick}>Comedor</button> {/* Añadimos onClick aquí */}
    </div>
  );
};

export default Lugar;
