<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
</script>

<svelte:head>
	<title>Página no encontrada | Konrad</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<main class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<p class="mb-4 font-mono text-7xl font-extrabold text-accent">{$page.status}</p>
	<h1 class="mb-3 text-3xl font-bold text-ink sm:text-4xl">
		{$page.status === 404 ? 'Esta página se nos perdió' : 'Algo salió mal'}
	</h1>
	<p class="mb-8 max-w-md text-muted">
		{$page.status === 404
			? 'La página que buscas no existe o cambió de dirección. Volvamos a terreno conocido.'
			: 'Ocurrió un error inesperado. Intenta de nuevo o vuelve al inicio.'}
	</p>
	<div class="flex flex-wrap items-center justify-center gap-4">
		<a href="{base}/" class="btn-accent">
			<Icon name="arrow" class="h-5 w-5 -scale-x-100" /> Volver al inicio
		</a>
		<a href="{base}/#contacto" class="btn-glass">Contactar a Konrad</a>
	</div>
</main>
