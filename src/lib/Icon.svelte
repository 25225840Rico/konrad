<script lang="ts">
	// Íconos SVG inline (estilo line/stroke). Sin librerías externas.
	// Uso: <Icon name="cpu" class="w-6 h-6" />
	let {
		name,
		class: klass = 'w-6 h-6',
		label = ''
	}: { name: string; class?: string; label?: string } = $props();

	// Cada entrada es el contenido interno de un <svg> 24x24, stroke currentColor.
	const paths: Record<string, string> = {
		// --- Industrias ---
		pickaxe:
			'<path d="M14.5 4.5c2.5-1.5 6-1.5 6-1.5s0 3.5-1.5 6c-1.2 2-3.5 3-3.5 3"/><path d="M9.5 4.5C7 3 3.5 3 3.5 3s0 3.5 1.5 6c1.2 2 3.5 3 3.5 3"/><path d="M12 12 4 20"/><path d="m12 12 1.5 1.5"/>',
		truck:
			'<path d="M1 3h13v13H1z"/><path d="M14 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="1.8"/><circle cx="17.5" cy="18.5" r="1.8"/>',
		industry:
			'<path d="M2 20h20"/><path d="M4 20V9l5 3V9l5 3V6l5 3v11"/><path d="M9 20v-4h4v4"/>',
		helmet:
			'<path d="M2 17a10 10 0 0 1 20 0"/><path d="M2 17h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z"/><path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><path d="M12 4v4"/>',
		bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
		briefcase:
			'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>',
		// --- Unidades de negocio ---
		globe:
			'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/>',
		automation:
			'<path d="M12 2v3"/><path d="M12 19v3"/><path d="m4.9 4.9 2.1 2.1"/><path d="m17 17 2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><circle cx="12" cy="12" r="4"/>',
		cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
		dashboard:
			'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M13 13h4"/><path d="M13 17h4"/>',
		megaphone:
			'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M16 8a5 5 0 0 1 0 8"/><path d="M19 5a9 9 0 0 1 0 14"/>',
		// --- Utilitarios ---
		bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
		building:
			'<path d="M3 21h18M9 8h1m-1 4h1m4-4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>',
		check: '<polyline points="20 6 9 17 4 12"/>',
		mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
		map: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
		clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
		linkedin:
			'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
		menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
		close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
		arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
		zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
		send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/>',
		spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><path d="m6.3 6.3 2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/>'
	};
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={klass}
	role={label ? 'img' : 'presentation'}
	aria-label={label || undefined}
	aria-hidden={label ? undefined : 'true'}
>
	{@html paths[name] ?? ''}
</svg>
