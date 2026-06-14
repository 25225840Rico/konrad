<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { units, waLink } from '$lib/data';

	// Colores asignados a cada unidad (rotan entre los disponibles)
	const unitColors: string[] = ['tile-blue', 'tile-cyan', 'tile-dark', 'tile-green', 'tile-orange'];

	// Tiles 2×1 (col-span-2) para las dos primeras unidades, 1×1 para el resto
	// Layout: primera fila = presencia (2x1), segunda fila = automatizacion (2x1),
	// tercera fila = ia (1x1) + sistemas (1x1), cuarta = marketing (2x1)
	// Simplificado: alternas wide/narrow
	const wideSet = new Set([0, 1, 4]); // indices que van col-span-2
</script>

<section id="servicios" class="bg-bg py-20 lg:py-24">
	<div class="container-w">

		<!-- Cabecera -->
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Servicios</span>
			<h2 class="mt-4 text-4xl font-normal leading-tight text-fg">
				Cinco unidades, una sola dirección: su operación
			</h2>
			<p class="mt-4 text-base text-caption">
				Desde su primera web hasta sistemas a medida e inteligencia artificial aplicada a la industria.
			</p>
		</div>

		<!-- Grid de tiles -->
		<div class="mt-12 grid grid-cols-2 gap-2">
			{#each units as unit, i}
				<a
					href={waLink(`Hola CoreWerk, me interesa el servicio de ${unit.name}.`)}
					target="_blank"
					rel="noopener"
					class="reveal tile {unitColors[i]} {wideSet.has(i) ? 'col-span-2' : ''} min-h-[160px]"
					style="transition-delay: {i * 50}ms"
					use:reveal
				>
					<div class="flex items-start justify-between gap-4">
						<Icon name={unit.icon} class="w-8 h-8 shrink-0" />
						<span class="text-xs font-normal uppercase tracking-widest opacity-70">{unit.tag}</span>
					</div>
					<div class="mt-auto">
						<div class="text-xl font-normal leading-tight">{unit.name}</div>
						<div class="mt-1 text-sm opacity-75 leading-snug line-clamp-2">{unit.headline}</div>
					</div>
				</a>
			{/each}
		</div>

	</div>
</section>
