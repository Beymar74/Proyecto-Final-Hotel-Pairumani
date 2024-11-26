"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs"; 
import Comidas from "./Comidas";
import "./Desayuno.css";

function Comidas1() {
  const [comidas, setComidas] = useState([]);
  const { user } = useUser(); 

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !user.emailAddresses || user.emailAddresses.length === 0) return;

      const correoUsuario = user.emailAddresses[0].emailAddress; 

      const response = await fetch(
        "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido"
      );
      const data = await response.json();

      const comidasFiltradas = data.filter(
        (comida: any) => comida.correo === correoUsuario
      );
      setComidas(comidasFiltradas);
    };

    fetchData();
  }, [user]);

  const handleEliminar = async (id: string) => {
    try {

      await fetch(`https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido/${id}`, {
        method: "DELETE",
      });

      setComidas((prevComidas) => prevComidas.filter((comida: any) => comida.id !== id));
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
    }
  };

  return (
    <section>
      <div>
        {comidas.length > 0 ? (
          comidas.map((comida: any) => (
            <Comidas key={comida.id} comidas={comida} onEliminar={handleEliminar} />
          ))
        ) : (
          <p>No hay comidas disponibles para este usuario.</p>
        )}
      </div>
    </section>
  );
}

export default Comidas1;