<script lang="ts">
	import { WA_LINK } from '$lib/data';
</script>

<section class="bg-ai-section py-20 lg:py-24">
	<div class="container-w">
		<div class="flex flex-col items-center text-center">
			<h2 class="text-3xl font-bold text-ink sm:text-4xl">
				¿Listo para dar el siguiente paso?
			</h2>
			<p class="mt-6 max-w-2xl text-base text-muted">
				Cuéntenos su proyecto en WhatsApp. Primera consulta gratis. Respondemos en 2 horas.
			</p>

			<!-- CTAs -->
			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
				<a href={WA_LINK} class="btn-ai">
					WhatsApp →
				</a>
				<a href="mailto:hola@corewerk.cl" class="btn-ghost">
					Email →
				</a>
			</div>
		</div>
	</div>
</section>
