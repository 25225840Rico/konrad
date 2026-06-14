<script lang="ts">
	import { reveal } from '$lib/reveal';

	const cities = [
		{ name: 'Santiago', slug: 'agencia-web-santiago' },
		{ name: 'Valparaíso', slug: 'agencia-web-valparaiso' },
		{ name: 'Concepción', slug: 'agencia-web-concepcion' },
		{ name: 'La Serena', slug: 'agencia-web-la-serena' },
		{ name: 'Antofagasta', slug: 'agencia-web-antofagasta' },
		{ name: 'Iquique', slug: 'agencia-web-iquique' },
		{ name: 'Temuco', slug: 'agencia-web-temuco' },
		{ name: 'Puerto Montt', slug: null }
	];

	// Posiciones angulares para desktop (relativas al centro del SVG 600x440)
	// El centro es (300, 220). Distribuimos 8 ciudades alrededor en elipse.
	const cx = 300;
	const cy = 220;
	const rx = 230; // radio horizontal
	const ry = 160; // radio vertical
	const cityPositions = cities.map((city, i) => {
		const angle = (i / cities.length) * 2 * Math.PI - Math.PI / 2;
		return {
			...city,
			x: cx + rx * Math.cos(angle),
			y: cy + ry * Math.sin(angle)
		};
	});
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-6xl">
		<!-- Encabezado -->
		<div class="mb-16 text-center" use:reveal>
			<p class="eyebrow justify-center mb-3">Cobertura nacional</p>
			<h2 class="text-3xl sm:text-4xl font-bold text-ink mb-4">
				¿Dónde estás? No importa.
			</h2>
			<p class="text-muted text-lg max-w-xl mx-auto">
				Trabajamos con clientes en todo Chile de forma remota. Sin importar la ciudad, entregamos la misma calidad, los mismos plazos y los mismos precios.
			</p>
		</div>

		<!-- Desktop: SVG con nodos y líneas punteadas -->
		<div class="hidden md:block" use:reveal>
			<svg
				viewBox="0 0 600 440"
				xmlns="http://www.w3.org/2000/svg"
				class="w-full max-w-2xl mx-auto"
				role="img"
				aria-label="Mapa de ciudades de Chile atendidas por Konrad"
			>
				<!-- Líneas punteadas desde el centro a cada ciudad -->
				<g aria-hidden="true">
					{#each cityPositions as pos}
						<line
							x1={cx}
							y1={cy}
							x2={pos.x}
							y2={pos.y}
							stroke="currentColor"
							stroke-width="1"
							stroke-dasharray="4 6"
							class="text-white/15"
						/>
					{/each}
				</g>

				<!-- Nodo central: Konrad -->
				<g transform={`translate(${cx}, ${cy})`}>
					<circle r="42" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
					<text
						x="0"
						y="-6"
						text-anchor="middle"
						dominant-baseline="middle"
						fill="white"
						font-size="14"
						font-weight="700"
						font-family="inherit"
					>Konrad</text>
					<text
						x="0"
						y="10"
						text-anchor="middle"
						dominant-baseline="middle"
						fill="rgba(255,255,255,0.5)"
						font-size="9"
						font-family="inherit"
					>Todo Chile</text>
				</g>

				<!-- Nodos de ciudades -->
				{#each cityPositions as pos}
					<g transform={`translate(${pos.x}, ${pos.y})`}>
						{#if pos.slug}
							<a href={`/${pos.slug}`} aria-label={`Agencia web en ${pos.name}`}>
								<rect
									x="-46"
									y="-16"
									width="92"
									height="32"
									rx="16"
									fill="rgba(255,255,255,0.06)"
									stroke="rgba(255,255,255,0.15)"
									stroke-width="1"
									class="transition-all duration-200 hover:fill-white/10 hover:stroke-white/30"
								/>
								<text
									x="0"
									y="0"
									text-anchor="middle"
									dominant-baseline="middle"
									fill="rgba(255,255,255,0.85)"
									font-size="11"
									font-weight="500"
									font-family="inherit"
									class="pointer-events-none"
								>{pos.name}</text>
							</a>
						{:else}
							<rect
								x="-46"
								y="-16"
								width="92"
								height="32"
								rx="16"
								fill="rgba(255,255,255,0.04)"
								stroke="rgba(255,255,255,0.10)"
								stroke-width="1"
							/>
							<text
								x="0"
								y="0"
								text-anchor="middle"
								dominant-baseline="middle"
								fill="rgba(255,255,255,0.45)"
								font-size="11"
								font-family="inherit"
							>{pos.name}</text>
						{/if}
					</g>
				{/each}
			</svg>
		</div>

		<!-- Mobile: grid simple de pills -->
		<div class="md:hidden" use:reveal>
			<div class="flex flex-wrap justify-center gap-3">
				{#each cities as city}
					{#if city.slug}
						<a
							href={`/${city.slug}`}
							class="glass rounded-full px-4 py-2 text-sm text-ink/90 transition-colors duration-120 hover:text-ink"
						>
							{city.name}
						</a>
					{:else}
						<span class="glass rounded-full px-4 py-2 text-sm text-ink/50">
							{city.name}
						</span>
					{/if}
				{/each}
			</div>
			<p class="mt-6 text-center text-sm text-faint">
				Y cualquier otra ciudad de Chile — trabajamos 100% remoto.
			</p>
		</div>
	</div>
</section>
