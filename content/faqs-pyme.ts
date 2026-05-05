import { RATES } from "@/lib/constants";

export type FAQ = {
  q: string;
  a: string;
  category?: "producto" | "proceso" | "tasas" | "garantia" | "regulacion" | "otros";
};

export const FAQS_PYME: FAQ[] = [
  {
    category: "producto",
    q: "¿Qué es Wecome Business Credit?",
    a: "Wecome Business Credit es un crédito empresarial diseñado para PyMEs y personas físicas con actividad empresarial que buscan impulsar su negocio mediante capital de trabajo, compra de equipo, crecimiento o expansión.",
  },
  {
    category: "producto",
    q: "¿Quién puede solicitar un préstamo?",
    a: "Personas físicas con actividad empresarial y empresas legalmente constituidas en México con al menos 6 meses de operación y una garantía inmobiliaria.",
  },
  {
    category: "producto",
    q: "¿Qué monto de financiamiento puedo obtener?",
    a: "El monto del crédito va desde $1,000,000 hasta $3,000,000 MXN, dependiendo del valor de la garantía considerada y la capacidad de pago mensual del cliente.",
  },
  {
    category: "producto",
    q: "¿Cuáles son los plazos para pagar el crédito?",
    a: "Los plazos disponibles van de 12 a 60 meses, según tu proyecto y capacidad de pago. No existe penalización por pagos anticipados.",
  },
  {
    category: "producto",
    q: "¿Necesito tener buen historial crediticio?",
    a: "No necesariamente. En Wecome el historial crediticio no es un factor excluyente. Analizamos el flujo de efectivo y el valor de la garantía.",
  },
  {
    category: "tasas",
    q: "¿Cómo se determina la tasa de interés?",
    a: "La tasa se calcula de forma personalizada considerando historial crediticio, comportamiento fiscal, giro del negocio y valor de la garantía.",
  },
  {
    category: "tasas",
    q: "¿Cuál es la tasa de interés y el CAT?",
    a: `Tasa de interés ordinaria promedio anual fija: ${RATES.pyme.nominalAnnualAvg}%. CAT promedio anual fijo: ${RATES.pyme.catAvg}% sin IVA. Cálculo al ${RATES.asOf}, sujeto al estudio de riesgo de cada cliente.`,
  },
  {
    category: "tasas",
    q: "¿Cobran comisión por apertura?",
    a: "Las comisiones aplicables a nuestros productos financieros se encuentran en proceso de registro ante la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF).",
  },
  {
    category: "tasas",
    q: "¿Puedo hacer pagos anticipados?",
    a: "Sí. En Wecome no hay penalización por pagos anticipados. Los pagos a capital reducen tu plazo o tu mensualidad, según tu conveniencia.",
  },
  {
    category: "proceso",
    q: "¿Cuánto tiempo tarda la aprobación?",
    a: "El avalúo se realiza en 24 a 72 horas y el desembolso ocurre en menos de 5 días hábiles tras la firma del contrato.",
  },
  {
    category: "proceso",
    q: "¿Cómo se formaliza el crédito?",
    a: "Mediante la firma de contrato ante notario público y la inscripción de la garantía en un fideicomiso protocolizado.",
  },
  {
    category: "proceso",
    q: "¿Puedo cancelar mi solicitud?",
    a: "Sí. Puedes cancelar tu solicitud en cualquier momento antes de la firma del contrato sin penalización.",
  },
  {
    category: "proceso",
    q: "¿Cómo puedo dar seguimiento a mi solicitud?",
    a: "A través del portal en línea de Wecome, donde puedes cargar documentos y consultar avances con tu usuario y contraseña.",
  },
  {
    category: "regulacion",
    q: "¿Wecome está regulado?",
    a: "Sí. Wecome es una SOFOM E.N.R., supervisada por CONDUSEF y CNBV en materia de prevención de lavado de dinero y financiamiento al terrorismo.",
  },
  {
    category: "regulacion",
    q: "¿Mi información está segura?",
    a: "Sí. Wecome utiliza sistemas cifrados y protocolos de seguridad avanzados, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  },
  {
    category: "producto",
    q: "¿En qué puedo usar el dinero del crédito?",
    a: "Capital de trabajo, expansión del negocio, pago de deudas empresariales, compra de maquinaria o inventario y remodelaciones.",
  },
  {
    category: "garantia",
    q: "¿Qué pasa si el avalúo de la propiedad no es aprobado?",
    a: "El solicitante únicamente deberá cubrir el costo del avalúo, hasta un tope de $5,000 MXN por evento.",
  },
  {
    category: "garantia",
    q: "¿Qué es una garantía inmobiliaria y por qué se requiere?",
    a: "Es un respaldo real que reduce el riesgo del crédito y permite ofrecer mejores condiciones. El inmueble sigue siendo propiedad del cliente mientras cumpla con sus pagos.",
  },
  {
    category: "garantia",
    q: "¿Qué sucede si ya tengo un crédito hipotecario sobre el inmueble?",
    a: "Wecome evalúa cada caso de manera personalizada para determinar la viabilidad.",
  },
  {
    category: "garantia",
    q: "¿Qué es el valor de la garantía?",
    a: "El valor comercial estimado de la propiedad determinado mediante un avalúo profesional.",
  },
  {
    category: "proceso",
    q: "¿Qué factores influyen en el monto autorizado?",
    a: "Flujo de efectivo del negocio, historial crediticio, situación fiscal, valor de la garantía y capacidad de pago.",
  },
  {
    category: "producto",
    q: "¿Puedo solicitar un crédito si nunca he tenido historial crediticio?",
    a: "Sí. En Wecome no es obligatorio contar con historial crediticio previo.",
  },
  {
    category: "proceso",
    q: "¿Qué gastos debo cubrir obligatoriamente?",
    a: "Avalúo de la propiedad (aprox. $5,000 MXN), inscripción al fideicomiso y gastos notariales.",
  },
  {
    category: "proceso",
    q: "¿En cuánto tiempo puedo recibir los recursos?",
    a: "En menos de 5 días hábiles tras la formalización del contrato.",
  },
  {
    category: "proceso",
    q: "¿Cómo puedo consultar el estatus de mi trámite?",
    a: "A través del portal en línea con tu usuario y contraseña.",
  },
  {
    category: "regulacion",
    q: "¿Qué pasa si tengo un mal historial en Buró de Crédito?",
    a: "Tener un mal historial no significa un rechazo automático. Wecome evalúa el flujo de efectivo y la garantía de manera integral.",
  },
  {
    category: "regulacion",
    q: "¿Debo estar registrado ante el SAT?",
    a: "Sí. Es indispensable estar activo y dado de alta ante el SAT.",
  },
  {
    category: "regulacion",
    q: "¿Wecome realiza investigaciones regulatorias?",
    a: "Sí. Todas las solicitudes son revisadas conforme a las disposiciones de prevención de lavado de dinero.",
  },
  {
    category: "producto",
    q: "¿Puedo usar el crédito para pagar deudas?",
    a: "Sí, siempre que el destino del crédito sea lícito, empresarial y comprobable.",
  },
  {
    category: "producto",
    q: "¿Wecome ofrece refinanciamiento?",
    a: "Sí. Wecome puede evaluar refinanciamiento de créditos existentes.",
  },
  {
    category: "otros",
    q: "¿Qué cobertura geográfica tiene Wecome?",
    a: "Ciudad de México y Área Metropolitana.",
  },
  {
    category: "regulacion",
    q: "¿Qué sucede con mis datos personales?",
    a: "Los datos personales se tratan conforme al Aviso de Privacidad y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  },
  {
    category: "otros",
    q: "¿Puedo recibir asesoría personalizada?",
    a: "Sí. Desde el primer contacto, el cliente recibe atención humana y directa.",
  },
  {
    category: "otros",
    q: "¿Cómo puedo contactar a un asesor?",
    a: "A través del portal web, WhatsApp, teléfono o videollamada programada.",
  },
  {
    category: "regulacion",
    q: "¿Dónde puedo consultar información oficial sobre Wecome?",
    a: "En el Buró de Entidades Financieras (buro.gob.mx), donde se muestran productos, comisiones y desempeño de la entidad.",
  },
  {
    category: "regulacion",
    q: "¿Qué es el Buró de Entidades Financieras?",
    a: "Es una herramienta de consulta y difusión con la que podrás conocer los productos que ofrecen las entidades financieras, sus comisiones y tasas, las reclamaciones de los usuarios, las prácticas no sanas en que incurren, las sanciones administrativas que les han impuesto, las cláusulas abusivas de sus contratos y otra información que resulte relevante para informarte sobre su desempeño. Con el Buró de Entidades Financieras, se logrará saber quién es quién en bancos, seguros, sociedades financieras de objeto múltiple, cajas de ahorro, afores, entre otras entidades. Con ello, podrás comparar y evaluar a las entidades financieras, sus productos y servicios y tendrás mayores elementos para elegir lo que más te convenga. Esta información te será útil para elegir un producto financiero y también para conocer y usar mejor los que ya tienes. Este Buró de Entidades Financieras, es una herramienta que puede contribuir al crecimiento económico del país, al promover la competencia entre las instituciones financieras; que impulsará la transparencia al revelar información a los usuarios sobre el desempeño de éstas y los productos que ofrecen y que va a facilitar un manejo responsable de los productos y servicios financieros al conocer a detalle sus características. Lo anterior, podrá derivar en un mayor bienestar social, porque al conjuntar en un solo espacio tan diversa información del sistema financiero, el usuario tendrá más elementos para optimizar su presupuesto, para mejorar sus finanzas personales, para utilizar correctamente los créditos que fortalecerán su economía y obtener los seguros que la protejan, entre otros aspectos. El Buró de Entidades Financieras contiene información de WECOME, S.A.P.I. de C.V., SOFOM, E.N.R. sobre nuestro desempeño frente a los Usuarios, por la prestación de productos y servicios. Fuente: https://www.buro.gob.mx/general_gob.php?id_sector=69&id_periodo=41. Te invitamos a consultarlo en la página http://www.buro.gob.mx o en nuestra página de internet https://wecome.mx",
  },
];
