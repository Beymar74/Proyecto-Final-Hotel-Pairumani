import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import "./Header3.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Header3 = () => {
  return (
    <header>
      <div className="cont2">
        <Link href={"/"} passHref>
          <Image
            className="pairumani1"
            src="/logoP.png"
            width={100}
            height={100}
            alt={"Logo Hotel Pairumani"}
          />
        </Link>
        <Link href={"/"} passHref>
          <h1 className="h1-2">Hotel Pairumani</h1>
        </Link>
        <Navbar />
        <SignedOut>
          <SignInButton>
            <button className="sign-in-button">Acceso</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header3;
