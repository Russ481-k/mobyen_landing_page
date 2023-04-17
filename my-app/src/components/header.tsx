import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
        <Image
          src={require("../assets/mobyEN_logo_w.svg")}
          alt="mobyEN_Logo"
          width={100}
          height={24}
          priority
        />
      </a>
      <Link href="/"></Link>
      <Link href="/"></Link>
      <Link href="/"></Link>
    </div>
  );
}
