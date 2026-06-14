<script lang="ts">
	import { onMount } from 'svelte';

	let { onDone }: { onDone: () => void } = $props();

	let loaded = $state(false);

	// Element refs
	let screenEl: HTMLDivElement = $state() as HTMLDivElement;
	let logoEl: HTMLDivElement = $state() as HTMLDivElement;
	let progressBarEl: HTMLDivElement = $state() as HTMLDivElement;

	onMount(() => {
		// Respect reduced motion
		if (
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			loaded = true;
			onDone();
			return;
		}

		document.body.classList.add('overflow-hidden');

		// Timeline lineal total ~1.8s
		let startTime = Date.now();
		const duration = 1800; // 1.8 segundos

		const animate = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// 0-0.4s: Logo entra (translateX lineal + opacity)
			if (progress < 0.4 / 1) {
				const p = progress / (0.4 / 1);
				logoEl.style.transform = `translateX(${-40 + p * 40}px)`;
				logoEl.style.opacity = String(p);
			}
			// 0.4-1.4s: Progress bar llena (0-100%)
			if (progress >= 0.4 / 1 && progress < 1.4 / 1) {
				const p = (progress - 0.4 / 1) / (1.0 / 1);
				progressBarEl.style.width = `${p * 100}%`;
			}
			// 1.4-1.8s: Slide-up y desaparición
			if (progress >= 1.4 / 1) {
				const p = (progress - 1.4 / 1) / (0.4 / 1);
				screenEl.style.transform = `translateY(${p * -100}%)`;
				screenEl.style.opacity = String(1 - p);
			}

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				loaded = true;
				document.body.classList.remove('overflow-hidden');
				onDone();
			}
		};

		requestAnimationFrame(animate);

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	});
</script>

{#if !loaded}
	<div
		bind:this={screenEl}
		class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
		style="background-color: #111111;"
		aria-label="Cargando"
		role="status"
		aria-live="polite"
	>
		<!-- Logo CORE·WERK que entra con traslación lineal + opacidad -->
		<div
			bind:this={logoEl}
			class="flex items-baseline gap-0 select-none"
			style="opacity: 0; transform: translateX(-40px);"
		>
			<div
				class="font-light tracking-wide uppercase"
				style="font-size: 2.5rem; color: #ffffff; letter-spacing: 0.1em;"
			>
				CORE
			</div>
			<div class="font-light" style="font-size: 2.5rem; color: #00c896; margin: 0 0.1em;">
				·
			</div>
			<div
				class="font-light tracking-wide uppercase"
				style="font-size: 2.5rem; color: #ffffff; letter-spacing: 0.1em;"
			>
				WERK
			</div>
		</div>

		<!-- Progress bar — lineal emerald 0% → 100% -->
		<div
			class="fixed bottom-0 left-0 right-0"
			style="height: 4px; background-color: transparent;"
			aria-hidden="true"
		>
			<div
				bind:this={progressBarEl}
				style="height: 100%; width: 0%; background-color: #00c896;"
			></div>
		</div>
	</div>
{/if}
