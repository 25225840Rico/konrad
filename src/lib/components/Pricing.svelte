<script lang="ts">
	import { plans } from '$lib/data';
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
</script>

<section id="precios" class="py-20 lg:py-28 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-14" use:reveal>
			<p class="text-accent uppercase text-sm font-semibold tracking-widest mb-3">Inversión</p>
			<h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">Planes y precios</h2>
			<p class="text-muted text-lg max-w-2xl mx-auto">
				Precios en UF, transparentes y sin sorpresas. Elige el plan que se ajusta a tu proyecto.
			</p>
		</div>

		<!-- Plans grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
			{#each plans as plan}
				<div
					class="relative flex flex-col rounded-2xl p-8 bg-white border h-full transition-transform duration-300
						{plan.featured
						? 'border-2 border-accent lg:scale-105 shadow-xl'
						: 'border-slate-200 shadow-sm'}"
					use:reveal
				>
					<!-- Featured badge -->
					{#if plan.featured && plan.badge}
						<div class="absolute -top-4 left-1/2 -translate-x-1/2">
							<span
								class="bg-accent text-primary text-xs font-bold rounded-full px-4 py-1.5 whitespace-nowrap shadow"
							>
								{plan.badge}
							</span>
						</div>
					{/if}

					<!-- Plan name & price -->
					<div class="mb-6 {plan.featured ? 'mt-2' : ''}">
						<h3 class="font-bold text-ink text-xl mb-2">{plan.name}</h3>
						<p class="text-4xl font-extrabold text-ink">{plan.price}</p>
					</div>

					<!-- Features list -->
					<ul class="flex flex-col gap-3 flex-1 mb-6" role="list">
						{#each plan.features as feature}
							<li class="flex items-start gap-3">
								<Icon name="check" class="w-5 h-5 text-accent shrink-0 mt-0.5" />
								<span class="text-ink/80 text-sm leading-snug">{feature}</span>
							</li>
						{/each}
					</ul>

					<!-- Ideal para -->
					<p class="text-sm text-muted mt-auto mb-5">
						<span class="font-medium">Ideal para:</span>
						{plan.ideal}
					</p>

					<!-- CTA -->
					<a
						href="#contacto"
						class="block rounded-lg px-5 py-3 font-semibold w-full text-center transition-opacity hover:opacity-90
							{plan.featured
							? 'bg-accent text-primary'
							: 'bg-primary text-white'}"
					>
						{plan.featured ? 'Contratar' : 'Empezar'}
					</a>
				</div>
			{/each}
		</div>

		<!-- Footer note -->
		<p class="text-muted text-sm text-center mt-10 max-w-3xl mx-auto leading-relaxed" use:reveal>
			Todos los precios en UF. Pago en etapas: 50% inicio / 50% entrega. Factura disponible.
			Mejoras de sitios existentes desde UF 3 — cotización personalizada.
		</p>
	</div>
</section>
