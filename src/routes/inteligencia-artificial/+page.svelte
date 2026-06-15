<script lang="ts">
	import HeroInterior from '$lib/components/interior/HeroInterior.svelte';
	import InteriorSection from '$lib/components/interior/InteriorSection.svelte';
	import FeatureGrid from '$lib/components/interior/FeatureGrid.svelte';
	import ProcesoInterior from '$lib/components/interior/ProcesoInterior.svelte';
	import PreciosInterior from '$lib/components/interior/PreciosInterior.svelte';
	import FaqInterior from '$lib/components/interior/FaqInterior.svelte';
	import CTAInterior from '$lib/components/interior/CTAInterior.svelte';
	import Icon from '$lib/Icon.svelte';
	import { aiAgents } from '$lib/data';
	import { SITE } from '$lib/seo/site';
	import { base } from '$app/paths';

	const description =
		'Agentes de Inteligencia Artificial a medida para empresas chilenas. Automatiza ventas, atención, RRHH, operaciones y documentos con IA desde USD 1.500. CoreWerk, Antofagasta.';
	const canonical = `${SITE.url}/inteligencia-artificial/`;

	const faqIA = [
		{
			q: '¿Qué es un agente IA y en qué se diferencia de un chatbot?',
			a: 'Un chatbot sigue un guión fijo de respuestas: si el usuario escribe algo que no estaba previsto, el chatbot falla. Un agente IA, en cambio, entiende lenguaje natural, razona sobre el contexto de la conversación, recuerda lo dicho anteriormente y puede tomar decisiones. Es como tener un colaborador entrenado en tu negocio disponible 24 horas al día, 7 días a la semana.'
		},
		{
			q: '¿Cuánto cuesta implementar un agente IA?',
			a: 'Nuestros agentes parten desde USD 1.500 para agentes de ventas y atención al cliente (entrega en 15 días). Agentes más complejos de RRHH o documentos parten desde USD 2.000 y los de operaciones desde USD 2.500. El precio depende de la complejidad de los flujos y las integraciones requeridas.'
		},
		{
			q: '¿En cuánto tiempo puedo tener mi agente IA funcionando?',
			a: 'Un agente de ventas o atención al cliente puede estar operativo en 15 días hábiles. Agentes más complejos con integraciones a ERP o múltiples canales toman entre 20 y 25 días. En todos los casos entregamos un plazo cerrado en la propuesta, sin sorpresas.'
		},
		{
			q: '¿Con qué canales puede integrarse el agente IA?',
			a: 'Integramos el agente a WhatsApp Business, tu sitio web (widget de chat), correo electrónico, Slack y sistemas internos como CRM o ERP. El canal depende del tipo de agente y del proceso que quieres automatizar.'
		},
		{
			q: '¿El agente necesita intervención humana?',
			a: 'Los casos estándar los resuelve completamente de forma autónoma. Para situaciones complejas o fuera de su alcance, el agente escala automáticamente a tu equipo con el contexto completo de la conversación, para que no tengas que empezar desde cero.'
		},
		{
			q: '¿Qué pasa si el cliente pregunta algo que el agente no sabe?',
			a: 'El agente está diseñado para reconocer los límites de su conocimiento. En esos casos responde con honestidad, ofrece alternativas dentro de su alcance y si es necesario escala al equipo humano. Nunca inventa información.'
		},
		{
			q: '¿Puedo actualizar el conocimiento del agente después de la entrega?',
			a: 'Sí. Todos los agentes incluyen un período de soporte post-entrega donde puedes ajustar respuestas, agregar nuevos flujos y actualizar información de productos o precios. También ofrecemos planes de mantención mensual para actualizaciones continuas.'
		},
		{
			q: '¿Necesito tener conocimientos técnicos para gestionar el agente?',
			a: 'No. La capacitación al equipo está incluida en todos los proyectos. Diseñamos el agente para que sea gestionable por personas sin conocimientos de programación, con paneles intuitivos y documentación en español.'
		}
	];

	const ldJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'CollectionPage',
				name: 'Inteligencia Artificial para Empresas — CoreWerk',
				description,
				url: canonical,
				hasPart: aiAgents.map((a) => ({
					'@type': 'WebPage',
					name: a.name,
					url: `${SITE.url}/inteligencia-artificial/agentes-a-medida/`
				}))
			},
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
					{ '@type': 'ListItem', position: 2, name: 'Inteligencia Artificial', item: canonical }
				]
			},
			{
				'@type': 'FAQPage',
				mainEntity: faqIA.map((f) => ({
					'@type': 'Question',
					name: f.q,
					acceptedAnswer: { '@type': 'Answer', text: f.a }
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Inteligencia Artificial para Empresas · CoreWerk Chile</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content="Inteligencia Artificial para Empresas · CoreWerk Chile" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="es_CL" />
	<meta property="og:site_name" content="CoreWerk" />
	<meta property="og:url" content={canonical} />
	{@html `<script type="application/ld+json">${JSON.stringify(ldJson)}<\/script>`}
</svelte:head>

<HeroInterior
	ai={true}
	breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Inteligencia Artificial' }]}
	eyebrow="Inteligencia Artificial"
	icon="brain"
	title="Agentes IA que trabajan por tu empresa las 24 horas"
	subtitle="Diseñamos e implementamos agentes de inteligencia artificial entrenados con el contexto de tu negocio, integrados a WhatsApp, email y tus sistemas actuales. Listos para operar de forma autónoma desde el primer día."
	ctaPrimary={{ label: 'Quiero un agente IA', href: 'https://wa.me/56900000000', external: true }}
	ctaSecondary={{ label: 'Ver agentes', href: '#agentes' }}
/>

<!-- ¿Qué es un agente IA? 400+ palabras -->
<InteriorSection
	ai={true}
	eyebrow="Qué es"
	title="¿Qué es un agente IA y por qué tu empresa lo necesita ahora?"
>
	<div class="max-w-3xl space-y-5 text-base text-muted leading-relaxed">
		<p>
			Un agente de inteligencia artificial es un sistema capaz de entender lenguaje natural,
			razonar sobre una situación específica y ejecutar acciones de forma autónoma para cumplir un
			objetivo. A diferencia de un chatbot tradicional, que simplemente sigue un árbol de decisiones
			predefinido, un agente IA comprende el contexto de cada conversación, recuerda lo que se dijo
			antes y puede adaptarse a preguntas o situaciones que no estaban explícitamente programadas.
		</p>
		<p>
			La diferencia es profunda. Imagina que un cliente escribe a las 2 de la mañana preguntando
			por el precio de un producto, luego pide comparar dos opciones, y finalmente quiere saber si
			pueden hacer un descuento por volumen. Un chatbot tradicional fallará en alguno de esos pasos
			porque nadie programó exactamente esa secuencia. Un agente IA lo maneja con naturalidad,
			porque fue entrenado para razonar sobre el negocio, no para seguir un guión.
		</p>
		<p>
			En CoreWerk diseñamos cada agente con el conocimiento específico de tu empresa: tu catálogo
			de productos, tus precios, tus políticas, tus preguntas frecuentes, tus flujos operativos.
			El agente no es genérico; es un especialista en tu negocio, disponible en el canal que
			tus clientes ya usan (WhatsApp, tu sitio web, email) sin necesidad de que descarguen nada
			ni creen una cuenta nueva.
		</p>
		<p>
			Los agentes IA que implementamos pueden integrarse con tus sistemas existentes: CRM para
			registrar leads y clientes, ERP para consultar stock o estados de pedidos, Google Sheets
			para actualizar datos en tiempo real, Slack para notificar al equipo cuando ocurre algo
			importante. Esto los convierte en piezas funcionales de tu operación, no en experimentos
			tecnológicos desconectados de la realidad de tu empresa.
		</p>
		<p>
			El impacto en las empresas que ya trabajan con agentes IA es medible: el 70% de las empresas
			chilenas que adoptaron IA en sus procesos reportan ahorro de tiempo operativo en los primeros
			tres meses. El mercado de agentes IA crece a un ritmo del 46% anual a nivel global, y el
			retorno sobre la inversión se observa en promedio entre 4 y 8 meses después de la
			implementación. No es tecnología del futuro; es la ventaja competitiva que las empresas más
			eficientes en Chile ya están usando hoy.
		</p>
		<p>
			En CoreWerk no vendemos herramientas genéricas. Hacemos el diagnóstico de tu proceso,
			definimos qué tipo de agente resuelve mejor tu problema, lo entrenamos con tu información
			real, lo integramos a tus canales y te capacitamos para que tu equipo lo gestione sin
			depender de nosotros. El resultado es un colaborador digital que trabaja sin descanso,
			no comete los mismos errores dos veces y escala automáticamente cuando la situación
			lo requiere.
		</p>
	</div>
</InteriorSection>

<!-- Stats IA -->
<InteriorSection ai={true} eyebrow="El mercado IA hoy" title="Números que explican la urgencia" align="center">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
		<div class="glass-card-ai flex flex-col items-center p-8 text-center">
			<span class="text-5xl font-black text-accentAI">70%</span>
			<p class="mt-3 text-sm font-semibold text-ink">de las empresas chilenas</p>
			<p class="mt-1 text-sm text-muted">que adoptaron IA reportan ahorro de tiempo en los primeros 3 meses.</p>
		</div>
		<div class="glass-card-ai flex flex-col items-center p-8 text-center">
			<span class="text-5xl font-black text-accentAI">46%</span>
			<p class="mt-3 text-sm font-semibold text-ink">crecimiento anual</p>
			<p class="mt-1 text-sm text-muted">del mercado global de agentes IA. La adopción empresarial se acelera cada mes.</p>
		</div>
		<div class="glass-card-ai flex flex-col items-center p-8 text-center">
			<span class="text-5xl font-black text-accentAI">4–8</span>
			<p class="mt-3 text-sm font-semibold text-ink">meses de ROI</p>
			<p class="mt-1 text-sm text-muted">Tiempo promedio para recuperar la inversión en un agente IA bien implementado.</p>
		</div>
	</div>
</InteriorSection>

<!-- 6 agentes grid -->
<InteriorSection
	id="agentes"
	ai={true}
	eyebrow="6 agentes disponibles"
	title="Elige el agente que resuelve tu problema"
	lead="Cada agente está especializado en un área. Todos se integran a tus canales actuales y se entregan con capacitación incluida."
	align="center"
>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each aiAgents as agent}
			<a href="{base}/inteligencia-artificial/agentes-a-medida/" class="glass-card-ai group flex flex-col p-6">
				<span class="mb-4 inline-flex text-accentAI">
					<Icon name={agent.icon} class="h-7 w-7" />
				</span>
				<h3 class="text-base font-semibold text-ink transition-colors group-hover:text-accentAI">
					{agent.name}
				</h3>
				<p class="mt-2 flex-grow text-sm text-muted leading-relaxed">{agent.tagline}</p>
				<div class="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
					<span class="text-sm font-bold text-accentAI">{agent.price}</span>
					<span class="text-xs text-muted">{agent.time}</span>
				</div>
			</a>
		{/each}
	</div>
</InteriorSection>

<!-- Casos de uso -->
<InteriorSection ai={true} eyebrow="Casos de uso" title="Qué puede automatizar un agente IA en tu empresa" align="center">
	<FeatureGrid
		ai={true}
		cols={3}
		items={[
			{
				icon: 'rocket',
				title: 'Ventas y prospección',
				desc: 'Califica leads automáticamente, responde consultas de precio y producto, y agenda reuniones sin intervención humana.'
			},
			{
				icon: 'chat',
				title: 'Atención al cliente 24/7',
				desc: 'Resuelve dudas, gestiona reclamos y escala casos complejos al equipo con el contexto completo de la conversación.'
			},
			{
				icon: 'users',
				title: 'RRHH y onboarding',
				desc: 'Responde consultas de empleados sobre beneficios, vacaciones y políticas, y gestiona solicitudes de forma automática.'
			},
			{
				icon: 'dashboard',
				title: 'Control operacional',
				desc: 'Monitorea KPIs en tiempo real, genera alertas ante desviaciones y entrega reportes en lenguaje natural a quien corresponde.'
			},
			{
				icon: 'file',
				title: 'Gestión documental',
				desc: 'Busca, resume y extrae información de contratos, manuales e informes al instante, con referencia al documento fuente.'
			},
			{
				icon: 'brain',
				title: 'Procesos a medida',
				desc: 'Reservas, cotizaciones, recordatorios, validaciones: cualquier proceso repetitivo puede ser automatizado con IA.'
			}
		]}
	/>
</InteriorSection>

<!-- Tabla comparativa -->
<InteriorSection ai={true} eyebrow="Comparativa" title="Chatbot tradicional vs Agente IA CoreWerk">
	<div class="overflow-x-auto">
		<table class="w-full min-w-[600px] max-w-3xl border-collapse text-sm">
			<thead>
				<tr class="border-b border-white/10">
					<th class="py-3 pr-6 text-left text-xs uppercase tracking-wider text-muted">Característica</th>
					<th class="py-3 pr-6 text-left text-xs uppercase tracking-wider text-muted">Chatbot tradicional</th>
					<th class="py-3 text-left text-xs uppercase tracking-wider text-accentAI">Agente IA CoreWerk</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-white/5">
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Comprensión del lenguaje</td>
					<td class="py-4 pr-6 text-muted">Palabras clave predefinidas</td>
					<td class="py-4 font-medium text-accentAI">Lenguaje natural completo</td>
				</tr>
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Memoria de la conversación</td>
					<td class="py-4 pr-6 text-muted">Sin memoria de contexto</td>
					<td class="py-4 font-medium text-accentAI">Recuerda toda la sesión</td>
				</tr>
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Preguntas no previstas</td>
					<td class="py-4 pr-6 text-muted">Falla o repite menú</td>
					<td class="py-4 font-medium text-accentAI">Razona y responde igual</td>
				</tr>
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Integración con sistemas</td>
					<td class="py-4 pr-6 text-muted">Limitada o ninguna</td>
					<td class="py-4 font-medium text-accentAI">CRM, ERP, Sheets, WhatsApp</td>
				</tr>
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Escalado a humano</td>
					<td class="py-4 pr-6 text-muted">Manual, sin contexto</td>
					<td class="py-4 font-medium text-accentAI">Automático con historial</td>
				</tr>
				<tr>
					<td class="py-4 pr-6 font-medium text-ink">Tiempo de implementación</td>
					<td class="py-4 pr-6 text-muted">1–2 semanas (flujo rígido)</td>
					<td class="py-4 font-medium text-accentAI">15–25 días (entrenado en tu negocio)</td>
				</tr>
			</tbody>
		</table>
	</div>
</InteriorSection>

<!-- Proceso -->
<InteriorSection ai={true} eyebrow="Cómo trabajamos" title="De la idea al agente en producción" align="center">
	<ProcesoInterior ai={true} />
</InteriorSection>

<!-- Precios -->
<InteriorSection id="precios" ai={true} eyebrow="Planes" title="Precio fijo, sin sorpresas" align="center">
	<PreciosInterior ai={true} highlight="Profesional" />
</InteriorSection>

<!-- FAQ -->
<InteriorSection ai={true} eyebrow="Dudas comunes" title="Preguntas frecuentes sobre IA" align="center">
	<FaqInterior items={faqIA} />
</InteriorSection>

<CTAInterior
	ai={true}
	title="¿Listo para automatizar con IA?"
	text="Cuéntanos el proceso que quieres automatizar y te enviamos una propuesta con el agente ideal, plazo y precio fijo. Sin compromiso."
	waMsg="Hola CoreWerk, quiero información sobre agentes IA para mi empresa."
/>
