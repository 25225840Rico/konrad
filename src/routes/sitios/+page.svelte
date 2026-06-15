<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { siteTypes, faqs } from '$lib/data';
	import { SITE } from '$lib/seo/site';
	import { base } from '$app/paths';

	const description =
		'Tipos de sitio web que desarrollamos en CoreWerk: landing pages, sitios corporativos, e-commerce, portafolios, blogs, SaaS y más. Diseño profesional desde USD 400, para empresas de Antofagasta y todo Chile.';
	const canonical = `${SITE.url}/sitios/`;

	const ldJson = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Tipos de sitio web — CoreWerk',
		description,
		url: canonical,
		hasPart: siteTypes.map((s) => ({
			'@type': 'WebPage',
			name: s.name,
			url: `${SITE.url}/sitios/${s.slug}/`
		}))
	};
</script>

<svelte:head>
	<title>Tipos de Sitio Web · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Tipos de Sitio Web · CoreWerk Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Sitios Web' }]}
	eyebrow="Sitios Web"
	icon="globe"
	title="El sitio web correcto para tu objetivo"
	subtitle="No todos los sitios son iguales. Desde una landing page que capta clientes hasta una plataforma SaaS escalable, diseñamos el tipo de sitio que maximiza tu inversión según tu rubro y tus metas."
	ctaPrimary={{ label: 'Cotizar mi sitio', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver planes', href: '#precios' }}
/>

<InteriorSection
	eyebrow="9 tipos de sitio"
	title="Elige según lo que necesitas lograr"
	lead="Cada tipo de sitio resuelve un objetivo distinto. Mira cuál se ajusta a tu negocio."
	align="center"
>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each siteTypes as site}
			<a href={`${base}/sitios/${site.slug}/`} class="glass-card group flex flex-col p-6">
				<span class="mb-4 inline-flex text-accent">
					<Icon name={site.icon} class="h-7 w-7" />
				</span>
				<h3 class="text-base font-semibold text-ink transition-colors group-hover:text-accent">
					{site.name}
				</h3>
				<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{site.forWho}</p>
				<div class="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
					<span class="text-sm font-bold text-accent">Desde {site.price}</span>
					<span class="text-xs text-muted">{site.days}</span>
				</div>
			</a>
		{/each}
	</div>
</InteriorSection>

<InteriorSection eyebrow="Cómo trabajamos" title="De la idea al sitio publicado" align="center">
	<ProcesoInterior />
</InteriorSection>

<InteriorSection id="precios" eyebrow="Planes" title="Precio fijo, definido antes de empezar" align="center">
	<PreciosInterior />
</InteriorSection>

<InteriorSection eyebrow="Dudas comunes" title="Preguntas frecuentes" align="center">
	<FaqInterior items={faqs.slice(0, 6)} />
</InteriorSection>

<CTAInterior
	title="¿No sabes qué tipo de sitio necesitas?"
	text="En una conversación de 5 minutos te recomendamos el tipo de sitio que mejor convierte para tu rubro. Sin tecnicismos, sin compromiso."
	waMsg="Hola CoreWerk, quiero ayuda para elegir el tipo de sitio web ideal para mi negocio."
/>
