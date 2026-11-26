import { Link } from "react-router";

export default function Terminos() {
  return (
    <div className="info-page">
      <h1>Términos de Uso</h1>
      <h3>1. Aceptación y Elegibilidad</h3>
      <p>
        El acceso a la plataforma ÁGORA es completamente gratuito y exclusivo para alumnos matriculados actualmente en el plantel y egresados debidamente registrados mediante correo institucional[cite: 5, 7].
      </p>
      <h3>2. Catálogo de Artículos Permitidos</h3>
      <p>
        Queda estrictamente prohibida la publicación de artículos ajenos al ámbito académico[cite: 3]. Se permiten únicamente: calculadoras, batas de laboratorio, uniformes oficiales, libros de texto, herramientas de taller y material didáctico[cite: 5, 8].
      </p>
      <h3>3. Integridad Académica y Conducta</h3>
      <p>
        Los materiales puestos a la venta deben mantener un costo accesible con fines de apoyo social[cite: 3]. Queda terminantemente prohibida la sobreventa especulativa, la comercialización de exámenes o tareas resueltas, y cualquier forma de acoso[cite: 5].
      </p>
      <Link to="/" className="back-link" style={{ textAlign: "left" }}>← Volver al inicio</Link>
    </div>
  );
}