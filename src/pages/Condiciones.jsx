import { Link } from "react-router";

export default function Condiciones() {
  return (
    <div className="info-page">
      <h1>Condiciones del Servicio</h1>
      <h3>1. Naturaleza del Servicio</h3>
      <p>
        ÁGORA actúa únicamente como una plataforma web facilitadora y punto de encuentro Marketplace exclusivo para la comunidad escolar[cite: 6]. La plataforma no almacena mercancía ni es propietaria de los artículos ofertados[cite: 6].
      </p>
      <h3>2. Modalidad de Intercambio y Puntos Seguros</h3>
      <p>
        Los acuerdos de precio, donación o trueque se realizan directamente entre los estudiantes[cite: 6]. Por seguridad de los menores de edad, las entregas presenciales y validaciones mediante comprobante QR deben realizarse exclusivamente dentro de las instalaciones del plantel educativo durante el horario escolar[cite: 6, 8, 9].
      </p>
      <h3>3. Privacidad de Datos (Derechos ARCO)</h3>
      <p>
        Los datos recabados se utilizan exclusivamente para gestionar el registro y verificar la pertenencia escolar[cite: 2]. ÁGORA no comercializa datos personales con terceros[cite: 2].
      </p>
      <Link to="/" className="back-link" style={{ textAlign: "left" }}>← Volver al inicio</Link>
    </div>
  );
}