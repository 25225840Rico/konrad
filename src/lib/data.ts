// =====================================================================
// CONTENIDO CENTRAL — COREWERK
// Estudio de diseño, desarrollo web e IA · Antofagasta, Chile
// Edita aquí textos, precios y datos. Los componentes leen de este archivo.
// =====================================================================

import { WA_LINK, SITE } from '$lib/seo/site';
export { WA_LINK };

// Helper: enlace de WhatsApp con mensaje pre-cargado personalizado.
export const waLink = (msg: string) =>
	`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

// ---------------------------------------------------------------------
// CIUDADES DE CHILE
// ---------------------------------------------------------------------
export const ciudadesChile: string[] = [
	'Antofagasta',
	'Santiago',
	'Valparaíso',
	'Concepción',
	'La Serena',
	'Coquimbo',
	'Temuco',
	'Rancagua',
	'Talca',
	'Arica',
	'Iquique',
	'Puerto Montt',
	'Calama',
	'Copiapó',
	'Chillán',
	'Osorno',
	'Valdivia',
	'Punta Arenas',
	'San Pedro de Atacama',
	'Tocopilla',
	'Mejillones',
	'Taltal',
	'Ovalle',
	'Illapel',
	'Los Ángeles',
	'Curicó',
	'Linares',
	'San Fernando',
	'Quillota',
	'San Antonio',
	'Viña del Mar',
	'Quilpué',
	'Villa Alemana',
	'Coronel',
	'Lota',
	'Lebu',
	'Cañete',
	'Angol',
	'Victoria',
	'Collipulli',
	'Castro',
	'Ancud',
	'Puerto Varas',
	'Puerto Aysén',
	'Coyhaique',
	'Porvenir',
	'Puerto Natales',
	'Caldera',
	'Huasco',
	'Chañaral'
];

// ---------------------------------------------------------------------
// HERO ROTATORIO
// ---------------------------------------------------------------------
export interface HeroCityPhrase {
	prefix: string;
	suffix: string;
	color: 'accent' | 'accentAI';
}

export const heroPhrases: HeroCityPhrase[] = [
	{ prefix: 'Diseñamos tu sitio en', suffix: '', color: 'accent' },
	{ prefix: 'Creamos agentes IA en', suffix: '', color: 'accentAI' },
	{ prefix: 'Automatizamos tu empresa en', suffix: '', color: 'accent' },
	{ prefix: 'Transformamos tu negocio en', suffix: '', color: 'accent' }
];

// ---------------------------------------------------------------------
// TIPOS DE SITIO WEB (9)
// ---------------------------------------------------------------------
export interface SiteType {
	slug: string;
	num: string;
	name: string;
	icon: string;
	forWho: string;
	desc: string;
	price: string;
	days: string;
}

export const siteTypes: SiteType[] = [
	{
		slug: 'landing-page',
		num: '01',
		name: 'Landing Page',
		icon: 'rocket',
		forWho: 'Para negocios que quieren captar clientes rápidamente.',
		desc: 'Una página enfocada en convertir visitantes en contactos. Ideal para campañas, lanzamientos y servicios concretos. Diseño profesional, carga rápida y formulario integrado.',
		price: 'USD 400',
		days: '7 días'
	},
	{
		slug: 'corporativo',
		num: '02',
		name: 'Sitio Corporativo',
		icon: 'building',
		forWho: 'Para empresas que necesitan presencia digital profesional.',
		desc: 'Entre 5 y 8 páginas con identidad de marca, descripción de servicios, equipo y formulario de contacto. Transmite confianza y seriedad a tus clientes.',
		price: 'USD 900',
		days: '15 días'
	},
	{
		slug: 'ecommerce',
		num: '03',
		name: 'E-commerce',
		icon: 'cart',
		forWho: 'Para tiendas y negocios que quieren vender en línea.',
		desc: 'Catálogo de productos, carrito de compras, pagos en línea y panel de administración. Tu tienda abierta las 24 horas, los 7 días de la semana.',
		price: 'USD 1.200',
		days: '20 días'
	},
	{
		slug: 'portafolio',
		num: '04',
		name: 'Portafolio',
		icon: 'palette',
		forWho: 'Para creativos, diseñadores y profesionales independientes.',
		desc: 'Muestra tu trabajo con elegancia. Galería de proyectos, página "sobre mí" y formulario de contacto. Hecho para destacar en tu área.',
		price: 'USD 600',
		days: '10 días'
	},
	{
		slug: 'blog',
		num: '05',
		name: 'Blog',
		icon: 'file',
		forWho: 'Para marcas y profesionales que generan contenido.',
		desc: 'Plataforma de artículos con categorías, buscador y diseño editorial. Excelente para posicionamiento SEO y generar autoridad en tu industria.',
		price: 'USD 700',
		days: '12 días'
	},
	{
		slug: 'saas',
		num: '06',
		name: 'SaaS / App Web',
		icon: 'dashboard',
		forWho: 'Para emprendedores tech que lanzan un producto digital.',
		desc: 'Aplicación web con autenticación, panel de usuario, suscripciones y lógica de negocio personalizada. Del MVP a la plataforma escalable.',
		price: 'USD 3.000',
		days: '45 días'
	},
	{
		slug: 'directorio',
		num: '07',
		name: 'Directorio',
		icon: 'layers',
		forWho: 'Para plataformas que listan empresas, profesionales o servicios.',
		desc: 'Sistema de listados con búsqueda por categoría, filtros y perfiles individuales. Monetizable con planes de visibilidad o publicidad.',
		price: 'USD 2.500',
		days: '35 días'
	},
	{
		slug: 'comunidad',
		num: '08',
		name: 'Comunidad',
		icon: 'users',
		forWho: 'Para marcas que quieren construir una base de miembros.',
		desc: 'Plataforma con registro, perfiles, foros o chats internos y contenido exclusivo. El centro digital de tu comunidad o membresía.',
		price: 'USD 2.000',
		days: '30 días'
	},
	{
		slug: 'institucional',
		num: '09',
		name: 'Institucional',
		icon: 'briefcase',
		forWho: 'Para municipios, fundaciones y organizaciones sin fines de lucro.',
		desc: 'Sitio formal con secciones de noticias, documentos descargables, equipo directivo y agenda de eventos. Diseño serio y accesible.',
		price: 'USD 800',
		days: '15 días'
	}
];

// ---------------------------------------------------------------------
// AGENTES IA (6)
// ---------------------------------------------------------------------
export interface AIAgent {
	slug: string;
	name: string;
	icon: string;
	tagline: string;
	what: string;
	how: string[];
	integrations: string[];
	price: string;
	time: string;
	sample: { role: 'user' | 'agent'; text: string }[];
}

export const aiAgents: AIAgent[] = [
	{
		slug: 'ventas',
		name: 'Agente de Ventas',
		icon: 'rocket',
		tagline: 'Convierte consultas en clientes sin intervención humana.',
		what: 'Un agente entrenado con tu catálogo, precios y flujo comercial que responde consultas, califica leads y agenda reuniones en automático.',
		how: [
			'Entrenamos el agente con tu catálogo de productos, precios y objeciones frecuentes.',
			'El agente califica al prospecto, responde dudas y propone el siguiente paso.',
			'Los leads calificados se envían a tu CRM o WhatsApp en tiempo real.'
		],
		integrations: ['WhatsApp', 'Email', 'CRM', 'Web'],
		price: 'USD 1.500',
		time: '15 días',
		sample: [
			{ role: 'user', text: '¿Cuánto cuesta el plan básico?' },
			{ role: 'agent', text: 'Nuestro plan Starter parte desde USD 400 e incluye landing page, formulario de contacto y 30 días de soporte. ¿Te gustaría ver un ejemplo de lo que podemos hacer para tu negocio?' },
			{ role: 'user', text: 'Sí, tengo una ferretería.' },
			{ role: 'agent', text: 'Perfecto. Para una ferretería te recomendaría una landing con catálogo de productos destacados y botón directo a WhatsApp. Muchos clientes generan un 30% más de consultas en el primer mes. ¿Quieres que te enviemos una propuesta?' },
			{ role: 'user', text: 'Dale, ¿cómo lo hacemos?' },
			{ role: 'agent', text: 'Genial. Te conecto ahora con nuestro equipo por WhatsApp para coordinar una llamada rápida de 20 minutos. ¡Un segundo!' }
		]
	},
	{
		slug: 'atencion-cliente',
		name: 'Agente de Atención al Cliente',
		icon: 'chat',
		tagline: 'Soporte 24/7 que resuelve, no que frustra.',
		what: 'Agente entrenado con tus preguntas frecuentes, políticas y procedimientos para resolver dudas y reclamos de forma inmediata en cualquier canal.',
		how: [
			'Cargamos tu base de conocimiento: FAQs, manuales, políticas y flujos de atención.',
			'El agente resuelve las consultas más comunes sin intervención humana.',
			'Los casos complejos se escalan automáticamente a tu equipo con contexto completo.'
		],
		integrations: ['WhatsApp', 'Web', 'Email', 'Slack'],
		price: 'USD 1.500',
		time: '15 días',
		sample: [
			{ role: 'user', text: '¿Cuál es el horario de despacho?' },
			{ role: 'agent', text: 'Despachamos de lunes a viernes de 9:00 a 18:00 hrs. Los pedidos realizados antes de las 14:00 se envían el mismo día. ¿Tienes algún pedido en curso?' },
			{ role: 'user', text: 'Sí, el pedido #4521 no me ha llegado.' },
			{ role: 'agent', text: 'Entiendo tu preocupación. Déjame revisar el estado de tu pedido. ¿Puedes confirmarme el correo con el que compraste?' },
			{ role: 'user', text: 'es juan@gmail.com' },
			{ role: 'agent', text: 'Gracias, Juan. Tu pedido #4521 está en tránsito y llegará mañana antes de las 15:00. Te enviamos el tracking al correo ahora mismo.' }
		]
	},
	{
		slug: 'rrhh',
		name: 'Agente de RRHH',
		icon: 'users',
		tagline: 'Onboarding, dudas y procesos de RRHH en automático.',
		what: 'Asistente para el equipo de personas que responde dudas de empleados, guía el proceso de incorporación y gestiona solicitudes rutinarias.',
		how: [
			'Integramos el reglamento interno, beneficios y procedimientos de la empresa.',
			'El agente responde consultas de empleados sobre vacaciones, permisos y políticas.',
			'Las solicitudes formales se canalizan al sistema correspondiente automáticamente.'
		],
		integrations: ['Slack', 'Email', 'Web'],
		price: 'USD 2.000',
		time: '20 días',
		sample: [
			{ role: 'user', text: '¿Cuántos días de vacaciones me quedan?' },
			{ role: 'agent', text: 'Hola María. Según tu contrato tienes 15 días de vacaciones anuales. Llevas 8 días tomados este año, así que te quedan 7 días disponibles.' },
			{ role: 'user', text: '¿Cómo solicito una semana de vacaciones?' },
			{ role: 'agent', text: 'Puedes solicitarlo directamente aquí. Indícame las fechas que deseas y yo genero la solicitud para la aprobación de tu jefe directo.' },
			{ role: 'user', text: 'Del 14 al 18 de julio.' },
			{ role: 'agent', text: 'Solicitud enviada. Tu jefatura recibirá la notificación y tienes 48 horas hábiles para recibir respuesta. Te avisaré cuando sea aprobada.' }
		]
	},
	{
		slug: 'operaciones',
		name: 'Agente de Operaciones',
		icon: 'dashboard',
		tagline: 'Control de procesos y alertas inteligentes sin hojas de cálculo.',
		what: 'Agente que monitorea tus procesos operativos, alerta sobre desviaciones y entrega reportes en lenguaje natural a quien corresponde.',
		how: [
			'Conectamos el agente a tus sistemas de datos (ERP, planillas, bases de datos).',
			'Define los KPIs y umbrales de alerta que importan a tu operación.',
			'El agente reporta, alerta y responde consultas en tiempo real vía WhatsApp o Slack.'
		],
		integrations: ['WhatsApp', 'Slack', 'ERP', 'Email'],
		price: 'USD 2.500',
		time: '25 días',
		sample: [
			{ role: 'user', text: '¿Cómo va la producción de hoy?' },
			{ role: 'agent', text: 'Producción al 73% de la meta diaria a las 14:00 hrs. La línea 2 lleva 40 minutos detenida por mantención no programada. Si se reactiva antes de las 16:00 cierra el día en 95%.' },
			{ role: 'user', text: '¿Quién está a cargo de esa mantención?' },
			{ role: 'agent', text: 'El técnico Roberto Sáez recibió la alerta a las 13:20 y está en terreno. Su reporte estimado de reanudación es a las 14:45.' },
			{ role: 'user', text: 'OK, avisame cuando se reactive.' },
			{ role: 'agent', text: 'Perfecto, te notifico en cuanto la línea 2 vuelva a operar.' }
		]
	},
	{
		slug: 'documentos',
		name: 'Agente de Documentos',
		icon: 'file',
		tagline: 'Busca, resume y extrae información de cualquier documento.',
		what: 'Agente con acceso a toda la documentación de tu empresa que responde preguntas, resume contratos y extrae datos clave al instante.',
		how: [
			'Cargamos tu biblioteca de documentos (contratos, manuales, informes, procedimientos).',
			'El agente indexa y comprende el contenido de cada archivo.',
			'Consultas en lenguaje natural devuelven respuestas con referencia al documento fuente.'
		],
		integrations: ['Web', 'Slack', 'Email'],
		price: 'USD 2.000',
		time: '20 días',
		sample: [
			{ role: 'user', text: '¿Cuándo vence el contrato con Proveedor ABC?' },
			{ role: 'agent', text: 'El contrato con Proveedor ABC (contrato_abc_2024.pdf) vence el 31 de diciembre de 2025. Tiene una cláusula de renovación automática por 12 meses si no se notifica con 60 días de anticipación.' },
			{ role: 'user', text: '¿Y cuál es el precio pactado?' },
			{ role: 'agent', text: 'El precio mensual pactado es UF 45 más IVA, con reajuste semestral según IPC. ¿Quieres que te envíe el contrato completo?' },
			{ role: 'user', text: 'Sí, mándalo al correo.' },
			{ role: 'agent', text: 'Listo, el contrato fue enviado a tu correo registrado. ¿Necesitas algo más de este proveedor?' }
		]
	},
	{
		slug: 'personalizado',
		name: 'Agente Personalizado',
		icon: 'brain',
		tagline: 'Tu desafío específico, resuelto con IA a medida.',
		what: 'Diseñamos e implementamos un agente IA desde cero para el proceso único de tu empresa, con integraciones y lógica completamente personalizadas.',
		how: [
			'Diagnóstico de tu proceso y definición del comportamiento ideal del agente.',
			'Desarrollo iterativo con pruebas reales en tu entorno de trabajo.',
			'Entrega con documentación, capacitación y soporte de 60 días incluido.'
		],
		integrations: ['WhatsApp', 'Email', 'CRM', 'ERP', 'Slack', 'Web'],
		price: 'Desde USD 1.500',
		time: 'A convenir',
		sample: [
			{ role: 'user', text: 'Necesito un agente que gestione mis reservas de cancha.' },
			{ role: 'agent', text: 'Con gusto. Puedo manejar consultas de disponibilidad, confirmaciones, recordatorios y cancelaciones por WhatsApp. ¿Cuántas canchas tienes y cuáles son tus horarios disponibles?' },
			{ role: 'user', text: '3 canchas, de lunes a domingo de 8:00 a 22:00.' },
			{ role: 'agent', text: 'Perfecto. El agente mostraría disponibilidad en tiempo real, confirmaría la reserva con pago previo si lo deseas y enviaría recordatorios 2 horas antes. ¿Usas algún sistema de gestión actualmente?' },
			{ role: 'user', text: 'Solo una planilla de Excel.' },
			{ role: 'agent', text: 'Sin problema. Podemos conectar el agente directamente con Google Sheets para que no pierdas tu flujo actual mientras migras. ¿Quieres que te preparemos una demo?' }
		]
	}
];

// ---------------------------------------------------------------------
// SERVICIOS BÁSICOS (5)
// ---------------------------------------------------------------------
export interface ServiceBasic {
	slug: string;
	emoji: string;
	name: string;
	tagline: string;
	price: string;
	includes: string[];
}

export const serviciosBasicos: ServiceBasic[] = [
	{
		slug: 'logo-branding',
		emoji: '🎨',
		name: 'Logo y Branding',
		tagline: 'Identidad visual profesional para tu marca.',
		price: 'USD 150',
		includes: [
			'Logo en alta resolución (PNG, SVG)',
			'Paleta de colores corporativa',
			'Tipografías seleccionadas',
			'Manual de uso básico',
			'Entrega en 5 días'
		]
	},
	{
		slug: 'email-corporativo',
		emoji: '📧',
		name: 'Email Corporativo',
		tagline: 'Tu nombre en @tuempresa.cl desde el día 1.',
		price: 'USD 8/mes',
		includes: [
			'Cuenta de correo @tudominio.cl',
			'Acceso web y móvil',
			'Antispam incluido',
			'Hasta 30 GB de almacenamiento',
			'Soporte de configuración'
		]
	},
	{
		slug: 'hosting-dominio',
		emoji: '🌐',
		name: 'Hosting y Dominio',
		tagline: 'Tu sitio siempre en línea, rápido y seguro.',
		price: 'USD 60/año',
		includes: [
			'Dominio .cl o .com por 1 año',
			'Hosting SSD de alto rendimiento',
			'Certificado SSL gratuito',
			'Panel de administración cPanel',
			'Respaldos automáticos diarios'
		]
	},
	{
		slug: 'mantencion-mensual',
		emoji: '🔧',
		name: 'Mantención Mensual',
		tagline: 'Tu sitio siempre actualizado y funcionando.',
		price: 'USD 50/mes',
		includes: [
			'Actualizaciones de seguridad',
			'Monitoreo de disponibilidad 24/7',
			'Respaldo mensual del sitio',
			'Hasta 1 hora de cambios menores',
			'Soporte por WhatsApp prioritario'
		]
	},
	{
		slug: 'actualizacion-contenido',
		emoji: '✏️',
		name: 'Actualización de Contenido',
		tagline: 'Cambios rápidos sin complicaciones técnicas.',
		price: 'USD 30/vez',
		includes: [
			'Hasta 3 cambios de texto o imagen',
			'Entrega en 24-48 horas hábiles',
			'Sin necesidad de contrato mensual',
			'Confirmación antes de publicar'
		]
	}
];

// ---------------------------------------------------------------------
// UNIDADES DE NEGOCIO (para tabs Servicios)
// ---------------------------------------------------------------------
export interface ServiceItem {
	name: string;
	desc: string;
	price: string;
}

export interface Unit {
	id: string;
	name: string;
	icon: string;
	headline: string;
	desc: string;
	tag: string;
	services: ServiceItem[];
}

export const units: Unit[] = [
	{
		id: 'presencia',
		name: 'Presencia Digital',
		icon: 'globe',
		headline: 'Tu empresa en internet en 7 días',
		desc: 'Sitios web profesionales, landing pages de conversión y branding digital para negocios que necesitan presencia online inmediata y resultados medibles.',
		tag: 'Entrega en 7–20 días',
		services: [
			{
				name: 'Landing Page',
				desc: '1 página orientada a captar leads, lista en 7 días.',
				price: 'Desde USD 400'
			},
			{
				name: 'Sitio Corporativo',
				desc: '5–8 páginas con identidad de marca y formularios.',
				price: 'Desde USD 900'
			},
			{
				name: 'E-commerce',
				desc: 'Tienda online con carrito, pagos y panel de gestión.',
				price: 'Desde USD 1.200'
			},
			{
				name: 'Rediseño',
				desc: 'Modernizamos tu sitio sin perder posicionamiento.',
				price: 'Desde USD 600'
			}
		]
	},
	{
		id: 'ia',
		name: 'Inteligencia Artificial',
		icon: 'brain',
		headline: 'Agentes IA que trabajan por ti las 24 horas',
		desc: 'Diseñamos e implementamos agentes de inteligencia artificial entrenados con el contexto de tu negocio, integrados a tus canales y listos para operar de forma autónoma.',
		tag: 'Desde USD 1.500',
		services: [
			{
				name: 'Agente de Ventas',
				desc: 'Califica leads y agenda reuniones en automático.',
				price: 'Desde USD 1.500'
			},
			{
				name: 'Agente de Atención al Cliente',
				desc: 'Resuelve dudas y reclamos sin intervención humana.',
				price: 'Desde USD 1.500'
			},
			{
				name: 'Agente de Documentos',
				desc: 'Busca, resume y extrae datos de tu documentación.',
				price: 'Desde USD 2.000'
			},
			{
				name: 'Agente Personalizado',
				desc: 'Lógica e integraciones 100% a medida de tu proceso.',
				price: 'Desde USD 1.500'
			}
		]
	},
	{
		id: 'automatizacion',
		name: 'Automatización',
		icon: 'layers',
		headline: 'Elimina el trabajo manual que frena tu operación',
		desc: 'Automatizamos los procesos repetitivos de tu empresa: cotizaciones, reportes, recordatorios y onboarding, conectados a WhatsApp, email y tus sistemas actuales.',
		tag: 'ROI en 30 días',
		services: [
			{
				name: 'Chatbot WhatsApp 24/7',
				desc: 'Responde, cotiza y agenda sin intervención humana.',
				price: 'Desde USD 600'
			},
			{
				name: 'Automatización de Cotizaciones',
				desc: 'Desde la solicitud hasta el envío, sin planillas.',
				price: 'Desde USD 1.200'
			},
			{
				name: 'Recordatorios Automáticos',
				desc: 'Vencimientos y fechas clave avisados a tiempo.',
				price: 'Desde USD 800'
			},
			{
				name: 'Reportes Automáticos',
				desc: 'Informes en PDF enviados periódicamente sin esfuerzo.',
				price: 'Desde USD 1.000'
			}
		]
	},
	{
		id: 'marketing',
		name: 'Marketing Digital',
		icon: 'megaphone',
		headline: 'Más clientes sin depender del boca a boca',
		desc: 'Estrategia y ejecución de marketing digital orientado a generar visibilidad, tráfico y ventas para tu negocio en Chile. SEO, Google Ads y redes sociales.',
		tag: 'Retainer mensual',
		services: [
			{
				name: 'SEO Técnico',
				desc: 'Posicionamiento en Google para búsquedas de tu rubro.',
				price: 'Desde USD 600/mes'
			},
			{
				name: 'Google Ads',
				desc: 'Campañas de pago que traen clientes desde el día 1.',
				price: 'Desde USD 500/mes'
			},
			{
				name: 'Gestión de Redes Sociales',
				desc: 'Contenido y pauta para Instagram, Facebook y LinkedIn.',
				price: 'Desde USD 400/mes'
			}
		]
	},
	{
		id: 'soporte',
		name: 'Servicios Básicos',
		icon: 'briefcase',
		headline: 'Todo lo que tu presencia digital necesita',
		desc: 'Hosting, dominio, email corporativo, mantención mensual y branding. Los servicios de base para que tu negocio esté siempre en línea y con imagen profesional.',
		tag: 'Desde USD 8/mes',
		services: [
			{
				name: 'Hosting y Dominio',
				desc: 'Servidor rápido, SSL gratuito y dominio por 1 año.',
				price: 'USD 60/año'
			},
			{
				name: 'Email Corporativo',
				desc: 'Tu nombre @tuempresa.cl con antispam incluido.',
				price: 'USD 8/mes'
			},
			{
				name: 'Mantención Mensual',
				desc: 'Actualizaciones, monitoreo y soporte continuo.',
				price: 'USD 50/mes'
			},
			{
				name: 'Logo y Branding',
				desc: 'Identidad visual profesional en 5 días.',
				price: 'USD 150'
			}
		]
	}
];

// ---------------------------------------------------------------------
// PLANES
// ---------------------------------------------------------------------
export interface Plan {
	name: string;
	headline: string;
	price: string;
	priceNote: string;
	featured: boolean;
	badge?: string;
	features: string[];
	ideal: string;
	cta: string;
}

export const plans: Plan[] = [
	{
		name: 'Starter',
		headline: 'Para negocios que están dando sus primeros pasos digitales.',
		price: 'USD 400+',
		priceNote: 'pago único',
		featured: false,
		features: [
			'Landing page o automatización básica',
			'1 revisión incluida',
			'Entrega en 7 días',
			'30 días de soporte post-entrega',
			'Diseño responsive mobile'
		],
		ideal: 'Emprendedores, PYMEs, negocios nuevos',
		cta: 'Empezar ahora'
	},
	{
		name: 'Profesional',
		headline: 'Para empresas que necesitan una solución completa y funcional.',
		price: 'USD 1.500+',
		priceNote: 'pago único o cuotas',
		featured: true,
		badge: 'Más solicitado',
		features: [
			'Sitio corporativo completo, agente IA o automatización avanzada',
			'3 revisiones incluidas',
			'Entrega en 15 días',
			'60 días de soporte post-entrega',
			'Integración con WhatsApp y email',
			'Capacitación del equipo incluida'
		],
		ideal: 'Empresas medianas, negocios en crecimiento',
		cta: 'Solicitar propuesta'
	},
	{
		name: 'Enterprise',
		headline: 'Para empresas que quieren transformación digital real y escalable.',
		price: 'USD 5.000+',
		priceNote: 'proyecto a medida',
		featured: false,
		features: [
			'Plataforma, sistema o suite de IA a medida',
			'Revisiones ilimitadas',
			'Plazo definido según alcance',
			'6 meses de soporte',
			'Integraciones con sistemas existentes (ERP, CRM, etc.)',
			'Agente IA incluido',
			'Reuniones semanales de avance'
		],
		ideal: 'Empresas en expansión, proyectos complejos',
		cta: 'Agendar diagnóstico'
	}
];

// ---------------------------------------------------------------------
// TESTIMONIOS
// ---------------------------------------------------------------------
export interface Testimonial {
	name: string;
	company: string;
	city: string;
	text: string;
}

export const testimonials: Testimonial[] = [
	{
		name: 'Javiera Rojas',
		company: 'Mueblería El Norte',
		city: 'Antofagasta',
		text: 'Teníamos un sitio web anticuado y casi sin visitas. En 10 días CoreWerk nos entregó una landing page que ya nos genera consultas por WhatsApp todos los días. No pensé que fuera tan rápido.'
	},
	{
		name: 'Tomás Venegas',
		company: 'Constructora Atacal',
		city: 'Santiago',
		text: 'Implementamos el agente de atención al cliente para responder cotizaciones fuera de horario. Ahora el 60% de las consultas se resuelven solas. El equipo es directo y cumple los plazos.'
	},
	{
		name: 'Carla Sepúlveda',
		company: 'Clínica Dental Bío-Bío',
		city: 'Concepción',
		text: 'Nos hicieron el sitio web y el sistema de agendamiento online. Bajamos las llamadas en recepción a la mitad y los pacientes reservan desde el celular a cualquier hora. Muy recomendados.'
	}
];

// ---------------------------------------------------------------------
// FAQ (10 preguntas)
// ---------------------------------------------------------------------
export interface Faq {
	q: string;
	a: string;
}

export const faqs: Faq[] = [
	{
		q: '¿Cuánto cuesta hacer un sitio web?',
		a: 'Depende del tipo de sitio. Una landing page parte desde USD 400, un sitio corporativo desde USD 900 y un e-commerce desde USD 1.200. Todos los precios son en dólares, con precio fijo definido antes de empezar.'
	},
	{
		q: '¿Cuánto demora tener mi sitio listo?',
		a: 'Una landing page se entrega en 7 días, un sitio corporativo en 15 días y un e-commerce en 20 días. Para proyectos más complejos definimos un plazo cerrado en la propuesta.'
	},
	{
		q: '¿Necesito saber de tecnología para usar lo que desarrollan?',
		a: 'No, para nada. Diseñamos todo para que tú y tu equipo lo usen sin conocimientos técnicos. Además incluimos capacitación y conectamos todo a herramientas que ya conoces, como WhatsApp y correo.'
	},
	{
		q: '¿Pueden hacer cambios después de entregado el proyecto?',
		a: 'Sí. Todos los planes incluyen revisiones durante el desarrollo. Después de la entrega puedes contratar nuestra mantención mensual (USD 50/mes) o solicitar actualizaciones puntuales (USD 30/vez).'
	},
	{
		q: '¿El sitio web funciona bien en celular?',
		a: 'Sí, todos nuestros sitios son responsive: se adaptan perfectamente a smartphones, tablets y computadores. También están optimizados para cargar rápido en conexiones móviles.'
	},
	{
		q: '¿Qué es un agente IA y en qué se diferencia de un chatbot?',
		a: 'Un chatbot sigue un guión fijo de respuestas. Un agente IA entiende el lenguaje natural, razona, recuerda el contexto de la conversación y puede tomar decisiones. Es como tener un colaborador disponible 24/7 que entiende de verdad lo que le preguntan.'
	},
	{
		q: '¿En qué ciudades trabajan?',
		a: 'Estamos basados en Antofagasta y trabajamos de forma 100% remota con clientes en todo Chile: Santiago, Valparaíso, Concepción, Iquique, La Serena y muchas ciudades más. La distancia no es un obstáculo.'
	},
	{
		q: '¿El precio incluye dominio y hosting?',
		a: 'El primer año de dominio y hosting está incluido en todos los proyectos de sitio web. A partir del segundo año, el servicio de hosting y dominio tiene un costo de USD 60/año, que puedes contratar con nosotros.'
	},
	{
		q: '¿Cómo son los pagos?',
		a: 'Los proyectos se pagan con un 50% al inicio y el 50% restante al entregar. También ofrecemos pago en cuotas en el plan Profesional. Aceptamos transferencia bancaria y los principales medios de pago digitales.'
	},
	{
		q: '¿Dan soporte después de entregar el proyecto?',
		a: 'Siempre. El plan Starter incluye 30 días de soporte, el Profesional 60 días y el Enterprise 6 meses. Para soporte continuo tenemos nuestro plan de mantención mensual a USD 50/mes.'
	}
];

// ---------------------------------------------------------------------
// MÉTRICAS
// ---------------------------------------------------------------------
export interface Metric {
	value: number;
	prefix: string;
	suffix: string;
	label: string;
}

export const metrics: Metric[] = [
	{ value: 50, prefix: '', suffix: '+', label: 'Proyectos entregados' },
	{ value: 7, prefix: '', suffix: ' días', label: 'Entrega más rápida' },
	{ value: 46, prefix: '', suffix: '%', label: 'Crecimiento del mercado IA' },
	{ value: 100, prefix: '', suffix: '%', label: 'Soporte post-entrega' }
];

// ---------------------------------------------------------------------
// PORTAFOLIO
// ---------------------------------------------------------------------
export interface PortfolioItem {
	title: string;
	category: string;
	live?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
	{ title: 'Demo IA Interactiva', category: 'Agente IA', live: true },
	{ title: 'Sitio Corporativo — Empresa Minera', category: 'Presencia Digital' },
	{ title: 'E-commerce — Tienda Retail', category: 'Presencia Digital' },
	{ title: 'Agente de Ventas — Inmobiliaria', category: 'Inteligencia Artificial' },
	{ title: 'Automatización de Cotizaciones', category: 'Automatización' },
	{ title: 'Landing Page — Clínica Dental', category: 'Presencia Digital' },
	{ title: 'Plataforma SaaS — Gestión de Proyectos', category: 'Desarrollo Web' }
];

// ---------------------------------------------------------------------
// PROCESO DE TRABAJO (4 pasos)
// ---------------------------------------------------------------------
export interface ProcessStep {
	n: string;
	title: string;
	desc: string;
}

export const processSteps: ProcessStep[] = [
	{
		n: '1',
		title: 'Diagnóstico',
		desc: 'Conversamos sobre tu negocio, tus objetivos y los problemas que quieres resolver. Sin tecnicismos, sin compromiso.'
	},
	{
		n: '2',
		title: 'Propuesta',
		desc: 'Te enviamos una propuesta concreta con alcance, plazo y precio fijo. Sin sorpresas ni letras chicas.'
	},
	{
		n: '3',
		title: 'Desarrollo',
		desc: 'Ejecutamos en etapas cortas con revisiones frecuentes. Ves avances reales desde los primeros días.'
	},
	{
		n: '4',
		title: 'Entrega + Soporte',
		desc: 'Publicamos tu proyecto, te capacitamos y seguimos contigo durante el período de soporte incluido.'
	}
];

// ---------------------------------------------------------------------
// TICKER
// ---------------------------------------------------------------------
export const tickerItems: string[] = [
	'Sitios Web',
	'Agentes IA',
	'Chatbots',
	'Landing Pages',
	'E-commerce',
	'SEO',
	'Automatización',
	'Agentes a Medida',
	'Diseño UI/UX',
	'Marketing Digital',
	'Hosting',
	'Mantención'
];

// ---------------------------------------------------------------------
// AGENTE DEMO (system prompt + chips)
// ---------------------------------------------------------------------
export const agentSystemPrompt: string = `Eres el asistente virtual de CoreWerk, estudio de diseño, desarrollo web e inteligencia artificial con base en Antofagasta, Chile. Trabajamos de forma remota con clientes en todo Chile.

