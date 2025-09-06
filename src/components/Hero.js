export default function Hero() {
  return (
    <>
      {/* Fondo para toda la página */}
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('/fondo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1 // Para que esté detrás del contenido
        }}
      />
      <div className="d-flex justify-content-center my-5">
        <div 
          style={{
            borderRadius: "20px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img 
            src="/logo.jpeg" 
            alt="Logo Ana Moll" 
            style={{
              maxWidth: "100px",
              width: "100%",
              height: "auto",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </>
  );
}