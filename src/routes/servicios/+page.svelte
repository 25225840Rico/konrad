<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { SITE } from '$lib/seo/site';
	import { base } from '$app/paths';

	const description =
		'Servicios de marketing digital y desarrollo web: diseño web, SEO, Google Ads, email marketing, mantención web y más. Desde USD 400 para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/servicios/`;

	const servicios = [
		{
			slug: 'diseno-web',
			name: 'Diseño Web',
			icon: 'palette',
			desc: 'Sitios modernos, responsivos y orientados a la conversión. Tu marca en internet desde USD 600.'
		},
		{
			slug: 'desarrollo-web',
			name: 'Desarrollo Web',
			icon: 'code',
			desc: 'Aplicaciones web personalizadas, plataformas SaaS y soluciones escalables. Desde USD 900.'
		},
		{
			slug: 'ui-ux',
			name: 'Diseño UI/UX',
			icon: 'star',
			desc: 'Interfaces intuitivas y atractivas que convierten. Experiencia de usuario centrada en el cliente. Desde USD 800.'
		},
		{
			slug: 'seo',
			name: 'SEO',
			icon: 'search',
			desc: 'Posicionamiento en Google para aparecer en los primeros resultados. Desde USD 600/mes.'
		},
		{
			slug: 'google-ads',
			name: 'Google Ads',
			icon: 'megaphone',
			desc: 'Campañas pagadas que traen clientes listos a comprar. ROI medible desde el primer día. Desde USD 500/mes.'
		},
		{
			slug: 'marketing-b2b',
			name: 'Marketing B2B',
			icon: 'megaphone',
			desc: 'Estrategia y ejecución orientada a empresas. Lead generation, LinkedIn y automatización. Desde USD 600/mes.'
		},
		{
			slug: 'email-marketing',
			name: 'Email Marketing',
			icon: 'mail',
			desc: 'Campañas de correo segmentadas y automatizadas. Nurture y retención de clientes. Desde USD 400/mes.'
		},
		{
			slug: 'mantencion-web',
			name: 'Mantención Web',
			icon: 'wrench',
			desc: 'Actualizaciones, seguridad y monitoreo continuo. Tu sitio siempre en línea. Desde USD 50/mes.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Servicios — CoreWerk',
		description,
		url: canonical,
		hasPart: servicios.map((s) => ({
			'@type': 'Service',
			name: s.name,
			url: `${SITE.url}/servicios/${s.slug}/`
		}))
	};

	const faqLocal = [
		{
			q: '¿Cuál es el servicio que debo contratar primero?',
			a: 'Depende de tus objetivos. Si necesitas presencia digital rápida, comienza con Diseño Web. Si buscas clientes, elige SEO o Google Ads. Si ya tienes sitio pero necesita mejoras, opta por Diseño UI/UX.'
		},
		{
			q: '¿Los servicios incluyen soporte post-entrega?',
			a: 'Sí. Todos incluyen un período de soporte. Los servicios de consultoría (SEO, Google Ads) incluyen soporte continuo mientras dure el contrato.'
		},
		{
			q: '¿Puedo combinar varios servicios?',
			a: 'Totalmente. De hecho, recomendamos combinar diseño con SEO o Google Ads para maximizar resultados. Ofrecemos descuentos por servicios combinados.'
		},
		{
			q: '¿En cuánto tiempo veo resultados?',
			a: 'El Diseño Web y la Mantención tienen resultados inmediatos. SEO toma 2-3 meses para ver posicionamiento. Google Ads trae clientes desde el primer día.'
		},
		{
			q: '¿Trabajan con mi presupuesto?',
			a: 'Sí, todos nuestros servicios tienen versiones adaptables. Te presentamos opciones desde básico hasta premium y escogés según tu presupuesto.'
		},
		{
			q: '¿Qué incluye la Mantención Web?',
			a: 'Actualizaciones de seguridad, monitoreo de disponibilidad 24/7, respaldos automáticos, cambios menores en contenido y soporte por WhatsApp prioritario.'
		}
	];
</script>

<svelte:head>
	<title>Servicios Digitales · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Servicios Digitales · CoreWerk Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }]}
	eyebrow="Servicios"
	icon="briefcase"
	title="Servicios digitales que transforman tu negocio"
	subtitle="Desde diseño web profesional hasta marketing digital y mantención continua. Cada servicio está diseñado para resolver un desafío específico de tu presencia online."
	ctaPrimary={{ label: 'Comenzar ahora', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver planes', href: '#precios' }}
/>

<InteriorSection
	eyebrow="Servicios disponibles"
	title="Elige según lo que necesitas lograr"
	lead="Cada servicio resuelve un desafío distinto de tu presencia digital en Chile."
	align="center"
>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each servicios as servicio}
			<a href={`${base}/servicios/${servicio.slug}/`} class="glass-card group flex h-full flex-col p-6">
				<span class="mb-4 inline-flex text-accent">
					<Icon name={servicio.icon} class="h-7 w-7" />
				</span>
				<h3 class="text-base font-semibold text-ink transition-colors group-hover:text-accent">
					{servicio.name}
				</h3>
				<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{servicio.desc}</p>
			</a>
		{/each}
	</div>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea a la ejecución" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Presupuesto flexible según tu necesidad" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas sobre nuestros servicios" align="center">
	<FaqInterior items={faqLocal} />
</InteriorSection>

<CTAInterior
	title="¿No sabes qué servicio necesitas?"
	text="En una conversación de 10 minutos analizamos tu situación actual y te recomendamos la estrategia digital que mejor funciona para tu rubro."
	waMsg="Hola CoreWerk, necesito ayuda para elegir qué servicio digital contratar."
/>
