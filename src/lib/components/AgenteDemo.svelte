<script lang="ts">
	import { fly } from 'svelte/transition';
	import { tick } from 'svelte';
	import Icon from '$lib/Icon.svelte';
	import { agentChips, agentSystemPrompt, waLink } from '$lib/data';
	import { env } from '$env/dynamic/public';

	const PUBLIC_ANTHROPIC_KEY = env.PUBLIC_ANTHROPIC_KEY;

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

		messages = [...messages, { role: 'user', content: trimmed }];
		await scrollToBottom();

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
	@keyframes typing-dot {
		0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
		40% { transform: translateY(-5px); opacity: 1; }
	}
	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: currentColor;
		display: inline-block;
		animation: typing-dot 1.1s linear infinite;
	}
	.dot:nth-child(2) { animation-delay: 0.18s; }
	.dot:nth-child(3) { animation-delay: 0.36s; }

	.field-ai {
		width: 100%;
		border: 0;
		background: transparent;
		padding: 12px 0;
		color: #E2E8F0;
		border-bottom: 1px solid rgba(16, 185, 129, 0.3);
		border-radius: 0;
		transition: border-color 150ms linear;
		font-size: 0.875rem;
	}
	.field-ai::placeholder {
		color: rgba(226, 232, 240, 0.35);
	}
	.field-ai:focus {
		outline: none;
		border-bottom-color: #10B981;
	}

	@media (prefers-reduced-motion: reduce) {
		.dot {
			animation: none;
			opacity: 0.6;
		}
	}
</style>

<section id="agente-demo" class="bg-ai-section py-20 lg:py-28">
	<div class="container-w">

		<!-- Header -->
		<div class="mb-10 max-w-xl reveal">
			<span class="eyebrow" style="color: #10B981;">
				<span class="badge-live inline-block w-2 h-2 rounded-full bg-accentAI mr-1"></span>
				Demo en vivo
			</span>
			<h2 class="mt-3 text-3xl font-normal text-ink lg:text-4xl">
				Pruebe nuestra IA ahora mismo
			</h2>
			<p class="mt-4 text-base text-muted">
				Este agente conoce todos los servicios de CoreWerk. Pregúntele lo que necesita.
			</p>
		</div>

		<!-- Chat container -->
		<div class="mx-auto max-w-2xl glass-card-ai p-4 sm:p-6 ai-glow">

			<!-- Chips -->
			{#if messages.length === 0}
				<div class="mb-5 flex flex-wrap gap-2">
					{#each agentChips as chip}
						<button
							type="button"
							onclick={() => send(chip)}
							disabled={loading}
							class="glass-nav px-3 py-1.5 text-sm font-normal text-accentAI transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-40"
							style="border-color: rgba(16,185,129,0.3); color: #10B981;"
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
					<p class="m-auto text-sm text-muted">
						Haga una pregunta o elija una opción arriba.
					</p>
				{/if}

				{#each messages as msg, i (i)}
					{#if msg.role === 'user'}
						<!-- Burbuja usuario: derecha, bg-accent text-primary -->
						<div
							class="flex justify-end"
							in:fly={{ y: 10, duration: 200, easing: (t) => t }}
						>
							<div class="max-w-[80%] px-4 py-2.5 text-sm bg-accent text-primary">
								{msg.content}
							</div>
						</div>
					{:else}
						<!-- Burbuja agente: izquierda, glass-card-ai + avatar CW verde -->
						<div
							class="flex items-start gap-3"
							in:fly={{ y: 10, duration: 200, easing: (t) => t }}
						>
							<!-- Avatar "CW" -->
							<div
								class="flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold bg-accentAI text-primary"
							>
								CW
							</div>
							<div class="glass-card-ai max-w-[80%] px-4 py-2.5 text-sm text-ink">
								{msg.content}
							</div>
						</div>
					{/if}
				{/each}

				<!-- Typing indicator -->
				{#if loading}
					<div class="flex items-start gap-3" in:fly={{ y: 8, duration: 180, easing: (t) => t }}>
						<div class="flex h-7 w-7 shrink-0 items-center justify-center text-xs font-bold bg-accentAI text-primary">
							CW
						</div>
						<div class="glass-card-ai flex items-center gap-1.5 px-4 py-3 text-accentAI">
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
					style="border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.1); color: #FCA5A5;"
				>
					{error}
					{#if error.includes('WhatsApp')}
						<a
							href={waLink('Hola CoreWerk, quiero consultar sobre sus servicios.')}
							target="_blank"
							rel="noopener"
							class="ml-2 underline hover:text-ink"
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
						class="field-ai"
					/>
				</div>
				<button
					type="button"
					onclick={() => send(input)}
					disabled={loading || !input.trim()}
					aria-label="Enviar mensaje"
					class="btn-ai flex h-10 w-10 shrink-0 items-center justify-center p-0 disabled:cursor-not-allowed disabled:opacity-40"
				>
					<Icon name="send" class="h-4 w-4" />
				</button>
			</div>
		</div>

	</div>
</section>
