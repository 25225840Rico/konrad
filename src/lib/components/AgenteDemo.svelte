<script lang="ts">
	import { fly } from 'svelte/transition';
	import { tick } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { agentChips, agentSystemPrompt, waLink } from '$lib/data';
	import { PUBLIC_ANTHROPIC_KEY } from '$env/static/public';

	// --- Types ---
	type Message = { role: 'user' | 'assistant'; content: string };

	type AnthropicResponse = {
		content: { type: string; text: string }[];
		error?: { message: string };
	};

	// --- State ---
	let messages = $state<Message[]>([]);
	let loading = $state(false);
	let error = $state('');
	let input = $state('');

	// Ref for the scroll container
	let scrollEl = $state<HTMLDivElement | undefined>(undefined);

	async function scrollToBottom() {
		await tick();
		if (scrollEl) {
			scrollEl.scrollTop = scrollEl.scrollHeight;
		}
	}

	async function send(text: string) {
		const trimmed = text.trim();
		if (!trimmed || loading) return;

		error = '';
		input = '';

		// Append user message
		messages = [...messages, { role: 'user', content: trimmed }];
		await scrollToBottom();

		// Guard: unconfigured key
		if (!PUBLIC_ANTHROPIC_KEY || PUBLIC_ANTHROPIC_KEY === 'tu_key_aqui') {
			error = 'El asistente no está configurado. Escríbenos por WhatsApp.';
			loading = false;
			return;
		}

		loading = true;

		try {
			const res = await fetch('https://api.anthropic.com/v1/messages', {
				method: 'POST',
				headers: {
					'x-api-key': PUBLIC_ANTHROPIC_KEY,
					'anthropic-version': '2023-06-01',
					'content-type': 'application/json',
					'anthropic-dangerous-direct-browser-access': 'true'
				},
				body: JSON.stringify({
					model: 'claude-haiku-4-5-20251001',
					max_tokens: 1024,
					system: agentSystemPrompt,
					messages: messages.map((m) => ({ role: m.role, content: m.content }))
				})
			});

			if (!res.ok) {
				const errData = (await res.json().catch(() => ({}))) as { error?: { message?: string } };
				throw new Error(errData?.error?.message ?? `Error ${res.status}`);
			}

			const data = (await res.json()) as AnthropicResponse;
			const reply = data.content?.[0]?.text ?? '';

			messages = [...messages, { role: 'assistant', content: reply }];
		} catch (e: unknown) {
			error =
				e instanceof Error
					? e.message
					: 'Ocurrió un error al conectar con el asistente. Intente nuevamente.';
		} finally {
			loading = false;
			await scrollToBottom();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			send(input);
		}
	}
</script>

<style>
	/* Typing indicator — 3 puntos, animación lineal sin rebote */
	@keyframes typing-dot {
		0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
		40% { transform: translateY(-5px); opacity: 1; }
	}
	.dot {
		width: 6px;
		height: 6px;
		background: currentColor;
		display: inline-block;
		animation: typing-dot 1.1s linear infinite;
	}
	.dot:nth-child(2) { animation-delay: 0.18s; }
	.dot:nth-child(3) { animation-delay: 0.36s; }

	/* Campo de input sobre fondo oscuro — borde inferior blanco */
	.field-dark {
		width: 100%;
		border: 0;
		background: transparent;
		padding: 12px 0;
		color: #ffffff;
		border-bottom: 1px solid rgba(255,255,255,0.4);
		border-radius: 0;
		transition: border-color 150ms linear;
		font-size: 0.875rem;
	}
	.field-dark::placeholder {
		color: rgba(255,255,255,0.35);
	}
	.field-dark:focus {
		outline: none;
		border-bottom-color: #00c896;
	}
</style>

