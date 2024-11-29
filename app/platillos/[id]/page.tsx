import { getPlates } from "@/lib/getPlates";
import Headatras from "@/components/Headatras";
import Cantimaxmin from "@/components/Maxmin";
import Canconfi from "@/components/Canconfi";
import Resenas from "@/components/Resenas";
import "./Platillos.css";
import Head2 from "@/components/Head2";

type Plate = {
  id: string;
  titulo: string;
  precio: number;
  plaimagen: string;
  descripcion: string;
  ingredientes: string;
  Resenas: Array<{
    usuario: string;
    comentario: string;
    calificacion: number;
  }>;
};

type Props = {
  params: { id: string };
};

const PlatillosPage = async ({ params }: Props) => {
  const { id } = params;

  try {
    const data: Plate = await getPlates(
      `https://673629d5aafa2ef2222fb0a8.mockapi.io/platos/${id}`
    );

    return (
      <main className="contenidotarjetaaa">
        <Head2 />
        <div className="imagen">
          <img className="plate" src={data.plaimagen} alt={data.titulo} />
        </div>
        <div className="descripcion">
          <h1 className="titulo">Platillo: {data.titulo}</h1>
          <div className="money">
            <p className="precio">
              Precio: <span className="uni">{data.precio}</span>
              <span className="bs">Bs</span>
            </p>
          </div>
          <div className="blockdes">
            <p className="descripcion">Descripción: {data.descripcion}</p>
          </div>
        </div>
        <div className="blocking">
          <h1 className="subtitulo">Ingredientes Principales</h1>
          <p className="lista">Ingredientes: {data.ingredientes}</p>
        </div>

        <Cantimaxmin
          initialCantidad={1}
          data={{
            id: data.id,
            titulo: data.titulo,
            precio: data.precio,
            plaimagen: data.plaimagen,
          }}
        />

        <Resenas resenas={data.Resenas} />
      </main>
    );
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return (
      <main>
        <h1>Error al cargar el platillo</h1>
        <p>Por favor, intenta más tarde.</p>
      </main>
    );
  }
};

export default PlatillosPage;

// Generación de rutas dinámicas (Static Site Generation)
export async function generateStaticParams() {
  try {
    const platos = await fetch(
      "https://673629d5aafa2ef2222fb0a8.mockapi.io/platos"
    ).then((res) => res.json());

    return platos.map((plato: { id: string }) => ({
      id: plato.id,
    }));
  } catch (error) {
    console.error("Error al generar rutas dinámicas:", error);
    return [];
  }
}
