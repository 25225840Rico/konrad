<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Segments from '$lib/components/Segments.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Diagnostic from '$lib/components/Diagnostic.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Konrad · Creamos y mejoramos sitios web para cualquier negocio</title>
</svelte:head>

<Navbar />

<main>
	<Hero />
	<Segments />
	<Services />
	<Process />
	<Portfolio />
	<Diagnostic />
	<Pricing />
	<Testimonials />
	<FAQ />
	<Contact />
</main>

<Footer />
