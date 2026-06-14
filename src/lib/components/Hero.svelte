<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { heroPills } from '$lib/data';
</script>

<section
	id="inicio"
	class="relative flex min-h-screen items-center bg-primary pt-28 pb-16 overflow-hidden"
>
	<!-- Dot pattern background -->
	<div class="dot-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden="true"></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Main content -->
		<div class="max-w-3xl" use:reveal>
			<h1
				class="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6"
			>
				Creamos el sitio web que<br />
				<span class="text-accent">tu negocio necesita</span>
			</h1>

			<p class="text-white/80 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
				Desde tiendas online hasta plataformas institucionales. Diseñamos, desarrollamos y mejoramos
				sitios web para cualquier tipo de proyecto — rápidos, modernos y hechos para convertir.
			</p>

			<!-- CTAs -->
			<div class="flex flex-wrap gap-4 mb-6">
				<a
					href="#contacto"
					class="rounded-lg bg-accent px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
				>
					Quiero una web nueva
				</a>
				<a
					href="#diagnostico"
					class="rounded-lg border border-white/40 px-6 py-3 text-white transition-colors hover:bg-white/10"
				>
					Mejorar mi web actual
				</a>
			</div>

			<!-- Indicators -->
			<p class="text-white/60 text-sm">
				9 tipos de proyectos · +30 sitios entregados · Respuesta en 24 h
			</p>
		</div>

		<!-- Pills row -->
		<div class="mt-12" use:reveal>
			<div class="flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:flex-wrap">
				{#each heroPills as pill}
					<span
						class="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90"
					>
						{pill}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
