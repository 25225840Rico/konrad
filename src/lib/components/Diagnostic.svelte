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

<section id="diagnostico" class="py-20 lg:py-28">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

		<!-- Panel de vidrio con resplandor ámbar -->
		<div class="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
			<!-- Glow ámbar de fondo sutil -->
			<div
				class="pointer-events-none absolute inset-0 rounded-3xl"
				style="background: radial-gradient(55% 40% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%);"
				aria-hidden="true"
			></div>

			<!-- Encabezado -->
			<h2 class="text-3xl lg:text-4xl font-extrabold text-ink mb-4 relative">
				¿Tu sitio web está perdiendo clientes?
			</h2>
			<p class="text-muted max-w-2xl mx-auto text-lg mb-14 relative">
				Analizamos velocidad, SEO y experiencia de usuario de tu sitio actual — gratis, en 24 horas.
			</p>

			<!-- Métricas con count-up -->
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14 relative">
				<div class="glass rounded-2xl p-6 flex flex-col items-center gap-2">
					<Icon name="gauge" class="w-8 h-8 text-accent mb-1" />
					<span class="text-5xl font-extrabold text-accent leading-none">
						{velocidad}/100
					</span>
					<span class="text-muted font-medium text-base">Velocidad</span>
				</div>
				<div class="glass rounded-2xl p-6 flex flex-col items-center gap-2">
					<Icon name="search" class="w-8 h-8 text-accent mb-1" />
					<span class="text-5xl font-extrabold text-accent leading-none">
						{seo}/100
					</span>
					<span class="text-muted font-medium text-base">SEO</span>
				</div>
				<div class="glass rounded-2xl p-6 flex flex-col items-center gap-2">
					<Icon name="zap" class="w-8 h-8 text-accent mb-1" />
					<span class="text-5xl font-extrabold text-accent leading-none">
						+{conversion}%
					</span>
					<span class="text-muted font-medium text-base">Conversión</span>
				</div>
			</div>

			<!-- CTA -->
			<a
				href="#contacto"
				class="btn-accent px-8 py-4 text-lg relative"
			>
				Analiza mi sitio gratis
			</a>
		</div>

	</div>
</section>
