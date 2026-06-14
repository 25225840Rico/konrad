<script lang="ts">
	import type { HeroCityPhrase } from '$lib/data';

	let {
		phrases,
		cities,
		interval = 2500
	}: {
		phrases: HeroCityPhrase[];
		cities: string[];
		interval?: number;
	} = $props();

	let index = $state(0);

	$effect(() => {
		const id = setInterval(() => {
			index = (index + 1) % Math.max(phrases.length, cities.length);
		}, interval);
		return () => clearInterval(id);
	});

	const phrase = $derived(phrases[index % phrases.length]);
	const city = $derived(cities[index % cities.length]);
	const colorClass = $derived(
		phrase.color === 'accentAI' ? 'text-accentAI' : 'text-accent'
	);
</script>

<span class="text-ink">{phrase.prefix}&nbsp;</span>{#key index}<span
		class="inline-block {colorClass} underline decoration-accent decoration-2 underline-offset-4 animate-city-in"
	>{city}</span>{/key}
