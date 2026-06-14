<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { industries } from '$lib/data';

	// Alterno entre tile-light y tile-dark para dar jerarquía visual
	const tileColors = ['tile-light', 'tile-light', 'tile-dark', 'tile-light', 'tile-light', 'tile-dark'];
</script>

<section id="industrias" class="bg-bg py-20 lg:py-24">
	<div class="container-w">

		<!-- Cabecera -->
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Industrias</span>
			<h2 class="mt-4 text-4xl font-normal leading-tight text-fg">
				Conocemos el lenguaje de su faena
			</h2>
			<p class="mt-4 text-base text-caption">
				Soluciones digitales pensadas para los rubros que mueven el norte de Chile.
			</p>
		</div>

		<!-- Grid de tiles: 2 cols mobile → 3 cols desktop -->
		<div class="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3">
			{#each industries as ind, i}
				<a
					href="#servicios"
					class="reveal tile {tileColors[i]} min-h-[180px]"
					style="transition-delay: {i * 60}ms"
					use:reveal
				>
					<Icon name={ind.icon} class="w-8 h-8 shrink-0" />
					<div class="mt-auto">
						<div class="text-lg font-normal leading-tight">{ind.name}</div>
						<div class="mt-1 text-sm opacity-70 leading-snug">{ind.desc}</div>
						<div class="mt-3 text-xs uppercase tracking-widest opacity-60">{ind.services} servicios</div>
					</div>
				</a>
			{/each}
		</div>

	</div>
</section>
