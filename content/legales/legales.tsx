/**
 * Información Regulatoria — Buró de Entidades Financieras + supervisión CNBV.
 * Texto regulatorio. No editar sin revisión legal.
 */
import { COMPANY, RATES, REGULATORY } from "@/lib/constants";

export function LegalesContent() {
  return (
    <article className="prose-legal">
      <h1>Información regulatoria</h1>

      <h2>¿Qué es el Buró de Entidades Financieras?</h2>
      <p>
        Es una herramienta de consulta y difusión con la que podrás conocer los
        productos que ofrecen las entidades financieras, sus comisiones y tasas,
        las reclamaciones de los usuarios, las prácticas no sanas en que
        incurren, las sanciones administrativas que les han impuesto, las
        cláusulas abusivas de sus contratos y otra información que resulte
        relevante para informarte sobre su desempeño.
      </p>
      <p>
        Con el Buró de Entidades Financieras, se logrará saber quién es quién en
        bancos, seguros, sociedades financieras de objeto múltiple, cajas de
        ahorro, afores, entre otras entidades. Con ello, podrás comparar y
        evaluar a las entidades financieras, sus productos y servicios, y
        tendrás mayores elementos para elegir lo que más te convenga. Esta
        información te será útil para elegir un producto financiero y también
        para conocer y usar mejor los que ya tienes.
      </p>
      <p>
        Este Buró de Entidades Financieras es una herramienta que puede
        contribuir al crecimiento económico del país, al promover la competencia
        entre las instituciones financieras; impulsará la transparencia al
        revelar información a los usuarios sobre el desempeño de éstas y los
        productos que ofrecen, y facilitará un manejo responsable de los
        productos y servicios financieros al conocer a detalle sus
        características.
      </p>
      <p>
        Lo anterior podrá derivar en un mayor bienestar social, porque al
        conjuntar en un solo espacio tan diversa información del sistema
        financiero, el usuario tendrá más elementos para optimizar su
        presupuesto, mejorar sus finanzas personales, utilizar correctamente los
        créditos que fortalecerán su economía y obtener los seguros que la
        protejan, entre otros aspectos.
      </p>
      <p>
        El Buró de Entidades Financieras contiene información de{" "}
        {COMPANY.legalName} sobre nuestro desempeño frente a los usuarios, por
        la prestación de productos y servicios.
      </p>
      <p>
        <strong>Fuente:</strong>{" "}
        <a href={REGULATORY.buroSourceUrl} target="_blank" rel="noreferrer">
          {REGULATORY.buroSourceUrl}
        </a>
        .
      </p>
      <p>
        Te invitamos a consultarlo en{" "}
        <a href={REGULATORY.buroUrl} target="_blank" rel="noreferrer">
          {REGULATORY.buroUrl}
        </a>
        .
      </p>

      <h2>Información de la entidad</h2>
      <p>
        Nuestra página de internet:{" "}
        <a href="https://wecome.mx" target="_blank" rel="noreferrer">
          www.wecome.mx
        </a>
        .
      </p>
      <p>
        Se informa que {COMPANY.legalName} es una Sociedad Financiera de Objeto
        Múltiple, Entidad No Regulada, que realiza operaciones conforme a la Ley
        General de Organizaciones y Actividades Auxiliares del Crédito que para
        su constitución y operación con carácter de sociedad financiera de
        objeto múltiple, entidad no regulada, no requiere autorización de la
        Secretaría de Hacienda y Crédito Público y únicamente está sujeta a la
        supervisión de la Comisión Nacional Bancaria y de Valores (CNBV) para
        prevenir y detectar los actos, omisiones u operaciones que pudieran
        favorecer, prestar ayuda, auxilio o cooperación de cualquier especie
        para la comisión del delito previsto en el artículo 139 Quáter del
        Código Penal Federal o que pudiesen ubicarse en los supuestos del
        artículo 400 Bis del mismo Código.
      </p>

      <h2>Tasas y CAT vigentes</h2>
      <p>
        Tasa de interés ordinaria promedio anual fija de{" "}
        {RATES.pyme.nominalAnnualAvg}%. CAT promedio: {RATES.pyme.catAvg}% sin
        IVA. Cálculo al {RATES.asOf}, para fines informativos y de comparación,
        sujeto al estudio de riesgo de cada cliente.
      </p>

      <h2>Enlaces oficiales</h2>
      <ul>
        <li>
          <a href={REGULATORY.buroUrl} target="_blank" rel="noreferrer">
            Buró de Entidades Financieras
          </a>
        </li>
        <li>
          <a
            href={REGULATORY.condusefRecordUrl}
            target="_blank"
            rel="noreferrer"
          >
            CONDUSEF — Registro de Wecome (SIPRES)
          </a>
        </li>
        <li>
          <a
            href={REGULATORY.circuloCreditoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Círculo de Crédito
          </a>
        </li>
      </ul>
    </article>
  );
}
