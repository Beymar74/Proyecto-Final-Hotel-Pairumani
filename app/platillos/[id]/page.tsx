import { getPlates } from "@/lib/getPlates";

type Props = {
  params: {
    id: string;
  };
};

const PlatillosPage = async ({ params }: Props) => {
  const { id } = params;

  let data;
  try {
    // Llamada a la API para obtener los datos del platillo
    data = await getPlates(`https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`);
  } catch (error) {
    console.error("Error fetching plate data:", error);
    return (
      <main>
        <h1>Error al cargar el platillo</h1>
        <p>Por favor, intenta de nuevo más tarde.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Platillo: {data.titulo}</h1>
      <p>Precio: {data.precio}</p>
      <p>Descripción: {data.descripcion}</p>
      <p>Ingredientes: {data.ingredientes}</p>
      <img src={data.plaimagen} alt={data.titulo} />
    </main>
  );
};

export default PlatillosPage;
