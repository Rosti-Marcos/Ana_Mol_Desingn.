"use client";
import Link from "next/link";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className="position-fixed top-0 start-0 vh-100 bg-black text-beige"
      style={{
        width: "250px",
        zIndex: 1200,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease",
        paddingTop: "80px",
        paddingLeft: "20px",
      }}
    >
      <h3 className="text-gold mb-4">Ana Moll Design</h3>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link href="/" className="text-beige text-decoration-none" onClick={toggleSidebar}>Inicio</Link>
        </li>
        <li className="mb-2">
          <Link href="/productos" className="text-beige text-decoration-none" onClick={toggleSidebar}>Productos</Link>
        </li>
         <li className="mb-2">
          <Link href="/nosotros" className="text-beige text-decoration-none" onClick={toggleSidebar}>Nosotros</Link>
        </li>
        <li className="mb-2">
          <Link href="/login" className="text-beige text-decoration-none" onClick={toggleSidebar}>Login</Link>
        </li>
        <li className="mb-2">
          <Link href="/carrito" className="text-beige text-decoration-none" onClick={toggleSidebar}>Carrito</Link>
        </li>
        <li className="mb-2">
          <Link href="/admin" className="text-beige text-decoration-none" onClick={toggleSidebar}>Admin</Link>
        </li>
      </ul>
    </div>
  );
}
