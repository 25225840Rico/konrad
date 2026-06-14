<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '$lib/Icon.svelte';
	import { contact, projectTypes } from '$lib/data';
	import { reveal } from '$lib/reveal';

	// Form field state
	let name = $state('');
	let company = $state('');
	let email = $state('');
	let phone = $state('');
	let projectType = $state('');
	let message = $state('');

	let status = $state<'idle' | 'loading' | 'success'>('idle');
	let errors = $state<Record<string, string>>({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'El nombre es obligatorio.';
		if (!email.trim()) {
			next.email = 'El correo es obligatorio.';
		} else if (!emailRegex.test(email.trim())) {
			next.email = 'Ingresa un correo válido.';
		}
		if (!message.trim()) next.message = 'El mensaje es obligatorio.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;

		status = 'loading';
		setTimeout(() => {
			status = 'success';
		}, 1200);
	}
</script>

<section id="contacto" class="py-20 lg:py-28 bg-surface">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

		<!-- Encabezado -->
		<div class="text-center mb-12" use:reveal>
			<p class="text-accent uppercase tracking-wide text-sm font-semibold mb-3">
				Contáctanos
			</p>
			<h2 class="text-3xl sm:text-4xl font-bold text-ink mb-4">
				Hablemos de tu proyecto
			</h2>
			<p class="text-muted text-lg max-w-xl mx-auto">
				Cuéntanos qué necesitas y te respondemos dentro de 24 horas con una propuesta sin compromiso.
			</p>
		</div>

		<!-- Grid: formulario + datos -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10" use:reveal>

			<!-- IZQUIERDA: Formulario -->
			<div>
				{#if status === 'success'}
					<div
						transition:fade={{ duration: 300 }}
						class="bg-emerald-50 text-emerald-800 rounded-lg p-6 text-base font-medium"
						role="alert"
					>
						¡Gracias! Te responderemos dentro de 24 horas.
					</div>
				{/if}

				{#if status !== 'success'}
					<form
						onsubmit={handleSubmit}
						novalidate
						class="flex flex-col gap-5"
					>
						<!-- Nombre -->
						<div>
							<label for="contact-name" class="block text-sm font-medium text-ink mb-1">
								Nombre <span class="text-accent">*</span>
							</label>
							<input
								id="contact-name"
								type="text"
								required
								bind:value={name}
								placeholder="Tu nombre"
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink placeholder:text-muted bg-white transition-colors"
								aria-describedby={errors.name ? 'contact-name-error' : undefined}
								aria-invalid={!!errors.name}
							/>
							{#if errors.name}
								<p id="contact-name-error" class="text-red-600 text-sm mt-1">{errors.name}</p>
							{/if}
						</div>

						<!-- Empresa -->
						<div>
							<label for="contact-company" class="block text-sm font-medium text-ink mb-1">
								Empresa <span class="text-muted text-xs">(opcional)</span>
							</label>
							<input
								id="contact-company"
								type="text"
								bind:value={company}
								placeholder="Nombre de tu empresa"
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink placeholder:text-muted bg-white transition-colors"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="contact-email" class="block text-sm font-medium text-ink mb-1">
								Correo electrónico <span class="text-accent">*</span>
							</label>
							<input
								id="contact-email"
								type="email"
								required
								bind:value={email}
								placeholder="tu@email.com"
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink placeholder:text-muted bg-white transition-colors"
								aria-describedby={errors.email ? 'contact-email-error' : undefined}
								aria-invalid={!!errors.email}
							/>
							{#if errors.email}
								<p id="contact-email-error" class="text-red-600 text-sm mt-1">{errors.email}</p>
							{/if}
						</div>

						<!-- Teléfono -->
						<div>
							<label for="contact-phone" class="block text-sm font-medium text-ink mb-1">
								Teléfono <span class="text-muted text-xs">(opcional)</span>
							</label>
							<input
								id="contact-phone"
								type="tel"
								bind:value={phone}
								placeholder="+56 9 1234 5678"
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink placeholder:text-muted bg-white transition-colors"
							/>
						</div>

						<!-- Tipo de proyecto -->
						<div>
							<label for="contact-type" class="block text-sm font-medium text-ink mb-1">
								Tipo de proyecto
							</label>
							<select
								id="contact-type"
								bind:value={projectType}
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink bg-white transition-colors appearance-none"
							>
								<option value="" disabled selected>Selecciona una opción…</option>
								{#each projectTypes as pt}
									<option value={pt}>{pt}</option>
								{/each}
							</select>
						</div>

						<!-- Mensaje -->
						<div>
							<label for="contact-message" class="block text-sm font-medium text-ink mb-1">
								Mensaje <span class="text-accent">*</span>
							</label>
							<textarea
								id="contact-message"
								required
								rows={4}
								bind:value={message}
								placeholder="Cuéntanos sobre tu proyecto…"
								class="w-full rounded-lg border border-slate-300 px-4 py-3
								       focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent
								       text-ink placeholder:text-muted bg-white transition-colors resize-y"
								aria-describedby={errors.message ? 'contact-message-error' : undefined}
								aria-invalid={!!errors.message}
							></textarea>
							{#if errors.message}
								<p id="contact-message-error" class="text-red-600 text-sm mt-1">{errors.message}</p>
							{/if}
						</div>

						<!-- Submit -->
						<button
							type="submit"
							disabled={status === 'loading'}
							class="bg-accent text-primary font-semibold rounded-lg px-6 py-3 w-full
							       hover:brightness-95 transition-all duration-200
							       disabled:opacity-60 disabled:cursor-not-allowed
							       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
						>
							{status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
						</button>
					</form>
				{/if}
			</div>

			<!-- DERECHA: Datos de contacto -->
			<div class="flex items-start">
				<div class="bg-primary rounded-2xl p-8 w-full text-white flex flex-col gap-6">
					<h3 class="text-xl font-bold text-white mb-2">Información de contacto</h3>

					<!-- WhatsApp -->
					<div class="flex items-center gap-3">
						<span class="text-accent shrink-0">
							<Icon name="whatsapp" class="w-5 h-5" />
						</span>
						<a
							href={contact.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
							class="text-white/90 hover:text-accent transition-colors duration-150 text-sm"
						>
							{contact.whatsappLabel}
						</a>
					</div>

					<!-- Email -->
					<div class="flex items-center gap-3">
						<span class="text-accent shrink-0">
							<Icon name="mail" class="w-5 h-5" />
						</span>
						<a
							href={`mailto:${contact.email}`}
							class="text-white/90 hover:text-accent transition-colors duration-150 text-sm"
						>
							{contact.email}
						</a>
					</div>

					<!-- Ciudad -->
					<div class="flex items-center gap-3">
						<span class="text-accent shrink-0">
							<Icon name="map" class="w-5 h-5" />
						</span>
						<span class="text-white/90 text-sm">{contact.city}</span>
					</div>

					<!-- Horario -->
					<div class="flex items-center gap-3">
						<span class="text-accent shrink-0">
							<Icon name="clock" class="w-5 h-5" />
						</span>
						<span class="text-white/90 text-sm">{contact.hours}</span>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>
