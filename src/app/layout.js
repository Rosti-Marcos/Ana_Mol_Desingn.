"use client";
import "../styles/globals.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Botón hamburguesa fuera del sidebar */}
        <button 
          className="btn btn-outline-light position-fixed"
          style={{ top: "20px", left: "20px", zIndex: 1300 }}
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Contenido principal */}
        <main 
          style={{ 
            padding: "20px", 
            marginLeft: sidebarOpen ? "250px" : "0", 
            transition: "margin-left 0.3s" 
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
