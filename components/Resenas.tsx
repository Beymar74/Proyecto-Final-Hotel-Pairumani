import React from "react";
import "./Resenas.css";

type Resena = {
  userid: number;
  nombre: string;
  comentario: string;
  calificacion: number;
  perfimg: string;
};

type ResenasProps = {
  resenas: Resena[];
};

const Resenas: React.FC<ResenasProps> = ({ resenas }) => {
  return (
    <section className="blockresenas">
      <h1 className="title">Reseñas</h1>
      {resenas.length > 0 ? (
        resenas.map((resena, index) => (
          <div key={index} className="coment">
            <div className="perfil">
              <img className="plate" src={resena.perfimg} alt="Foto de perfil" />
            </div>
            <div className="comentario">
              <div className="estrellitas">
                {Array.from({ length: resena.calificacion }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src="/star.png"
                    alt={`Estrella ${starIndex + 1}`}
                  />
                ))}
              </div>
              <p className="text">
                <strong>{resena.nombre}:</strong> {resena.comentario}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="sinResenas">No hay reseñas disponibles.</p>
      )}
    </section>
  );
};

export default Resenas;
