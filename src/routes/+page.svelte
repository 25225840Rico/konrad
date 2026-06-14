<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CashflowRapido from '$lib/components/CashflowRapido.svelte';
	import Industrias from '$lib/components/Industrias.svelte';
	import Servicios from '$lib/components/Servicios.svelte';
	import AgenteDemo from '$lib/components/AgenteDemo.svelte';
	import ComoTrabajamos from '$lib/components/ComoTrabajamos.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Casos from '$lib/components/Casos.svelte';
	import Metricas from '$lib/components/Metricas.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Contacto from '$lib/components/Contacto.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/seo/site';
	import { faqs } from '$lib/data';

	const description =
		'CoreWerk es la unidad tecnológica de CoreService (Antofagasta). Automatización, sitios web, IA y sistemas digitales para empresas de minería, transporte, logística y servicios industriales del norte de Chile.';

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['Organization', 'ProfessionalService'],
				name: 'CoreWerk',
				alternateName: 'CoreWerk — unidad tecnológica de CoreService',
				description,
				url: SITE.url,
				email: SITE.email,
				slogan: 'Tecnología que trabaja en faena',
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'CL',
					addressLocality: 'Antofagasta',
					addressRegion: 'Antofagasta'
				},
				areaServed: { '@type': 'Country', name: 'Chile' },
				priceRange: '$$',
				knowsAbout: [
					'Desarrollo web',
					'Automatización empresarial',
					'Inteligencia artificial',
					'Sistemas a medida',
					'Marketing digital B2B',
					'Minería',
					'Transporte y logística',
					'Servicios industriales'
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
	<title>CoreWerk · Tecnología que trabaja en faena</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={`${SITE.url}/`} />
	<meta property="og:title" content="CoreWerk · Tecnología que trabaja en faena" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={`${SITE.url}/`} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<Navbar />
<WhatsAppButton />

<main>
	<Hero />
	<CashflowRapido />
	<Metricas />
	<Industrias />
	<Servicios />
	<AgenteDemo />
	<ComoTrabajamos />
	<Casos />
	<Pricing />
	<FAQ />
	<Contacto />
</main>

<Footer />
