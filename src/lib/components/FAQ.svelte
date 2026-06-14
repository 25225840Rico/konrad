<script lang="ts">
	import { slide } from 'svelte/transition';
	import { faqs } from '$lib/data';
	import { reveal } from '$lib/reveal';

	let openIndex = $state<number | null>(0);

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
			<p class="mt-6 text-base text-caption">
				Lo que las empresas industriales suelen preguntar antes de empezar.
			</p>
		</div>

		<div class="reveal mx-auto max-w-3xl" use:reveal>
			<div>
				{#each faqs as faq, i}
					<div class="border-b border-fg">
						<button
							type="button"
							class="flex w-full items-center justify-between gap-4 px-0 py-6 text-left transition-colors duration-150 hover:text-cyan"
							aria-expanded={openIndex === i}
							aria-controls={`faq-panel-${i}`}
							onclick={() => toggle(i)}
						>
							<span class="text-base font-normal text-fg leading-tight">{faq.q}</span>
							<span
								class="shrink-0 text-fg transition-transform duration-200 linear {openIndex === i
									? 'rotate-45'
									: ''}"
								aria-hidden="true"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
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
							<div id={`faq-panel-${i}`} role="region" transition:slide={{ duration: 200 }}>
								<p class="px-0 pb-6 text-base text-fg leading-relaxed">{faq.a}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
