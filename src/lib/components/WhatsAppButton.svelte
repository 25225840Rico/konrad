<script lang="ts">
	import { WA_LINK } from '$lib/seo/site';
	import Icon from '$lib/Icon.svelte';

	let isHovered = $state(false);
</script>

<a
	href={WA_LINK}
	target="_blank"
	rel="noopener"
	class="group fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center bg-[#25D366] text-white transition-all duration-150 wa-pulse"
	style="border-radius: 0;"
	aria-label="Escríbenos ahora"
	onmouseenter={() => {
		isHovered = true;
	}}
	onmouseleave={() => {
		isHovered = false;
	}}
>
	<!-- Tooltip (desktop, bloque sólido a la izquierda) -->
	<span
		class="pointer-events-none absolute right-[70px] hidden whitespace-nowrap bg-ink px-4 py-2 text-xs text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 lg:block"
	>
		¡Escríbenos ahora!
	</span>

	<!-- Ícono WhatsApp -->
	<div aria-hidden="true">
		<Icon name="whatsapp" class="h-6 w-6" />
	</div>
</a>
