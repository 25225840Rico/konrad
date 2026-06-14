<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';

	const newWebItems = [
		'Diseño a medida',
		'Contenido y textos',
		'SEO técnico base',
		'Formularios y WhatsApp',
		'Entrega en 2–4 semanas'
	];

	const improveItems = [
		'Diagnóstico gratuito incluido',
		'Optimización de velocidad',
		'Rediseño parcial o total',
		'Mejora de conversión (CRO)',
		'Sin perder historial en Google'
	];
</script>

<section id="servicios" class="py-20 lg:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-14" use:reveal>
			<p class="eyebrow mb-3">Nuestros servicios</p>
			<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
				Dos formas de trabajar contigo
			</h2>
			<p class="text-muted text-lg max-w-2xl mx-auto">
				Ya sea que partas de cero o quieras potenciar lo que ya tienes, tenemos un camino
				claro para ti.
			</p>
		</div>

		<!-- Dos columnas -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" use:reveal>

			<!-- IZQUIERDA: Web nueva -->
			<div class="glass rounded-3xl p-8 flex flex-col shadow-glow">
				<!-- Badge -->
				<span class="self-start bg-accent/15 text-accent text-xs font-semibold rounded-full px-3 py-1 mb-6">
					Web nueva
				</span>

				<!-- Titular -->
				<h3 class="font-bold text-ink text-2xl mb-2">Construimos desde cero</h3>
				<p class="text-muted text-sm mb-6">
					Tomamos tu proyecto de la idea a un sitio profesional, rápido y listo para convertir.
				</p>

				<!-- Lista -->
				<ul class="space-y-3 mb-8 flex-1" role="list">
					{#each newWebItems as item}
						<li class="flex items-start gap-3">
							<Icon name="check" class="w-5 h-5 text-accent mt-0.5 shrink-0" />
							<span class="text-ink/90 text-sm">{item}</span>
						</li>
					{/each}
				</ul>

				<!-- Precio -->
				<p class="font-semibold text-ink mb-6">
					Desde UF 4 según segmento
				</p>

				<!-- CTA -->
				<a href="#precios" class="btn-accent self-start">
					Ver paquetes
				</a>
			</div>

			<!-- DERECHA: Mejora de sitio -->
			<div class="glass rounded-3xl p-8 flex flex-col">
				<!-- Badge -->
				<span class="self-start bg-emerald-400/15 text-emerald-300 text-xs font-semibold rounded-full px-3 py-1 mb-6">
					Mejora de sitio
				</span>

				<!-- Titular -->
				<h3 class="font-bold text-ink text-2xl mb-2">Potenciamos lo que ya tienes</h3>
				<p class="text-muted text-sm mb-6">
					Analizamos tu web actual y ejecutamos los cambios que realmente mueven la aguja.
				</p>

				<!-- Lista -->
				<ul class="space-y-3 mb-8 flex-1" role="list">
					{#each improveItems as item}
						<li class="flex items-start gap-3">
							<Icon name="check" class="w-5 h-5 text-emerald-300 mt-0.5 shrink-0" />
							<span class="text-ink/90 text-sm">{item}</span>
						</li>
					{/each}
				</ul>

				<!-- Precio -->
				<p class="font-semibold text-ink mb-6">
					Desde UF 3
				</p>

				<!-- CTA -->
				<a href="#diagnostico" class="btn-glass self-start">
					Obtén diagnóstico gratis
				</a>
			</div>

		</div>
	</div>
</section>
