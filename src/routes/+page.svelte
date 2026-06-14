<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BannerTicker from '$lib/components/BannerTicker.svelte';
	import TiposWeb from '$lib/components/TiposWeb.svelte';
	import EntradaRapida from '$lib/components/EntradaRapida.svelte';
	import SeccionIA from '$lib/components/SeccionIA.svelte';
	import AgentesDetalle from '$lib/components/AgentesDetalle.svelte';
	import Servicios from '$lib/components/Servicios.svelte';
	import AgenteDemo from '$lib/components/AgenteDemo.svelte';
	import Metricas from '$lib/components/Metricas.svelte';
	import Proceso from '$lib/components/Proceso.svelte';
	import Portafolio from '$lib/components/Portafolio.svelte';
	import Testimonios from '$lib/components/Testimonios.svelte';
	import Precios from '$lib/components/Precios.svelte';
	import ServiciosBasicos from '$lib/components/ServiciosBasicos.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import CTAFinal from '$lib/components/CTAFinal.svelte';
	import Contacto from '$lib/components/Contacto.svelte';
	import { SITE } from '$lib/seo/site';
	import { faqs } from '$lib/data';

	const description =
		'CoreWerk — estudio de diseño, desarrollo web e inteligencia artificial de Antofagasta, Chile. Sitios web desde USD 400, agentes IA a medida, automatización y servicios básicos para empresas de todo Chile.';

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['Organization', 'ProfessionalService'],
				name: 'CoreWerk',
				description,
				url: SITE.url,
				email: SITE.email,
				slogan: 'Diseño · Desarrollo · Inteligencia Artificial',
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'CL',
					addressLocality: 'Antofagasta',
					addressRegion: 'Antofagasta'
				},
				areaServed: { '@type': 'Country', name: 'Chile' },
				priceRange: '$$',
				knowsAbout: [
					'Diseño web',
					'Desarrollo web',
					'Inteligencia artificial',
					'Agentes IA',
					'Automatización',
					'E-commerce',
					'SEO',
					'Marketing digital'
				]
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqs.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>CoreWerk · Diseño, Desarrollo Web e IA en Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={`${SITE.url}/`} />
	<meta property="og:title" content="CoreWerk · Diseño, Desarrollo Web e IA en Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={`${SITE.url}/`} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<main>
	<Hero />
	<BannerTicker />
	<TiposWeb />
	<EntradaRapida />
	<SeccionIA />
	<AgentesDetalle />
	<Servicios />
	<AgenteDemo />
	<Metricas />
	<Proceso />
	<Portafolio />
	<Testimonios />
	<Precios />
	<ServiciosBasicos />
	<FAQ />
	<CTAFinal />
	<Contacto />
</main>
