import ProductList from "@/components/ProductList";

export default function ProductosPage() {
  const productos = [
    { id: 1, nombre: "Cartera Ana", precio: 12000, img: "/cartera1.jpeg" },
    { id: 2, nombre: "Bolso Moll", precio: 18000, img: "/cartera2.jpeg" },
    { id: 3, nombre: "Cartera Molly", precio: 18000, img: "/cartera3.jpeg" },
    { id: 4, nombre: "Bolso Molly", precio: 18000, img: "/cartera4.jpeg" },
    { id: 5, nombre: "Cartera Ana", precio: 18000, img: "/cartera5.jpeg" },
    { id: 6, nombre: "Bolso Ana", precio: 18000, img: "/cartera6.jpeg" },
  ];

  return (
    <div>
      <h1 className="mb-4">Nuestros Productos</h1>
      <ProductList productos={productos} />
    </div>
  );
}
