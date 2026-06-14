<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { testimonials } from '$lib/data';
</script>

<section id="testimonios" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Testimonios</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Lo que dicen nuestros clientes
			</h2>
			<p class="mt-6 text-base text-muted">
				Resultados reales de empresas que confiaron en nosotros para transformar su negocio.
			</p>
		</div>

		<!-- Grid 3 columnas -->
		<div class="mt-16 grid gap-6 md:grid-cols-3">
			{#each testimonials as testimonial, i}
				<div
					class="reveal glass-card p-8 flex flex-col"
					use:reveal
					style="transition-delay: {i * 100}ms;"
				>
					<!-- Estrella ámbar -->
					<div class="mb-4 flex gap-1">
						{#each { length: 5 } as _}
							<Icon name="star" class="w-4 h-4 text-accent" />
						{/each}
					</div>

					<!-- Texto del testimonio -->
					<p class="flex-1 text-sm leading-relaxed text-ink">
						"{testimonial.text}"
					</p>

					<!-- Autor -->
					<div class="mt-6 border-t border-white/10 pt-4">
						<p class="font-bold text-ink">{testimonial.name}</p>
						<p class="text-xs text-muted">
							{testimonial.company} · {testimonial.city}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
