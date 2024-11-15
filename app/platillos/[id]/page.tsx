import { getPlates } from "@/lib/getPlates";

type Props={
  params:{
    id:string
  }
}

const PlatillosPage =  async({params:{id}}:Props) => {
  // Fetch data from API
  const data= await getPlates(`https://673618865995834c8a956921.mockapi.io/api/v1/Platos/${id}`);
  console.log(data);
  return (
    <main>
      <h1 className="bg-slate-600 flex">Platillo: {data.titulo}</h1>
      <p>Precio: {data.precio}</p>
      <p>Descripción: {data.descripcion}</p>
      <p>Ingredientes: {data.ingredientes}</p>
      <img src={"https://res.cloudinary.com/dvpspq0ry/image/upload/v1731635026/hotel/Pique%20Macho.jpg"} alt={data.titulo} />
      
    </main>
  )
}

export default PlatillosPage
