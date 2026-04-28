/**
 * UNE — Unidad Especializada de Atención. Texto regulatorio CONDUSEF.
 * No editar sin revisión legal.
 */
import { COMPANY, REGULATORY } from "@/lib/constants";

export function UneContent() {
  return (
    <article className="prose-legal">
      <h1>Unidad Especializada de Atención (UNE)</h1>
      <p>
        La Unidad Especializada de Atención de {COMPANY.legalName} es responsable
        de atender y dar seguimiento a las consultas, aclaraciones y
        reclamaciones que presenten los usuarios de nuestros productos y
        servicios financieros.
      </p>

      <h2>Datos de contacto</h2>
      <ul>
        <li>
          <strong>Domicilio:</strong> {COMPANY.address}
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phone}</a>
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href={`mailto:${COMPANY.emails.contact}`}>
            {COMPANY.emails.contact}
          </a>
        </li>
        <li>
          <strong>Horario:</strong> {COMPANY.hours}
        </li>
      </ul>

      <h2>Procedimientos de contacto</h2>
      <ul>
        <li>Comunicarse por teléfono desde cualquier parte de México.</li>
        <li>Enviar solicitudes por correo electrónico.</li>
        <li>Acudir presencialmente a oficinas en horario de atención.</li>
        <li>
          Se recomienda adjuntar carta de reclamación firmada, identificación
          oficial vigente y documentación de respaldo.
        </li>
      </ul>

      <h2>CONDUSEF</h2>
      <p>
        Para protección adicional, los usuarios pueden contactar a la Comisión
        Nacional para la Protección y Defensa de los Usuarios de Servicios
        Financieros (CONDUSEF):
      </p>
      <ul>
        <li>
          <strong>Teléfono:</strong> {REGULATORY.condusefPhone}
        </li>
        <li>
          <strong>Portal:</strong>{" "}
          <a href={REGULATORY.condusefUrl} target="_blank" rel="noreferrer">
            {REGULATORY.condusefUrl}
          </a>
        </li>
        <li>
          <strong>Registro CONDUSEF:</strong>{" "}
          <a
            href={REGULATORY.condusefRecordUrl}
            target="_blank"
            rel="noreferrer"
          >
            consultar registro
          </a>
        </li>
      </ul>
    </article>
  );
}
