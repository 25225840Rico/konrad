<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Icon from '$lib/Icon.svelte';
	import SEO from '$lib/seo/SEO.svelte';
	import { SITE } from '$lib/seo/site';
	import { reveal } from '$lib/reveal';
	import type { CityContent } from '$lib/content/types';

	let { data }: { data: CityContent } = $props();
	const path = `/${data.slug}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Service',
				name: data.metaTitle,
				description: data.tldr,
				provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
				areaServed: { '@type': 'City', name: data.city }
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE.url },
					{ '@type': 'ListItem', position: 2, name: `Agencia web ${data.city}`, item: `${SITE.url}${path}` }
				]
			}
		]
	};

	const whyPoints = [
		{
			title: 'Remoto sin fricción',
			desc: `Coordinamos todo por videollamada, WhatsApp y correo. Trabajamos con clientes en ${data.city} igual de bien que si estuviéramos en la misma oficina.`
		},
		{
			title: 'Precios en UF, claros desde el inicio',
			desc: 'Sin letra chica ni cobros inesperados. Desde UF 8 para un sitio corporativo. Pago en etapas (50% inicio / 50% entrega). Factura disponible.'
		},
		{
			title: 'Especialistas por segmento',
			desc: 'Tenemos experiencia en sitios corporativos, tiendas online, portafolios y plataformas. Elegimos la tecnología correcta según tu negocio y presupuesto.'
		}
	];
</script>

<SEO
	title={data.metaTitle}
	description={data.metaDescription}
	{path}
	type="website"
	{jsonLd}
/>

<Navbar />

<main class="overflow-hidden">
	<!-- Hero -->
	<section class="relative px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
		<div class="mx-auto max-w-4xl text-center">
			<span class="eyebrow mb-5 justify-center" use:reveal>
				<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
				Diseño web en {data.city}
			</span>
			<h1
				class="text-gradient mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
				use:reveal
			>
				{data.h1}
			</h1>
			<!-- TLDR: citable por IAs / buscadores -->
			<p
				class="glass mx-auto mb-8 max-w-2xl rounded-2xl p-5 text-left text-sm leading-relaxed text-ink/90"
				use:reveal
			>
				{data.tldr}
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4" use:reveal>
				<a href="/#contacto" class="btn-accent">Cotiza tu proyecto</a>
				<a href="https://wa.me/56912345678" target="_blank" rel="noopener" class="btn-glass">
					<Icon name="whatsapp" class="h-5 w-5" /> Hablar por WhatsApp
				</a>
			</div>
		</div>
	</section>

	<!-- Por qué elegir Konrad en esta ciudad -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				¿Por qué elegir Konrad en {data.city}?
			</h2>
			<div class="grid gap-6 md:grid-cols-3">
				{#each whyPoints as point}
					<div class="glass glass-card rounded-2xl p-6" use:reveal>
						<h3 class="mb-2 text-lg font-semibold text-ink">{point.title}</h3>
						<p class="text-muted">{point.desc}</p>
					</div>
				{/each}
			</div>

			<!-- Links a subpáginas de segmento -->
			<div class="mt-10 text-center" use:reveal>
				<p class="mb-4 text-muted">Especialistas en:</p>
				<div class="flex flex-wrap justify-center gap-3">
					<a href="/web-corporativa" class="glass rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink">
						Web Corporativa
					</a>
					<a href="/tienda-online-ecommerce" class="glass rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink">
						Tienda Online
					</a>
					<a href="/#diagnostico" class="glass rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink">
						Mejorar Web Existente
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Mercado local -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-3xl">
			<div class="glass rounded-3xl p-8 lg:p-12" use:reveal>
				<span class="eyebrow mb-4">Contexto local</span>
				<h2 class="mb-6 text-2xl font-bold text-ink lg:text-3xl">
					El mercado digital en {data.city}
				</h2>
				<p class="text-lg leading-relaxed text-muted">
					{data.marketNote}
				</p>
				<p class="mt-4 text-muted">
					Konrad trabaja de forma 100% remota con clientes en {data.city}, lo que nos permite ofrecerte precios competitivos sin los costos de una oficina local, y sin sacrificar la calidad ni la comunicación.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA final -->
	<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold text-ink lg:text-4xl" use:reveal>
				¿Listo para tener la web que {data.city} merece?
			</h2>
			<p class="mb-8 text-lg text-muted" use:reveal>
				Cuéntanos tu proyecto y te enviamos una propuesta clara en 24 horas. Sin compromiso, sin letra chica.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4" use:reveal>
				<a href="/#contacto" class="btn-accent">Solicitar propuesta gratis</a>
				<a href="/#diagnostico" class="btn-glass">Diagnóstico de mi web actual</a>
			</div>
		</div>
	</section>
</main>

<Footer />
