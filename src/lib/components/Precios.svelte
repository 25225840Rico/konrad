<script lang="ts">
	import { plans } from '$lib/data';
	import { WA_LINK } from '$lib/seo/site';
	import { reveal } from '$lib/reveal';
	import Icon from '$lib/Icon.svelte';

	let isRetainer = $state(false);
</script>

<section id="precios" class="py-20 lg:py-24">
	<div class="container-w">
		<!-- Encabezado -->
		<div class="reveal mx-auto mb-16 max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Planes</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Soluciones a tu medida
			</h2>
			<p class="mt-6 text-base text-muted">
				Elige el plan que mejor se ajusta a tu proyecto.
			</p>
		</div>

		<!-- Toggle Proyecto / Retainer -->
		<div class="reveal mb-12 flex justify-center" use:reveal>
			<button
				type="button"
				class="inline-flex items-center gap-3 border border-white/20 px-6 py-2.5 text-sm font-semibold transition-colors {isRetainer ? 'bg-white/10' : ''}"
				style="border-radius: 0;"
				onclick={() => (isRetainer = !isRetainer)}
				aria-pressed={isRetainer}
			>
				<span class="transition-colors" class:text-accent={!isRetainer} class:text-ink={isRetainer}>
					Proyecto único
				</span>
				<span class="h-5 w-px bg-white/20"></span>
				<span class="transition-colors" class:text-accent={isRetainer} class:text-ink={!isRetainer}>
					Retainer mensual
				</span>
			</button>
		</div>

		<!-- Grid 3 columnas -->
		<div class="reveal grid gap-8 lg:grid-cols-3" use:reveal>
			{#each plans as plan, i}
				<div
					class="glass-card flex flex-col p-8 lg:p-10"
					class:border-accent={plan.featured}
					class:border-2={plan.featured}
				>
					<!-- Badge featured -->
					{#if plan.badge}
						<div class="mb-4 inline-flex w-fit bg-accent px-3 py-1 text-xs font-bold text-primary">
							{plan.badge}
						</div>
					{/if}

					<!-- Nombre y headline -->
					<h3 class="text-lg font-bold text-ink">{plan.name}</h3>
					<p class="mt-2 text-sm text-muted">{plan.headline}</p>

					<!-- Precio -->
					<div class="mt-8">
						<p class="text-4xl font-bold text-accent">{plan.price}</p>
						<p class="mt-1 text-xs text-muted">{plan.priceNote}</p>
					</div>

					<!-- Features -->
					<ul class="mt-8 flex-grow space-y-3">
						{#each plan.features as feature}
							<li class="flex gap-3 text-sm text-ink">
								<Icon name="check" class="h-5 w-5 shrink-0 text-accentAI" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>

					<!-- CTA -->
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="btn-accent mt-8 w-full justify-center"
					>
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>

		<!-- Call to action: diagnóstico gratuito -->
		<div class="reveal mt-20 text-center" use:reveal>
			<p class="text-base text-muted">
				¿No sabe qué necesita?
				<a href={WA_LINK} target="_blank" rel="noopener" class="text-accent hover:text-amber-400">
					Diagnóstico gratuito en 24h →
				</a>
			</p>
		</div>
	</div>
</section>
