<script lang="ts">
	import { WA_LINK } from '$lib/seo/site';

	let isHovered = $state(false);
	let pulseOpacity = $state(1);

	// Parpadeo lineal suave de opacidad para indicar disponibilidad
	$effect(() => {
		if (!isHovered) {
			const interval = setInterval(() => {
				pulseOpacity = pulseOpacity === 1 ? 0.6 : 1;
			}, 1500);
			return () => clearInterval(interval);
		}
	});
</script>

<a
	href={WA_LINK}
	target="_blank"
	rel="noopener"
	class="group fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center border-2 border-white text-white transition-all duration-150"
	style="background:#25D366; opacity: {pulseOpacity};"
	aria-label="Escríbenos por WhatsApp"
	onmouseenter={() => {
		isHovered = true;
	}}
	onmouseleave={() => {
		isHovered = false;
	}}
>
	<!-- Tooltip (desktop, bloque recto sólido) -->
	<span
		class="pointer-events-none absolute right-[70px] hidden whitespace-nowrap border border-fg bg-fg px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 lg:block"
	>
		Escríbenos ahora
	</span>

	<!-- Logo oficial de WhatsApp (glyph relleno) -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		class="h-8 w-8"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.713 6.404L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.71 12.71 0 0 0 16.001 3.2Zm0 23.36h-.004a10.57 10.57 0 0 1-5.39-1.476l-.386-.23-4.003 1.05 1.068-3.903-.252-.4a10.55 10.55 0 0 1-1.617-5.62c0-5.866 4.774-10.64 10.644-10.64a10.57 10.57 0 0 1 7.52 3.122 10.55 10.55 0 0 1 3.116 7.524c0 5.867-4.774 10.64-10.64 10.64Zm5.834-7.967c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.779-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.523-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.822.674.766.244 1.463.21 2.014.127.614-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z"
		/>
	</svg>
</a>
