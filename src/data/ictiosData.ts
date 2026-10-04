export interface SloganItem {
  title: string;
  subtitle: string;
  badge: string;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  icon: string;
  colSpan?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  imageUrl: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  items: {
    name: string;
    modelOrSpec?: string;
    description: string;
    badge?: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export const HERO_SLOGANS: SloganItem[] = [
  {
    title: "Nos reinventamos en pandemia",
    subtitle: "Contamos con unidad móvil motorhome totalmente equipada para no tener contacto durante las campañas laborales.",
    badge: "Operatividad Segura",
  },
  {
    title: "Equipo de Expertos",
    subtitle: "Profesionales interdisciplinarios comprometidos con la excelencia científica y la precisión en cada proyecto.",
    badge: "Rigor Científico",
  },
  {
    title: "Profesionalismo",
    subtitle: "Responsabilidad, transparencia y eficiencia al servicio de los ecosistemas acuáticos e industriales.",
    badge: "Compromiso Total",
  },
  {
    title: "Ictios S.A. Consultora Ambiental",
    subtitle: "Años de experiencia comprobable liderando monitoreos ambientales, limnología y batimetrías en Argentina.",
    badge: "Trayectoria Comprobable",
  },
];

export const BENTO_CARDS: BentoItem[] = [
  {
    id: "equipo-pro",
    title: "Equipo de Profesionales",
    description: "Contamos con un equipo interdisciplinario integrado por profesionales idóneos de primer nivel: biólogos, acuicultores, químicos, ingenieros, geólogos y especialistas ambientales que realizan sus tareas con máxima solvencia y rigor analítico.",
    highlight: "13+ Especialidades Científicas",
    icon: "Users2",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    id: "confianza",
    title: "Confianza y Trayectoria",
    description: "Nos respaldan años de trabajo ininterrumpido, seriedad y esmero en las cuencas y embalses más exigentes del territorio argentino.",
    highlight: "Auditado por Entes Nacionales",
    icon: "ShieldCheck",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "compromiso",
    title: "Compromiso Indoblegable",
    description: "Nuestra mayor obligación es que cada cliente cuente con dictámenes certeros, mediciones de altísima precisión y total conformidad con la normativa ambiental vigente.",
    highlight: "100% Conformidad Técnica",
    icon: "Award",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: "referencia",
    title: "Sitio de Referencia Oficial",
    description: "Empresa considerada como 'Sitio de Referencia' para el envío de muestras oficiales y estudios acuáticos según la Subdelegación de Aguas del Río Atuel (DGI) y registros ministeriales de Mendoza y Chubut.",
    highlight: "Certificación DGI & DRNR",
    icon: "CheckCircle2",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export const MAIN_SERVICES: ServiceItem[] = [
  {
    id: "batimetria",
    title: "Estudios Batimétricos y Volumétricos",
    category: "Hidrografía & Embalses",
    description: "Estudios de colmatación, curvas cota-volumen y relevamientos batimétricos de alta resolución en ríos, lagos y represas hidroeléctricas.",
    details: [
      "Ecosondas de precisión Raytheon, Apelco y Garmin",
      "Relevamientos satelitales con georreferenciación GPS milimétrica",
      "Modelado de curvas de colmatación y capacidad de embalses",
      "Determinación de sedimentación y dinámica hidrodinámica",
    ],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "calidad-agua",
    title: "Monitoreo de Calidad de Agua & Limnología",
    category: "Química & Limnología",
    description: "Monitoreos periódicos físico-químicos y limnológicos integrales para centrales hidroeléctricas, industrias y cuencas hídricas.",
    details: [
      "Instrumental multiparamétrico HANNA de última generación",
      "Muestreos de profundidad con botellas Van Dörn y Meyer",
      "Evaluación continua de Oxígeno Disuelto, pH, Temperatura y Conductividad",
      "Transparencia óptica con disco de Secchi y análisis de turbidez",
    ],
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fauna-ictica",
    title: "Monitoreos de Fauna Íctica & Dinámica Poblacional",
    category: "Ictiología & Biodiversidad",
    description: "Relevamiento de comunidades de peces silvestres, dinámica reproductiva, migración y censos poblacionales en sistemas lóticos y lénticos.",
    details: [
      "Pesca eléctrica portátil de investigación SAMUS Mod. 725 MP",
      "Baterías de redes estandarizadas y muestreos de selectividad",
      "Seguimiento de madurez sexual, ictiómetros y lectura de escamas",
      "Pistolas marcadoras de peces vivos para estudios de desplazamiento",
    ],
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "piscicultura",
    title: "Piscicultura, Repoblación y Siembras",
    category: "Acuicultura Aplicada",
    description: "Manejo integral de piscifactorías intensivas, jaulas flotantes y programas biológicos de reproducción de especies nativas e introducidas.",
    details: [
      "Captura de reproductores silvestres de Pejerrey, desove e incubación",
      "Campañas de incubación y repoblamiento de Truchas Arco Iris",
      "Unidades móviles con oxígeno comprimido microburbuja para transporte de peces vivos",
      "Manejo de jaulas flotantes y conteo de óvulos/ovas embrionadas",
    ],
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "plancton-vectores",
    title: "Fitoplancton, Zooplancton y Vectores Hídricos",
    category: "Ecología Acuática",
    description: "Monitoreo cuantitativo y cualitativo de comunidades planctónicas y vectores de patologías de origen hídrico para salud pública y ecosistemas.",
    details: [
      "Redes Surber Sampler, Kick Net, Casting Net y redes de plancton",
      "Trampas de Schindler y muestreadores cuantitativos",
      "Detección preventiva de proliferaciones algales y cianobacterias",
      "Vigilancia vectorial en espejos de agua regulados",
    ],
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gestion-ambiental",
    title: "Auditorías & Evaluación de Impacto Ambiental (EIA)",
    category: "Gestión & Normativa",
    description: "Planificación, elaboración de Estudios de Impacto Ambiental, auditorías técnicas y dictámenes periciales sobre ecosistemas.",
    details: [
      "Estudios de Impacto Ambiental (EsIA) para presas, minería e industrias",
      "Planes de Gestión Ambiental basados en lineamientos ISO 14001",
      "Monitoreos de vegetación acuática, flora y fauna terrestre asociada",
      "Emisión de dictámenes técnicos y peritajes ante organismos de control",
    ],
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
];

export const DETAILED_SERVICES_LIST = [
  "Estudios de Colmatación, Volumétricos y Batimetrías en Ríos, Lagos y Embalses",
  "Monitoreos de Calidad de Agua en Ríos, Lagos y Embalses",
  "Monitoreos de Fauna Íctica en Ríos, Lagos y Embalses",
  "Monitoreos de Vectores de Enfermedades de Origen Hídrico",
  "Monitoreos de Vegetación Acuática en Ríos, Lagos y Embalses",
  "Estudios de Limnología en Ríos, Lagos y Embalses",
  "Campañas de Capturas de Reproductores Silvestres de Pejerrey, su desove, incubación y siembras",
  "Campañas de Incubación y Repoblamientos de Truchas Arco Iris",
  "Seguimiento de madurez sexual de peces de la fauna silvestre",
  "Estudios de flora y fauna terrestre",
  "Manejos integrales en Piscifactoría Intensiva de Truchas en Jaulas Flotantes",
  "Análisis de información y emisión de dictámenes sobre ecosistemas",
  "Desarrollo y coordinación o dirección de equipos profesionales de estudio o investigación en materia ambiental",
  "Planificación, organización, administración y/o evaluación de proyectos de gestión ambiental (auditorías ambientales, evaluaciones de impacto ambiental, otras)",
  "Modificación o creación de estrategias para optimizar la gestión de actividades de conservación, recuperación y mejoramiento de los recursos naturales",
];

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: "movilidad",
    name: "Movilidad Terrestre & Campaña",
    icon: "Truck",
    description: "Flota adaptada para acceso a terrenos complejos y campañas prolongadas en aislamiento.",
    items: [
      {
        name: "Camioneta Toyota Hilux SRX",
        modelOrSpec: "Modelo 2017",
        description: "Doble cabina con tracción integral 4x4 equipada para transporte de instrumental de laboratorio y remolque pesado de embarcaciones.",
        badge: "Tracción 4x4",
      },
      {
        name: "Motorhome Citroën Jumper",
        modelOrSpec: "Modelo 2020",
        description: "Unidad adaptada y autónoma que permite efectuar campañas laborales completas en campo sin contacto externo ni dependencia hotelera.",
        badge: "Autonomía en Campo",
      },
      {
        name: "Cuatriciclo Can-Am Outlander",
        modelOrSpec: "570 cc - Modelo 2020",
        description: "Vehículo todo terreno para muestreos en costas inaccesibles, bancos de arena y orillas escarpadas.",
        badge: "Acceso Remoto",
      },
      {
        name: "Moto Enduro Beta",
        modelOrSpec: "350 cc - Modelo 2018",
        description: "Vehículo ágil para reconocimiento expedito de trazas fluviales y cursos de agua de montaña.",
        badge: "Reconocimiento",
      },
      {
        name: "Moto Enduro Yamaha",
        modelOrSpec: "450 cc - Modelo 2008",
        description: "Unidad complementaria de relevamiento rápido en cuencas de difícil penetración.",
        badge: "Apoyo Operativo",
      },
    ],
  },
  {
    id: "nautica",
    name: "Flota Náutica & Motores",
    icon: "Ship",
    description: "Embarcaciones matriculadas ante la Prefectura Naval Argentina y autoridades provinciales.",
    items: [
      {
        name: "Embarcación Casco Semi-Rígido (Lancha)",
        modelOrSpec: "Modelo 2017 / Motor 4T Mod. 2014",
        description: "Matriculada en Prefectura Naval Argentina. Diseñada para navegación en grandes embalses, hidrografía, arrastre de redes y batimetrías.",
        badge: "Prefectura Naval",
      },
      {
        name: "Embarcación Neumática 'HIFEI'",
        modelOrSpec: "Modelo 2015",
        description: "Matriculada en Dirección de Recursos Naturales Renovables de Mendoza. Versátil para ríos rápidos y accesos reducidos.",
        badge: "DRNR Mendoza",
      },
      {
        name: "Embarcación Neumática 'Alovec's'",
        modelOrSpec: "Modelo 2009",
        description: "Matriculada en Dirección de Recursos Naturales Renovables de Mendoza. Empleada para monitoreos limnológicos costeros.",
        badge: "DRNR Mendoza",
      },
      {
        name: "Embarcación Neumática 'BIM'",
        modelOrSpec: "Resolución PNA",
        description: "Bote de apoyo ágil no matriculable por disposición técnica de la Prefectura Naval Argentina.",
        badge: "Auxiliar",
      },
      {
        name: "3 Motores Fuera de Borda",
        modelOrSpec: "Potencias: 60 HP, 20 HP y 2 HP (4 Tiempos)",
        description: "Motores ecológicos de 4 tiempos de baja emisión sonora y nulo residuo de hidrocarburos en agua.",
        badge: "Bajas Emisiones",
      },
    ],
  },
  {
    id: "sistemas-icticos",
    name: "Acuicultura, Peces Vivos & Pesca",
    icon: "Fish",
    description: "Infraestructura especializada para captura selectiva, desove, transporte y marcaje de peces vivos.",
    items: [
      {
        name: "3 Equipos de Transporte de Peces Vivos",
        modelOrSpec: "Sistemas presurizados y refrigerados",
        description: "Dotados de refrigeración, recirculación constante de agua, inyección de oxígeno comprimido por microburbujas y monitoreo permanente de T° y OD.",
        badge: "Soporte Vital",
      },
      {
        name: "Equipo de Pesca Eléctrica Portátil SAMUS",
        modelOrSpec: "Mod. 725 MP",
        description: "Equipo científico homologado para captura selectiva sin mortandad de ejemplares en ríos y arroyos de baja conductividad.",
        badge: "Pesca Científica",
      },
      {
        name: "42 Baterías de Redes Agalleras y de Enmalle",
        modelOrSpec: "Diversas luces de malla normalizadas",
        description: "Baterías completas para muestreos poblacionales de ictiofauna de acuerdo a estándares limnológicos internacionales.",
        badge: "Muestreo Masivo",
      },
      {
        name: "Contador de Óvulos y Ovas Embrionadas",
        modelOrSpec: "Precisión óptica",
        description: "Dispositivo para evaluación de fecundidad, madurez gonadal y desove en truchas y pejerreyes.",
        badge: "Acuicultura",
      },
      {
        name: "Pistola Marcadora de Peces Vivos & Ictiómetros",
        modelOrSpec: "Marcación Floy Tag / Lectora de Escamas",
        description: "Kit para biometría, marcado y recaptura, con equipos completos de disección y análisis esclerocronológico.",
        badge: "Biometría",
      },
      {
        name: "Trampas Pasivas y Equipos Fly Cast",
        modelOrSpec: "Trampeos para arroyos y ríos",
        description: "Trampas pasivas para pequeños peces y peces mayores, 4 cañas fly cast, y 4 redes de mano Pole Net.",
        badge: "Selectividad",
      },
      {
        name: "Conservadoras Especiales de Clasificación",
        modelOrSpec: "1 unidad de 12 compartimentos + 8 conservadoras",
        description: "Conservadoras térmicas para clasificación sectorizada por estación, especie y arte de pesca.",
        badge: "Conservación",
      },
    ],
  },
  {
    id: "batimetria-limnologia",
    name: "Batimetría, Hidrografía & Muestreadores",
    icon: "Compass",
    description: "Sistemas acústicos y muestreadores de fondo y columna de agua.",
    items: [
      {
        name: "Ecosonda para Batimetrías Raytheon",
        modelOrSpec: "Grado Hidrográfico",
        description: "Ecosonda de alta fidelidad para cálculo volumétrico de embalses, perfiles de fondo y detección de colmatación.",
        badge: "Alta Precisión",
      },
      {
        name: "4 Ecosondas de Detección de Peces y Fondo",
        modelOrSpec: "1 Humminbird, 1 Apelco, 2 Garmin",
        description: "Ecosondas con transductores de doble haz para detección de cardúmenes, termoclinas y morfometría de cuenca.",
        badge: "Doble Haz",
      },
      {
        name: "3 Navegadores Satelitales GPS Garmin",
        modelOrSpec: "Receptores de alta sensibilidad",
        description: "Geoposicionamiento milimétrico para trazado de transectas batimétricas y puntos de control limnológico.",
        badge: "Navegación GPS",
      },
      {
        name: "Botellas Tomamuestras de Meyer & Van Dörn",
        modelOrSpec: "Columna de agua y profundidad",
        description: "Toma de muestras certificadas a profundidades estratificadas sin contaminación de capas intermedias.",
        badge: "Estratificación",
      },
      {
        name: "Dragas de Fondo: De Arrastre & Ekman-Birge",
        modelOrSpec: "Muestreo bentónico y sedimentos",
        description: "Extracción cuantitativa de sedimentos, sustratos finos y fauna bentónica en lechos de lagos y ríos.",
        badge: "Sedimentología",
      },
      {
        name: "Redes Limnológicas de Especialidad",
        modelOrSpec: "Surber Sampler, Schindler, Kick Net, Casting Net",
        description: "Bomba tomamuestras de agua y plancton con conjunto de redes micronadas para filtrado de fito y zooplancton.",
        badge: "Plancton & Bentos",
      },
      {
        name: "Disco de Secchi & Odómetros",
        modelOrSpec: "Óptica e hidrometría",
        description: "Medición estándar de transparencia de la columna de agua y odómetros acuáticos y terrestres.",
        badge: "Transparencia",
      },
    ],
  },
  {
    id: "laboratorio-analitico",
    name: "Laboratorio Analítico & Precisión",
    icon: "FlaskConical",
    description: "Instrumentación electrónica de campo y material analítico de vidrio certificado.",
    items: [
      {
        name: "Laboratorio Analítico Portátil de Campo",
        modelOrSpec: "Kits de reactivos y fotometría in situ",
        description: "Determinaciones inmediatas a pie de agua para variables sensibles que se degradan en el traslado.",
        badge: "In Situ",
      },
      {
        name: "Instrumental Multiparamétrico HANNA",
        modelOrSpec: "Oxímetros, Peachímetro, Conductímetro y Termómetro",
        description: "2 Oxímetros electrónicos HANNA, Peachímetro electrónico HANNA, Termómetro digital HANNA y Conductímetro electrónico HANNA.",
        badge: "Calibración Oficial",
      },
      {
        name: "Termistor de Profundidad",
        modelOrSpec: "Perfilador térmico",
        description: "Registro milimétrico de saltos térmicos, termoclinas e hipolimnion en lagos y presas.",
        badge: "Perfil Térmico",
      },
      {
        name: "5 Balanzas Electrónicas de Precisión",
        modelOrSpec: "Calibración digital",
        description: "Determinaciones biométricas y pesaje exacto de muestras a campo.",
        badge: "Precisión Digital",
      },
      {
        name: "Balanza Mecánica de Laboratorio al Miligramo",
        modelOrSpec: "Sensibilidad 0.001 g",
        description: "Pesaje analítico de alta precisión en gabinete y laboratorio de referencia.",
        badge: "Sensibilidad mg",
      },
      {
        name: "Lupas Estereoscópicas y Microscopios Ópticos",
        modelOrSpec: "Óptica de contraste",
        description: "Determinación taxonómica de plancton, bentos, análisis histológico y lectura de escamas.",
        badge: "Microscopía",
      },
      {
        name: "Material Completo de Vidrio de Laboratorio",
        modelOrSpec: "Borosilicato certificado",
        description: "Pipetas, probetas, tubos de ensayo, cajas Petri, matraces Erlenmeyer y frascos con tapón esmerilado.",
        badge: "Gabinete",
      },
    ],
  },
  {
    id: "seguridad-comunicacion",
    name: "Seguridad, Óptica & Telecomunicaciones",
    icon: "Radio",
    description: "Comunicaciones redundantes, equipos de seguridad acuática y relevamiento aerofotográfico.",
    items: [
      {
        name: "Salvavidas Inflables Automáticos y Manuales",
        modelOrSpec: "Aire comprimido CO2 homologados",
        description: "Elementos de protección náutica personal con boyas flúor y luces autosuficientes de señalización acuática.",
        badge: "Norma PNA",
      },
      {
        name: "Equipo de Fotografías Aéreas y Subacuáticas",
        modelOrSpec: "Drones & Cámaras submarinas",
        description: "Relevamientos visuales cenitales de cuencas, frentes de presas y registro subacuático de estructuras.",
        badge: "Visual Sub & Aéreo",
      },
      {
        name: "Binoculares y Monoculares Ópticos",
        modelOrSpec: "Lentes de alta luminosidad",
        description: "Observación de aves acuáticas, fauna ribereña y actividades antrópicas en espejos de agua.",
        badge: "Óptica",
      },
      {
        name: "Comunicaciones en Terreno: Handies y Celulares",
        modelOrSpec: "4 Handies VHF/UHF + 3 Teléfonos satelitales/móviles",
        description: "Canales de comunicación encriptados y directos entre embarcación, base en tierra y motorhome.",
        badge: "Comms Redundantes",
      },
      {
        name: "2 Estaciones Informáticas de Gabinete y 2 Notebooks",
        modelOrSpec: "Con escáner de alta resolución e impresoras",
        description: "Procesamiento in situ de datos de batimetría, cartografía SIG y emisión inmediata de informes de campaña.",
        badge: "Procesamiento SIG",
      },
      {
        name: "Equipamiento Personal de Alta Exigencia",
        modelOrSpec: "Waders, trajes de agua, indumentaria térmica y bolsas de dormir",
        description: "Protección contra hipotermia y climatología extrema en lagos cordilleranos y ríos patagónicos.",
        badge: "Clima Extremo",
      },
      {
        name: "Determinador Solar y Lunar & Logística Pesada",
        modelOrSpec: "Efemérides solilunares, lingas, cuerdas y contrapesos",
        description: "Planificación de muestreos según actividad circadiana y mareográfica; maniobras de fondeo y sujeción pesada.",
        badge: "Logística",
      },
    ],
  },
];

export interface TeamMemberData {
  name: string;
  role: string;
  description: string;
}

export const TEAM_MEMBERS_EXACT: TeamMemberData[] = [
  {
    name: "BRUNO ALEJANDRO MARÍN",
    role: "DIRECCIÓN GENERAL, EJECUTIVA Y COMERCIAL",
    description: "Técnico Universitario en Acuicultura.",
  },
  {
    name: "LILEN MARÍN",
    role: "DIRECCIÓN GENERAL, EJECUTIVA Y COMERCIAL",
    description: "Licenciada en Gestión Ambiental .",
  },
  {
    name: "CLAUDIA PATRICIA GONZÁLEZ",
    role: "COORDINADORA ASUNTOS LEGALES Y HABILITACIONES",
    description: "Apoderada. A cargo de la base de datos de normas legales industriales y ambientales.",
  },
];

export const INTERDISCIPLINARY_ROLES = [
  "Especialistas en Medio Ambiente.",
  "Licenciados en gestión ambiental.",
  "Licenciados en Biodiversidad.",
  "Licenciados en Biología.",
  "Doctores en Química.",
  "Licenciados en Química y Bioquímica.",
  "Arquitectos.",
  "Profesionales en Acuicultura.",
  "Antropólogos.",
  "Geólogos.",
  "Agrimensores.",
  "Topógrafos.",
  "Ingenieros en varias especialidades.",
];

export const ANTECEDENTS_LIST = [
  {
    text: "Inscripta en el Registro de Consultores Ambientales del Ministerio de Ambiente y Obras Públicas del Gobierno de la Provincia de Mendoza.",
    entity: "Gobierno de Mendoza",
  },
  {
    text: "Inscripta en el Registro de Consultores Ambientales del Ministerio de Ambiente del Gobierno de la Provincia del Chubut.",
    entity: "Gobierno del Chubut",
  },
  {
    text: "Empresa considerada como 'Sitio de Referencia' para el envío de muestras oficiales y estudios particulares referidos al ambiente acuático. Certificado expedido por el Departamento General de Irrigación – Subdelegación de Aguas del Río Atuel.",
    entity: "DGI - Río Atuel",
  },
  {
    text: "Posee conocimientos y aplicación certificada en 'SISTEMAS DE GESTIÓN AMBIENTAL' (ISO 14001/96).",
    entity: "Norma ISO 14001",
  },
  {
    text: "Asesora ad-honorem de la Dirección de Recursos Naturales Renovables de la Provincia de Mendoza.",
    entity: "DRNR Mendoza",
  },
  {
    text: "Empresa Certificada por la Jefatura de Fauna de la Dirección de Recursos Naturales Renovables, en los trabajos realizados para las Empresas Hidroeléctricas HINISA e HIDISA.",
    entity: "Centrales HINISA / HIDISA",
  },
  {
    text: "Laboratorio Analítico de Aguas y Suelos Asociado, inscripta en el Registro Provincial de Laboratorios de Servicios Analíticos de la Provincia del Chubut.",
    entity: "Registro Chubut",
  },
  {
    text: "Estudios Ambientales evaluados constantemente por la Autoridad Interjurisdiccional de Cuencas del Río Negro, Limay y Neuquén (AIC).",
    entity: "AIC Río Negro / Limay / Neuquén",
  },
  {
    text: "Estudios Ambientales evaluados por la Administración de Parques Nacionales (Parque Nacional Nahuel Huapi).",
    entity: "Parques Nacionales",
  },
  {
    text: "Estudios Ambientales evaluados constantemente por el Ministerio de Ambiente y Desarrollo Sustentable de la Provincia de Salta.",
    entity: "Ministerio de Salta",
  },
  {
    text: "Estudios Ambientales evaluados constantemente por el Ministerio de Ambiente y Obra Pública de la Provincia de Mendoza.",
    entity: "Ministerio de Mendoza",
  },
  {
    text: "Estudios de Ictiofauna evaluados por el COIRCO (Comité Interjurisdiccional del Río Colorado).",
    entity: "COIRCO Río Colorado",
  },
  {
    text: "Estudios evaluados por ORSEP (Organismo Regional de Seguridad de Presas).",
    entity: "ORSEP Presas",
  },
  {
    text: "Estudios evaluados por el Ente Nacional de Regulación Eléctrica (ENRE).",
    entity: "ENRE",
  },
  {
    text: "Estudios evaluados por el Ministerio de Ambiente y de Obra Pública de la Provincia de San Juan.",
    entity: "Ministerio de San Juan",
  },
];

export interface ClientLogo {
  name: string;
  logo: string;
}

export const FEATURED_CLIENT_LOGOS: ClientLogo[] = [
  { name: "Pampa Energía", logo: "/images/clients/logoClientePampa.png" },
  { name: "AES Argentina Generación", logo: "/images/clients/logoClienteAes.png" },
  { name: "Municipalidad de San Rafael", logo: "/images/clients/logoClienteMuni.png" },
  { name: "Barrick (Minería Responsable)", logo: "/images/clients/logoClienteBarrick.png" },
  { name: "Aeropuertos Argentina 2000", logo: "/images/clients/logoAeropuerto.png" },
  { name: "Arcor", logo: "/images/clients/logoArcor.jpeg" },
  { name: "Club de Pescadores San Rafael", logo: "/images/clients/logoClubPescadores.png" },
  { name: "EDERSA", logo: "/images/clients/logoEdersa.png" },
  { name: "Hidroeléctrica Ameghino S.A.", logo: "/images/clients/logoHidroelectricaAmeghino.jpg" },
  { name: "Irrigación", logo: "/images/clients/logoIrrigacion.jpg" },
  { name: "Minera Santa Cruz", logo: "/images/clients/logoMineraSantaCruz.jpg" },
  { name: "UNCUYO", logo: "/images/clients/logoUNC.jpg" },
];

export const EXACT_CLIENTS_LIST: string[] = [
  "Pampa Energía S.A. (Hidroeléctrica Diamante).",
  "AES Argentina Generación S.A. (Neuquén y R. Negro).",
  "AES Argentina Generación S.A. (San Juan).",
  "AES Argentina Generación S.A. (Salta).",
  "Ente Ejecutivo Embalse Casa de Piedra S.A.",
  "Central Puerto S.A. (Hidroeléctrica Piedra del Águila).",
  "Hidrocuyo S.A. (Embalse Potrerillos).",
  "CEMPPSA (Hidroeléctrica Potrerillos).",
  "Hidroeléctrica Ameghino S.A.",
  "COOPERATIVAS Varias de Provisión de Agua Potable.",
  "Knight Piesold (Consultora Internacional).",
  "Club de Náutica y Pesca Los Reyunos.",
  "Asociación Turística Cañón del Atuel.",
  "Inspección de Cauce con fines turísticos del Río Atuel (Departamento General de Irrigación de la Provincia de Mendoza).",
  "Establecimiento Agropecuario Modelo \"RENACER\".",
  "R.P.B. S.A.",
  "E.P.A.S. (Ente Provincial del Agua y Saneamiento).",
  "Asociación de Pesca con Mosca de San Rafael.",
  "DULCOR S.A.",
  "Coto de Pesca con Mosca \"El Tigre\".",
  "VECTOR S.A.",
  "Hidroeléctrica Pichi Picún Leufú.",
];

export const CLIENTS_LIST = [
  { name: "Pampa Energía S.A.", note: "Hidroeléctrica Diamante" },
  { name: "AES Argentina Generación S.A.", note: "Neuquén, Río Negro, San Juan y Salta" },
  { name: "Barrick Gold", note: "Operaciones Mineras y Cuencas" },
  { name: "Grupo Arcor", note: "Monitoreo Ambiental Industrial" },
  { name: "Central Puerto S.A.", note: "Hidroeléctrica Piedra del Águila" },
  { name: "Ente Ejecutivo Embalse Casa de Piedra S.A.", note: "Monitoreo y Limnología" },
  { name: "Hidrocuyo S.A.", note: "Embalse Potrerillos" },
  { name: "CEMPPSA", note: "Hidroeléctrica Potrerillos" },
  { name: "Hidroeléctrica Ameghino S.A.", note: "Monitoreo de Embalse" },
  { name: "Hidroeléctrica Pichi Picún Leufú", note: "Cuenca Río Limay" },
  { name: "Knight Piésold", note: "Consultora Internacional" },
  { name: "E.P.A.S.", note: "Ente Provincial del Agua y Saneamiento" },
  { name: "R.P.B. S.A. (Baggio)", note: "Control de Calidad Hídrica" },
  { name: "DULCOR S.A.", note: "Gestión Ambiental de Efluentes" },
  { name: "Departamento General de Irrigación", note: "Inspección de Cauce Río Atuel" },
  { name: "VECTOR S.A.", note: "Servicios de Ingeniería" },
  { name: "Club de Náutica y Pesca Los Reyunos", note: "San Rafael, Mendoza" },
  { name: "Asociación Turística Cañón del Atuel", note: "Turismo y Sustentabilidad" },
  { name: "Asociación de Pesca con Mosca de San Rafael", note: "Conservación de Especies" },
  { name: "Coto de Pesca con Mosca 'El Tigre'", note: "Manejo de Especies" },
  { name: "Establecimiento Agropecuario Modelo 'RENACER'", note: "Auditoría Hídrica" },
  { name: "COOPERATIVAS Varias de Provisión de Agua Potable", note: "Calidad de Agua" },
];

export const CONTACT_INFO = {
  company: "Ictios S.A. Consultora Ambiental",
  email: "ictios.sa@gmail.com",
  phones: ["+54 260 465-4299", "+54 260 465-4134"],
  location: "San Rafael, Mendoza, Argentina",
  social: {
    facebook: "https://www.facebook.com/Ictios-SA-Consultora-Ambiental-1914314725528633/",
    instagram: "https://www.instagram.com/ictios.consultora/",
  },
};
