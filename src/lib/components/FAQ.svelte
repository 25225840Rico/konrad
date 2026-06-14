<script lang="ts">
	import { slide } from 'svelte/transition';
	import { faqs } from '$lib/data';
	import { reveal } from '$lib/reveal';

	let openIndex = $state<number | null>(null);

	function toggle(i: number) {
		openIndex = openIndex === i ? null : i;
	}
</script>

<section id="faq" class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-12" use:reveal>
			<p class="text-accent uppercase tracking-wide text-sm font-semibold mb-3">
				Dudas comunes
			</p>
			<h2 class="text-3xl sm:text-4xl font-bold text-ink mb-4">
				Preguntas frecuentes
			</h2>
			<p class="text-muted text-lg max-w-xl mx-auto">
				Todo lo que necesitas saber antes de dar el primer paso.
			</p>
		</div>

		<!-- Acordeón -->
		<div class="max-w-3xl mx-auto divide-y divide-slate-200" use:reveal>
			{#each faqs as faq, i}
				<div>
					<button
						type="button"
						class="flex w-full justify-between items-center py-5 text-left gap-4
						       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
						       focus-visible:ring-offset-1 rounded-sm"
						aria-expanded={openIndex === i}
						aria-controls={`faq-panel-${i}`}
						onclick={() => toggle(i)}
					>
						<span class="font-semibold text-ink text-base leading-snug">{faq.q}</span>
						<!-- Chevron icon: rotates when open -->
						<span
							class="shrink-0 text-accent transition-transform duration-200"
							class:rotate-45={openIndex === i}
							aria-hidden="true"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="w-5 h-5"
							>
								<line x1="12" y1="5" x2="12" y2="19" />
								<line x1="5" y1="12" x2="19" y2="12" />
							</svg>
						</span>
					</button>

					{#if openIndex === i}
						<div
							id={`faq-panel-${i}`}
							role="region"
							aria-labelledby={`faq-btn-${i}`}
							transition:slide={{ duration: 220 }}
						>
							<p class="text-muted leading-relaxed pb-5 pr-8">{faq.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>

	</div>
</section>
