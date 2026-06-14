<script lang="ts">
	import { tickerItems } from '$lib/data';

	const content = tickerItems.join(' · ') + ' · ';
</script>

<div class="overflow-hidden whitespace-nowrap bg-accent py-3 text-primary font-semibold">
	<div class="flex animate-ticker">
		<!-- Duplicated 2x for seamless loop. The ticker animation moves -50% -->
		<span class="shrink-0 pr-8">{content}{content}</span>
		<span class="shrink-0 pr-8">{content}{content}</span>
	</div>
</div>
