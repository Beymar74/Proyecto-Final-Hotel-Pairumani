import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Canconfi from "@/components/Canconfi";
import Resenas from "@/components/Resenas";
import "./Platillos.css"

type Props = {
  params: {
    id: string;
  };
};

const PlatillosPage = async ({ params: { id } }: Props) => {
  const data = await getPlates(
    `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`
  );
  return (
    <main>
      <Headatras />
      <div className="imagen">
        <img className="plate" src={data.plaimagen} alt={data.titulo} />
      </div>
      <div className="descripcion">
        <h1 className="titulo">Platillo: {data.titulo}</h1>
        <p className="precio">Precio: {data.precio}</p>
        <p className="descripcion">Descripción: {data.descripcion}</p>
      </div>
      <div className="blocking">
        <h1 className="subtitulo">Ingredientes Principales</h1>
        <p className="lista">Ingredientes: {data.ingredientes}</p>
      </div>
      <Cantimaxmin/>
      <Canconfi/>
      <Resenas/>


    </main>
  );
};

export default PlatillosPage;
