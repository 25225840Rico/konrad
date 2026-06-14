<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { contact } from '$lib/data';
</script>

<footer class="bg-primary text-white/80 border-t border-white/10">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand column -->
			<div class="lg:col-span-1">
				<p class="text-xl font-bold text-white mb-2">Konrad</p>
				<p class="text-sm text-white/60 mb-5">Sitios web que trabajan por ti</p>
				<div class="flex gap-4">
					<a
						href="https://www.linkedin.com/company/konrad"
						target="_blank"
						rel="noopener"
						aria-label="LinkedIn de Konrad"
						class="transition-colors hover:text-accent"
					>
						<Icon name="linkedin" class="w-5 h-5" label="LinkedIn" />
					</a>
					<a
						href="https://www.instagram.com/konrad.cl"
						target="_blank"
						rel="noopener"
						aria-label="Instagram de Konrad"
						class="transition-colors hover:text-accent"
					>
						<Icon name="instagram" class="w-5 h-5" label="Instagram" />
					</a>
				</div>
			</div>

			<!-- Servicios -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Servicios</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="#segmentos" class="transition-colors hover:text-white">Web nueva</a>
					</li>
					<li>
						<a href="#segmentos" class="transition-colors hover:text-white">E-commerce</a>
					</li>
					<li>
						<a href="#segmentos" class="transition-colors hover:text-white">Institucional</a>
					</li>
					<li>
						<a href="#servicios" class="transition-colors hover:text-white">Mejorar mi web</a>
					</li>
				</ul>
			</div>

			<!-- Empresa -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Empresa</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="#proceso" class="transition-colors hover:text-white">Proceso</a>
					</li>
					<li>
						<a href="#casos" class="transition-colors hover:text-white">Casos</a>
					</li>
					<li>
						<a href="#precios" class="transition-colors hover:text-white">Precios</a>
					</li>
				</ul>
			</div>

			<!-- Contacto -->
			<div>
				<h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a
							href="mailto:{contact.email}"
							class="flex items-center gap-2 transition-colors hover:text-accent"
						>
							<Icon name="mail" class="w-4 h-4 shrink-0" label="Email" />
							{contact.email}
						</a>
					</li>
					<li>
						<a
							href={contact.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 transition-colors hover:text-accent"
						>
							<Icon name="whatsapp" class="w-4 h-4 shrink-0" label="WhatsApp" />
							{contact.whatsappLabel}
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
			© 2026 Konrad · Antofagasta, Chile · Todos los derechos reservados
		</div>
	</div>
</footer>
