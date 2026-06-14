<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { aiAgents, WA_LINK } from '$lib/data';

	let sectionEl: HTMLElement;
	let prefersReduced = false;

	onMount(() => {
		prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionEl) {
			sectionEl.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
		}

		return () => observer.disconnect();
	});

	// Primeros 4 agentes para las cards 2-5
	const previewAgents = aiAgents.slice(0, 4);
</script>

<section id="ia" class="bg-ai-section py-24 lg:py-32" bind:this={sectionEl}>
	<div class="container-w ai-glow">
		<!-- Eyebrow + Heading -->
		<div class="mb-16 text-center reveal">
			<span class="eyebrow mb-4 inline-flex">🤖 Inteligencia Artificial Aplicada</span>
			<h2 class="mt-4 text-4xl font-black text-white lg:text-6xl">
				Su empresa trabajando sola<br />
				<span class="text-accentAI">mientras usted duerme.</span>
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-base text-white/60 lg:text-lg">
				No son chatbots genéricos. Nuestros agentes IA entienden los procesos de su industria,
				hablan con sus clientes, acceden a sus sistemas y toman decisiones — todo sin intervención
				humana.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

			<!-- Card grande — col-span-2 en lg -->
			<div class="glass-card-ai col-span-1 p-8 reveal lg:col-span-2" style="transition-delay:0.05s">
				<div class="mb-4 flex items-center gap-3">
					<span class="flex h-12 w-12 items-center justify-center bg-accentAI/20">
						<Icon name="brain" class="w-7 h-7 text-accentAI" />
					</span>
					<span class="flex h-12 w-12 items-center justify-center bg-accentAI/10">
						<Icon name="cpu" class="w-7 h-7 text-accentAI/70" />
					</span>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-white">¿Qué es un Agente IA a Medida?</h3>
				<p class="mb-6 text-white/60 leading-relaxed">
					No es un chatbot simple con respuestas programadas. Un agente IA a medida
					<strong class="text-white/80">comprende el contexto</strong> de cada conversación,
					<strong class="text-white/80">recuerda interacciones anteriores</strong>, accede en tiempo real
					a sus datos (CRM, inventario, bases de datos), ejecuta acciones concretas y mejora con el uso.
					Está diseñado específicamente para su industria, con su vocabulario, sus procesos y sus reglas
					de negocio.
				</p>
				<a
					href="/inteligencia-artificial/agentes-a-medida/"
					class="btn-ai inline-flex text-sm font-bold"
				>
					Ver agentes disponibles →
				</a>
			</div>

			<!-- Cards 2-5: preview de agentes -->
			{#each previewAgents as agent, i}
				<div
					class="glass-card-ai flex flex-col justify-between p-6 reveal"
					style="transition-delay:{(i + 1) * 0.08}s"
				>
					<div>
						<span class="mb-3 flex h-10 w-10 items-center justify-center bg-accentAI/15">
							<Icon name={agent.icon} class="w-5 h-5 text-accentAI" />
						</span>
						<h4 class="mb-2 font-bold text-white">{agent.name}</h4>
						<p class="text-sm text-white/55 leading-relaxed">{agent.tagline}</p>
					</div>
					<p class="mt-4 text-xs font-semibold text-accentAI">Desde {agent.price}</p>
				</div>
			{/each}

			<!-- Card 6 — stats IA -->
			<div class="glass-card-ai col-span-1 p-8 reveal md:col-span-2 lg:col-span-1" style="transition-delay:0.42s">
				<p class="mb-6 text-sm font-semibold uppercase tracking-widest text-accentAI">
					El mercado de agentes IA
				</p>
				<p class="mb-6 text-xl font-bold leading-snug text-white">
					crece <span class="text-accentAI">46% anual</span>
				</p>

				<div class="mb-6 space-y-4 border-t border-accentAI/20 pt-6">
					<div>
						<p class="text-2xl font-black text-white">USD 52.6B</p>
						<p class="text-xs text-white/50">mercado global de agentes IA para 2030</p>
					</div>
					<div>
						<p class="text-2xl font-black text-white">70%</p>
						<p class="text-xs text-white/50">de empresas en Chile adoptando IA en sus procesos</p>
					</div>
					<div>
						<p class="text-2xl font-black text-white">4–8 meses</p>
						<p class="text-xs text-white/50">tiempo promedio de ROI en implementaciones IA</p>
					</div>
				</div>

				<a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="btn-ai w-full text-sm">
					Quiero mi agente →
				</a>
			</div>
		</div>
	</div>
</section>
