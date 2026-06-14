<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import CiudadRotante from '$lib/components/CiudadRotante.svelte';
	import { heroPhrases, ciudadesChile, siteTypes, WA_LINK } from '$lib/data';

	// Pills row: site type names + extra
	const pills = [
		...siteTypes.map((s) => s.name),
		'Agentes IA',
		'Automatización'
	];

	// Dashboard bar heights (animate on mount)
	let bars: SVGRectElement[] = [];

	// Typewriter state for chat card
	let typedText = $state('');
	const typeMsg = '🤖 Agente IA respondiendo en tiempo real para tu negocio...';

	// Float cards ref
	let floatCards: HTMLElement[] = [];
	// H1 words ref
	let h1El: HTMLElement | null = null;

	onMount(() => {
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		// --- H1 word stagger ---
		if (h1El && !prefersReduced) {
			const words = h1El.querySelectorAll<HTMLElement>('.h1-word');
			gsap.fromTo(
				words,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', delay: 0.1 }
			);
		} else if (h1El) {
			h1El.querySelectorAll<HTMLElement>('.h1-word').forEach((w) => {
				w.style.opacity = '1';
			});
		}

		// --- Float cards GSAP ---
		if (floatCards.length && !prefersReduced) {
			floatCards.forEach((card, i) => {
				gsap.to(card, {
					y: i % 2 === 0 ? -8 : 8,
					duration: 3 + i * 0.5,
					repeat: -1,
					yoyo: true,
					ease: 'sine.inOut',
					delay: i * 0.4
				});
			});
		}

		// --- Dashboard bars SVG ---
		if (bars.length && !prefersReduced) {
			const targetHeights = [30, 50, 70, 45, 60, 80, 35];
			bars.forEach((bar, i) => {
				const target = targetHeights[i] ?? 40;
				gsap.fromTo(
					bar,
					{ attr: { height: 0, y: 80 } },
					{
						attr: { height: target, y: 80 - target },
						duration: 0.8,
						ease: 'power2.out',
						delay: 0.4 + i * 0.08
					}
				);
			});
		} else {
			// static fallback
			const targetHeights = [30, 50, 70, 45, 60, 80, 35];
			bars.forEach((bar, i) => {
				const h = targetHeights[i] ?? 40;
				bar.setAttribute('height', String(h));
				bar.setAttribute('y', String(80 - h));
			});
		}

		// --- Typewriter for chat card ---
		if (!prefersReduced) {
			let i = 0;
			const delay = 600; // start delay
			const speed = 40; // ms per char
			const timer = setTimeout(() => {
				const interval = setInterval(() => {
					if (i < typeMsg.length) {
						typedText = typeMsg.slice(0, ++i);
					} else {
						clearInterval(interval);
					}
				}, speed);
			}, delay);
			return () => clearTimeout(timer);
		} else {
			typedText = typeMsg;
		}
	});
</script>

<section
	id="inicio"
	class="relative min-h-screen bg-corewerk dot-pattern flex flex-col justify-center pt-20"
