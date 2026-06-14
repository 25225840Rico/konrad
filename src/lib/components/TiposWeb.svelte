<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { siteTypes } from '$lib/data';

	let revealEls = $state<HTMLElement[]>([]);

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			revealEls.forEach((el) => {
				if (el) el.classList.add('is-visible');
			});
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						(entry.target as HTMLElement).classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		revealEls.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<section id="tipos-web" class="bg-secondary py-20 lg:py-24">
	<div class="container-w">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center">
			<span class="eyebrow">Tipos de sitio</span>
			<h2 class="mt-3 text-3xl font-normal tracking-tight text-ink sm:text-4xl">
				¿Qué tipo de sitio necesita?
			</h2>
			<p class="mt-4 text-lg text-muted">
				Cada negocio tiene necesidades distintas. Elegimos juntos el formato correcto.
			</p>
		</div>

		<!-- Bento Grid (9 cards, asimétrico) -->
		<div class="mt-16 bento-grid">
			{#each siteTypes as site, i}
				<a
					href="/sitios/{site.slug}/"
					bind:this={revealEls[i]}
					class="reveal glass-card group bento-item relative flex flex-col justify-between gap-4 p-6"
					data-index={i}
				>
					<!-- Número en esquina -->
					<span class="text-sm font-bold text-muted">{site.num}</span>

					<!-- Icon -->
					<div class="flex justify-center py-4">
						<Icon name={site.icon} class="h-16 w-16 text-accent" />
					</div>

					<!-- Nombre -->
					<h3 class="text-xl font-bold text-ink">{site.name}</h3>

					<!-- ForWho -->
					<p class="text-sm italic text-muted">{site.forWho}</p>

					<!-- Desc -->
					<p class="text-sm text-ink">{site.desc}</p>

					<!-- Price + days -->
					<div class="text-xs text-muted">
						Desde {site.price} · {site.days}
					</div>

					<!-- CTA (aparece en hover) -->
					<div
						class="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<span class="text-sm font-semibold text-accent">Quiero este →</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.bento-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		grid-auto-rows: 280px;
	}

	@media (min-width: 768px) {
		.bento-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
			grid-auto-rows: 280px;
		}

		/* Asimetría: items 0, 4, 8 son más grandes */
		.bento-item[data-index="0"],
		.bento-item[data-index="4"],
		.bento-item[data-index="8"] {
			grid-column: span 2;
		}

		.bento-item[data-index="0"],
		.bento-item[data-index="8"] {
			grid-row: span 2;
		}
	}

	/* Fallback para pantallas pequeñas: todos 1x1 */
	@media (max-width: 767px) {
		.bento-item {
			grid-column: span 1;
			grid-row: auto;
		}
	}
</style>
