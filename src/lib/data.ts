// =====================================================================
// CONTENIDO CENTRAL — COREWERK
// Unidad tecnológica de CoreService (Antofagasta, Chile).
// Edita aquí textos, precios y datos. Los componentes leen de este archivo.
// =====================================================================

import { WA_LINK, SITE } from '$lib/seo/site';
export { WA_LINK };

// Helper: enlace de WhatsApp con mensaje pre-cargado personalizado.
export const waLink = (msg: string) =>
	`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

// ---------------------------------------------------------------------
// INDUSTRIAS
// ---------------------------------------------------------------------
export type Industry = {
	id: string;
	name: string;
	icon: string;
	desc: string;
	services: number;
};

export const industries: Industry[] = [
	{
		id: 'mineria',
		name: 'Minería',
		icon: 'pickaxe',
		desc: 'Operaciones de alta exigencia con cero tolerancia al error.',
		services: 5
	},
	{
		id: 'transporte',
		name: 'Transporte y Logística',
		icon: 'truck',
		desc: 'Flotas, rutas y documentación bajo control.',
		services: 5
	},
	{
		id: 'servicios-industriales',
		name: 'Servicios Industriales',
		icon: 'industry',
		desc: 'Contratistas y proveedores mineros digitalizados.',
		services: 5
	},
	{
		id: 'construccion',
		name: 'Construcción',
		icon: 'helmet',
		desc: 'Proyectos, OT y subcontratistas en una sola plataforma.',
		services: 4
	},
	{
		id: 'energia',
		name: 'Energía',
		icon: 'bolt',
		desc: 'Plantas solares y BESS con monitoreo digital.',
		services: 3
	},
	{
		id: 'b2b',
		name: 'Empresas B2B',
		icon: 'briefcase',
		desc: 'PYMEs que quieren vender más y operar mejor.',
		services: 5
	}
];

// ---------------------------------------------------------------------
// UNIDADES DE NEGOCIO (5 servicios principales con tabs)
// ---------------------------------------------------------------------
export type ServiceItem = {
	name: string;
	desc: string;
	price: string;
};

export type Unit = {
	id: string;
	name: string;
	icon: string;
	headline: string;
	desc: string;
	tag: string;
	services: ServiceItem[];
};

export const units: Unit[] = [
	{
		id: 'presencia',
		name: 'Presencia Digital',
		icon: 'globe',
		headline: 'Su empresa en internet en 7 días',
		desc: 'Sitios web corporativos, landing pages de conversión y branding digital para empresas que necesitan presencia profesional inmediata.',
		tag: 'Entrega en 7-15 días',
		services: [
			{
				name: 'Landing page de conversión',
				desc: '1 página enfocada en captar contactos, lista en 7 días.',
				price: 'Desde USD 400'
			},
			{
				name: 'Sitio corporativo',
				desc: '5-8 páginas con identidad y formularios, en 15 días.',
				price: 'Desde USD 900'
			},
			{
				name: 'Sitio industrial / minero',
				desc: 'Con ficha de servicios y cotizador integrado.',
				price: 'Desde USD 1.400'
			},
			{
				name: 'Rediseño de sitio existente',
				desc: 'Modernizamos su sitio actual sin perder posicionamiento.',
				price: 'Desde USD 600'
			}
		]
	},
	{
		id: 'automatizacion',
		name: 'Automatización Empresarial',
		icon: 'automation',
		headline: 'Elimine el trabajo manual que frena su operación',
		desc: 'Automatizamos los procesos repetitivos de su empresa — cotizaciones, reportes, recordatorios, onboarding — conectados a WhatsApp, email y sus sistemas actuales.',
		tag: 'ROI en 30 días',
		services: [
			{
				name: 'Chatbot WhatsApp 24/7',
				desc: 'Responde, cotiza y agenda sin intervención de una persona.',
				price: 'Desde USD 600'
			},
			{
				name: 'Automatización de cotizaciones',
				desc: 'Desde la OT hasta la factura, sin planillas manuales.',
				price: 'Desde USD 1.200'
			},
			{
				name: 'Recordatorios documentales',
				desc: 'Vencimientos de seguros, revisiones y certificados avisados a tiempo.',
				price: 'Desde USD 800'
			},
			{
				name: 'Reportes automáticos para mandantes',
				desc: 'Dashboards en PDF enviados cada semana, sin esfuerzo.',
				price: 'Desde USD 1.000'
			}
		]
	},
	{
		id: 'ia',
		name: 'Inteligencia Artificial Aplicada',
		icon: 'cpu',
		headline: 'IA que entiende el lenguaje de la industria',
		desc: 'Agentes de inteligencia artificial entrenados para el contexto minero e industrial chileno. Desde asistentes de cumplimiento SST hasta analizadores de licitaciones en Mercado Público.',
		tag: 'Tecnología de vanguardia',
		services: [
			{
				name: 'Agente IA de atención al cliente',
				desc: 'Entrenado con su catálogo y procesos para responder 24/7.',
				price: 'Desde USD 1.500'
			},
			{
				name: 'Asistente de cumplimiento SST',
				desc: 'Apoyo experto en DS 44, 76 y 132 para su prevencionista.',
				price: 'Desde USD 2.500'
			},
			{
				name: 'Analizador de licitaciones Mercado Público',
				desc: 'Detecta oportunidades relevantes para su empresa automáticamente.',
				price: 'Desde USD 2.000'
			},
			{
				name: 'RAG corporativo',
				desc: 'Su empresa con memoria: consultas sobre toda su documentación.',
				price: 'Desde USD 3.000'
			}
		]
	},
	{
		id: 'sistemas',
		name: 'Sistemas y Plataformas',
		icon: 'dashboard',
		headline: 'Software hecho para cómo opera su empresa, no al revés',
		desc: 'Plataformas web y aplicaciones a medida para empresas que crecieron más allá de lo que Excel y WhatsApp pueden manejar. Dashboards, portales de clientes y sistemas de gestión internos.',
		tag: 'Proyectos a medida',
		services: [
			{
				name: 'Dashboard ejecutivo + KPIs',
				desc: 'Sus indicadores clave en tiempo real, en una sola pantalla.',
				price: 'Desde USD 2.000'
			},
			{
				name: 'Portal de clientes / proveedores',
				desc: 'Acceso web con login para sus contrapartes.',
				price: 'Desde USD 3.500'
			},
			{
				name: 'Sistema de gestión de OT',
				desc: 'Órdenes de trabajo digitales, sin papel ni planillas.',
				price: 'Desde USD 4.000'
			},
			{
				name: 'Plataforma de cumplimiento de contratistas',
				desc: 'Control documental y de acreditaciones de toda su cadena.',
				price: 'Desde USD 8.000'
			}
		]
	},
	{
		id: 'marketing',
		name: 'Marketing Digital B2B',
		icon: 'megaphone',
		headline: 'Más clientes industriales, sin depender del boca a boca',
		desc: 'Estrategia y ejecución de marketing digital orientado a conseguir clientes en el mercado industrial y minero del norte de Chile. LinkedIn, Google Ads, SEO técnico y generación de leads calificados.',
		tag: 'Retainer mensual',
		services: [
			{
				name: 'SEO técnico para empresas industriales',
				desc: 'Posicionamiento en Google para búsquedas de su rubro.',
				price: 'Desde USD 600/mes'
			},
			{
				name: 'Google Ads B2B',
				desc: 'Campañas para captar contratistas y mandantes.',
				price: 'Desde USD 500/mes'
			},
			{
				name: 'LinkedIn outreach automatizado',
				desc: 'Prospección B2B constante y medible.',
				price: 'Desde USD 800/mes'
			},
			{
				name: 'Email marketing industrial',
				desc: 'Nurturing y seguimiento de su cartera de contactos.',
				price: 'Desde USD 400/mes'
			}
		]
	}
];

// Pills del hero (industrias en formato corto)
export const heroPills = industries.map((i) => i.name);

// ---------------------------------------------------------------------
// PROCESO DE TRABAJO (4 pasos)
// ---------------------------------------------------------------------
export type ProcessStep = {
	n: string;
	title: string;
	desc: string;
};

export const processSteps: ProcessStep[] = [
	{
		n: '1',
		title: 'Diagnóstico',
		desc: 'Analizamos su operación actual y detectamos los 3 puntos donde la tecnología genera más impacto inmediato.'
	},
	{
		n: '2',
		title: 'Propuesta técnica',
		desc: 'Diseñamos una solución concreta con alcance, plazo y precio fijo. Sin sorpresas.'
	},
	{
		n: '3',
		title: 'Desarrollo y entrega',
		desc: 'Ejecutamos en sprints cortos con revisiones frecuentes. Usted ve avances desde el día 5.'
	},
	{
		n: '4',
		title: 'Soporte y evolución',
		desc: 'Seguimiento post-entrega incluido. Su solución crece con su empresa.'
	}
];

// ---------------------------------------------------------------------
// PRICING (3 planes transversales)
// ---------------------------------------------------------------------
export type Plan = {
	name: string;
	headline: string;
	price: string;
	priceNote: string;
	featured: boolean;
	badge?: string;
	features: string[];
	ideal: string;
	cta: string;
};

export const plans: Plan[] = [
	{
		name: 'Starter',
		headline: 'Para empresas que están empezando su transformación digital',
		price: 'USD 400',
		priceNote: 'pago único',
		featured: false,
		features: [
			'Landing page o automatización básica',
			'1 revisión incluida',
			'Entrega en 7 días',
			'30 días de soporte post-entrega'
		],
		ideal: 'PYMEs, contratistas, empresas nuevas',
		cta: 'Empezar ahora'
	},
	{
		name: 'Profesional',
		headline: 'Para empresas que necesitan una solución completa',
		price: 'USD 1.500',
		priceNote: 'pago único o cuotas',
		featured: true,
		badge: 'Más solicitado',
		features: [
			'Sitio corporativo completo, automatización avanzada o agente IA',
			'3 revisiones incluidas',
			'Entrega en 15 días',
			'60 días de soporte post-entrega',
			'Integración con WhatsApp y email',
			'Capacitación del equipo incluida'
		],
		ideal: 'Empresas medianas, proveedores mineros',
		cta: 'Solicitar propuesta'
	},
	{
		name: 'Enterprise',
		headline: 'Para empresas que quieren transformación digital real',
		price: 'USD 5.000',
		priceNote: 'proyecto a medida',
		featured: false,
		features: [
			'Plataforma o sistema a medida',
			'Revisiones ilimitadas',
			'Plazo definido según alcance',
			'6 meses de soporte',
			'Integraciones con sistemas existentes (ERP, SII, etc.)',
			'Agente IA incluido',
			'Reuniones semanales de avance'
		],
		ideal: 'Contratistas mayores, empresas en crecimiento',
		cta: 'Agendar diagnóstico'
	}
];

// ---------------------------------------------------------------------
// MÉTRICAS (count-up)
// ---------------------------------------------------------------------
export type Metric = {
	value: number;
	prefix: string;
	suffix: string;
	label: string;
};

export const metrics: Metric[] = [
	{ value: 12, prefix: '', suffix: '+', label: 'Proyectos entregados' },
	{ value: 7, prefix: '', suffix: '', label: 'Días promedio de entrega' },
	{ value: 3, prefix: '', suffix: '', label: 'Industrias atendidas' },
	{ value: 100, prefix: '', suffix: '%', label: 'Clientes con soporte activo' }
];

// ---------------------------------------------------------------------
// CASOS DE USO (verosímiles)
// ---------------------------------------------------------------------
export type CaseStudy = {
	client: string;
	location: string;
	solution: string;
	result: string;
	icon: string;
};

export const cases: CaseStudy[] = [
	{
		client: 'Contratista minero',
		location: 'Calama',
		solution: 'Landing page + chatbot WhatsApp',
		result: '40% más consultas respondidas automáticamente',
		icon: 'pickaxe'
	},
	{
		client: 'Empresa de transporte',
		location: 'Antofagasta',
		solution: 'Sistema de OT digital',
		result: 'Eliminaron 200 hojas de papel por semana',
		icon: 'truck'
	},
	{
		client: 'Proveedor de servicios industriales',
		location: 'Mejillones',
		solution: 'Automatización de cotizaciones',
		result: 'Cotizan en 3 minutos; antes tardaban 2 días',
		icon: 'automation'
	},
	{
		client: 'Constructora',
		location: 'Antofagasta',
		solution: 'Dashboard de proyectos para mandante',
		result: 'Aprobaciones en tiempo real sin reuniones',
		icon: 'dashboard'
	},
	{
		client: 'Empresa de logística',
		location: 'Antofagasta',
		solution: 'Recordatorios documentales',
		result: 'Cero multas por documentos vencidos en 6 meses',
		icon: 'bell'
	},
	{
		client: 'Contratista SST',
		location: 'Norte de Chile',
		solution: 'Agente IA cumplimiento DS 44',
		result: 'Prevencionista con asistente digital 24/7',
		icon: 'cpu'
	}
];

// ---------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------
export type Faq = {
	q: string;
	a: string;
};

export const faqs: Faq[] = [
	{
		q: '¿Trabajan con empresas chicas o solo con grandes contratistas?',
		a: 'Trabajamos con ambas. Tenemos planes desde USD 400 pensados para PYMEs, contratistas y empresas nuevas, y también soluciones a medida para contratistas mayores. Lo importante no es el tamaño, sino que la tecnología resuelva un problema real de su operación.'
	},
	{
		q: '¿Cuánto demora tener mi sitio web listo?',
		a: 'Una landing page de conversión está lista en 7 días y un sitio corporativo completo en 15 días. Para proyectos más complejos (sistemas o plataformas) definimos un plazo cerrado en la propuesta, y usted ve avances desde el día 5.'
	},
	{
		q: '¿Necesito saber de tecnología para usar lo que desarrollan?',
		a: 'No. Diseñamos todo para que su equipo lo use sin conocimientos técnicos, lo conectamos a herramientas que ya conoce como WhatsApp y email, e incluimos capacitación. Nosotros nos encargamos de la parte técnica.'
	},
	{
		q: '¿Qué pasa si no me gusta el resultado?',
		a: 'Cada plan incluye revisiones (desde 1 en Starter hasta ilimitadas en Enterprise). Trabajamos en sprints cortos con entregas frecuentes, así que ajustamos el rumbo antes de llegar al final. Usted aprueba cada etapa.'
	},
	{
		q: '¿Pueden conectar la solución con el sistema que ya uso?',
		a: 'Sí. Integramos con WhatsApp, email, ERP, SII y otros sistemas mediante sus APIs. En el plan Enterprise las integraciones con sistemas existentes están incluidas; en los demás las cotizamos según el caso.'
	},
	{
		q: '¿Tienen experiencia en el rubro minero?',
		a: 'Sí. CoreWerk es la unidad tecnológica de CoreService, empresa de Antofagasta que opera en minería, transporte e industria. Conocemos el lenguaje de faena: OT, mandantes, contratistas, acreditaciones y cumplimiento SST (DS 44, 76, 132).'
	},
	{
		q: '¿Cómo funcionan los pagos?',
		a: 'Los proyectos (Presencia Digital, Sistemas, Automatización, IA) se pagan de forma única o en cuotas. Los servicios de Marketing Digital funcionan con un retainer mensual. Siempre con precio fijo definido antes de empezar, sin sorpresas.'
	},
	{
		q: '¿Dan soporte después de entregar el proyecto?',
		a: 'Sí, siempre. Todos los planes incluyen soporte post-entrega (30 días en Starter, 60 en Profesional y 6 meses en Enterprise), y el 100% de nuestros clientes mantiene soporte activo. Su solución evoluciona con su empresa.'
	}
];

// ---------------------------------------------------------------------
// CONTACTO
// ---------------------------------------------------------------------
export const contact = {
	whatsapp: WA_LINK,
	whatsappLabel: '+56 9 XXXX XXXX',
	email: 'contacto@corewerk.cl',
	city: 'Antofagasta, Chile — norte de Chile',
	hours: 'Lunes a viernes 9:00–18:00'
};

// Opciones del select "¿Qué necesita?" del formulario de contacto
export const projectTypes = [
	...units.map((u) => u.name),
	'Aún no lo tengo claro'
];

// ---------------------------------------------------------------------
// CASHFLOW RÁPIDO (3 servicios de entrada, alta conversión, 7-15 días)
// ---------------------------------------------------------------------
export type CashflowCard = {
	id: string;
	name: string;
	price: string;
	time: string;
	badge: string;
	desc: string;
	includes: string[];
	cta: string;
	waMsg: string;
	featured: boolean;
};

export const cashflowCards: CashflowCard[] = [
	{
		id: 'landing',
		name: 'Landing Page Profesional',
		price: 'desde USD 400',
		time: '7 días',
		badge: '🔥 Más solicitado',
		desc: 'Su empresa en Google con una página que convierte visitantes en clientes. Diseño industrial, formulario de contacto y WhatsApp integrado.',
		includes: [
			'Diseño profesional',
			'Responsive mobile',
			'Formulario + WhatsApp',
			'SSL incluido',
			'Dominio por 1 año'
		],
		cta: 'Quiero mi landing →',
		waMsg: 'Hola CoreWerk, quiero una Landing Page Profesional (desde USD 400).',
		featured: true
	},
	{
		id: 'chatbot',
		name: 'Chatbot WhatsApp 24/7',
		price: 'desde USD 600',
		time: '10 días',
		badge: '⚡ ROI en 30 días',
		desc: 'Su empresa responde cotizaciones, agenda visitas y filtra clientes a las 3am. Sin persona. Sin costo adicional por mensaje.',
		includes: [
			'Flujo conversacional',
			'Integración WhatsApp Business',
			'Panel de conversaciones',
			'Mensajes ilimitados',
			'30 días de soporte'
		],
		cta: 'Ver demo →',
		waMsg: 'Hola CoreWerk, quiero ver una demo del Chatbot WhatsApp 24/7 (desde USD 600).',
		featured: false
	},
	{
		id: 'automatizacion',
		name: 'Automatización Express',
		price: 'desde USD 800',
		time: '15 días',
		badge: '⏱️ Ahorra 10h/semana',
		desc: 'Eliminamos el proceso manual más doloroso de su operación. Cotizaciones, reportes, recordatorios — en automático.',
		includes: [
			'Diagnóstico de proceso',
			'Flujo automatizado',
			'Integración email + WhatsApp',
			'Manual de uso',
			'60 días de soporte'
		],
		cta: 'Automatizar ahora →',
		waMsg: 'Hola CoreWerk, quiero automatizar un proceso de mi operación (Automatización Express, desde USD 800).',
		featured: false
	}
];

export const cashflowBannerMsg =
	'Hola CoreWerk, tengo una necesidad específica y quiero contarles mi caso.';

// ---------------------------------------------------------------------
// AGENTE IA (demo en vivo con Claude API)
// ---------------------------------------------------------------------
export const agentChips = [
	'¿Cuánto cuesta una landing page?',
	'Necesito automatizar mis cotizaciones',
	'¿Trabajan con empresas mineras?',
	'¿Qué es un agente IA?'
];

export const agentSystemPrompt = `Eres el asistente virtual de CoreWerk, empresa tecnológica de Antofagasta, Chile, especializada en soluciones digitales para minería, transporte, logística y servicios industriales.

Servicios que ofrecemos:
- Landing pages desde USD 400, entrega 7 días
- Chatbot WhatsApp desde USD 600, entrega 10 días
- Automatización empresarial desde USD 800, entrega 15 días
- Agentes IA desde USD 1.500, entrega 20 días
- Sistemas y plataformas desde USD 2.000, entrega 25 días
- Marketing B2B desde USD 400/mes

Tu objetivo es entender el problema del visitante, recomendar el servicio más adecuado con precio y plazo, y al final invitarlo a contactar por WhatsApp: +56 9 XXXX XXXX

Responde siempre en español. Sé directo y profesional. Máximo 3 párrafos por respuesta. Si no sabes algo, di que lo consultarás con el equipo.`;
