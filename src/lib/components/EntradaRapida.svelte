<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { cashflowCards, cashflowBannerMsg, waLink } from '$lib/data';
</script>

<section id="entrada-rapida" class="py-20 lg:py-24">
	<div class="container-w">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center">
			<span class="eyebrow">Cashflow rápido</span>
			<h2 class="mt-3 text-3xl font-normal tracking-tight text-ink sm:text-4xl">
				Resultados en 7 a 15 días
			</h2>
			<p class="mt-4 text-lg text-muted">
				Soluciones que generan impacto inmediato sin meses de espera.
			</p>
		</div>

		<!-- Cards Grid -->
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each cashflowCards as card}
				<div
					class="glass-card flex flex-col justify-between gap-6 p-6"
					class:ring-2={card.featured}
					class:ring-accent={card.featured}
				>
					<!-- Badge -->
					{#if card.badge}
						<span class="text-xs font-bold uppercase tracking-[0.18em] text-accent">
							{card.badge}
						</span>
					{/if}

					<!-- Name -->
					<h3 class="text-xl font-bold text-ink">{card.name}</h3>

					<!-- Desc -->
					<p class="text-sm text-ink">{card.desc}</p>

					<!-- Includes -->
					<div class="flex-1">
						<p class="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">Incluye:</p>
						<ul class="space-y-2">
							{#each card.includes as item}
								<li class="flex items-start gap-2 text-sm text-ink">
									<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Price + time -->
					<div class="flex items-baseline justify-between gap-4">
						<span class="text-2xl font-bold text-ink">{card.price}</span>
						<div class="flex items-center gap-1 text-xs text-muted">
							<Icon name="clock" class="h-4 w-4" />
							<span>{card.time}</span>
						</div>
					</div>

					<!-- CTA -->
					<a
						href={waLink(card.waMsg)}
						target="_blank"
						rel="noopener"
						class="btn-accent w-full text-center"
					>
						{card.cta}
					</a>
				</div>
			{/each}
		</div>

		<!-- Banner -->
		<div class="mt-14 bg-accent p-6 text-center sm:p-10">
			<p class="text-lg font-semibold text-primary">
				¿Necesita algo más específico? Cuéntenos su problema en WhatsApp y le respondemos en menos de 2 horas.
			</p>
			<a
				href={waLink(cashflowBannerMsg)}
				target="_blank"
				rel="noopener"
				class="btn-ghost mt-6 inline-flex"
			>
				Escribir ahora →
			</a>
		</div>
	</div>
</section>
