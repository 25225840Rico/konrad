// =====================================================================
// CONTENIDO CENTRAL DEL SITIO KONRAD
// Edita aquí los textos, precios y datos. Los componentes leen de este
// archivo, así que no necesitas tocar el markup para actualizar contenido.
// =====================================================================

export type Segment = {
	id: string;
	name: string;
	icon: string; // clave de ícono SVG (ver lib/icons.ts)
	desc: string;
	who: string;
	price: string;
};

export const segments: Segment[] = [
	{
		id: 'corporativo',
		name: 'Corporativo / B2B',
		icon: 'building',
		desc: 'Presencia profesional para empresas de servicios, transporte, construcción e industria.',
		who: 'Pymes, empresas de servicios, proveedores industriales',
		price: 'Desde UF 8'
	},
	{
		id: 'ecommerce',
		name: 'E-commerce',
		icon: 'cart',
		desc: 'Tienda online con catálogo, carrito y pagos integrados para vender 24/7.',
		who: 'Tiendas retail, productores, mayoristas',
		price: 'Desde UF 14'
	},
	{
		id: 'blog',
		name: 'Blog / Contenido',
		icon: 'pen',
		desc: 'Plataforma de publicación para monetizar contenido y posicionar en Google.',
		who: 'Creadores de contenido, medios independientes, consultoras',
		price: 'Desde UF 5'
	},
	{
		id: 'saas',
		name: 'SaaS / Plataforma web',
		icon: 'server',
		desc: 'Aplicación web con login, panel de usuario y funciones específicas para tu negocio.',
		who: 'Startups, empresas con procesos internos digitalizables',
		price: 'Desde UF 25'
	},
	{
		id: 'portafolio',
		name: 'Portafolio profesional',
		icon: 'gallery',
		desc: 'Sitio personal para mostrar tu trabajo y atraer clientes o empleadores.',
		who: 'Diseñadores, fotógrafos, arquitectos, freelancers',
		price: 'Desde UF 4'
	},
	{
		id: 'noticias',
		name: 'Noticias / Media',
		icon: 'news',
		desc: 'Portal de publicaciones con estructura editorial, categorías y buscador integrado.',
		who: 'Medios locales, revistas digitales, portales informativos',
		price: 'Desde UF 10'
	},
	{
		id: 'directorio',
		name: 'Directorio / Marketplace',
		icon: 'list',
		desc: 'Plataforma de listados donde proveedores o negocios publican su oferta.',
		who: 'Cámaras de comercio, asociaciones, agregadores de servicios',
		price: 'Desde UF 18'
	},
	{
		id: 'comunidad',
		name: 'Comunidad / Foro',
		icon: 'community',
		desc: 'Espacio de interacción entre usuarios con perfiles, posts y moderación.',
		who: 'Asociaciones, clubs, grupos de interés, membership sites',
		price: 'Desde UF 15'
	},
	{
		id: 'institucional',
		name: 'Institucional / Educativo / Gobierno',
		icon: 'shield',
		desc: 'Sitio formal con información pública, trámites y estructura accesible.',
		who: 'Colegios, municipios, ONGs, fundaciones, instituciones públicas',
		price: 'Desde UF 7'
	}
];

// Pills del hero (orden y nombres cortos)
export const heroPills = [
	'Corporativo',
	'E-commerce',
	'Blog',
	'SaaS',
	'Portafolio',
	'Noticias',
	'Directorio',
	'Comunidad',
	'Institucional'
];

export type ProcessStep = {
	n: string;
	title: string;
	desc: string;
};

export const processSteps: ProcessStep[] = [
	{ n: '1', title: 'Diagnóstico', desc: 'Entendemos tu negocio, objetivos y situación actual.' },
	{ n: '2', title: 'Propuesta', desc: 'Definimos alcance, plazos y precio cerrado en UF.' },
	{ n: '3', title: 'Diseño', desc: 'Creamos la interfaz a medida y la validamos contigo.' },
	{ n: '4', title: 'Desarrollo', desc: 'Construimos el sitio rápido, seguro y optimizado.' },
	{ n: '5', title: 'Entrega y soporte', desc: 'Publicamos, capacitamos y acompañamos post-lanzamiento.' }
];

export type PortfolioCase = {
	company: string;
	segment: string;
	result: string;
	tag: 'Web nueva' | 'Mejora';
	color: string; // hex sin # para placehold.co
};

export const portfolio: PortfolioCase[] = [
	{
		company: 'TransAndes Personal',
		segment: 'Corporativo B2B',
		result: '+35% cotizaciones vía formulario',
		tag: 'Web nueva',
		color: '0F172A'
	},
	{
		company: 'Camping del Norte',
		segment: 'E-commerce',
		result: 'Ventas online desde el primer mes',
		tag: 'Web nueva',
		color: 'F59E0B'
	},
	{
		company: 'RH Minera Consultores',
		segment: 'Corporativo',
		result: 'Primera página en Google en 60 días',
		tag: 'Mejora',
		color: '1E293B'
	},
	{
		company: 'Colegio San Lorenzo',
		segment: 'Institucional',
		result: 'Matrículas online integradas',
		tag: 'Web nueva',
		color: '0F172A'
	},
	{
		company: 'ProveedoresMin',
		segment: 'Directorio',
		result: '+120 proveedores registrados al mes',
		tag: 'Web nueva',
		color: '64748B'
	},
	{
		company: 'TecnoRevista',
		segment: 'Noticias / Blog',
		result: '15.000 visitas mensuales en 3 meses',
		tag: 'Mejora',
		color: 'F59E0B'
	}
];

