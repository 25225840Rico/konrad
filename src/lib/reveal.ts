// Acción Svelte para fade-in al entrar al viewport usando IntersectionObserver
// nativo (sin librerías). Uso: <div class="reveal" use:reveal>...</div>
// Añade la clase .is-visible (definida en app.css) cuando el elemento aparece.

export function reveal(node: HTMLElement, options: { threshold?: number; once?: boolean } = {}) {
	const { threshold = 0.15, once = true } = options;

	// Si el navegador no soporta IO o el usuario prefiere menos movimiento, mostrar directo.
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
