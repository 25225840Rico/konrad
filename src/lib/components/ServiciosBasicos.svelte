<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import { serviciosBasicos } from '$lib/data';

	let revealEls = $state<HTMLElement[]>([]);

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			revealEls.forEach((el) => {
				if (el) el.classList.add('is-visible');
			});
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						(entry.target as HTMLElement).classList.add('is-visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		revealEls.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<section id="basicos" class="bg-secondary py-20 lg:py-24">
	<div class="container-w">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center">
			<span class="eyebrow">💼 Servicios de entrada</span>
			<h2 class="mt-3 text-3xl font-normal tracking-tight text-ink sm:text-4xl">
				Servicios básicos para cualquier negocio
			</h2>
			<p class="mt-4 text-lg text-muted">
				Lo esencial para tener presencia, comunicación y soporte profesional.
			</p>
		</div>

		<!-- Cards Grid -->
		<div class="mt-16 grid auto-rows-[400px] gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each serviciosBasicos as service, i}
				<a
					href="{base}/servicios-basicos/{service.slug}/"
					bind:this={revealEls[i]}
					class="reveal glass-card group flex flex-col justify-between p-6"
				>
					<!-- Emoji -->
					<div class="mb-4 text-5xl">{service.emoji}</div>

					<!-- Name -->
					<h3 class="text-xl font-bold text-ink">{service.name}</h3>

					<!-- Tagline -->
					<p class="mt-2 text-sm italic text-muted">{service.tagline}</p>

					<!-- Includes -->
					<div class="flex-1">
						<p class="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">Incluye:</p>
						<ul class="space-y-2">
							{#each service.includes as item}
								<li class="flex items-start gap-2 text-xs text-ink">
									<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Price -->
					<div class="mt-4 text-xl font-bold text-accent">{service.price}</div>
				</a>
			{/each}
		</div>

		<!-- CTA General -->
		<div class="mt-14 text-center">
			<a href="{base}/servicios-basicos/" class="btn-accent">
				Ver paquetes básicos →
			</a>
		</div>
	</div>
</section>
