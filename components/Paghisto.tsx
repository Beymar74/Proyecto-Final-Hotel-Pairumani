
import React from "react";
import Volver from "@/components/Volver";
import Dia from "@/components/Dia";
import Comida1 from "@/components/Comida1";
import Histo from "@/components/Histo";
import Head1 from "@/components/Head1";
import "./Paghisto.css";

interface Platillo {
  titulo: string;
  plaimagen: string;
  extra: string;
  cantidad: number;
}

interface Orden {
  id: string;
  username: string;
  correo: string;
  orden: number;
  lugar: string;
  fecha: string;
  hora: string;
  total: number;
  nhabitacionOpersonas: string;
  estado: string;
  ordenpla: Platillo[];
}

interface PaghistoProps {
  ordenes: Orden[];
  apiUrl: string;
}

const Paghisto: React.FC<PaghistoProps> = ({ ordenes, apiUrl }) => {
  return (
    <div className="pagina">
      <Head1 />
      <Histo />
      <Dia />
      <div className="lista">
        {ordenes.map((orden) => (
          <Comida1 key={orden.id} orden={orden} apiUrl={apiUrl} />
        ))}
      </div>
      <Volver />
    </div>
  );
};

export default Paghisto;
