<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { contact } from '$lib/data';
</script>

<footer class="border-t border-white/10">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<!-- Panel de vidrio opcional que eleva el cierre -->
		<div class="glass rounded-3xl px-8 py-12">
			<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
				<!-- Brand column -->
				<div class="lg:col-span-1">
					<p class="mb-2 text-xl font-bold text-ink">Konrad</p>
					<p class="mb-5 text-sm text-faint">Sitios web que trabajan por ti</p>
					<div class="flex gap-4">
						<a
							href="https://www.linkedin.com/company/konrad"
							target="_blank"
							rel="noopener"
							aria-label="LinkedIn de Konrad"
							class="text-muted transition-colors duration-120 hover:text-accent"
							style="transition-timing-function: var(--ease-spring);"
						>
							<Icon name="linkedin" class="h-5 w-5" label="LinkedIn" />
						</a>
						<a
							href="https://www.instagram.com/konrad.cl"
							target="_blank"
							rel="noopener"
							aria-label="Instagram de Konrad"
							class="text-muted transition-colors duration-120 hover:text-accent"
							style="transition-timing-function: var(--ease-spring);"
						>
							<Icon name="instagram" class="h-5 w-5" label="Instagram" />
						</a>
					</div>
				</div>

				<!-- Servicios -->
				<div>
					<h3 class="eyebrow mb-4">Servicios</h3>
					<ul class="space-y-2 text-sm text-muted">
						<li>
							<a href="#segmentos" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Web nueva</a>
						</li>
						<li>
							<a href="#segmentos" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">E-commerce</a>
						</li>
						<li>
							<a href="#segmentos" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Institucional</a>
						</li>
						<li>
							<a href="#servicios" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Mejorar mi web</a>
						</li>
					</ul>
				</div>

				<!-- Empresa -->
				<div>
					<h3 class="eyebrow mb-4">Empresa</h3>
					<ul class="space-y-2 text-sm text-muted">
						<li>
							<a href="#proceso" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Proceso</a>
						</li>
						<li>
							<a href="#casos" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Casos</a>
						</li>
						<li>
							<a href="#precios" class="transition-colors duration-120 hover:text-ink" style="transition-timing-function: var(--ease-spring);">Precios</a>
						</li>
					</ul>
				</div>

				<!-- Contacto -->
				<div>
					<h3 class="eyebrow mb-4">Contacto</h3>
					<ul class="space-y-3 text-sm text-muted">
						<li>
							<a
								href="mailto:{contact.email}"
								class="flex items-center gap-2 transition-colors duration-120 hover:text-accent"
								style="transition-timing-function: var(--ease-spring);"
							>
								<Icon name="mail" class="h-4 w-4 shrink-0" label="Email" />
								{contact.email}
							</a>
						</li>
						<li>
							<a
								href={contact.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center gap-2 transition-colors duration-120 hover:text-accent"
								style="transition-timing-function: var(--ease-spring);"
							>
								<Icon name="whatsapp" class="h-4 w-4 shrink-0" label="WhatsApp" />
								{contact.whatsappLabel}
							</a>
						</li>
					</ul>
				</div>
			</div>

			<!-- Bottom bar -->
			<div class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-faint">
				© 2026 Konrad · Antofagasta, Chile · Todos los derechos reservados
			</div>
		</div>
	</div>
</footer>
