<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { processSteps, waLink } from '$lib/data';
</script>

<section id="proceso" class="py-20 lg:py-24">
	<div class="container-w">
		<div class="reveal max-w-2xl" use:reveal>
			<span class="eyebrow">Cómo trabajamos</span>
			<h2 class="mt-3 text-2xl font-normal tracking-tight sm:text-3xl">
				De la operación al resultado, en cuatro pasos
			</h2>
			<p class="mt-6 text-base text-caption">
				Un proceso claro, con precio fijo y avances visibles desde la primera semana.
			</p>
		</div>

		<div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each processSteps as step, i}
				<div class="reveal relative flex flex-col" style="transition-delay: {i * 80}ms;" use:reveal>
					<div class="text-5xl font-light text-fg">
						{step.n}
					</div>
					<h3 class="mt-6 text-base font-normal text-fg">{step.title}</h3>
					<p class="mt-3 text-sm text-caption flex-1">{step.desc}</p>
					{#if i < processSteps.length - 1}
						<div class="hidden lg:block absolute -right-3 top-8 w-6 h-px bg-fg"></div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<a
				href={waLink('Hola CoreWerk, quiero agendar un diagnóstico.')}
				class="btn-primary"
			>
				Agendar diagnóstico
			</a>
		</div>
	</div>
</section>
