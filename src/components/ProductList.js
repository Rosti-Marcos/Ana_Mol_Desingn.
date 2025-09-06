export default function ProductList({ productos }) {
  return (
    <div className="row g-4 px-4">
      {productos.map(p => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 border-0">
            <img 
              src={p.img} 
              className="card-img-top"
              alt={p.nombre}
              style={{
                height: "250px",
                objectFit: "cover",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px"
              }}
            />
            <div className="card-body d-flex flex-column p-3">
              <h6 className="card-title fw-bold mb-1">{p.nombre}</h6>
              <p className="card-text small mb-2">${p.precio.toLocaleString()}</p>
              <button className="btn btn-gold btn-sm mt-auto">Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