<section id="agente" class="bg-fg py-20 lg:py-28">
	<div class="container-w">

		<!-- Header -->
		<div class="mb-10 max-w-xl">
			<span class="eyebrow" style="color:#00c896;">Demo en vivo</span>
			<h2 class="mt-3 text-3xl font-normal text-white lg:text-4xl">
				Pruebe nuestra IA ahora mismo
			</h2>
			<p class="mt-4 text-base" style="color:#999;">
				Este agente conoce todos los servicios de CoreWerk. Pregúntele lo que necesita.
			</p>
		</div>

		<!-- Chat container — glass-emerald-dark como única excepción glass -->
		<div class="mx-auto max-w-2xl glass-emerald-dark p-4 sm:p-6">

			<!-- Chips -->
			{#if messages.length === 0}
				<div class="mb-5 flex flex-wrap gap-2">
					{#each agentChips as chip}
						<button
							type="button"
							onclick={() => send(chip)}
							disabled={loading}
							class="border px-3 py-1.5 text-sm font-normal transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40"
							style="border-color:rgba(0,200,150,0.5); color:#00c896; background:transparent;"
							onmouseover={(e) => { (e.currentTarget as HTMLButtonElement).style.background='rgba(0,200,150,0.12)'; }}
							onmouseout={(e) => { (e.currentTarget as HTMLButtonElement).style.background='transparent'; }}
							onfocus={(e) => { (e.currentTarget as HTMLButtonElement).style.background='rgba(0,200,150,0.12)'; }}
							onblur={(e) => { (e.currentTarget as HTMLButtonElement).style.background='transparent'; }}
						>
							{chip}
						</button>
					{/each}
				</div>
			{/if}

			<!-- Messages area -->
			<div
				bind:this={scrollEl}
				class="mb-5 flex max-h-[400px] min-h-[200px] flex-col gap-3 overflow-y-auto no-scrollbar pr-1"
			>
				{#if messages.length === 0 && !loading}
					<p class="m-auto text-sm" style="color:rgba(255,255,255,0.3);">
						Haga una pregunta o elija una opción arriba.
					</p>
				{/if}

				{#each messages as msg, i (i)}
					{#if msg.role === 'user'}
						<!-- Burbuja usuario: derecha, bg-blue recto -->
						<div
							class="flex justify-end"
							in:fly={{ y: 10, duration: 200, easing: (t) => t }}
						>
							<div
								class="max-w-[80%] px-4 py-2.5 text-sm text-white"
								style="background:#0078d7;"
							>
								{msg.content}
							</div>
						</div>
					{:else}
						<!-- Burbuja agente: izquierda, panel sólido oscuro -->
						<div
							class="flex items-start gap-3"
							in:fly={{ y: 10, duration: 200, easing: (t) => t }}
						>
							<!-- Avatar cuadrado "CW" -->
							<div
								class="flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold"
								style="background:#00c896; color:#111;"
							>
								CW
							</div>
							<div
								class="max-w-[80%] px-4 py-2.5 text-sm"
								style="background:#1a1a1a; color:#e5e5e5;"
							>
								{msg.content}
							</div>
						</div>
					{/if}
				{/each}

				<!-- Typing indicator -->
				{#if loading}
					<div class="flex items-start gap-3" in:fly={{ y: 8, duration: 180, easing: (t) => t }}>
						<div
							class="flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold"
							style="background:#00c896; color:#111;"
						>
							CW
						</div>
						<div
							class="flex items-center gap-1.5 px-4 py-3"
							style="background:#1a1a1a; color:rgba(255,255,255,0.4);"
						>
							<span class="dot"></span>
							<span class="dot"></span>
							<span class="dot"></span>
						</div>
					</div>
				{/if}
			</div>

			<!-- Error banner -->
			{#if error}
				<div
					class="mb-4 border px-4 py-2.5 text-sm"
					style="border-color:rgba(232,17,35,0.4); background:rgba(232,17,35,0.12); color:#ff6b6b;"
				>
					{error}
					{#if error.includes('WhatsApp')}
						<a
							href={waLink('Hola CoreWerk, quiero consultar sobre sus servicios.')}
							target="_blank"
							rel="noopener"
							class="ml-2 underline hover:text-white"
						>Ir a WhatsApp</a>
					{/if}
				</div>
			{/if}

			<!-- Input row -->
			<div class="flex items-end gap-3">
				<div class="flex-1">
					<input
						type="text"
						bind:value={input}
						onkeydown={handleKeydown}
						disabled={loading}
						placeholder="Escribe tu pregunta…"
						class="field-dark"
					/>
				</div>
				<button
					type="button"
					onclick={() => send(input)}
					disabled={loading || !input.trim()}
					aria-label="Enviar mensaje"
					class="flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40"
					style="background:#00c896; color:#111;"
					onmouseover={(e) => { if (!loading && input.trim()) (e.currentTarget as HTMLButtonElement).style.background='#007a5c'; (e.currentTarget as HTMLButtonElement).style.color='#fff'; }}
					onmouseout={(e) => { (e.currentTarget as HTMLButtonElement).style.background='#00c896'; (e.currentTarget as HTMLButtonElement).style.color='#111'; }}
					onfocus={(e) => { if (!loading && input.trim()) (e.currentTarget as HTMLButtonElement).style.background='#007a5c'; }}
					onblur={(e) => { (e.currentTarget as HTMLButtonElement).style.background='#00c896'; (e.currentTarget as HTMLButtonElement).style.color='#111'; }}
				>
					<Icon name="send" class="h-4 w-4" />
				</button>
			</div>
		</div>
	</div>
</section>
