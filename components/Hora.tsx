import React from "react";
import "./Hora.css";

type Props = {
  setHora: (hora: string) => void;
};

const Hora: React.FC<Props> = ({ setHora }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHora(e.target.value);
  };

  return (
    <div className="horablock">
      <label htmlFor="horatext">Selecciona la Hora:</label>
      <input id="hora" type="time" onChange={handleChange} />
    </div>
  );
};

export default Hora;