<script lang="ts">
	import { fade } from 'svelte/transition';
	import { contact, projectTypes } from '$lib/data';
	import { reveal } from '$lib/reveal';
	import { WA_LINK } from '$lib/seo/site';

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

<section id="contacto" class="bg-white py-24 lg:py-32">
	<div class="container-w">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
			<!-- Columna Izquierda: Título + Divider + CTA WhatsApp prominente -->
			<div class="flex flex-col justify-start" use:reveal>
				<h2 class="text-6xl font-light leading-tight text-fg lg:text-7xl">HABLEMOS.</h2>
				<div class="emerald-divider my-6"></div>

				<!-- CTA WhatsApp Grande y Prominente -->
				<div class="mt-8 flex flex-col gap-4 border border-fg bg-green p-8 text-white">
					<h3 class="text-lg font-normal">O escríbanos directo por WhatsApp</h3>
					<p class="text-sm">Diagnóstico gratuito de su operación en menos de 24 horas.</p>
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener"
						class="btn-primary mt-4"
					>
						Escribir por WhatsApp →
					</a>
				</div>

				<!-- Datos de contacto en texto plano -->
				<div class="mt-12 space-y-4 text-sm text-fg">
					<div>
						<p class="font-normal">Email</p>
						<a href={`mailto:${contact.email}`} class="text-emerald-base hover:underline">
							{contact.email}
						</a>
					</div>
					<div>
						<p class="font-normal">Ubicación</p>
						<p class="text-caption">{contact.city}</p>
					</div>
					<div>
						<p class="font-normal">Horario</p>
						<p class="text-caption">{contact.hours}</p>
					</div>
				</div>
			</div>

			<!-- Columna Derecha: Formulario -->
			<div use:reveal>
				{#if status === 'success'}
					<div
						transition:fade={{ duration: 300 }}
						class="border border-emerald-base bg-white p-6 text-center"
						role="alert"
					>
						<p class="font-normal text-fg">¡Gracias! Le responderemos dentro de 24 horas.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} novalidate class="flex flex-col gap-6">
						<!-- Nombre -->
						<div>
							<label for="c-name" class="field-label">
								Nombre <span class="text-red">*</span>
							</label>
							<input
								id="c-name"
								type="text"
								bind:value={name}
								class="field"
								autocomplete="name"
							/>
							{#if errors.name}<p class="mt-2 text-sm text-red">{errors.name}</p>{/if}
						</div>

						<!-- Empresa -->
						<div>
							<label for="c-company" class="field-label">Empresa</label>
							<input
								id="c-company"
								type="text"
								bind:value={company}
								class="field"
								autocomplete="organization"
							/>
						</div>

						<!-- Industria (select) -->
						<div>
							<label for="c-industry" class="field-label">¿Qué necesita?</label>
							<select id="c-industry" bind:value={industry} class="field appearance-none">
								<option value="">Seleccione una opción…</option>
								{#each projectTypes as pt}
									<option value={pt}>{pt}</option>
								{/each}
							</select>
						</div>

						<!-- Email -->
						<div>
							<label for="c-email" class="field-label">
								Correo <span class="text-red">*</span>
							</label>
							<input
								id="c-email"
								type="email"
								bind:value={email}
								class="field"
								autocomplete="email"
							/>
							{#if errors.email}<p class="mt-2 text-sm text-red">{errors.email}</p>{/if}
						</div>

						<!-- Mensaje -->
						<div>
							<label for="c-message" class="field-label">
								Mensaje <span class="text-red">*</span>
							</label>
							<textarea
								id="c-message"
								rows={5}
								bind:value={message}
								class="field resize-none"
							></textarea>
							{#if errors.message}<p class="mt-2 text-sm text-red">{errors.message}</p>{/if}
						</div>

						<!-- Botón ENVIAR (Glass Emerald) -->
						<button
							type="submit"
							disabled={status === 'loading'}
							class="btn-glass-emerald w-full py-4 disabled:cursor-not-allowed disabled:opacity-60"
						>
							{status === 'loading' ? 'ENVIANDO…' : 'ENVIAR'}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
