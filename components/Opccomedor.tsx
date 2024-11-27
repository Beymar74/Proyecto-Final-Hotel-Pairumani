import React from "react";
import "./Opccomedor.css";
import Image from "next/image";

type Props = {
  setPersonas: (value: number | null) => void; // Función para actualizar el estado global
};

const Opccomedor: React.FC<Props> = ({ setPersonas }) => {
  const [personas, setLocalPersonas] = React.useState<number>(1);

  const aumentar = () => {
    if (personas < 10) {
      const nuevaCantidad = personas + 1;
      setLocalPersonas(nuevaCantidad);
      setPersonas(nuevaCantidad); // Actualiza el estado global
    }
  };

  const disminuir = () => {
    if (personas > 1) {
      const nuevaCantidad = personas - 1;
      setLocalPersonas(nuevaCantidad);
      setPersonas(nuevaCantidad); // Actualiza el estado global
    }
  };

  return (
    <section>
      <div className="coment">
        <h3>Si escogió Comedor llene lo siguiente</h3>
      </div>
      <div className="opcnum">
        <h3 className="text">#Personas</h3>
        <div className="maxmin">
          <button className="menos" onClick={disminuir}>
            <Image className="min" src="/menos.png" width={10} height={10} alt={"Icono Menos"} />
          </button>
          <h2 className="contador">{personas}</h2>
          <button className="mas" onClick={aumentar}>
            <Image className="max" src="/mas.png" width={10} height={10} alt={"Icono Más"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opccomedor;