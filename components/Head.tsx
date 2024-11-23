import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Head.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Head = () => {
  return (
    <section className="cabeza">
      <div className="orden">
        <div className="izq">
          <Link href={"/acceso"} passHref>
            <Image
              className="atras"
              src="/VectorAtras.png"
              width={100}
              height={100}
              alt={"Icono Atrás"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Head;