>
	<div class="container-w py-16 lg:py-20">
		<div class="grid gap-12 lg:grid-cols-5 lg:items-center lg:gap-10">

			<!-- ===== IZQUIERDA (col-span-3) ===== -->
			<div class="lg:col-span-3 flex flex-col gap-6">

				<!-- Eyebrow pill -->
				<div>
					<span class="glass-nav eyebrow px-4 py-2 text-xs">
						⚡ Diseño · Desarrollo · Inteligencia Artificial — Chile 2026
					</span>
				</div>

				<!-- H1 -->
				<h1
					bind:this={h1El}
					class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
				>
					<span class="h1-word block text-ink opacity-0">Tu negocio digital</span>
					<span class="h1-word block text-5xl sm:text-6xl lg:text-7xl opacity-0">
						<CiudadRotante phrases={heroPhrases} cities={ciudadesChile} />
					</span>
					<span class="h1-word block text-muted text-2xl sm:text-3xl font-normal mt-1 opacity-0">
						Para cualquier empresa, de cualquier tamaño.
					</span>
				</h1>

				<!-- Subtítulo -->
				<p class="text-ink/80 text-lg max-w-xl">
					Soluciones digitales profesionales para emprendedores, pymes y empresas de todo Chile.
					Sitios web, agentes IA y automatización entregados en días, no meses.
				</p>

				<!-- Stats chips -->
				<div class="flex flex-wrap gap-3">
					{#each [
						['7 días', 'Entrega mínima'],
						['USD 400', 'Desde'],
						['9', 'Tipos de sitio web'],
						['24h', 'Respuesta garantizada']
					] as [val, label]}
						<div class="glass-nav px-4 py-2 text-sm">
							<span class="text-accent font-bold">{val}</span>
							<span class="text-muted ml-1">{label}</span>
						</div>
					{/each}
				</div>

				<!-- CTAs -->
				<div class="flex flex-wrap gap-4">
					<a href="#tipos-web" class="btn-accent">Ver servicios →</a>
					<a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="btn-ghost">
						Hablar por WhatsApp
					</a>
				</div>

				<!-- Pills scroll horizontal -->
				<div class="overflow-x-auto no-scrollbar -mx-1 px-1">
					<div class="flex gap-2 w-max pb-2">
						{#each pills as pill}
							<span class="glass-nav px-3 py-1.5 text-xs text-ink whitespace-nowrap shrink-0">
								{pill}
							</span>
						{/each}
					</div>
				</div>
			</div>

			<!-- ===== DERECHA (col-span-2, hidden mobile) ===== -->
			<div class="hidden lg:flex lg:col-span-2 flex-col gap-5 items-center">

				<!-- Card 1: Browser mockup -->
				<div
					class="glass-card w-full p-4"
					bind:this={floatCards[0]}
				>
					<!-- Browser bar -->
					<div class="flex items-center gap-1.5 mb-3">
						<span class="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
						<span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
						<span class="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
						<div class="ml-2 flex-1 bg-white/5 rounded px-2 py-0.5 text-xs text-muted truncate">
							corewerk.cl
						</div>
					</div>
					<!-- Fake site content -->
					<div class="space-y-2">
						<div class="h-3 w-2/3 rounded-sm bg-white/10"></div>
						<div class="h-2 w-full rounded-sm bg-white/6"></div>
						<div class="h-2 w-4/5 rounded-sm bg-white/6"></div>
						<div class="mt-3 h-7 w-28 rounded-sm bg-accent/30"></div>
					</div>
					<p class="mt-3 text-xs text-muted">Tu sitio web profesional</p>
				</div>

				<!-- Card 2: Chat IA -->
				<div
					class="glass-card-ai w-full p-4"
					bind:this={floatCards[1]}
				>
					<div class="flex items-center gap-2 mb-3">
						<span class="text-accentAI text-base">🤖</span>
						<span class="text-xs font-semibold text-accentAI">Agente IA</span>
						<span class="ml-auto w-2 h-2 rounded-full bg-accentAI animate-pulse"></span>
					</div>
					<div class="glass-card p-2 text-xs text-ink/80 min-h-[48px]">
						{typedText}<span class="animate-pulse">|</span>
					</div>
					<p class="mt-2 text-xs text-muted">Responde en segundos · 24/7</p>
				</div>

				<!-- Card 3: Dashboard -->
				<div
					class="glass-card w-full p-4"
					bind:this={floatCards[2]}
				>
					<p class="text-xs font-semibold text-ink mb-3">Dashboard · Métricas</p>
					<svg viewBox="0 0 140 90" class="w-full" xmlns="http://www.w3.org/2000/svg">
						{#each [0, 1, 2, 3, 4, 5, 6] as i}
							<rect
								bind:this={bars[i]}
								x={10 + i * 18}
								y={80}
								width="12"
								height="0"
								rx="2"
								fill={i % 3 === 0 ? '#F59E0B' : i % 3 === 1 ? '#0EA5E9' : '#10B981'}
								opacity="0.8"
							/>
						{/each}
						<!-- baseline -->
						<line x1="8" y1="80" x2="136" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
					</svg>
					<p class="mt-1 text-xs text-muted">Resultados en tiempo real</p>
				</div>

			</div>
		</div>
	</div>
</section>
