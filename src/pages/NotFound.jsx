import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="info-page" style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "4rem", border: "none", marginBottom: "0" }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la ruta que intentas visitar no existe dentro de la plataforma ÁGORA.</p>
      <Link to="/" className="btn-login-nav" style={{ display: "inline-block", marginTop: "1.5rem", color: "white" }}>
        ← Volver al inicio
      </Link>
    </div>
  );
}