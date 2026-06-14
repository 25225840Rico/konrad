<script lang="ts">
	import { slide } from 'svelte/transition';
	import { faqs } from '$lib/data';
	import { reveal } from '$lib/reveal';
	import Icon from '$lib/Icon.svelte';

	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section id="faq" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal mx-auto mb-16 max-w-2xl text-center" use:reveal>
			<span class="eyebrow">Dudas comunes</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Preguntas frecuentes
			</h2>
			<p class="mt-6 text-base text-muted">
				Lo que nuestros clientes suelen preguntar antes de empezar.
			</p>
		</div>

		<div class="reveal mx-auto max-w-3xl" use:reveal>
			<div class="space-y-1">
				{#each faqs as faq, i}
					<div class="glass-card border-0">
						<button
							type="button"
							class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-white/5"
							aria-expanded={openIndex === i}
							aria-controls={`faq-panel-${i}`}
							onclick={() => toggle(i)}
						>
							<span class="text-base font-normal text-ink leading-tight">{faq.q}</span>
							<div
								class="h-5 w-5 shrink-0 transition-transform duration-200 {openIndex === i ? 'rotate-90' : ''}"
								aria-hidden="true"
							>
								<Icon name="arrow" class="h-5 w-5" />
							</div>
						</button>

						{#if openIndex === i}
							<div
								id={`faq-panel-${i}`}
								role="region"
								transition:slide={{ duration: 200 }}
								class="border-t border-white/10 px-6 py-4"
							>
								<p class="text-base text-muted leading-relaxed">{faq.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
