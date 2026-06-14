<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	let loaded = $state(false);

	onMount(() => {
		// Navegación suave a anclas internas (#id) respetando reduce-motion.
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const onClick = (e: MouseEvent) => {
			const target = (e.target as HTMLElement)?.closest('a');
			if (!target) return;
			const href = target.getAttribute('href') ?? '';
			if (href.startsWith('#') && href.length > 1) {
				const el = document.querySelector(href);
				if (el) {
					e.preventDefault();
					el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
				}
			}
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	});
</script>

{#if !loaded}
	<LoadingScreen onDone={() => (loaded = true)} />
{/if}

<Navbar />
<WhatsAppButton />

{@render children()}

<Footer />
