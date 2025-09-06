export default function ProductList({ productos }) {
  return (
    <div className="row g-3" style={{padding:"100px"}}>
      {productos.map(p => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card shadow-sm h-100 border-0" style={{ borderRadius: "12px" }}>
            <img 
              src={p.img} 
              className="card-img-top" 
              alt={p.nombre} 
              style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
            />
            <div className="card-body d-flex flex-column p-3">
              <h6 className="card-title fw-bold mb-1">{p.nombre}</h6>
              <p className="card-text text-muted small mb-2">${p.precio.toLocaleString()}</p>
              <button className="btn btn-dark btn-sm mt-auto">Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}