export type Plan = {
	name: string;
	price: string;
	featured: boolean;
	badge?: string;
	features: string[];
	ideal: string;
};

export const plans: Plan[] = [
	{
		name: 'Básico',
		price: 'UF 6',
		featured: false,
		features: [
			'Hasta 5 páginas',
			'Diseño desde plantilla',
			'SEO básico',
			'Formulario de contacto',
			'1 mes de soporte'
		],
		ideal: 'Portafolio, Blog simple, Corporativo pequeño'
	},
	{
		name: 'Profesional',
		price: 'UF 14',
		featured: true,
		badge: 'Más elegido',
		features: [
			'Hasta 12 páginas',
			'Diseño a medida',
			'SEO avanzado',
			'E-commerce hasta 50 productos',
			'Integración WhatsApp + email marketing',
			'3 meses de soporte'
		],
		ideal: 'E-commerce, Corporativo B2B, Institucional'
	},
	{
		name: 'Premium',
		price: 'UF 28',
		featured: false,
		features: [
			'Páginas ilimitadas',
			'Diseño + desarrollo custom',
			'SaaS / Plataforma / Directorio / Comunidad',
			'Integraciones a medida (APIs, pagos, login)',
			'6 meses de soporte y mantención'
		],
		ideal: 'SaaS, Marketplace, Plataformas complejas'
	}
];

export type Testimonial = {
	quote: string;
	name: string;
	role: string;
	company: string;
};

export const testimonials: Testimonial[] = [
	{
		quote:
			'Konrad entendió nuestro rubro desde la primera reunión. El nuevo sitio nos trajo cotizaciones reales, no solo visitas.',
		name: 'Rodrigo Salinas',
		role: 'Gerente Comercial',
		company: 'TransAndes Personal'
	},
	{
		quote:
			'Pasamos de vender solo en local a tener pedidos online todas las semanas. La tienda quedó simple de administrar.',
		name: 'Carla Méndez',
		role: 'Fundadora',
		company: 'Camping del Norte'
	},
	{
		quote:
			'Necesitábamos un sitio serio y accesible para apoderados. Lo entregaron a tiempo y con matrícula online funcionando.',
		name: 'Patricia Rojas',
		role: 'Directora',
		company: 'Colegio San Lorenzo'
	}
];

export type Faq = {
	q: string;
	a: string;
};

export const faqs: Faq[] = [
	{
		q: '¿Cuánto demora hacer un sitio web?',
		a: 'Un sitio nuevo toma entre 2 y 4 semanas según su complejidad. Proyectos más grandes como tiendas o plataformas pueden extenderse, pero siempre te entregamos un plazo cerrado en la propuesta.'
	},
	{
		q: '¿Qué pasa si ya tengo un sitio pero quiero mejorarlo?',
		a: 'Partimos con un diagnóstico gratuito de velocidad, SEO y experiencia. Luego optimizamos o rediseñamos lo necesario sin perder tu posicionamiento actual en Google. Las mejoras parten desde UF 3.'
	},
	{
		q: '¿Necesito saber de tecnología para trabajar con ustedes?',
		a: 'No. Nosotros nos encargamos de todo lo técnico y te explicamos cada decisión en lenguaje simple. Tú aportas el conocimiento de tu negocio y nosotros lo traducimos a la web.'
	},
	{
		q: '¿Incluyen el dominio y el hosting?',
		a: 'Te asesoramos en la compra del dominio y la contratación del hosting, y dejamos todo configurado. El costo del dominio y hosting es aparte, pero te recomendamos opciones económicas y confiables.'
	},
	{
		q: '¿Pueden hacer tiendas online con pagos en Chile (Transbank, Webpay)?',
		a: 'Sí. Integramos Webpay de Transbank y otras pasarelas como Flow o Mercado Pago, para que recibas pagos con tarjetas chilenas de forma segura.'
	},
	{
		q: '¿Trabajan con clientes fuera de Antofagasta?',
		a: 'Sí. Estamos en Antofagasta pero atendemos todo Chile de forma remota. Coordinamos por videollamada, WhatsApp y correo sin que la distancia sea un problema.'
	}
];

// Datos de contacto
export const contact = {
	whatsapp: 'https://wa.me/56912345678',
	whatsappLabel: '+56 9 1234 5678',
	email: 'hola@konrad.cl',
	city: 'Antofagasta, Chile — atendemos todo el país',
	hours: 'Lunes a viernes 9:00–18:00'
};

// Opciones del select "Tipo de proyecto" del formulario de contacto
export const projectTypes = [
	...segments.map((s) => s.name),
	'No sé aún',
	'Mejorar mi web actual'
];
