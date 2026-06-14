<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/Icon.svelte';

	// Count-up state
	let velocidad = $state(0);
	let seo = $state(0);
	let conversion = $state(0);

	const metrics = [
		{ icon: 'gauge', label: 'Velocidad', target: 94, suffix: '/100', prefix: '', getter: () => velocidad, setter: (v: number) => { velocidad = v; } },
		{ icon: 'search', label: 'SEO', target: 87, suffix: '/100', prefix: '', getter: () => seo, setter: (v: number) => { seo = v; } },
		{ icon: 'zap', label: 'Conversión', target: 40, suffix: '%', prefix: '+', getter: () => conversion, setter: (v: number) => { conversion = v; } }
	];

	function animateCount(setter: (v: number) => void, target: number, duration = 1500) {
		const start = performance.now();
		function step(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			// ease-out cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			setter(Math.round(eased * target));
			if (progress < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	onMount(() => {
		const section = document.getElementById('diagnostico');
		if (!section) return;

		if (typeof IntersectionObserver === 'undefined') {
			metrics.forEach(m => m.setter(m.target));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						metrics.forEach(m => animateCount(m.setter, m.target));
						observer.unobserve(section);
					}
				}
			},
			{ threshold: 0.2 }
		);
		observer.observe(section);

		return () => observer.disconnect();
	});
</script>

<section id="diagnostico" class="bg-accent py-20 lg:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

		<!-- Encabezado -->
		<h2 class="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
			¿Tu sitio web está perdiendo clientes?
		</h2>
		<p class="text-primary/80 max-w-2xl mx-auto text-lg mb-14">
			Analizamos velocidad, SEO y experiencia de usuario de tu sitio actual — gratis, en 24 horas.
		</p>

		<!-- Métricas con count-up -->
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">
			<div class="flex flex-col items-center gap-2">
				<Icon name="gauge" class="w-8 h-8 text-primary/60 mb-1" />
				<span class="text-5xl font-extrabold text-primary leading-none">
					{velocidad}/100
				</span>
				<span class="text-primary/70 font-medium text-base">Velocidad</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Icon name="search" class="w-8 h-8 text-primary/60 mb-1" />
				<span class="text-5xl font-extrabold text-primary leading-none">
					{seo}/100
				</span>
				<span class="text-primary/70 font-medium text-base">SEO</span>
			</div>
			<div class="flex flex-col items-center gap-2">
				<Icon name="zap" class="w-8 h-8 text-primary/60 mb-1" />
				<span class="text-5xl font-extrabold text-primary leading-none">
					+{conversion}%
				</span>
				<span class="text-primary/70 font-medium text-base">Conversión</span>
			</div>
		</div>

		<!-- CTA -->
		<a
			href="#contacto"
			class="inline-block bg-primary text-white font-semibold rounded-lg px-8 py-4 text-lg
			       hover:bg-ink transition-colors duration-200 focus-visible:outline-none
			       focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
		>
			Analiza mi sitio gratis
		</a>

	</div>
</section>
