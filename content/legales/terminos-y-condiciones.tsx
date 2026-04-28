/**
 * TÉRMINOS Y CONDICIONES — texto regulatorio.
 * No editar sin revisión legal. Fuente: wecome.mx/terminos-y-condiciones-l-wecome-cloned
 */
import { COMPANY } from "@/lib/constants";

export function TerminosYCondicionesContent() {
  return (
    <article className="prose-legal">
      <h1>Términos y Condiciones</h1>
      <p>
        <strong>
          Términos y Condiciones Generales de Crédito y Servicios Financieros —
          {COMPANY.legalName}.
        </strong>
      </p>

      <h2>I. Identificación de la entidad</h2>
      <p>
        {COMPANY.legalName}, Sociedad Financiera de Objeto Múltiple, Entidad No
        Regulada (SOFOM E.N.R.), constituida conforme a las leyes de los Estados
        Unidos Mexicanos, con domicilio en {COMPANY.address}, en lo sucesivo “LA
        SOFOM”.
      </p>

      <h2>II. Aceptación de los términos</h2>
      <p>
        La contratación de cualquier producto o servicio ofrecido por LA SOFOM
        implica la aceptación expresa, total e incondicional de los presentes
        Términos y Condiciones.
      </p>

      <h2>III. Productos y servicios</h2>
      <p>
        LA SOFOM podrá otorgar créditos simples, revolventes, con garantía
        fiduciaria, real o personal.
      </p>

      <h2>IV. Solicitud y autorización del crédito</h2>
      <p>
        La presentación de una solicitud no obliga a LA SOFOM a otorgar el
        crédito. El otorgamiento estará sujeto a análisis de riesgo y
        cumplimiento normativo.
      </p>

      <h2>V. Condiciones financieras</h2>
      <p>
        Las condiciones financieras se establecerán en el contrato
        correspondiente.
      </p>

      <h2>VI. Garantías</h2>
      <p>Podrán constituirse fideicomisos de garantía, prenda o aval.</p>

      <h2>VII. Obligaciones del acreditado</h2>
      <p>
        El acreditado deberá cumplir puntualmente con sus obligaciones de pago y
        proporcionar información veraz.
      </p>

      <h2>VIII. Incumplimiento</h2>
      <p>
        {COMPANY.legalName} podrá declarar el vencimiento anticipado en caso de
        incumplimiento.
      </p>

      <h2>IX. Confidencialidad</h2>
      <p>
        Los datos personales serán tratados conforme a la legislación aplicable.
      </p>

      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos y
        los tribunales competentes de la jurisdicción correspondiente.
      </p>
    </article>
  );
}
