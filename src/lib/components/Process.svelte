<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { processSteps } from '$lib/data';
</script>

<section id="proceso" class="py-20 lg:py-28 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-16" use:reveal>
			<p class="text-accent uppercase tracking-wide text-sm font-semibold mb-3">
				Sin sorpresas
			</p>
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
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
				class="hidden lg:block absolute top-8 left-0 right-0 h-px bg-slate-200"
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
							class="shrink-0 flex items-center justify-center w-16 h-16 rounded-full
							       bg-accent/10 text-accent font-extrabold text-2xl
							       lg:mb-5 relative z-10 ring-4 ring-surface"
							aria-hidden="true"
						>
							{step.n}
						</div>

						<!-- Línea vertical mobile (salvo el último) -->
						{#if i < processSteps.length - 1}
							<div
								class="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-slate-200 -translate-x-1/2"
								aria-hidden="true"
								style="top: 4rem; height: calc(100% + 2.5rem);"
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
