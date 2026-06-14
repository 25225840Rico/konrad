<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { waLink, WA_LINK } from '$lib/data';

	// Mosaico de tiles: A=globe (glass emerald), B=automation, C=cpu, D=dashboard, E=megaphone
	// Un tile usa tile-glass-emerald (globe), el resto colores sólidos.
	const mosaic = [
		{ icon: 'automation', label: 'Automatización', color: 'tile-blue', href: '#servicios', wide: false },
		{ icon: 'globe',      label: 'Presencia Digital', color: 'tile-glass-emerald', href: '#servicios', wide: false, emerald: true },
		{ icon: 'cpu',        label: 'Inteligencia Artificial', color: 'tile-dark', href: '#servicios', wide: true },
		{ icon: 'dashboard',  label: 'Sistemas', color: 'tile-cyan', href: '#servicios', wide: false },
		{ icon: 'megaphone',  label: 'Marketing B2B', color: 'tile-orange', href: '#servicios', wide: false },
	];
</script>

<section id="inicio" class="bg-bg text-fg">
	<div class="container-w py-20 lg:py-24">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

			<!-- Columna izquierda: texto -->
			<div>
				<span class="eyebrow reveal" use:reveal>Antofagasta · Norte de Chile</span>

				<h1 class="reveal mt-6 text-7xl font-light leading-[1.05] tracking-tight lg:text-8xl" use:reveal>
					Tecnología que trabaja en faena
				</h1>

				<p class="reveal mt-6 text-lg text-caption" use:reveal>
					Automatización, sitios web, IA y sistemas digitales para minería, transporte y servicios industriales.
				</p>

				<div class="reveal mt-8 flex flex-wrap gap-4" use:reveal>
					<a href="#servicios" class="btn-glass-emerald">Ver servicios</a>
					<a href={WA_LINK} target="_blank" rel="noopener" class="btn-secondary">
						<Icon name="zap" class="w-4 h-4" /> WhatsApp directo
					</a>
				</div>
			</div>

			<!-- Columna derecha: mosaico de tiles -->
			<div class="reveal" use:reveal>
				<div class="grid grid-cols-2 gap-2">
					<!-- Fila 1: automation (1x1) + globe tile-glass-emerald (1x1) -->
					<a href={mosaic[0].href} class="tile {mosaic[0].color} aspect-square min-h-[140px]">
						<Icon name={mosaic[0].icon} class="w-8 h-8" />
						<span class="mt-auto text-sm font-normal leading-tight">{mosaic[0].label}</span>
					</a>

					<a
						href={mosaic[1].href}
						class="tile {mosaic[1].color} aspect-square min-h-[140px] animate-emerald-appear"
					>
						<Icon name={mosaic[1].icon} class="w-8 h-8 text-emerald" />
						<span class="mt-auto text-sm font-normal leading-tight text-emerald">{mosaic[1].label}</span>
					</a>

					<!-- Fila 2: cpu wide (col-span-2) -->
					<a href={mosaic[2].href} class="tile {mosaic[2].color} col-span-2 min-h-[100px] flex-row items-center gap-4">
						<Icon name={mosaic[2].icon} class="w-8 h-8 shrink-0" />
						<span class="text-sm font-normal">{mosaic[2].label}</span>
					</a>

					<!-- Fila 3: dashboard (1x1) + megaphone (1x1) -->
					<a href={mosaic[3].href} class="tile {mosaic[3].color} aspect-square min-h-[120px]">
						<Icon name={mosaic[3].icon} class="w-8 h-8" />
						<span class="mt-auto text-sm font-normal leading-tight">{mosaic[3].label}</span>
					</a>

					<a href={mosaic[4].href} class="tile {mosaic[4].color} aspect-square min-h-[120px]">
						<Icon name={mosaic[4].icon} class="w-8 h-8" />
						<span class="mt-auto text-sm font-normal leading-tight">{mosaic[4].label}</span>
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
