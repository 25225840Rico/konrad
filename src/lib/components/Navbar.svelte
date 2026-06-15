<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Icon from '$lib/Icon.svelte';
	import { WA_LINK, siteTypes, aiAgents, serviciosBasicos, portfolioItems } from '$lib/data';

	// ── Scroll state ─────────────────────────────────────────────────────
	let scrolled = $state(false);

	// ── Mega menu state (desktop) ─────────────────────────────────────────
	// null = none open; string = active menu id
	let activeMenu = $state<string | null>(null);

	// ── Mobile drawer state ────────────────────────────────────────────────
	let mobileOpen = $state(false);
	// Which mobile accordion is expanded
	let mobileExpanded = $state<string | null>(null);

	// ── Menu items definition ──────────────────────────────────────────────
	const menuItems = [
		{ id: 'sitios', label: 'Sitios Web' },
		{ id: 'ia', label: 'Inteligencia Artificial' },
		{ id: 'servicios', label: 'Servicios' },
		{ id: 'basicos', label: 'Servicios Básicos' },
		{ id: 'portafolio', label: 'Portafolio & Demos' },
		{ id: 'nosotros', label: 'Nosotros', href: '/nosotros/' }
	];

	// Helper: prefix internal hrefs with base path
	const lk = (h: string | undefined) => (h && h.startsWith('/') ? base + h : h);

	function openMenu(id: string) {
		activeMenu = id;
	}

	function closeMenu() {
		activeMenu = null;
	}

	function toggleMobile() {
		mobileOpen = !mobileOpen;
		if (!mobileOpen) mobileExpanded = null;
	}

	function toggleMobileAccordion(id: string) {
		mobileExpanded = mobileExpanded === id ? null : id;
	}

	onMount(() => {
		// Scroll listener
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		// Click-outside & Escape to close
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeMenu();
				mobileOpen = false;
				mobileExpanded = null;
			}
		};
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest('[data-navbar]')) {
				closeMenu();
			}
		};
		window.addEventListener('keydown', handleKeydown);
		document.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('click', handleClickOutside);
		};
	});

	// Mobile sub-items for accordion
	const mobileSubItems: Record<string, { label: string; href: string; desc?: string }[]> = {
		sitios: siteTypes.map((s) => ({
			label: s.name,
			href: `/sitios/${s.slug}/`,
			desc: `Desde ${s.price}`
		})),
		ia: [
			{ label: 'Agentes IA a Medida', href: '/inteligencia-artificial/agentes-a-medida/' },
			{ label: 'Chatbots WhatsApp', href: '/inteligencia-artificial/chatbots/' },
			{ label: 'Automatización', href: '/inteligencia-artificial/automatizacion/' },
			{ label: 'Asistentes Empresariales', href: '/inteligencia-artificial/asistentes-empresariales/' },
			{ label: 'Consultoría IA', href: '/inteligencia-artificial/consultoria-ia/' }
		],
		servicios: [
			{ label: 'Diseño Web', href: '/servicios/diseno-web/' },
			{ label: 'Desarrollo Web', href: '/servicios/desarrollo-web/' },
			{ label: 'UI/UX', href: '/servicios/ui-ux/' },
			{ label: 'Branding', href: '/servicios-basicos/logo-branding/' },
			{ label: 'SEO', href: '/servicios/seo/' },
			{ label: 'Google Ads', href: '/servicios/google-ads/' },
			{ label: 'Marketing B2B', href: '/servicios/marketing-b2b/' },
			{ label: 'Email Marketing', href: '/servicios/email-marketing/' },
			{ label: 'Mantención Web', href: '/servicios/mantencion-web/' },
			{ label: 'Hosting & Dominio', href: '/servicios-basicos/hosting-dominio/' },
			{ label: 'Email Corporativo', href: '/servicios-basicos/email-corporativo/' },
			{ label: 'Actualizaciones', href: '/servicios-basicos/actualizacion-contenido/' }
		],
		basicos: serviciosBasicos.map((s) => ({
			label: s.name,
			href: `/servicios-basicos/${s.slug}/`,
			desc: s.price
		})),
		portafolio: [{ label: 'Ver portafolio completo', href: '/portafolio/' }]
	};
