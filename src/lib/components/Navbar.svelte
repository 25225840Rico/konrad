<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';

	let scrolled = $state(false);
	let open = $state(false);

	const navLinks = [
		{ label: 'Segmentos', href: '#segmentos' },
		{ label: 'Servicios', href: '#servicios' },
		{ label: 'Proceso', href: '#proceso' },
		{ label: 'Casos', href: '#casos' },
		{ label: 'Precios', href: '#precios' },
		{ label: 'Contacto', href: '#contacto' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
	<!-- Barra flotante de vidrio -->
	<div
		class="glass rounded-2xl transition-all duration-300 {scrolled
			? 'glass-strong'
			: ''} mx-auto max-w-7xl"
	>
		<div class="flex items-center justify-between px-4 py-3 sm:px-6">
			<!-- Logo -->
			<a
				href="#inicio"
				class="text-xl font-bold text-ink transition-opacity duration-120 hover:opacity-80"
			>
				Konrad
			</a>

			<!-- Desktop nav -->
			<nav class="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-sm text-muted transition-colors duration-120 hover:text-ink"
						style="transition-timing-function: var(--ease-spring);"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTA -->
			<div class="hidden lg:block">
				<a href="#diagnostico" class="btn-accent px-4 py-2 text-sm">
					Diagnóstico gratis
				</a>
			</div>

			<!-- Mobile hamburger -->
			<button
				class="rounded p-1 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
				onclick={() => (open = !open)}
				aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={open}
			>
				{#if open}
					<Icon name="close" class="h-6 w-6" label="Cerrar menú" />
				{:else}
					<Icon name="menu" class="h-6 w-6" label="Abrir menú" />
				{/if}
			</button>
		</div>

		<!-- Mobile dropdown -->
		{#if open}
			<div
				transition:slide={{ duration: 300 }}
				class="glass glass-strong rounded-b-2xl border-t border-white/10 lg:hidden"
			>
				<nav
					class="mx-auto flex max-w-7xl flex-col px-4 pb-6 pt-2 sm:px-6"
					aria-label="Menú móvil"
				>
					{#each navLinks as link}
						<a
							href={link.href}
							class="border-b border-white/10 py-3 text-muted transition-colors duration-120 hover:text-ink"
							style="transition-timing-function: var(--ease-spring);"
							onclick={() => (open = false)}
						>
							{link.label}
						</a>
					{/each}
					<div class="pt-4">
						<a
							href="#diagnostico"
							class="btn-accent block w-full text-center"
							onclick={() => (open = false)}
						>
							Diagnóstico gratis
						</a>
					</div>
				</nav>
			</div>
		{/if}
	</div>
</header>
