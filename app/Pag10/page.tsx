"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Comidas1 from "@/components/Comidas1";
import Lugar from "@/components/Lugar";
import Opccomedor from "@/components/Opccomedor";
import Contipedido from "@/components/Contipedido";
import { CalendarDemo } from "@/components/Calendari";
import Opchabitacion from "@/components/Opchabitacion";
import Hora from "@/components/Hora";
import Confirmplus from "@/components/Confirmplus";
import Head from "@/components/Head";

const ConfirmarPage = () => {
  const { user } = useUser();
  const [lugar, setLugar] = useState<string | null>(null);
  const [habitacion, setHabitacion] = useState<string | null>(null);
  const [personas, setPersonas] = useState<number | null>(1);
  const [hora, setHora] = useState<string | null>(null);
  const [fecha, setFecha] = useState<Date | null>(new Date());
  const [platos, setPlatos] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [nextOrden, setNextOrden] = useState<number>(1);

  useEffect(() => {
    const fetchNextOrden = async () => {
      try {
        const response = await fetch(
          "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedidocon"
        );
        const data = await response.json();
        const maxOrden = data.reduce(
          (max: number, pedido: any) => Math.max(max, pedido.orden || 0),
          0
        );
        setNextOrden(maxOrden + 1);
      } catch (error) {
        console.error("Error al obtener el próximo número de orden:", error);
      }
    };
    fetchNextOrden();
  }, []);

  useEffect(() => {
    const nuevoTotal = platos.reduce(
      (acc, plato) => acc + plato.precio * plato.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [platos]);

  const handleConfirmar = async () => {
    if (!user) {
      console.error("El usuario no está autenticado.");
      return;
    }

    const username = user.firstName || "Usuario";
    const correo = user.primaryEmailAddress?.emailAddress || "correo@ejemplo.com";
    const imagenperfil = user.imageUrl || "";

    const confirmar = window.confirm(
      "¿Estás seguro de que deseas confirmar este pedido?"
    );
    if (!confirmar) return;

    const ordenpla = platos.map((plato) => ({
      titulo: plato.titulo,
      plaimagen: plato.plaimagen,
      extra: plato.extra || "Sin detalles",
      cantidad: plato.cantidad,
    }));

    const data = {
      username,
      correo,
      imagenperfil,
      orden: nextOrden,
      lugar,
      nhabitacionOpersonas: lugar === "Habitación" ? habitacion : personas,
      fecha: fecha ? fecha.toLocaleDateString() : null,
      hora,
      total,
      id: Math.random().toString(36).substr(2, 9),
      ordenpla,
    };

    try {
      const response = await fetch(
        "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedidocon",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Pedido confirmado y enviado correctamente.");
        const pedidosEliminar = platos.map(async (plato) => {
          await fetch(
            `https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido/${plato.id}`,
            { method: "DELETE" }
          );
        });
        await Promise.all(pedidosEliminar);
      } else {
        console.error("Error al guardar el pedido:", await response.text());
      }
    } catch (error) {
      console.error("Error al confirmar la orden:", error);
    }
  };

  return (
    <div style={{ maxWidth: "375px", margin: "0 auto" }}>
      <Head />
      <Confirmplus />
      <Comidas1 onPlatosChange={(nuevosPlatos) => setPlatos(nuevosPlatos)} />
      <Lugar
        onComedorClick={() => setLugar("Comedor")}
        onHabitacionClick={() => setLugar("Habitación")}
      />
      {lugar === "Comedor" && <Opccomedor setPersonas={setPersonas} />}
      {lugar === "Habitación" && <Opchabitacion setHabitacion={setHabitacion} />}
      <Hora setHora={setHora} />
      <CalendarDemo setFecha={setFecha} />
      <Contipedido total={total} onConfirmar={handleConfirmar} />
    </div>
  );
};

export default ConfirmarPage;