</script>

<!-- ════════════════════════════════════════════════════════════════════════
     NAVBAR
     ════════════════════════════════════════════════════════════════════════ -->
<header
	data-navbar
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
		? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
		: 'bg-transparent'}"
>
	<div class="container-w flex items-center justify-between h-16">

		<!-- Logo -->
		<a href="{base}/" class="flex items-center gap-0 shrink-0">
			<span class="text-xl font-black text-ink">Core</span>
			<span class="text-2xl font-black text-accent leading-none">·</span>
			<span class="text-xl font-black text-accent">Werk</span>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden lg:flex items-center gap-0" aria-label="Navegación principal">
			{#each menuItems as item}
				{#if item.href}
					<!-- Direct link (Nosotros) -->
					<a
						href={lk(item.href)}
						class="relative px-4 py-5 text-sm font-medium text-ink/80 hover:text-ink transition-colors duration-200"
					>
						{item.label}
					</a>
				{:else}
					<!-- Mega menu trigger -->
					<button
						class="relative px-4 py-5 text-sm font-medium transition-colors duration-200 flex items-center gap-1
						       {activeMenu === item.id ? 'text-accent' : 'text-ink/80 hover:text-ink'}"
						onmouseenter={() => openMenu(item.id)}
						onclick={() => (activeMenu === item.id ? closeMenu() : openMenu(item.id))}
						aria-expanded={activeMenu === item.id}
						aria-haspopup="true"
					>
						{item.label}
						<svg
							class="w-3 h-3 transition-transform duration-200 {activeMenu === item.id ? 'rotate-180' : ''}"
							fill="none" stroke="currentColor" stroke-width="2"
							viewBox="0 0 24 24" aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9"/>
						</svg>
						<!-- Active underline -->
						{#if activeMenu === item.id}
							<span class="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"></span>
						{/if}
					</button>
				{/if}
			{/each}
		</nav>

		<!-- Desktop CTA -->
		<div class="hidden lg:block shrink-0">
			<a href={WA_LINK} target="_blank" rel="noopener noreferrer" class="btn-accent text-sm">
				Cotizar gratis
			</a>
		</div>

		<!-- Mobile hamburger -->
		<button
			class="lg:hidden p-2 text-ink hover:text-accent transition-colors"
			onclick={toggleMobile}
			aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}
				<Icon name="close" class="w-6 h-6" label="Cerrar menú" />
			{:else}
				<Icon name="menu" class="w-6 h-6" label="Abrir menú" />
			{/if}
		</button>
	</div>

	<!-- ══════════════════════════════════════════════════════════════════
	     MEGA MENU CONTAINER (desktop)
	     ══════════════════════════════════════════════════════════════════ -->
	{#if activeMenu}
		<div
			class="absolute inset-x-0 top-full border-t border-white/8 shadow-2xl shadow-black/40"
			role="region"
			aria-label="Mega menú"
			onmouseenter={() => { /* keep open */ }}
			onmouseleave={closeMenu}
			style="animation: megaIn 0.2s cubic-bezier(0.4,0,0.2,1) both;"
		>

			<!-- ══ [1] SITIOS WEB ══════════════════════════════════════════ -->
			{#if activeMenu === 'sitios'}
				<div class="bg-primary/98 backdrop-blur-xl">
					<div class="container-w py-8">
						<div class="flex gap-8">

							<!-- ZONA A: 3×3 grid de site types (70%) -->
							<div class="flex-[7]">
								<p class="eyebrow mb-4">Tipos de sitio web</p>
								<div class="grid grid-cols-3 gap-2">
									{#each siteTypes as site}
										<a
											href="{base}/sitios/{site.slug}/"
											class="glass-nav p-4 flex gap-3 items-start group"
											onclick={closeMenu}
										>
											<span class="text-accent mt-0.5 shrink-0">
												<Icon name={site.icon} class="w-5 h-5" />
											</span>
											<div class="min-w-0">
												<p class="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{site.name}</p>
												<p class="text-xs text-muted mt-0.5 leading-tight line-clamp-2">{site.forWho}</p>
												<p class="text-xs text-accent/80 mt-1 font-medium">Desde {site.price}</p>
											</div>
										</a>
									{/each}
								</div>

								<!-- Footer pills -->
								<div class="flex flex-wrap gap-2 mt-4">
									{#each ['Entrega en 7 días','Diseño a medida','Mobile-first','SEO incluido','Soporte post-entrega'] as pill}
										<span class="text-xs px-3 py-1 border border-white/10 text-muted bg-white/3">{pill}</span>
									{/each}
								</div>
							</div>

							<!-- ZONA B: CTA card (30%) -->
							<div class="flex-[3]">
								<div class="glass-card p-6 h-full flex flex-col">
									<p class="text-sm font-bold text-accent mb-2">¿Cuál necesita?</p>
									<p class="text-sm text-muted leading-relaxed mb-4">
										No todos los sitios son iguales. En 5 minutos le decimos cuál tipo de sitio maximiza su inversión según su rubro y objetivos.
									</p>
									<div class="mt-auto">
										<a
											href={WA_LINK}
											target="_blank"
											rel="noopener noreferrer"
											class="btn-accent text-sm w-full text-center"
											onclick={closeMenu}
										>
											Diagnóstico gratis →
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- ══ [2] INTELIGENCIA ARTIFICIAL ══════════════════════════════ -->
			{#if activeMenu === 'ia'}
				<div class="bg-ai-section backdrop-blur-xl">
					<div class="container-w py-8">
						<!-- Header badge -->
						<div class="mb-6 flex items-center gap-3">
							<span class="eyebrow" style="color: #10B981;">🤖 IA & Agentes</span>
							<span class="text-xs text-muted border border-accentAI/30 px-3 py-1 text-accentAI">El futuro, hoy disponible</span>
						</div>

						<div class="flex gap-6">

							<!-- ZONA A: Agentes a medida (35%) -->
							<div class="flex-[35]">
								<div class="glass-card-ai p-6 h-full flex flex-col">
									<div class="flex items-center gap-3 mb-3">
										<span class="text-accentAI"><Icon name="brain" class="w-8 h-8" /></span>
										<div>
											<p class="font-bold text-ink text-sm">Agentes IA Personalizados</p>
											<p class="text-xs text-accentAI">Desde USD 1.500</p>
										</div>
									</div>
									<p class="text-xs text-muted leading-relaxed mb-4">
										Diseñamos agentes de inteligencia artificial entrenados con el contexto de su negocio, integrados a WhatsApp, email y sus sistemas actuales.
									</p>
									<ul class="space-y-1.5 mb-4">
										{#each aiAgents as agent}
											<li class="flex items-center gap-2 text-xs text-ink/80">
												<span class="w-1.5 h-1.5 rounded-full bg-accentAI shrink-0"></span>
												{agent.name}
											</li>
										{/each}
									</ul>
									<div class="mt-auto flex flex-col gap-2">
										<a
											href="{base}/inteligencia-artificial/agentes-a-medida/"
											class="btn-ai text-xs py-2"
											onclick={closeMenu}
										>
											Ver agentes →
										</a>
										<a
											href="#agente-demo"
											class="btn-ghost text-xs py-2"
											onclick={closeMenu}
										>
											Demo en vivo →
										</a>
									</div>
								</div>
							</div>

							<!-- ZONA B: 4 cards servicio (35%) -->
							<div class="flex-[35]">
								<p class="eyebrow mb-3" style="color: #10B981;">Soluciones IA</p>
								<div class="grid grid-cols-1 gap-2">
									{#each [
										{ label: 'Chatbots WhatsApp', price: 'USD 600', href: '/inteligencia-artificial/chatbots/' },
										{ label: 'Automatización', price: 'USD 800', href: '/inteligencia-artificial/automatizacion/' },
										{ label: 'Asistentes Empresariales', price: 'USD 2.000', href: '/inteligencia-artificial/asistentes-empresariales/' },
										{ label: 'Consultoría IA', price: 'USD 500', href: '/inteligencia-artificial/consultoria-ia/' }
									] as card}
										<a
											href={lk(card.href)}
											class="glass-nav p-4 flex items-center justify-between group"
											onclick={closeMenu}
										>
											<span class="text-sm font-medium text-ink group-hover:text-accentAI transition-colors">{card.label}</span>
											<span class="text-xs text-accentAI font-semibold shrink-0 ml-2">{card.price}</span>
										</a>
									{/each}
								</div>
							</div>

							<!-- ZONA C: Stats (30%) -->
							<div class="flex-[30]">
								<div class="glass-card-ai p-6 h-full flex flex-col">
									<p class="text-xs font-semibold text-accentAI uppercase tracking-widest mb-4">El mercado IA en Chile</p>
									<div class="space-y-4 mb-6">
										<div>
											<p class="text-3xl font-black text-accentAI">70%</p>
											<p class="text-xs text-muted">empresas chilenas usan IA</p>
										</div>
										<div>
											<p class="text-3xl font-black text-accentAI">46%</p>
											<p class="text-xs text-muted">crecimiento anual agentes</p>
										</div>
										<div>
											<p class="text-3xl font-black text-accentAI">4–8 m</p>
											<p class="text-xs text-muted">retorno de inversión</p>
										</div>
									</div>
									<a
										href="{base}/contacto/"
										class="btn-ai text-xs py-2 mt-auto"
										onclick={closeMenu}
									>
										Agendar diagnóstico IA →
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- ══ [3] SERVICIOS ══════════════════════════════════════════ -->
			{#if activeMenu === 'servicios'}
				<div class="bg-primary/98 backdrop-blur-xl">
					<div class="container-w py-8">
						<div class="grid grid-cols-3 gap-8">

							<!-- Col 1: Diseño & Desarrollo -->
							<div>
								<p class="eyebrow mb-4">Diseño & Desarrollo</p>
								<div class="space-y-1">
									{#each [
										{ name: 'Diseño Web', desc: 'Interfaces atractivas y funcionales para tu marca', href: '/servicios/diseno-web/' },
										{ name: 'Desarrollo Web', desc: 'Código limpio, rápido y escalable', href: '/servicios/desarrollo-web/' },
										{ name: 'UI/UX', desc: 'Experiencias digitales que convierten visitas en clientes', href: '/servicios/ui-ux/' },
										{ name: 'Branding', desc: 'Logo, paleta y manual de identidad visual', href: '/servicios-basicos/logo-branding/' }
									] as item}
										<a
											href={lk(item.href)}
											class="glass-nav p-3 flex flex-col group block"
											onclick={closeMenu}
										>
											<span class="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{item.name}</span>
											<span class="text-xs text-muted mt-0.5">{item.desc}</span>
										</a>
									{/each}
								</div>
							</div>

							<!-- Col 2: Marketing & Crecimiento -->
							<div>
								<p class="eyebrow mb-4">Marketing & Crecimiento</p>
								<div class="space-y-1">
									{#each [
										{ name: 'SEO', desc: 'Posicionamiento orgánico en Google para tu rubro', href: '/servicios/seo/' },
										{ name: 'Google Ads', desc: 'Campañas de pago con ROI medible desde el día 1', href: '/servicios/google-ads/' },
										{ name: 'Marketing B2B', desc: 'Estrategia digital para empresas que venden a empresas', href: '/servicios/marketing-b2b/' },
										{ name: 'Email Marketing', desc: 'Secuencias automatizadas que nutren y convierten', href: '/servicios/email-marketing/' }
									] as item}
										<a
											href={lk(item.href)}
											class="glass-nav p-3 flex flex-col group block"
											onclick={closeMenu}
										>
											<span class="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{item.name}</span>
											<span class="text-xs text-muted mt-0.5">{item.desc}</span>
										</a>
									{/each}
								</div>
							</div>

							<!-- Col 3: Soporte & Mantención -->
							<div>
								<p class="eyebrow mb-4">Soporte & Mantención</p>
								<div class="space-y-1">
									{#each [
										{ name: 'Mantención Web', desc: 'Tu sitio siempre actualizado y funcionando', href: '/servicios/mantencion-web/' },
										{ name: 'Hosting & Dominio', desc: 'Servidor SSD, SSL y dominio por 1 año', href: '/servicios-basicos/hosting-dominio/' },
										{ name: 'Email Corporativo', desc: 'Tu nombre en @tuempresa.cl desde hoy', href: '/servicios-basicos/email-corporativo/' },
										{ name: 'Actualizaciones', desc: 'Cambios rápidos sin contratos ni complicaciones', href: '/servicios-basicos/actualizacion-contenido/' }
									] as item}
										<a
											href={lk(item.href)}
											class="glass-nav p-3 flex flex-col group block"
											onclick={closeMenu}
										>
											<span class="text-sm font-semibold text-ink group-hover:text-accent transition-colors">{item.name}</span>
											<span class="text-xs text-muted mt-0.5">{item.desc}</span>
										</a>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- ══ [4] SERVICIOS BÁSICOS ══════════════════════════════════ -->
			{#if activeMenu === 'basicos'}
				<div class="bg-primary/98 backdrop-blur-xl">
					<div class="container-w py-8">
						<!-- Header -->
						<div class="mb-6 flex items-center justify-between">
							<div>
								<p class="eyebrow mb-1">Servicios Básicos</p>
								<h3 class="text-lg font-bold text-ink">Empiece hoy por menos de USD 100</h3>
							</div>
						</div>

						<!-- 5 cards -->
						<div class="grid grid-cols-5 gap-3 mb-6">
							{#each serviciosBasicos as s}
								<a
									href="{base}/servicios-basicos/{s.slug}/"
									class="glass-nav p-5 flex flex-col items-start group"
									onclick={closeMenu}
								>
									<span class="text-2xl mb-2">{s.emoji}</span>
									<p class="text-sm font-semibold text-ink group-hover:text-accent transition-colors mb-1">{s.name}</p>
									<p class="text-xs text-muted leading-tight mb-3">{s.tagline}</p>
									<p class="text-sm font-bold text-accent mt-auto">{s.price}</p>
								</a>
							{/each}
						</div>

						<!-- Footer -->
						<div class="flex items-center justify-between">
							<p class="text-sm text-muted">Sin contratos largos. Sin compromisos.</p>
							<a
								href="{base}/servicios-basicos/"
								class="btn-ghost text-sm"
								onclick={closeMenu}
							>
								Ver paquetes básicos →
							</a>
						</div>
					</div>
				</div>
			{/if}

			<!-- ══ [5] PORTAFOLIO & DEMOS ═════════════════════════════════ -->
			{#if activeMenu === 'portafolio'}
				<div class="bg-primary/98 backdrop-blur-xl">
					<div class="container-w py-8">
						<!-- Header -->
						<div class="mb-6 flex items-center justify-between">
							<div>
								<p class="eyebrow mb-1">Portafolio</p>
								<h3 class="text-lg font-bold text-ink">Demos reales — no mockups</h3>
							</div>
							<a
								href="{base}/portafolio/"
								class="btn-ghost text-sm"
								onclick={closeMenu}
							>
								Ver portafolio completo →
							</a>
						</div>

						<!-- Bento grid -->
						<div class="grid grid-cols-4 gap-3">
							{#each portfolioItems as item, i}
								<div
									class="glass-nav p-5 flex flex-col justify-between relative {i === 0 ? 'col-span-2 row-span-2' : ''}"
									style="min-height: {i === 0 ? '200px' : '100px'};"
								>
									{#if item.live}
										<span
											class="badge-live absolute top-3 right-3 inline-flex items-center gap-1.5 bg-accentAI/20 border border-accentAI/40 px-2 py-0.5 text-xs font-bold text-accentAI"
										>
											<span class="w-1.5 h-1.5 rounded-full bg-accentAI inline-block"></span>
											LIVE
										</span>
									{:else}
										<span class="absolute top-3 right-3 text-xs text-muted border border-white/10 px-2 py-0.5">
											Próximamente
										</span>
									{/if}
									<div class="mt-auto">
										<p class="text-xs text-muted mb-1">{item.category}</p>
										<p class="text-sm font-semibold text-ink">{item.title}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/if}

		</div>
	{/if}

	<!-- ══════════════════════════════════════════════════════════════════
	     MOBILE DRAWER
	     ══════════════════════════════════════════════════════════════════ -->
	{#if mobileOpen}
		<div
			class="lg:hidden fixed inset-0 top-16 bg-primary z-40 overflow-y-auto"
			style="animation: megaIn 0.2s cubic-bezier(0.4,0,0.2,1) both;"
		>
			<nav class="flex flex-col" aria-label="Menú móvil">
				{#each menuItems as item}
					{#if item.href}
						<!-- Direct link -->
						<a
							href={lk(item.href)}
							class="px-6 py-4 text-sm font-semibold text-ink border-b border-white/5 hover:text-accent hover:bg-white/3 transition-colors"
							onclick={() => { mobileOpen = false; mobileExpanded = null; }}
						>
							{item.label}
						</a>
					{:else}
						<!-- Accordion item -->
						<div class="border-b border-white/5">
							<button
								class="w-full px-6 py-4 text-sm font-semibold text-ink flex items-center justify-between hover:text-accent hover:bg-white/3 transition-colors"
								onclick={() => toggleMobileAccordion(item.id)}
								aria-expanded={mobileExpanded === item.id}
							>
								{item.label}
								<svg
									class="w-4 h-4 transition-transform duration-200 {mobileExpanded === item.id ? 'rotate-180' : ''} text-muted"
									fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"
								>
									<polyline points="6 9 12 15 18 9"/>
								</svg>
							</button>

							{#if mobileExpanded === item.id}
								<div class="bg-secondary/40 px-4 pb-4">
									{#each (mobileSubItems[item.id] ?? []) as sub}
										<a
											href={lk(sub.href)}
											class="flex items-center justify-between py-3 px-2 text-sm text-ink/80 hover:text-accent border-b border-white/5 last:border-0 transition-colors"
											onclick={() => { mobileOpen = false; mobileExpanded = null; }}
										>
											<span>{sub.label}</span>
											{#if sub.desc}
												<span class="text-xs text-muted ml-2 shrink-0">{sub.desc}</span>
											{/if}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
				{/each}

				<!-- Mobile CTA fixed at bottom -->
				<div class="sticky bottom-0 p-4 bg-primary border-t border-white/10 mt-auto">
					<a
						href={WA_LINK}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-accent w-full text-center py-3 text-sm font-bold"
						onclick={() => { mobileOpen = false; }}
					>
						<Icon name="whatsapp" class="w-4 h-4" />
						Cotizar gratis por WhatsApp
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>

<!-- Mega menu open animation -->
<style>
	@keyframes megaIn {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
