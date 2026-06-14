<script lang="ts">
	import CursorFX from '$lib/components/CursorFX.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Segments from '$lib/components/Segments.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Diagnostic from '$lib/components/Diagnostic.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SITE } from '$lib/seo/site';

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': ['Organization', 'ProfessionalService'],
				additionalType: 'https://schema.org/ProfessionalService',
				name: 'Konrad',
				description:
					'Agencia de diseño y desarrollo web en Chile. Atendemos todos los sectores: empresas corporativas, tiendas online, profesionales independientes y proyectos SaaS en todo el país.',
				url: SITE.url,
				telephone: SITE.telephone,
				email: SITE.email,
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'CL',
					addressLocality: 'Antofagasta'
				},
				areaServed: {
					'@type': 'Country',
					name: 'Chile'
				},
				priceRange: '$$',
				knowsAbout: [
					'Diseño web',
					'Desarrollo web',
					'SvelteKit',
					'E-commerce',
					'SEO',
					'UX/UI',
					'Sitios corporativos',
					'Plataformas SaaS'
				],
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: 'Servicios web Konrad',
					itemListElement: [
						{
							'@type': 'Offer',
							itemOffered: { '@type': 'Service', name: 'Web corporativa' },
							description: 'Sitio web corporativo o institucional desde UF 8'
						},
						{
							'@type': 'Offer',
							itemOffered: { '@type': 'Service', name: 'Tienda online' },
							description: 'E-commerce con medios de pago integrados desde UF 14'
						},
						{
							'@type': 'Offer',
							itemOffered: { '@type': 'Service', name: 'Mejora de sitio existente' },
							description: 'Optimización, rediseño o mejora técnica de sitio existente desde UF 3'
						}
					]
				},
				// ⚠️ aggregateRating ILUSTRATIVO — reemplazar por reviews reales antes de producción (Google penaliza ratings falsos)
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '4.9',
					reviewCount: '23',
					bestRating: '5',
					worstRating: '1'
				}
			},
			{
				'@type': 'FAQPage',
				mainEntity: [
					{
						'@type': 'Question',
						name: '¿Cuánto cuesta hacer una página web en Chile?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Un sitio corporativo parte desde UF 8 (~$300.000 CLP), una tienda online desde UF 14 (~$560.000 CLP) y una mejora de sitio existente desde UF 3 (~$120.000 CLP). El precio depende de la complejidad, las funcionalidades y el diseño requerido.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Cuánto demora hacer una página web?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Un sitio corporativo tarda entre 2 y 4 semanas. Una tienda online entre 3 y 6 semanas. Una mejora o rediseño de sitio existente puede estar listo en 1 a 2 semanas. Los plazos dependen de la complejidad del proyecto.'
						}
					},
					{
						'@type': 'Question',
						name: '¿Qué es Konrad y dónde opera?',
						acceptedAnswer: {
							'@type': 'Answer',
							text: 'Konrad es una agencia de diseño y desarrollo web que opera en todo Chile de forma remota. Está basada en el norte del país (Antofagasta) y atiende negocios de todos los sectores y tamaños a lo largo de Chile, sin importar la ciudad.'
						}
					}
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Konrad · Creamos y mejoramos sitios web para cualquier negocio</title>
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<CursorFX />
<Navbar />

<main>
	<Hero />
	<Segments />
	<Services />
	<Process />
	<Portfolio />
	<Diagnostic />
	<Pricing />
	<Testimonials />
	<FAQ />
	<Contact />
</main>

<Footer />
