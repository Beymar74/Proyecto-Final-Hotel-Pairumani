"use client";

import { getPlates } from "@/lib/getPlates";
import { useEffect, useState } from "react";
import "./Desayuno.css";
import Plate from "./Plate";

interface PlateType {
  id: string;
  name: string;
  plaimagen: string;
  precio: number;
}
const Almuerzo = () => {
    const [plates, setPlates] = useState<PlateType[]>([]);

    useEffect(() => {
      async function fetchPlates() {
        try {
          const response = await getPlates(
            "https://673629d5aafa2ef2222fb0a8.mockapi.io/menualmuerzo"
          );
          setPlates(response);
        } catch (error) {
          console.error("Error al obtener los platos:", error);
        }
      }
      fetchPlates();
    }, []);
  
    return (
      <section className="desayuno-container">
        <h1 className="des">Almuerzo</h1>
        <div className="grid-container">
          {plates.map((plate) => (
            <Plate key={plate.id} plate={plate} />
          ))}
        </div>
      </section>
    );
  };

export default Almuerzo