Servicios y precios:
- Landing page: desde USD 400, entrega 7 días
- Sitio corporativo: desde USD 900, entrega 15 días
- E-commerce: desde USD 1.200, entrega 20 días
- Agente IA de ventas o atención al cliente: desde USD 1.500, entrega 15 días
- Agente IA de RRHH: desde USD 2.000, entrega 20 días
- Agente IA de operaciones: desde USD 2.500, entrega 25 días
- Agente IA de documentos: desde USD 2.000, entrega 20 días
- Automatización de procesos: desde USD 600, entrega 10–25 días
- Logo y branding: USD 150, entrega 5 días
- Hosting y dominio: USD 60/año
- Mantención mensual: USD 50/mes
- Marketing digital (SEO, Google Ads): desde USD 400/mes

Tu objetivo es entender el problema o necesidad del visitante, recomendar el servicio más adecuado con precio y plazo estimado, y al final invitarlo a continuar la conversación por WhatsApp para coordinar los detalles. Responde siempre en español, con tono directo y amable. Máximo 3 párrafos por respuesta.`;

export const agentChips: string[] = [
	'¿Cuánto cuesta un sitio web?',
	'¿Qué es un agente IA?',
	'Quiero vender online',
	'¿Trabajan en mi ciudad?',
	'Necesito automatizar mi empresa',
	'¿Qué diferencia un agente IA de un chatbot?'
];

// ---------------------------------------------------------------------
// CONTACTO
// ---------------------------------------------------------------------
export const contact: {
	whatsapp: string;
	whatsappLabel: string;
	email: string;
	city: string;
	hours: string;
} = {
	whatsapp: WA_LINK,
	whatsappLabel: '+56 9 0000 0000',
	email: 'hola@corewerk.cl',
	city: 'Antofagasta, Chile',
	hours: 'Lunes a viernes 9:00–18:00'
};

export const projectTypes: string[] = [
	'Sitio Web',
	'Landing Page',
	'E-commerce',
	'Agente IA',
	'Automatización de Procesos',
	'Marketing Digital',
	'Logo y Branding',
	'Hosting y Dominio',
	'Mantención Mensual',
	'Otro / No estoy seguro'
];

// ---------------------------------------------------------------------
// LEGADO — exports que componentes existentes aún consumen
// (Industrias.svelte, Casos.svelte, CashflowRapido.svelte)
// ---------------------------------------------------------------------
export interface Industry {
	id: string;
	name: string;
	icon: string;
	desc: string;
	services: number;
}

export const industries: Industry[] = [
	{ id: 'diseno', name: 'Diseño Web', icon: 'palette', desc: 'Sitios modernos y efectivos para cualquier rubro.', services: 4 },
	{ id: 'ia', name: 'Inteligencia Artificial', icon: 'brain', desc: 'Agentes IA entrenados para tu negocio.', services: 6 },
	{ id: 'automatizacion', name: 'Automatización', icon: 'layers', desc: 'Elimina el trabajo manual repetitivo.', services: 4 },
	{ id: 'ecommerce', name: 'E-commerce', icon: 'cart', desc: 'Tiendas online que venden mientras duermes.', services: 3 },
	{ id: 'marketing', name: 'Marketing Digital', icon: 'megaphone', desc: 'Más clientes sin depender del boca a boca.', services: 3 },
	{ id: 'soporte', name: 'Soporte y Mantención', icon: 'briefcase', desc: 'Tu sitio siempre en línea y actualizado.', services: 5 }
];

export interface CaseStudy {
	client: string;
	location: string;
	solution: string;
	result: string;
	icon: string;
}

export const cases: CaseStudy[] = [
	{
		client: 'Tienda de ropa',
		location: 'Santiago',
		solution: 'E-commerce + agente de ventas WhatsApp',
		result: '35% más ventas en el primer mes',
		icon: 'cart'
	},
	{
		client: 'Clínica dental',
		location: 'Concepción',
		solution: 'Sitio web + sistema de agendamiento',
		result: 'Llamadas en recepción reducidas a la mitad',
		icon: 'globe'
	},
	{
		client: 'Empresa de servicios',
		location: 'Antofagasta',
		solution: 'Automatización de cotizaciones',
		result: 'Cotizan en 3 minutos; antes tardaban 2 días',
		icon: 'layers'
	},
	{
		client: 'Inmobiliaria',
		location: 'Valparaíso',
		solution: 'Agente IA de atención al cliente',
		result: '60% de consultas resueltas sin intervención humana',
		icon: 'brain'
	},
	{
		client: 'Restaurante',
		location: 'La Serena',
		solution: 'Landing page + chatbot WhatsApp',
		result: '40% más reservas en los primeros 30 días',
		icon: 'rocket'
	},
	{
		client: 'Empresa de logística',
		location: 'Iquique',
		solution: 'Automatización de reportes semanales',
		result: 'Ahorro de 8 horas semanales de trabajo manual',
		icon: 'dashboard'
	}
];

export interface CashflowCard {
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
}

export const cashflowCards: CashflowCard[] = [
	{
		id: 'landing',
		name: 'Landing Page Profesional',
		price: 'desde USD 400',
		time: '7 días',
		badge: 'Más solicitado',
		desc: 'Tu empresa en Google con una página que convierte visitantes en clientes. Diseño profesional, formulario de contacto y WhatsApp integrado.',
		includes: [
			'Diseño profesional',
			'Responsive mobile',
			'Formulario + WhatsApp',
			'SSL incluido',
			'Dominio por 1 año'
		],
		cta: 'Quiero mi landing',
		waMsg: 'Hola CoreWerk, quiero una Landing Page Profesional (desde USD 400).',
		featured: true
	},
	{
		id: 'chatbot',
		name: 'Chatbot WhatsApp 24/7',
		price: 'desde USD 600',
		time: '10 días',
		badge: 'ROI en 30 días',
		desc: 'Tu empresa responde consultas, agenda citas y filtra clientes a las 3am. Sin persona. Sin costo adicional por mensaje.',
		includes: [
			'Flujo conversacional',
			'Integración WhatsApp Business',
			'Panel de conversaciones',
			'Mensajes ilimitados',
			'30 días de soporte'
		],
		cta: 'Ver demo',
		waMsg: 'Hola CoreWerk, quiero ver una demo del Chatbot WhatsApp 24/7 (desde USD 600).',
		featured: false
	},
	{
		id: 'automatizacion',
		name: 'Automatización Express',
		price: 'desde USD 800',
		time: '15 días',
		badge: 'Ahorra 10h/semana',
		desc: 'Eliminamos el proceso manual más doloroso de tu operación. Cotizaciones, reportes, recordatorios: en automático.',
		includes: [
			'Diagnóstico de proceso',
			'Flujo automatizado',
			'Integración email + WhatsApp',
			'Manual de uso',
			'60 días de soporte'
		],
		cta: 'Automatizar ahora',
		waMsg: 'Hola CoreWerk, quiero automatizar un proceso de mi empresa (Automatización Express, desde USD 800).',
		featured: false
	}
];

export const cashflowBannerMsg: string =
	'Hola CoreWerk, tengo una necesidad específica y quiero contarles mi caso.';
