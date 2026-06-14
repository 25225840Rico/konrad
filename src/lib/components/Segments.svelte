<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { segments } from '$lib/data';
</script>

<section id="segmentos" class="py-20 lg:py-28 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-14" use:reveal>
			<p class="text-accent uppercase tracking-wide text-sm font-semibold mb-3">
				Para cada proyecto
			</p>
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
				¿Qué tipo de sitio necesitas?
			</h2>
			<p class="text-muted text-lg max-w-2xl mx-auto">
				Trabajamos con todo tipo de proyectos digitales. Elige el que mejor describe tu necesidad
				y te contamos qué incluye y cuánto cuesta.
			</p>
		</div>

		<!-- Grid de tarjetas -->
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each segments as s}
				<article
					class="group bg-white rounded-2xl border border-slate-200 p-6
					       transition-all duration-300 ease-out
					       hover:-translate-y-1 hover:shadow-xl"
					use:reveal
				>
					<!-- Ícono -->
					<div class="inline-flex items-center justify-center bg-primary/5 text-primary p-3 rounded-xl mb-4">
						<Icon name={s.icon} class="w-6 h-6" />
					</div>

					<!-- Título -->
					<h3 class="font-semibold text-ink text-lg mb-2">{s.name}</h3>

					<!-- Descripción -->
					<p class="text-muted text-sm leading-relaxed mb-3 line-clamp-2">{s.desc}</p>

					<!-- Ideal para -->
					<p class="text-sm text-muted/80 mb-4">
						<span class="font-medium">Ideal para:</span> {s.who}
					</p>

					<!-- Badge de precio -->
					<div class="flex items-center justify-between">
						<span class="inline-block bg-accent/10 text-accent font-semibold text-sm rounded-full px-3 py-1">
							{s.price}
						</span>

						<!-- Link hover -->
						<a
							href="#casos"
							class="inline-flex items-center gap-1 text-primary font-medium text-sm
							       opacity-0 group-hover:opacity-100 transition-opacity duration-200"
							aria-label="Ver ejemplos de {s.name}"
						>
							Ver ejemplos
							<Icon name="arrow" class="w-4 h-4" />
						</a>
					</div>
				</article>
			{/each}
		</div>

	</div>
</section>
