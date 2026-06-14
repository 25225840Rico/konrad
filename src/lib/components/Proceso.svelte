<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { processSteps, WA_LINK } from '$lib/data';
</script>

<section id="proceso" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Nuestro proceso</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				4 pasos claros hacia tu solución
			</h2>
			<p class="mt-6 text-base text-muted">
				Transparencia total. Sin sorpresas. Avances reales desde el primer día.
			</p>
		</div>

		<!-- Timeline horizontal -->
		<div class="mt-16">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
				{#each processSteps as step, i}
					<div class="reveal" use:reveal style="transition-delay: {i * 100}ms;">
						<div class="mb-6 flex items-center">
							<div class="flex h-16 w-16 items-center justify-center bg-accent text-primary font-bold text-2xl">
								{step.n}
							</div>
							{#if i < processSteps.length - 1}
								<div class="hidden h-1 flex-1 bg-accent md:block" style="margin: 0 -1rem;"></div>
							{/if}
						</div>
						<div>
							<h3 class="text-lg font-bold text-ink">{step.title}</h3>
							<p class="mt-3 text-sm text-muted">
								{step.desc}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- CTA -->
		<div class="mt-16 flex justify-center">
			<a href={WA_LINK} class="btn-accent">
				Agendar diagnóstico →
			</a>
		</div>
	</div>
</section>

<style>
	/* Conectores móviles verticales */
	@media (max-width: 768px) {
		div :global(.reveal:not(:last-child)) {
			position: relative;
			padding-bottom: 2rem;
		}
		div :global(.reveal:not(:last-child)::after) {
			content: '';
			position: absolute;
			left: 1.875rem;
			top: 4rem;
			width: 2px;
			height: 2rem;
			background: rgba(245, 158, 11, 0.5);
		}
	}
</style>
