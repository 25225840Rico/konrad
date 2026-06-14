<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { plans, WA_LINK } from '$lib/data';

	// Toggle: distingue proyectos (pago único) de servicios recurrentes (retainer).
	let billing = $state<'unico' | 'mensual'>('unico');

	const note = $derived(
		billing === 'unico'
			? 'Proyectos con precio cerrado y pago único o en cuotas.'
			: 'Los servicios de Marketing Digital y soporte continuo se cobran como retainer mensual desde USD 400/mes.'
	);
</script>

<section id="precios" class="bg-white py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal mx-auto max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Precios</span>
			<h2 class="mt-3 text-3xl font-normal tracking-tight text-fg sm:text-4xl">
				Planes claros, sin letra chica
			</h2>
			<p class="mt-4 text-lg text-fg">
				Tres formas de empezar su transformación digital. Aplica a todas las unidades.
			</p>
		</div>

		<!-- Toggle -->
		<div class="reveal mt-8 flex flex-col items-center gap-3" use:reveal>
			<div class="inline-flex border border-fg bg-white">
				<button
					onclick={() => (billing = 'unico')}
					class="px-6 py-3 text-sm font-normal transition-colors duration-150 {billing ===
					'unico'
						? 'bg-fg text-white'
						: 'text-fg hover:bg-fg hover:text-white'}"
				>
					Proyecto único
				</button>
				<button
					onclick={() => (billing = 'mensual')}
					class="px-6 py-3 text-sm font-normal transition-colors duration-150 {billing ===
					'mensual'
						? 'bg-fg text-white'
						: 'text-fg hover:bg-fg hover:text-white'}"
				>
					Retainer mensual
				</button>
			</div>
			<p class="text-sm text-fg">{note}</p>
		</div>

		<!-- Planes -->
		<div class="mt-12 grid items-start gap-6 lg:grid-cols-3">
			{#each plans as plan, i}
				<div
					class="reveal flex flex-col justify-between gap-6 {plan.featured
						? 'tile tile-dark p-6 relative'
						: 'border border-fg bg-white p-6 relative'}"
					style="transition-delay: {i * 70}ms;"
					use:reveal
				>
					{#if plan.badge}
						<span class="text-xs font-normal {plan.featured ? 'text-white' : 'text-fg'}">
							{plan.badge}
						</span>
					{/if}

					<div>
						<h3 class="text-2xl font-normal {plan.featured ? 'text-white' : 'text-fg'}">{plan.name}</h3>
						<p class="mt-2 text-base {plan.featured ? 'text-white/85' : 'text-fg'}">{plan.headline}</p>
					</div>

					<div>
						<div class="flex items-baseline gap-2">
							<span class="text-xs font-normal {plan.featured ? 'text-white/70' : 'text-fg'}">Desde</span>
							<span class="text-5xl font-light {plan.featured ? 'text-white' : 'text-fg'}">{plan.price}</span>
						</div>
						<span class="text-xs {plan.featured ? 'text-white/70' : 'text-fg'}">{plan.priceNote}</span>
					</div>

					<ul class="flex-1 space-y-3">
						{#each plan.features as f}
							<li class="flex gap-2.5 text-sm {plan.featured ? 'text-white/90' : 'text-fg'}">
								<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 {plan.featured ? 'text-white' : 'text-fg'}" />
								<span>{f}</span>
							</li>
						{/each}
					</ul>

					<p class="text-xs {plan.featured ? 'text-white/70' : 'text-fg'}">
						<span class="font-normal">Ideal para:</span> {plan.ideal}
					</p>

					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="mt-2 {plan.featured ? 'btn-secondary-dark' : 'btn-secondary'} w-full text-center"
					>
						{plan.cta}
					</a>
				</div>
			{/each}
		</div>

		<div class="reveal mt-10 text-center" use:reveal>
			<p class="text-fg">
				¿No sabe qué plan necesita?
				<a
					href={WA_LINK}
					target="_blank"
					rel="noopener"
					class="font-normal text-blue hover:underline"
				>
					Diagnóstico gratuito en 24 horas →
				</a>
			</p>
		</div>
	</div>
</section>
