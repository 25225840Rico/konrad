<script lang="ts">
	import { onMount } from 'svelte';
	import { metrics } from '$lib/data';

	let shown = $state(metrics.map(() => 0));

	function animate(idx: number, target: number, duration = 1500) {
		const start = performance.now();
		function step(now: number) {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			shown[idx] = Math.round(eased * target);
			if (p < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	onMount(() => {
		const section = document.getElementById('metricas');
		if (!section) return;
		if (typeof IntersectionObserver === 'undefined') {
			shown = metrics.map((m) => m.value);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						metrics.forEach((m, i) => animate(i, m.value));
						observer.unobserve(section);
					}
				}
			},
			{ threshold: 0.3 }
		);
		observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<section id="metricas" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
			{#each metrics as m, i}
				<div class="glass-card p-8">
					<div class="text-5xl font-bold text-accent">
						{m.prefix}{shown[i]}{m.suffix}
					</div>
					<div class="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{m.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
