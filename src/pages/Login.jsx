import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <p className="auth-subtitle">Acceso exclusivo comunidad CBTIS 122[cite: 9]</p>
        
        <div className="input-group">
          <label>Correo Institucional / Usuario</label>
          <input type="email" placeholder="tu@correo.edu.mx" required />
        </div>

        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" required />
        </div>

        <button type="submit" className="btn-submit">Entrar al Dashboard</button>
        <Link to="/" className="back-link">← Volver al inicio</Link>
      </form>
    </div>
  );
}