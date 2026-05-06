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
        La Unidad Especializada de Atención (UNE) de {COMPANY.legalName} es el
        área responsable de atender y dar seguimiento a las consultas,
        aclaraciones y reclamaciones que presenten los usuarios de nuestros
        productos y servicios financieros, de conformidad con las disposiciones
        de la Comisión Nacional para la Protección y Defensa de los Usuarios de
        Servicios Financieros (CONDUSEF).
      </p>

      <h2>Datos de contacto de la UNE</h2>
      <ul>
        <li>
          <strong>Denominación:</strong> Unidad Especializada de Atención (UNE)
          — {COMPANY.legalName}
        </li>
        <li>
          <strong>Domicilio:</strong> {COMPANY.address}
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          <a href={`tel:${COMPANY.une.phoneE164}`}>{COMPANY.une.phone}</a>
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href={`mailto:${COMPANY.une.email}`}>
            {COMPANY.une.email}
          </a>
        </li>
        <li>
          <strong>Horario de atención:</strong> {COMPANY.hours}
        </li>
      </ul>

      <h2>¿Cómo presentar una consulta, aclaración o reclamación?</h2>
      <p>
        Los usuarios podrán presentar sus consultas, aclaraciones o
        reclamaciones a través de los siguientes medios:
      </p>
      <ol>
        <li>
          <strong>Por teléfono:</strong> Llamando al{" "}
          <a href={`tel:${COMPANY.une.phoneE164}`}>{COMPANY.une.phone}</a> desde
          cualquier parte de la República Mexicana, en horario de atención.
        </li>
        <li>
          <strong>Por correo electrónico:</strong> Enviando su solicitud a{" "}
          <a href={`mailto:${COMPANY.une.email}`}>
            {COMPANY.une.email}
          </a>
          , describiendo claramente los hechos y su petición.
        </li>
        <li>
          <strong>De forma presencial:</strong> Acudiendo a nuestras oficinas
          en el domicilio indicado, en horario de atención.
        </li>
      </ol>

      <h2>Documentación recomendada</h2>
      <p>
        Para agilizar la atención de su reclamación, se recomienda adjuntar o
        presentar los siguientes documentos:
      </p>
      <ul>
        <li>Carta de reclamación firmada, describiendo los hechos.</li>
        <li>Identificación oficial vigente (INE/IFE, pasaporte).</li>
        <li>
          Documentación de respaldo relacionada con el producto o servicio
          (contratos, estados de cuenta, comprobantes de pago, etc.).
        </li>
      </ul>

      <h2>Plazo de respuesta</h2>
      <p>
        {COMPANY.legalName} dará respuesta a las consultas, aclaraciones y
        reclamaciones en un plazo máximo de <strong>30 días hábiles</strong>{" "}
        contados a partir de la fecha de recepción de la solicitud, salvo los
        casos en que la normativa aplicable establezca un plazo distinto.
      </p>

      <h2>CONDUSEF — Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros</h2>
      <p>
        Si no quedara satisfecho con la respuesta de nuestra UNE, o si desea
        orientación adicional sobre sus derechos como usuario de servicios
        financieros, puede acudir a la CONDUSEF:
      </p>
      <ul>
        <li>
          <strong>Teléfono CONDUSEF:</strong>{" "}
          <a href="tel:+525553400999">{REGULATORY.condusefPhone}</a>
        </li>
        <li>
          <strong>Portal:</strong>{" "}
          <a href={REGULATORY.condusefUrl} target="_blank" rel="noreferrer">
            www.condusef.gob.mx
          </a>
        </li>
        <li>
          <strong>Registro de {COMPANY.legalName} en CONDUSEF (SIPRES):</strong>{" "}
          <a
            href={REGULATORY.condusefRecordUrl}
            target="_blank"
            rel="noreferrer"
          >
            Consultar registro
          </a>
        </li>
      </ul>

      <h2>Buró de Entidades Financieras</h2>
      <p>
        El Buró de Entidades Financieras es una herramienta de consulta y
        difusión con la que la CONDUSEF da a conocer los productos que ofrecen
        las entidades financieras, sus comisiones y tasas, las reclamaciones de
        los usuarios, las prácticas no sanas en que incurren, las sanciones
        administrativas que les han impuesto, las cláusulas abusivas de sus
        contratos y otra información que resulte relevante para informar al
        usuario.
      </p>
      <p>
        Esta información permite al usuario comparar y evaluar a las entidades
        financieras, sus productos y servicios, y tomar decisiones informadas.
      </p>
      <ul>
        <li>
          <strong>Portal:</strong>{" "}
          <a href={REGULATORY.buroUrl} target="_blank" rel="noreferrer">
            www.buro.gob.mx
          </a>
        </li>
        <li>
          <strong>Información de {COMPANY.shortName} en el Buró:</strong>{" "}
          <a
            href={REGULATORY.buroSourceUrl}
            target="_blank"
            rel="noreferrer"
          >
            Consultar
          </a>
        </li>
      </ul>
    </article>
  );
}
