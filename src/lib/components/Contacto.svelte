<script lang="ts">
	import { fade } from 'svelte/transition';
	import { contact, projectTypes } from '$lib/data';
	import { reveal } from '$lib/reveal';
	import { WA_LINK } from '$lib/seo/site';
	import Icon from '$lib/Icon.svelte';

	let name = $state('');
	let company = $state('');
	let email = $state('');
	let message = $state('');
	let industry = $state('');

	let status = $state<'idle' | 'loading' | 'success'>('idle');
	let errors = $state<Record<string, string>>({});

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	function validate(): boolean {
		const next: Record<string, string> = {};
		if (!name.trim()) next.name = 'El nombre es obligatorio.';
		if (!email.trim()) next.email = 'El correo es obligatorio.';
		else if (!emailRegex.test(email.trim())) next.email = 'Ingresa un correo válido.';
		if (!message.trim()) next.message = 'El mensaje es obligatorio.';
		errors = next;
		return Object.keys(next).length === 0;
	}

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;
		status = 'loading';
		setTimeout(() => (status = 'success'), 1200);
	}
</script>

<section id="contacto" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal mb-16 text-center" use:reveal>
			<span class="eyebrow">Contacto</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				Hablemos
			</h2>
		</div>

		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Columna Izquierda: Formulario -->
			<div class="reveal" use:reveal>
				{#if status === 'success'}
					<div
						transition:fade={{ duration: 300 }}
						class="glass-card flex items-center justify-center p-8 text-center"
						role="alert"
					>
						<p class="text-ink">¡Gracias! Le responderemos dentro de 24 horas.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} novalidate class="glass-card flex flex-col gap-6 p-8 lg:p-10">
						<!-- Nombre -->
						<div>
							<label for="c-name" class="block text-sm font-semibold text-ink mb-2">
								Nombre <span class="text-accent">*</span>
							</label>
							<input
								id="c-name"
								type="text"
								bind:value={name}
								class="w-full bg-transparent border-b border-white/20 px-0 py-2 text-ink focus:border-accent focus:outline-none transition-colors"
								autocomplete="name"
							/>
							{#if errors.name}<p class="mt-2 text-xs text-accent">{errors.name}</p>{/if}
						</div>

						<!-- Empresa -->
						<div>
							<label for="c-company" class="block text-sm font-semibold text-ink mb-2">Empresa</label>
							<input
								id="c-company"
								type="text"
								bind:value={company}
								class="w-full bg-transparent border-b border-white/20 px-0 py-2 text-ink focus:border-accent focus:outline-none transition-colors"
								autocomplete="organization"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="c-email" class="block text-sm font-semibold text-ink mb-2">
								Correo <span class="text-accent">*</span>
							</label>
							<input
								id="c-email"
								type="email"
								bind:value={email}
								class="w-full bg-transparent border-b border-white/20 px-0 py-2 text-ink focus:border-accent focus:outline-none transition-colors"
								autocomplete="email"
							/>
							{#if errors.email}<p class="mt-2 text-xs text-accent">{errors.email}</p>{/if}
						</div>

						<!-- Industria (select) -->
						<div>
							<label for="c-industry" class="block text-sm font-semibold text-ink mb-2">¿Qué necesita?</label>
							<select
								id="c-industry"
								bind:value={industry}
								class="w-full bg-transparent border-b border-white/20 px-0 py-2 text-ink focus:border-accent focus:outline-none transition-colors appearance-none"
							>
								<option value="">Seleccione una opción…</option>
								{#each projectTypes as pt}
									<option value={pt}>{pt}</option>
								{/each}
							</select>
						</div>

						<!-- Mensaje -->
						<div>
							<label for="c-message" class="block text-sm font-semibold text-ink mb-2">
								Mensaje <span class="text-accent">*</span>
							</label>
							<textarea
								id="c-message"
								rows={4}
								bind:value={message}
								class="w-full bg-transparent border-b border-white/20 px-0 py-2 text-ink focus:border-accent focus:outline-none transition-colors resize-none"
							></textarea>
							{#if errors.message}<p class="mt-2 text-xs text-accent">{errors.message}</p>{/if}
						</div>

						<!-- Botón ENVIAR -->
						<button
							type="submit"
							disabled={status === 'loading'}
							class="btn-accent mt-4 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
						>
							{status === 'loading' ? 'ENVIANDO…' : 'ENVIAR'}
						</button>
					</form>
				{/if}
			</div>

			<!-- Columna Derecha: Datos contacto + CTA WhatsApp -->
			<div class="reveal flex flex-col justify-start" use:reveal>
				<!-- Datos de contacto -->
				<div class="space-y-6 mb-8">
					<div>
						<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-2">Email</h3>
						<a href={`mailto:${contact.email}`} class="text-ink hover:text-accent transition-colors">
							{contact.email}
						</a>
					</div>
					<div>
						<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-2">Ubicación</h3>
						<p class="text-ink">{contact.city}</p>
					</div>
					<div>
						<h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-2">Horario</h3>
						<p class="text-ink">{contact.hours}</p>
					</div>
				</div>

				<!-- CTA WhatsApp grande y prominente -->
				<a
					href={WA_LINK}
					target="_blank"
					rel="noopener"
					class="btn-ai flex items-center justify-center gap-2 w-full py-3 px-6"
				>
					<Icon name="whatsapp" class="w-5 h-5" />
					<span>O escríbanos directo por WhatsApp →</span>
				</a>
				<p class="mt-4 text-xs text-muted">Diagnóstico gratuito en menos de 24 horas</p>
			</div>
		</div>
	</div>
</section>
