"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header({ toggleSidebar }) {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-black text-beige position-fixed w-100" style={{ zIndex: 1200 }}>
      <h2 className="text-gold m-0">Ana Moll</h2>
      <button className="btn btn-outline-light d-md-none" onClick={toggleSidebar}>
        ☰
      </button>
      <nav className="d-none d-md-flex gap-3">
        <Link href="/" className="text-beige text-decoration-none">Inicio</Link>
        <Link href="/productos" className="text-beige text-decoration-none">Productos</Link>
        <Link href="/login" className="text-beige text-decoration-none">Login</Link>
        <Link href="/carrito" className="text-beige text-decoration-none">Carrito</Link>
        <Link href="/admin" className="text-beige text-decoration-none">Admin</Link>
      </nav>
    </header>
  );
}
