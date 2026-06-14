<script lang="ts">
	import { contact, ciudadesChile, siteTypes } from '$lib/data';
	import { WA_LINK } from '$lib/seo/site';
	import Icon from '$lib/Icon.svelte';

	const year = new Date().getFullYear();
	const cities = ciudadesChile.slice(0, 8);
</script>

<footer class="border-t border-white/10 bg-primary text-ink">
	<div class="container-w py-16 lg:py-20">
		<!-- Grid 4 columnas -->
		<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Logo + Ubicación -->
			<div>
				<p class="text-lg font-bold">
					Core<span class="text-accent">·</span>Werk
				</p>
				<p class="mt-3 text-xs text-muted">Estudio de diseño, desarrollo web e IA</p>
				<p class="mt-6 text-xs text-muted">Trabajamos en todo Chile</p>
				<div class="mt-4 flex flex-wrap gap-2">
					{#each cities as city}
						<span class="inline-flex items-center gap-1 text-xs text-muted">
							{#if city === cities[0]}
								<Icon name="map" class="w-3 h-3" />
							{/if}
							{city}
						</span>
					{/each}
				</div>
			</div>

			<!-- Sitios Web -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-[0.18em] text-accent">Sitios Web</h3>
				<ul class="mt-4 space-y-2 text-sm text-ink">
					{#each siteTypes as site}
						<li>
							<a
								href={`/sitios/${site.slug}/`}
								class="transition-colors hover:text-accent"
							>
								{site.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- IA & Servicios -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-[0.18em] text-accent">IA & Agentes</h3>
				<ul class="mt-4 space-y-2 text-sm text-ink">
					<li><a href="/inteligencia-artificial/" class="transition-colors hover:text-accent">Agentes IA</a></li>
					<li><a href="/servicios/" class="transition-colors hover:text-accent">Servicios Digitales</a></li>
					<li><a href="/servicios-basicos/" class="transition-colors hover:text-accent">Servicios Básicos</a></li>
				</ul>
			</div>

			<!-- Empresa -->
			<div>
				<h3 class="text-xs font-bold uppercase tracking-[0.18em] text-accent">Empresa</h3>
				<ul class="mt-4 space-y-2 text-sm text-ink">
					<li><a href="/nosotros/" class="transition-colors hover:text-accent">Sobre nosotros</a></li>
					<li><a href="/portafolio/" class="transition-colors hover:text-accent">Portafolio</a></li>
					<li><a href="/contacto/" class="transition-colors hover:text-accent">Contacto</a></li>
					<li><a href="/blog/" class="transition-colors hover:text-accent">Blog</a></li>
				</ul>
			</div>
		</div>

		<!-- Footer inferior -->
		<div class="mt-12 border-t border-white/10 pt-6 text-center text-xs text-muted">
			<p>Hecho con ☕ en Antofagasta, Chile</p>
			<p class="mt-2">© {year} CoreWerk · Todos los derechos reservados</p>
		</div>
	</div>
</footer>
