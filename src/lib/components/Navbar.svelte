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

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'bg-primary shadow-lg shadow-black/20'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a
			href="#inicio"
			class="text-xl font-bold text-white transition-opacity hover:opacity-80"
		>
			Konrad
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm text-white/80 transition-colors hover:text-white"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop CTA -->
		<div class="hidden lg:block">
			<a
				href="#diagnostico"
				class="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
			>
				Diagnóstico gratis
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="lg:hidden text-white p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
			onclick={() => (open = !open)}
			aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={open}
		>
			{#if open}
				<Icon name="close" class="w-6 h-6" label="Cerrar menú" />
			{:else}
				<Icon name="menu" class="w-6 h-6" label="Abrir menú" />
			{/if}
		</button>
	</div>

	<!-- Mobile dropdown -->
	{#if open}
		<div
			transition:slide={{ duration: 200 }}
			class="bg-primary border-t border-white/10 lg:hidden"
		>
			<nav class="mx-auto flex max-w-7xl flex-col px-4 pb-6 pt-2 sm:px-6" aria-label="Menú móvil">
				{#each navLinks as link}
					<a
						href={link.href}
						class="border-b border-white/10 py-3 text-white/80 transition-colors hover:text-white"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="pt-4">
					<a
						href="#diagnostico"
						class="block rounded-lg bg-accent px-4 py-3 text-center font-semibold text-primary transition-opacity hover:opacity-90"
						onclick={() => (open = false)}
					>
						Diagnóstico gratis
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
