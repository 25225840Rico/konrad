<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { processSteps } from '$lib/data';
</script>

<section id="proceso" class="py-20 lg:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-16" use:reveal>
			<p class="eyebrow mb-3">Sin sorpresas</p>
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
				Cómo trabajamos
			</h2>
			<p class="text-muted text-lg max-w-xl mx-auto">
				Un proceso claro, predecible y colaborativo. Sabes en todo momento en qué paso está tu proyecto.
			</p>
		</div>

		<!-- Pasos: vertical en mobile, horizontal en desktop -->
		<div class="relative" use:reveal>

			<!-- Línea conectora horizontal (solo lg) -->
			<div
				class="hidden lg:block absolute top-7 h-px border-t border-white/10"
				aria-hidden="true"
				style="left: calc(10%); right: calc(10%);"
			></div>

			<ol
				class="relative flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between"
				role="list"
			>
				{#each processSteps as step, i}
					<li class="relative flex lg:flex-col lg:items-center lg:flex-1 gap-4 lg:gap-0 lg:px-4">

						<!-- Número -->
						<div
							class="shrink-0 glass rounded-full w-14 h-14 flex items-center justify-center
							       lg:mb-5 relative z-10"
							aria-hidden="true"
						>
							<span class="text-accent font-extrabold text-2xl">{step.n}</span>
						</div>

						<!-- Línea vertical mobile (salvo el último) -->
						{#if i < processSteps.length - 1}
							<div
								class="lg:hidden absolute left-7 w-px border-l border-white/10 -translate-x-1/2"
								aria-hidden="true"
								style="top: 3.5rem; height: calc(100% + 2.5rem);"
							></div>
						{/if}

						<!-- Texto -->
						<div class="lg:text-center">
							<h3 class="font-semibold text-ink text-base mb-1">{step.title}</h3>
							<p class="text-muted text-sm leading-snug">{step.desc}</p>
						</div>

					</li>
				{/each}
			</ol>

		</div>

	</div>
</section>
