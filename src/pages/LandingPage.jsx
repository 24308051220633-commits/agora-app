import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo-badge">ÁGORA · CBTIS 122</div>
        <nav className="nav-links">
          <Link to="/quienes-somos">Quiénes Somos</Link>
          <Link to="/login" className="btn-login-nav">Iniciar Sesión</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Conecta con tu campus</h1>
        <p>
          Salva el planeta reciclando: dale una segunda vida a tus útiles escolares[cite: 11]. 
          Plataforma institucional para el intercambio y compraventa accesible de insumos en el CBTIS 122[cite: 7].
        </p>
        <div className="ods-badges">
          <span className="ods-tag">ODS 4: Educación de Calidad</span>
          <span className="ods-tag">ODS 10: Reducción de Desigualdades</span>
          <span className="ods-tag">ODS 12: Consumo Responsable</span>
          <span className="ods-tag">ODS 17: Alianzas</span>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 ÁGORA - Mercado Escolar y Comunitario (CBTIS 122)</p>
        <div className="footer-links">
          <Link to="/terminos">Términos</Link>
          <Link to="/condiciones">Condiciones</Link>
        </div>
      </footer>
    </div>
  );
}