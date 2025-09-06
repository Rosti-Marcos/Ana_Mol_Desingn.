"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("usuario");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Guardamos usuario en localStorage para simulación
    localStorage.setItem("user", JSON.stringify({ email, rol }));
    router.push("/");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-gold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select className="form-select" value={rol} onChange={e => setRol(e.target.value)}>
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark w-100">Ingresar</button>
      </form>
    </div>
  );
}
