<script lang="ts">
	import { testimonials } from '$lib/data';
	import { reveal } from '$lib/reveal';
</script>

<section id="testimonios" class="py-20 lg:py-28 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="text-center mb-14" use:reveal>
			<p class="text-accent uppercase text-sm font-semibold tracking-widest mb-3">Testimonios</p>
			<h2 class="text-3xl md:text-4xl font-bold text-ink mb-4">
				Lo que dicen nuestros clientes
			</h2>
		</div>

		<!-- Testimonials grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each testimonials as t}
				<article
					class="bg-white rounded-2xl p-8 border border-slate-200 flex flex-col shadow-sm"
					use:reveal
				>
					<!-- Decorative quote mark -->
					<span class="text-accent text-6xl font-serif leading-none mb-2" aria-hidden="true">
						&ldquo;
					</span>

					<!-- Quote text -->
					<blockquote class="text-ink/90 text-base leading-relaxed flex-1">
						{t.quote}
					</blockquote>

					<!-- Author -->
					<footer class="mt-auto pt-6 border-t border-slate-100">
						<p class="font-semibold text-ink">{t.name}</p>
						<p class="text-sm text-muted">{t.role} · {t.company}</p>
					</footer>
				</article>
			{/each}
		</div>
	</div>
</section>
