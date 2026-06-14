<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { aiAgents, waLink } from '$lib/data';
	import type { AIAgent } from '$lib/data';

	// Svelte 5 runes
	let activeSlug = $state(aiAgents[0].slug);
	let contentEl: HTMLElement | undefined = $state(undefined);
	let chatEl: HTMLElement | undefined = $state(undefined);

	// Derived active agent
	let activeAgent = $derived(aiAgents.find((a) => a.slug === activeSlug) ?? aiAgents[0]);

	let prefersReduced = false;
	let gsap: typeof import('gsap').gsap | undefined;

	onMount(async () => {
		prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		// GSAP lazy import
		const mod = await import('gsap');
		gsap = mod.gsap;
		// Initial chat animation
		animateChat();
	});

	async function setTab(slug: string) {
		if (slug === activeSlug) return;

		if (gsap && contentEl && !prefersReduced) {
			await gsap.to(contentEl, { opacity: 0, y: 12, duration: 0.2, ease: 'power2.in' });
		}

		activeSlug = slug;
		await tick();

		if (gsap && contentEl && !prefersReduced) {
			gsap.fromTo(contentEl, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
		} else if (contentEl) {
			(contentEl as HTMLElement).style.opacity = '1';
		}

		animateChat();
	}

	async function animateChat() {
		await tick();
		if (!chatEl) return;

		const bubbles = chatEl.querySelectorAll<HTMLElement>('.chat-bubble');

		if (prefersReduced || !gsap) {
			bubbles.forEach((b) => {
				b.style.opacity = '1';
				b.style.transform = 'none';
			});
			return;
		}

		// Reset
		gsap.set(bubbles, { opacity: 0, y: 16 });

		// Stagger appearance
		gsap.to(bubbles, {
			opacity: 1,
			y: 0,
			duration: 0.4,
			stagger: 0.22,
			ease: 'power2.out',
			delay: 0.1
		});
	}
</script>

<section id="agentes-detalle" class="bg-ai-section py-24 lg:py-32">
	<div class="container-w">
		<!-- Heading -->
		<div class="mb-12 text-center reveal">
			<h2 class="text-4xl font-black text-white lg:text-5xl">
				Todos nuestros agentes IA
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-white/55">
				Cada agente es construido desde cero para su negocio. Ninguno es una plantilla.
			</p>
		</div>

		<!-- Tab switcher -->
		<div class="mb-10 flex flex-wrap justify-center gap-2">
			{#each aiAgents as agent}
				<button
					class="flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition-all duration-200 {activeSlug === agent.slug
						? 'border-accentAI bg-accentAI/15 text-accentAI'
						: 'border-white/15 text-white/50 hover:border-accentAI/40 hover:text-white/80'}"
					onclick={() => setTab(agent.slug)}
					aria-pressed={activeSlug === agent.slug}
				>
					<Icon name={agent.icon} class="w-4 h-4" />
					{agent.name}
				</button>
			{/each}
		</div>

		<!-- Content panel — fades on tab change -->
		<div bind:this={contentEl} class="grid grid-cols-1 gap-6 lg:grid-cols-5">

			<!-- Panel izquierdo: info del agente (col-span-2) -->
			<div class="glass-card-ai col-span-1 p-8 lg:col-span-2">
				<div class="mb-5 flex items-center gap-3">
					<span class="flex h-12 w-12 items-center justify-center bg-accentAI/20">
						<Icon name={activeAgent.icon} class="w-6 h-6 text-accentAI" />
					</span>
					<div>
						<p class="text-xs font-semibold uppercase tracking-widest text-accentAI">Agente IA</p>
						<h3 class="text-xl font-bold text-white">{activeAgent.name}</h3>
					</div>
				</div>

				<!-- Qué hace -->
				<div class="mb-6">
					<p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Qué hace</p>
					<p class="text-sm leading-relaxed text-white/70">{activeAgent.what}</p>
				</div>

				<!-- Cómo funciona -->
				<div class="mb-6">
					<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Cómo funciona</p>
					<ol class="space-y-3">
						{#each activeAgent.how as step, i}
							<li class="flex gap-3">
								<span class="flex h-6 w-6 shrink-0 items-center justify-center border border-accentAI/40 text-xs font-bold text-accentAI">
									{i + 1}
								</span>
								<p class="text-sm leading-relaxed text-white/65">{step}</p>
							</li>
						{/each}
					</ol>
				</div>

				<!-- Integraciones -->
				<div class="mb-6">
					<p class="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Integraciones</p>
					<div class="flex flex-wrap gap-2">
						{#each activeAgent.integrations as integ}
							<span class="border border-accentAI/25 px-2 py-0.5 text-xs font-medium text-accentAI/80">
								{integ}
							</span>
						{/each}
					</div>
				</div>

				<!-- Precio y tiempo -->
				<div class="mb-6 flex items-center justify-between border-t border-white/10 pt-5">
					<div>
						<p class="text-xs text-white/40">Precio</p>
						<p class="text-lg font-bold text-white">Desde {activeAgent.price}</p>
					</div>
					<div class="text-right">
						<p class="text-xs text-white/40">Implementación</p>
						<p class="text-sm font-semibold text-white/80">{activeAgent.time}</p>
					</div>
				</div>

				<!-- CTA -->
				<a
					href={waLink(`Hola CoreWerk, quiero el ${activeAgent.name}`)}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-ai w-full"
				>
					Solicitar este agente →
				</a>
			</div>

			<!-- Panel derecho: mockup de chat (col-span-3) -->
			<div class="glass-card-ai col-span-1 flex flex-col p-6 lg:col-span-3">
				<!-- Header del chat -->
				<div class="mb-4 flex items-center gap-3 border-b border-accentAI/20 pb-4">
					<span class="flex h-9 w-9 items-center justify-center bg-accentAI text-xs font-bold text-primary">
						CW
					</span>
					<div>
						<p class="text-sm font-semibold text-white">{activeAgent.name}</p>
						<span class="flex items-center gap-1 text-xs text-accentAI">
							<span class="inline-block h-1.5 w-1.5 rounded-full bg-accentAI"></span>
							En línea ahora
						</span>
					</div>
				</div>

				<!-- Burbujas de chat -->
				<div bind:this={chatEl} class="flex flex-1 flex-col gap-3 overflow-y-auto">
					{#each activeAgent.sample as msg, _i}
						{#if msg.role === 'user'}
							<!-- Usuario: burbuja derecha -->
							<div class="chat-bubble flex justify-end" style="opacity:0">
								<div class="max-w-[75%] bg-white/10 px-4 py-2.5 text-sm text-white/85">
									{msg.text}
								</div>
							</div>
						{:else}
							<!-- Agente: burbuja izquierda con avatar -->
							<div class="chat-bubble flex items-end gap-2" style="opacity:0">
								<span class="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-accentAI text-[10px] font-bold text-primary">
									CW
								</span>
								<div class="max-w-[75%] border border-accentAI/20 bg-accentAI/10 px-4 py-2.5 text-sm text-white/85">
									{msg.text}
								</div>
							</div>
						{/if}
					{/each}
				</div>

				<!-- Footer del chat -->
				<div class="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
					<div class="flex-1 border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/30">
						Escribe un mensaje…
					</div>
					<span class="flex h-9 w-9 items-center justify-center bg-accentAI/20 text-accentAI">
						<Icon name="send" class="w-4 h-4" />
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
