<script lang="ts">
	import { contact } from '$lib/data';
	import { units } from '$lib/data';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-fg bg-white text-fg">
	<div class="container-w py-20">
		<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Marca -->
			<div>
				<p class="text-xl font-light">Core<span class="text-emerald-base">·</span>Werk</p>
				<p class="mt-3 text-sm text-caption">Tecnología que trabaja en faena.</p>
				<p class="mt-4 text-xs text-caption">
					Unidad tecnológica de CoreService<br />Antofagasta, Chile
				</p>
			</div>

			<!-- Servicios -->
			<div>
				<h3 class="text-xs font-normal uppercase tracking-[0.18em] text-caption">Servicios</h3>
				<ul class="mt-4 space-y-2 text-sm text-fg">
					{#each units as u}
						<li>
							<a
								href="#servicios"
								class="transition-colors duration-150 hover:underline hover:decoration-emerald-base"
								>{u.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Empresa -->
			<div>
				<h3 class="text-xs font-normal uppercase tracking-[0.18em] text-caption">Empresa</h3>
				<ul class="mt-4 space-y-2 text-sm text-fg">
					<li>
						<a
							href="#industrias"
							class="transition-colors duration-150 hover:underline hover:decoration-emerald-base"
							>Industrias</a
						>
					</li>
					<li>
						<a
							href="#proceso"
							class="transition-colors duration-150 hover:underline hover:decoration-emerald-base"
							>Cómo trabajamos</a
						>
					</li>
					<li>
						<a
							href="#casos"
							class="transition-colors duration-150 hover:underline hover:decoration-emerald-base"
							>Casos</a
						>
					</li>
					<li>
						<a
							href="#precios"
							class="transition-colors duration-150 hover:underline hover:decoration-emerald-base"
							>Precios</a
						>
					</li>
				</ul>
			</div>

			<!-- Contacto -->
			<div>
				<h3 class="text-xs font-normal uppercase tracking-[0.18em] text-caption">Contacto</h3>
				<ul class="mt-4 space-y-2 text-sm text-fg">
					<li>
						<a href={`mailto:${contact.email}`} class="hover:underline hover:decoration-emerald-base">
							{contact.email}
						</a>
					</li>
					<li>
						<a
							href={contact.whatsapp}
							target="_blank"
							rel="noopener"
							class="hover:underline hover:decoration-emerald-base"
						>
							{contact.whatsappLabel}
						</a>
					</li>
					<li class="text-caption">{contact.city}</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 border-t border-fg pt-6 text-center text-xs text-caption">
			© {year} CoreWerk · Antofagasta, Chile · Todos los derechos reservados
		</div>
	</div>
</footer>
