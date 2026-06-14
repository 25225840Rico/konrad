<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let { onDone }: { onDone: () => void } = $props();

	let loaded = $state(false);

	// Element refs
	let screenEl = $state<HTMLDivElement | undefined>(undefined);
	let dotEl = $state<HTMLDivElement | undefined>(undefined);
	let lineEl = $state<HTMLDivElement | undefined>(undefined);
	let coreEl = $state<HTMLDivElement | undefined>(undefined);
	let werkEl = $state<HTMLDivElement | undefined>(undefined);
	let separatorEl = $state<HTMLSpanElement | undefined>(undefined);
	let taglineCharsEl = $state<HTMLSpanElement[]>([]);
	let term1El = $state<HTMLDivElement | undefined>(undefined);
	let term2El = $state<HTMLDivElement | undefined>(undefined);
	let term3El = $state<HTMLDivElement | undefined>(undefined);
	let progressFillEl = $state<HTMLDivElement | undefined>(undefined);

	const taglineText = 'Diseño · Desarrollo · IA';
	const termLines = [
		'> Cargando CoreWerk...',
		'> Conectando inteligencia artificial...',
		'> Sistema listo.'
	];

	onMount(() => {
		// Respect reduced motion — skip animation
		if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			loaded = true;
			onDone();
			return;
		}

		document.body.classList.add('overflow-hidden');

		const tl = gsap.timeline({
			onComplete: () => {
				loaded = true;
				document.body.classList.remove('overflow-hidden');
				onDone();
			}
		});

		// (0) Punto ámbar — escala 0→1 centro
		tl.fromTo(
			dotEl!,
			{ scale: 0, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 0.25, ease: 'back.out(1.7)' },
			0
		);

		// (0.3) Línea horizontal ámbar scaleX 0→1
		tl.fromTo(
			lineEl!,
			{ scaleX: 0 },
			{ scaleX: 1, duration: 0.35, ease: 'power2.inOut' },
			0.3
		);

		// (0.7) "CORE" baja desde arriba, "WERK" sube desde abajo
		tl.fromTo(
			coreEl!,
			{ y: -60, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
			0.7
		);
		tl.fromTo(
			werkEl!,
			{ y: 60, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
			0.7
		);

		// (1.1) "·" ámbar parpadeando entre palabras
		tl.fromTo(
			separatorEl!,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.15,
				repeat: 3,
				yoyo: true,
				ease: 'none'
			},
			1.1
		);
		tl.set(separatorEl!, { opacity: 1 }, 1.75);

		// (1.5) tagline — letras con stagger 0.03
		tl.fromTo(
			taglineCharsEl,
			{ opacity: 0, y: 8 },
			{ opacity: 1, y: 0, duration: 0.25, stagger: 0.03, ease: 'power2.out' },
			1.5
		);

		// (2.0) Terminal typewriter — 3 líneas
		const typewriterLine = (el: HTMLDivElement, text: string, startAt: number) => {
			tl.set(el, { opacity: 1 }, startAt);
			const chars = text.split('');
			chars.forEach((_, idx) => {
				tl.call(
					() => { el.textContent = text.slice(0, idx + 1); },
					[],
					startAt + idx * 0.03
				);
			});
		};

		typewriterLine(term1El!, termLines[0], 2.0);
		typewriterLine(term2El!, termLines[1], 2.0 + termLines[0].length * 0.03 + 0.1);
		typewriterLine(term3El!, termLines[2], 2.0 + (termLines[0].length + termLines[1].length) * 0.03 + 0.2);

		// (2.9) Barra progreso ámbar 0→100%
		tl.fromTo(
			progressFillEl!,
			{ width: '0%' },
			{ width: '100%', duration: 0.45, ease: 'power1.inOut' },
			2.9
		);

		// (3.4) Slide-up y onDone
		tl.to(
			screenEl!,
			{ y: '-100%', opacity: 0, duration: 0.5, ease: 'power3.inOut' },
			3.4
		);

		return () => {
			tl.kill();
			document.body.classList.remove('overflow-hidden');
		};
	});
</script>

{#if !loaded}
	<div
		bind:this={screenEl}
		class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-primary"
		aria-label="Cargando CoreWerk"
		role="status"
		aria-live="polite"
	>
		<!-- Punto ámbar central -->
		<div
			bind:this={dotEl}
			class="mb-6 h-3 w-3 bg-accent"
			style="transform: scale(0); opacity: 0;"
			aria-hidden="true"
		></div>

		<!-- Línea horizontal ámbar -->
		<div
			bind:this={lineEl}
			class="mb-8 h-px w-48 bg-accent origin-left"
			style="transform: scaleX(0);"
			aria-hidden="true"
		></div>

		<!-- Logo CORE·WERK -->
		<div class="flex items-baseline select-none" aria-hidden="true">
			<div
				bind:this={coreEl}
				class="text-5xl font-light tracking-[0.1em] uppercase text-ink"
				style="opacity: 0; transform: translateY(-60px);"
			>
				CORE
			</div>
			<span
				bind:this={separatorEl}
				class="mx-2 text-5xl font-light text-accent"
				style="opacity: 0;"
			>·</span>
			<div
				bind:this={werkEl}
				class="text-5xl font-light tracking-[0.1em] uppercase text-ink"
				style="opacity: 0; transform: translateY(60px);"
			>
				WERK
			</div>
		</div>

		<!-- Tagline letras individuales -->
		<div class="mt-4 flex gap-0 select-none" aria-hidden="true">
			{#each taglineText.split('') as char, i}
				<span
					bind:this={taglineCharsEl[i]}
					class="text-sm tracking-widest text-muted"
					style="opacity: 0; transform: translateY(8px);"
				>{char === ' ' ? ' ' : char}</span>
			{/each}
		</div>

		<!-- Terminal typewriter -->
		<div class="mt-10 w-72 font-mono text-xs text-accentAI space-y-1" aria-hidden="true">
			<div bind:this={term1El} style="opacity: 0;"></div>
			<div bind:this={term2El} style="opacity: 0;"></div>
			<div bind:this={term3El} style="opacity: 0;"></div>
		</div>

		<!-- Barra de progreso ámbar -->
		<div
			class="fixed bottom-0 left-0 right-0 h-1 bg-secondary"
			aria-hidden="true"
		>
			<div
				bind:this={progressFillEl}
				class="h-full bg-accent"
				style="width: 0%;"
			></div>
		</div>
	</div>
{/if}
