import React from "react";
import Paghisto from "@/components/Paghisto";

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

const apiUrl = "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedidocon";

const Page = async () => {
  
  let ordenes: Orden[] = [];
  try {
    const response = await fetch(apiUrl, { cache: "no-store" });
    ordenes = await response.json();
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
  }

  return (
    <div>
      <Paghisto ordenes={ordenes} apiUrl={apiUrl} />
    </div>
  );
};

export default Page;
