<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { heroPills } from '$lib/data';
</script>

<section
	id="inicio"
	class="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
>
	<!-- Dot pattern sutil sobre la escena -->
	<div class="dot-pattern pointer-events-none absolute inset-0 opacity-20" aria-hidden="true"></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Main content -->
		<div class="max-w-3xl" use:reveal>
			<h1 class="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
				<span class="text-gradient">Creamos el sitio web</span><br />
				<span class="text-gradient">que </span><span class="text-accent">tu negocio necesita</span>
			</h1>

			<p class="mb-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
				Desde tiendas online hasta plataformas institucionales. Diseñamos, desarrollamos y mejoramos
				sitios web para cualquier tipo de proyecto — rápidos, modernos y hechos para convertir.
			</p>

			<!-- CTAs -->
			<div class="mb-6 flex flex-wrap gap-4">
				<a href="#contacto" class="btn-accent">
					Quiero una web nueva
				</a>
				<a href="#diagnostico" class="btn-glass">
					Mejorar mi web actual
				</a>
			</div>

			<!-- Indicators -->
			<p class="text-sm text-faint">
				9 tipos de proyectos · +30 sitios entregados · Respuesta en 24 h
			</p>
		</div>

		<!-- Pills row -->
		<div class="mt-12" use:reveal>
			<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap">
				{#each heroPills as pill}
					<span
						class="glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink"
						style="transition-timing-function: var(--ease-spring);"
					>
						{pill}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
