import { getPlates } from "@/lib/getPlates";

type Props = {
  params: {
    id: string;
  };
};

const PlatillosPage = async ({ params: { id } }: Props) => {
  const data = await getPlates(`https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`);
  return (
    <main>
      <h1 >Platillo: {data.titulo}</h1>
      <p>Precio: {data.precio}</p>
      <p>Descripción: {data.descripcion}</p>
      <p>Ingredientes: {data.ingredientes}</p>
      <img src={data.plaimagen} alt={data.titulo} />
    </main>
  );
};

export default PlatillosPage;
