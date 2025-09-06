import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

export default function HomePage() {
  const productos = [
    { id: 1, nombre: "Cartera Ana", precio: 12000, img: "/cartera5.jpeg" },
    { id: 2, nombre: "Bolso Moll", precio: 18000, img: "/cartera6.jpeg" },
    { id: 3, nombre: "Cartera Lux", precio: 22000, img: "/cartera1.jpeg" },
    { id: 4, nombre: "Bolso Premium", precio: 25000, img: "/cartera4.jpeg" },
  ];

  return (
    <>
      <Hero />
      <section className="my-5 container">
        <h2 className="text-center text-gold mb-4 fw-bold">Productos Destacados</h2>
        <ProductList productos={productos} />
      </section>
    </>
  );
}
