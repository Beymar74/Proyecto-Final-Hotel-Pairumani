import React from "react";
import "./Opchabitacion.css";

type Props = {
  setHabitacion: (value: string | null) => void;
};

const Opchabitacion: React.FC<Props> = ({ setHabitacion }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitacion(e.target.value );
  };

  return (
    <div className="contenedor">
      <h3 className="titulohabi">#Habitación</h3>
      <input
        className="numhabi"
        type="number"
        placeholder="Ejem: -130-"
        onChange={handleChange}
      />
    </div>
  );
};

export default Opchabitacion;