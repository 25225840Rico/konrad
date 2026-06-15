<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/reveal';
	import { portfolioItems } from '$lib/data';

	function getCategoryColor(category: string, index: number): string {
		const colors = ['bg-accent/20', 'bg-accent2/20', 'bg-accentAI/20'];
		return colors[index % colors.length];
	}

	function getItemGridClass(index: number): string {
		// Primero es grande (live: true), demás son normales
		return index === 0 ? 'col-span-1 lg:col-span-2 lg:row-span-2' : 'col-span-1';
	}
</script>

<section id="portafolio" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Portafolio</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Proyectos que dejaron impacto
			</h2>
			<p class="mt-6 text-base text-muted">
				Desde landing pages hasta agentes IA. Cada proyecto es una solución real para un negocio real.
			</p>
		</div>

		<!-- Bento grid -->
		<div class="mt-16 grid auto-rows-[280px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each portfolioItems as item, i}
				<div
					class="reveal glass-card {getItemGridClass(i)} relative overflow-hidden p-6 flex flex-col justify-between group"
					use:reveal
					style="transition-delay: {i * 60}ms;"
				>
					<div class="absolute inset-0 {getCategoryColor(item.category, i)} opacity-0 transition-opacity group-hover:opacity-100"></div>

					<div class="relative z-10">
						{#if item.live}
							<div class="inline-flex items-center gap-2 rounded px-2 py-1 bg-accentAI/30 border border-accentAI/50 mb-4">
								<span class="inline-block w-2 h-2 bg-accentAI rounded-full badge-live"></span>
								<span class="text-xs font-bold text-accentAI">LIVE</span>
							</div>
						{/if}
						<p class="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80 mb-2">
							{item.category}
						</p>
					</div>

					<div class="relative z-10">
						<h3 class="text-lg font-bold text-ink mb-2">
							{item.title}
						</h3>
						{#if !item.live}
							<p class="text-sm text-muted">Próximamente</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="mt-16 flex justify-center">
			<a href="{base}/portafolio/" class="btn-accent">
				Ver portafolio →
			</a>
		</div>
	</div>
</section>
