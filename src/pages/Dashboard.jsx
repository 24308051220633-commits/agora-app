import { Link } from "react-router";

export default function Dashboard() {
  const articulos = [
    { id: 1, nombre: "Calculadora Científica", modalidad: "Compraventa accesible", precio: "$150 MXN", especialidad: "Tronco Común" },
    { id: 2, nombre: "Libro de Cálculo", modalidad: "Donación", precio: "Gratuito", especialidad: "5to Semestre" },
    { id: 3, nombre: "Bata de Laboratorio", modalidad: "Trueque", precio: "Intercambio", especialidad: "Química / Lab" },
    { id: 4, nombre: "Paquete de Restirador", modalidad: "Compraventa accesible", precio: "$200 MXN", especialidad: "Dibujo Técnico" },
  ];

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <div className="logo-badge" style={{ textAlign: "center" }}>ÁGORA</div>
          <ul className="sidebar-menu">
            <li><Link to="/dashboard" className="active">Catálogo Escolar</Link></li>
            <li><Link to="/quienes-somos">Acerca del Proyecto</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn-logout">Cerrar sesión</Link>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <h2>ÁGORA Marketplace · Publicaciones Recientes</h2>
          <input type="text" className="search-bar" placeholder="Buscar artículos..." />
        </div>

        <div className="catalog-grid">
          {articulos.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-img-placeholder">[ Espacio para Imagen ]</div>
              <div className="product-info">
                <span className="product-tag">{item.modalidad}</span>
                <h4>{item.nombre}</h4>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>{item.especialidad}</p>
                <p style={{ fontWeight: "bold", marginTop: "0.5rem", color: "#0f172a" }}>{item.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}