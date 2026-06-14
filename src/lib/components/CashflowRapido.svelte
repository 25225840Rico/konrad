<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { cashflowCards, cashflowBannerMsg, waLink } from '$lib/data';

	let cardsEl = $state<HTMLElement[]>([]);

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		// Initial state: hidden + translated
		cardsEl.forEach((el) => {
			if (!el) return;
			el.style.opacity = '0';
			el.style.transform = 'translateY(40px)';
		});

		const observer = new IntersectionObserver(
			(entries) => {
				const anyVisible = entries.some((e) => e.isIntersecting);
				if (!anyVisible) return;

				// Animate with gsap stagger
				import('gsap').then(({ gsap }) => {
					gsap.to(cardsEl, {
						opacity: 1,
						y: 0,
						duration: 0.5,
						stagger: 0.1,
						ease: 'power2.out'
					});
				});

				observer.disconnect();
			},
			{ threshold: 0.15 }
		);

		// Observe the first card as trigger
		if (cardsEl[0]) observer.observe(cardsEl[0]);

		return () => observer.disconnect();
	});

	// Colores de tiles para cada card
	const tileColors = ['tile-blue', 'tile-cyan', 'tile-orange'];
</script>

<section id="cashflow" class="bg-white py-20 lg:py-24">
	<div class="container-w">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center">
			<span class="eyebrow">Cashflow Rápido</span>
			<h2 class="mt-3 text-3xl font-normal tracking-tight text-fg sm:text-4xl">
				Resultados en 7 a 15 días
			</h2>
			<p class="mt-4 text-lg text-fg">
				Soluciones que generan impacto inmediato sin meses de espera.
			</p>
		</div>

		<!-- Cards grid -->
		<div class="mt-12 grid items-start gap-6 md:grid-cols-3">
			{#each cashflowCards as card, i}
				<div
					bind:this={cardsEl[i]}
					class="tile {tileColors[i]} {card.featured
						? 'border border-fg'
						: ''} flex flex-col justify-between gap-6 p-6"
				>
					<!-- Badge -->
					{#if card.badge}
						<span class="text-xs font-normal text-white">
							{card.badge}
						</span>
					{/if}

					<!-- Name -->
					<h3 class="text-2xl font-normal text-white">{card.name}</h3>

					<!-- Desc -->
					<p class="text-base text-white/90">{card.desc}</p>

					<!-- Includes -->
					<div class="flex-1">
						<p class="mb-3 text-xs font-normal uppercase tracking-[0.18em] text-white/70">Incluye:</p>
						<ul class="space-y-2">
							{#each card.includes as item}
								<li class="flex items-start gap-2 text-sm text-white/90">
									<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-white" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Price + time -->
					<div class="flex items-baseline justify-between gap-4">
						<span class="text-3xl font-light text-white">{card.price}</span>
						<div class="flex items-center gap-1 text-xs text-white/70">
							<Icon name="clock" class="h-4 w-4" />
							<span>{card.time}</span>
						</div>
					</div>

					<!-- CTA -->
					<a
						href={waLink(card.waMsg)}
						target="_blank"
						rel="noopener"
						class="btn-secondary-dark w-full text-center"
					>
						{card.cta}
					</a>
				</div>
			{/each}
		</div>

		<!-- Banner -->
		<div class="mt-14 bg-fg px-6 py-8 text-center sm:px-10">
			<p class="text-lg font-normal text-white">
				¿Necesita algo más específico? Cuéntenos su problema en WhatsApp y le respondemos en menos de 2 horas.
			</p>
			<a
				href={waLink(cashflowBannerMsg)}
				target="_blank"
				rel="noopener"
				class="btn-secondary-dark mt-6 inline-flex"
			>
				Escribir ahora →
			</a>
		</div>
	</div>
</section>
