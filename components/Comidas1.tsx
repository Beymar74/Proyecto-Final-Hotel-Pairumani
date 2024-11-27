import React from "react";
import { useUser } from "@clerk/nextjs";
import Comidas from "@/components/Comidas";
import "./Desayuno.css";

type Comidas1Props = {
  onPlatosChange: (platos: any[]) => void;
};

const Comidas1 = ({ onPlatosChange }: Comidas1Props) => {
  const [comidas, setComidas] = React.useState<any[]>([]);
  const { user } = useUser();

  React.useEffect(() => {
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
      onPlatosChange(comidasFiltradas);
    };

    fetchData();
  }, [user, onPlatosChange]);

  const handleExtraSubmit = (id: string, value: string) => {
    setComidas((prevComidas) =>
      prevComidas.map((comida) =>
        comida.id === id ? { ...comida, extra: value } : comida
      )
    );
    onPlatosChange(
      comidas.map((comida) =>
        comida.id === id ? { ...comida, extra: value } : comida
      )
    );
  };

  const handleEliminar = async (id: string) => {
    try {
      await fetch(`https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido/${id}`, {
        method: "DELETE",
      });

      const nuevasComidas = comidas.filter((comida: any) => comida.id !== id);
      setComidas(nuevasComidas);
      onPlatosChange(nuevasComidas);
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
    }
  };

  return (
    <section>
      <div>
        {comidas.length > 0 ? (
          comidas.map((comida) => (
            <Comidas
              key={comida.id}
              comidas={comida}
              onExtraSubmit={handleExtraSubmit}
              onEliminar={handleEliminar}
            />
          ))
        ) : (
          <p>No hay comidas disponibles para este usuario.</p>
        )}
      </div>
    </section>
  );
};

export default Comidas1;