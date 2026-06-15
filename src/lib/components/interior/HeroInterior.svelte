<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { reveal } from '$lib/reveal';
	import { base } from '$app/paths';
	import { WA_LINK } from '$lib/seo/site';

	// Prefija el base path (p. ej. /corewerk en GitHub Pages) solo a enlaces internos.
	const lk = (h?: string) => (h && h.startsWith('/') ? base + h : h);

	interface Crumb {
		label: string;
		href?: string;
	}
	interface Cta {
		label: string;
		href: string;
		external?: boolean;
	}

	let {
		breadcrumbs = [],
		eyebrow = '',
		title,
		subtitle = '',
		price = '',
		days = '',
		icon = '',
		ai = false,
		ctaPrimary = { label: 'Cotizar gratis', href: WA_LINK, external: true },
		ctaSecondary
	}: {
		breadcrumbs?: Crumb[];
		eyebrow?: string;
		title: string;
		subtitle?: string;
		price?: string;
		days?: string;
		icon?: string;
		ai?: boolean;
		ctaPrimary?: Cta;
		ctaSecondary?: Cta;
	} = $props();

	const accentText = $derived(ai ? 'text-accentAI' : 'text-accent');
</script>

<section class="relative overflow-hidden {ai ? 'bg-ai-section' : 'bg-corewerk'} pt-24 pb-20 lg:pt-32 lg:pb-24">
	<div class="dot-pattern pointer-events-none absolute inset-0 opacity-40"></div>
	<div class="container-w relative">
		<!-- Breadcrumb -->
		{#if breadcrumbs.length}
			<nav aria-label="Migas de pan" class="mb-8">
				<ol class="flex flex-wrap items-center gap-2 text-xs text-muted">
					{#each breadcrumbs as crumb, i}
						<li class="flex items-center gap-2">
							{#if crumb.href}
								<a href={lk(crumb.href)} class="transition-colors {ai ? 'hover:text-accentAI' : 'hover:text-accent'}">{crumb.label}</a>
							{:else}
								<span class="text-ink/70">{crumb.label}</span>
							{/if}
							{#if i < breadcrumbs.length - 1}
								<span class="text-muted/50" aria-hidden="true">/</span>
							{/if}
						</li>
					{/each}
				</ol>
			</nav>
		{/if}

		<div class="reveal max-w-3xl" use:reveal>
			{#if eyebrow}
				<span class="eyebrow" class:!text-accentAI={ai}>
					{#if icon}<Icon name={icon} class="h-4 w-4" />{/if}
					{eyebrow}
				</span>
			{/if}
			<h1 class="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
				{title}
			</h1>
			{#if subtitle}
				<p class="mt-6 text-lg text-muted leading-relaxed">{subtitle}</p>
			{/if}

			{#if price || days}
				<div class="mt-8 flex flex-wrap items-center gap-3">
					{#if price}
						<span class="inline-flex items-baseline gap-1.5 border border-white/15 bg-white/5 px-4 py-2">
							<span class="text-xs uppercase tracking-wider text-muted">Desde</span>
							<span class="text-xl font-bold {accentText}">{price}</span>
						</span>
					{/if}
					{#if days}
						<span class="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-sm text-ink">
							<Icon name="clock" class="h-4 w-4 text-muted" />
							{days}
						</span>
					{/if}
				</div>
			{/if}

			<div class="mt-10 flex flex-wrap gap-3">
				<a
					href={lk(ctaPrimary.href)}
					target={ctaPrimary.external ? '_blank' : undefined}
					rel={ctaPrimary.external ? 'noopener noreferrer' : undefined}
					class={ai ? 'btn-ai' : 'btn-accent'}
				>
					{ctaPrimary.label}
					<Icon name="arrow" class="h-4 w-4" />
				</a>
				{#if ctaSecondary}
					<a
						href={lk(ctaSecondary.href)}
						target={ctaSecondary.external ? '_blank' : undefined}
						rel={ctaSecondary.external ? 'noopener noreferrer' : undefined}
						class="btn-ghost"
					>
						{ctaSecondary.label}
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>
