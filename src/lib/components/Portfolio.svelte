<script lang="ts">
	import { portfolio } from '$lib/data';
	import { reveal } from '$lib/reveal';
</script>

<section id="casos" class="py-20 lg:py-28 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-14" use:reveal>
			<p class="text-accent uppercase text-sm font-semibold tracking-widest mb-3">Casos reales</p>
			<h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">
				Proyectos que entregan resultados
			</h2>
			<p class="text-muted text-lg max-w-2xl mx-auto">
				Clientes reales, resultados medibles. Así trabajamos en Konrad.
			</p>
		</div>

		<!-- Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each portfolio as p}
				<article
					class="group rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col"
					use:reveal
				>
					<!-- Image with overlay -->
					<div class="relative">
						<img
							src={`https://placehold.co/600x400/${p.color}/FFFFFF?text=${encodeURIComponent(p.company)}`}
							alt={p.company}
							class="w-full h-48 object-cover"
							loading="lazy"
						/>
						<!-- Dark overlay -->
						<div
							class="absolute inset-0 bg-primary/30 group-hover:bg-primary/60 transition-all duration-300"
						></div>
						<!-- Result on hover overlay -->
						<div
							class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4"
						>
							<p class="text-white font-semibold text-center text-sm leading-snug drop-shadow">
								{p.result}
							</p>
						</div>
					</div>

					<!-- Card body -->
					<div class="p-5 flex flex-col gap-3 flex-1">
						<div class="flex items-center gap-2 flex-wrap">
							<!-- Segment badge -->
							<span
								class="bg-primary/5 text-primary text-xs rounded-full px-3 py-1 font-medium"
							>
								{p.segment}
							</span>
							<!-- Tag badge -->
							{#if p.tag === 'Web nueva'}
								<span class="bg-accent/10 text-accent text-xs rounded-full px-3 py-1 font-medium">
									{p.tag}
								</span>
							{:else}
								<span
									class="bg-emerald-100 text-emerald-700 text-xs rounded-full px-3 py-1 font-medium"
								>
									{p.tag}
								</span>
							{/if}
						</div>

						<p class="font-semibold text-ink">{p.company}</p>

						<!-- Result visible without hover -->
						<p class="text-muted text-sm mt-auto">{p.result}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
