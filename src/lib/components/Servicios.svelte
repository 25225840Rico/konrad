<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Icon from '$lib/Icon.svelte';
	import { units, waLink } from '$lib/data';
	import type { Unit } from '$lib/data';

	let activeTab = $state<string>(units[0].id);
	let activeUnit = $derived(units.find((u) => u.id === activeTab) ?? units[0]);

	// Ref for the content panel to animate
	let contentEl = $state<HTMLDivElement | undefined>(undefined);

	function selectTab(id: string) {
		if (id === activeTab) return;

		const reduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduced || !contentEl) {
			activeTab = id;
			return;
		}

		// GSAP fade out → switch → fade in
		gsap.to(contentEl, {
			opacity: 0,
			y: 8,
			duration: 0.18,
			ease: 'power2.in',
			onComplete: () => {
				activeTab = id;
				// After Svelte re-renders, fade in
				gsap.fromTo(
					contentEl!,
					{ opacity: 0, y: 8 },
					{ opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
				);
			}
		});
	}
</script>

<section id="servicios" class="bg-primary py-20 lg:py-28">
	<div class="container-w">

		<!-- Cabecera -->
		<div class="reveal mb-12 max-w-2xl">
			<span class="eyebrow">Servicios</span>
			<h2 class="mt-4 text-4xl font-normal leading-tight text-ink">
				Cinco unidades, una sola dirección: su operación
			</h2>
			<p class="mt-4 text-base text-muted">
				Desde su primera web hasta sistemas a medida e inteligencia artificial aplicada a la industria.
			</p>
		</div>

		<!-- Tabs -->
		<div class="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Unidades de servicio">
			{#each units as unit}
				<button
					type="button"
					role="tab"
					aria-selected={activeTab === unit.id}
					onclick={() => selectTab(unit.id)}
					class="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-all duration-200"
					class:bg-accent={activeTab === unit.id}
					class:text-primary={activeTab === unit.id}
					class:glass-nav={activeTab !== unit.id}
					class:text-muted={activeTab !== unit.id}
				>
					<Icon name={unit.icon} class="h-4 w-4" />
					{unit.name}
				</button>
			{/each}
		</div>

		<!-- Content panel -->
		<div bind:this={contentEl} role="tabpanel">
			<div class="glass-card p-6 sm:p-8 mb-6">
				<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
					<div>
						<h3 class="text-2xl font-normal text-ink">{activeUnit.headline}</h3>
						<p class="mt-2 text-base text-muted max-w-xl">{activeUnit.desc}</p>
					</div>
					<span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-accentAI glass-card-ai shrink-0 self-start">
						{activeUnit.tag}
					</span>
				</div>
			</div>

			<!-- Services grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
				{#each activeUnit.services as service}
					<div class="glass-card p-5 group flex flex-col">
						<div class="flex-1">
							<div class="text-base font-semibold text-ink mb-1">{service.name}</div>
							<div class="text-sm text-muted leading-snug">{service.desc}</div>
						</div>
						<div class="mt-4 flex items-end justify-between gap-2">
							<span class="text-sm font-bold text-accent">{service.price}</span>
							<a
								href={waLink(`Hola CoreWerk, me interesa ${service.name}`)}
								target="_blank"
								rel="noopener"
								class="text-xs font-semibold text-accentAI opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
								aria-label="Solicitar {service.name} por WhatsApp"
							>
								Solicitar →
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
