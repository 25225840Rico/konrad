<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { cases } from '$lib/data';

	// Color palette - map index to color
	function getColorClass(index: number): string {
		const colors = ['tile-blue', 'tile-cyan', 'tile-green', 'tile-orange', 'tile-red', 'tile-dark'];
		return colors[index % colors.length];
	}

	// Grid span pattern
	function getGridClass(index: number): string {
		const pattern = [
			'col-span-1',
			'col-span-1 row-span-1',
			'col-span-1 lg:col-span-2 lg:row-span-1',
			'col-span-1',
			'col-span-1 row-span-1',
			'col-span-1'
		];
		return pattern[index % 6];
	}
</script>

<section id="casos" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Casos de uso</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Resultados concretos en faena
			</h2>
			<p class="mt-6 text-base text-caption">
				Ejemplos representativos del impacto que genera digitalizar la operación.
			</p>
		</div>

		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style="grid-auto-rows: 200px;">
			{#each cases as c, i}
				<div
					class="reveal tile {getColorClass(i)} {getGridClass(i)} p-6 flex flex-col justify-between"
					style="transition-delay: {i * 60}ms;"
					use:reveal
				>
					<div>
						<div class="flex items-center gap-2">
							<Icon name={c.icon} class="w-6 h-6" />
							<span class="eyebrow text-white">{c.client}</span>
						</div>
						<p class="mt-4 text-sm">
							{c.solution}
						</p>
					</div>
					<div>
						<p class="text-sm font-normal">
							{c.result}
						</p>
						<p class="mt-2 text-xs opacity-80">{c.location}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
