<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { serviciosBasicos } from '$lib/data';
	import { SITE } from '$lib/seo/site';
	import { base } from '$app/paths';

	const description =
		'Servicios Básicos para tu presencia digital en Chile: Logo y Branding, Email Corporativo, Hosting y Dominio, Mantención Mensual, Actualización de Contenido. Precios desde USD 8/mes. CoreWerk Antofagasta.';
	const canonical = `${SITE.url}/servicios-basicos/`;

	const ldJson = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Servicios Básicos — CoreWerk',
		description,
		url: canonical,
		hasPart: serviciosBasicos.map((s) => ({
			'@type': 'Service',
			name: s.name,
			url: `${SITE.url}/servicios-basicos/${s.slug}/`
		}))
	};
</script>

<svelte:head>
	<title>Servicios Básicos para tu sitio web · CoreWerk</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Servicios Básicos para tu sitio web · CoreWerk" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Servicios Básicos' }]}
	eyebrow="Servicios Básicos"
	icon="briefcase"
	title="Empieza hoy por menos de USD 100"
	subtitle="Logo y branding, email corporativo, hosting, dominio y mantención. Los servicios fundamentales que todo sitio web necesita para estar siempre en línea y con imagen profesional."
	ctaPrimary={{ label: 'Cotizar ahora', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver detalles', href: '#servicios' }}
/>

<InteriorSection
	id="servicios"
	eyebrow="5 servicios esenciales"
	title="Soluciones pequeñas que generan grandes resultados"
	lead="Cada servicio resuelve una necesidad específica de tu presencia digital. Combínalos según lo que necesitas."
	align="center"
>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each serviciosBasicos as servicio}
			<a href={`${base}/servicios-basicos/${servicio.slug}/`} class="glass-card group flex h-full flex-col p-6">
				<span class="mb-4 inline-flex text-3xl">
					{servicio.emoji}
				</span>
				<h3 class="text-base font-semibold text-ink transition-colors group-hover:text-accent">
					{servicio.name}
				</h3>
				<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{servicio.tagline}</p>
				<div class="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
					<span class="text-sm font-bold text-accent">{servicio.price}</span>
					<span class="flex items-center gap-1 text-xs text-muted">Ver más <Icon name="arrow" class="h-3 w-3" /></span>
				</div>
			</a>
		{/each}
	</div>
</InteriorSection>

<CTAInterior
	title="¿Cuál es el servicio que necesitas?"
	text="Nuestro equipo te ayuda a elegir la combinación correcta de servicios para tu negocio y tu presupuesto. Consulta sin compromiso por WhatsApp."
	waMsg="Hola CoreWerk, quiero conocer más sobre los Servicios Básicos y qué necesito para mi sitio web."
/>
