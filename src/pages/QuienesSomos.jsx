import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <div className="info-page">
      <h1>¿Quiénes Somos?</h1>
      <p>
        <strong>ÁGORA</strong> es una plataforma colaborativa y solidaria creada por y para la comunidad estudiantil del <strong>CBTIS 122</strong>[cite: 3, 7]. 
        Nacemos con el propósito de neutralizar la brecha educativa eliminando el retraso académico provocado por la falta de recursos o materiales en el aula[cite: 3].
      </p>
      <h3>Nuestra Misión</h3>
      <p>
        Garantizar que todo estudiante tenga acceso a las herramientas necesarias para su aprendizaje (libros de texto, calculadoras, uniformes, batas y componentes de laboratorio) a través de la solidaridad comunitaria, el trueque y la compraventa accesible[cite: 3, 4, 7, 8].
      </p>
      <h3>Valores Fundamentales</h3>
      <ul>
        <li><strong>Solidaridad Escolar:</strong> Apoyo mutuo entre alumnos de nuevo ingreso y egresados[cite: 4].</li>
        <li><strong>Sostenibilidad:</strong> Reducción del impacto ambiental mediante el reúso y reciclaje escolar[cite: 4].</li>
        <li><strong>Equidad e Inclusión:</strong> Igualdad de oportunidades académicas sin importar los ingresos del hogar[cite: 4, 5].</li>
      </ul>
      <Link to="/" className="back-link" style={{ textAlign: "left" }}>← Volver al inicio</Link>
    </div>
  );
}