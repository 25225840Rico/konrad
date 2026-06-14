<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { WA_LINK } from '$lib/seo/site';

	let scrolled = $state(false);
	let open = $state(false);

	const navLinks = [
		{ label: 'Servicios', href: '#servicios' },
		{ label: 'Industrias', href: '#industrias' },
		{ label: 'Cómo trabajamos', href: '#proceso' },
		{ label: 'Precios', href: '#precios' },
		{ label: 'Contacto', href: '#contacto' }
	];

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed inset-x-0 top-0 z-40 bg-bg border-b border-fg transition-colors duration-150"
	style={scrolled ? 'background:#111; color:#fff;' : ''}
>
	<div class="container-w flex items-center justify-between py-3.5">
		<!-- Logo -->
		<a
			href="#inicio"
			class="text-xl font-bold tracking-tight transition-colors duration-150"
			style={scrolled ? 'color:#fff;' : 'color:#111;'}
		>
			Core<span class="text-emerald">·</span>Werk
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm font-normal transition-colors duration-150 border-b-2 border-transparent hover:border-emerald pb-0.5"
					style={scrolled ? 'color:#ccc;' : 'color:#555;'}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Desktop CTA -->
		<div class="hidden lg:block">
			<a href={WA_LINK} target="_blank" rel="noopener" class="btn-glass-emerald btn-glass-sm">
				Cotizar gratis
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="p-1 lg:hidden transition-colors duration-150"
			style={scrolled ? 'color:#fff;' : 'color:#111;'}
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

	<!-- Mobile panel -->
	{#if open}
		<div class="border-t border-fg bg-bg lg:hidden animate-slide-in-metro">
			<nav class="container-w flex flex-col py-2" aria-label="Menú móvil">
				{#each navLinks as link}
					<a
						href={link.href}
						class="border-b border-fg py-3 text-sm text-caption transition-colors duration-150 hover:text-fg hover:border-emerald"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
				<div class="py-4">
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="btn-glass-emerald btn-glass-sm block w-full text-center"
						onclick={() => (open = false)}
					>
						Cotizar gratis
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
