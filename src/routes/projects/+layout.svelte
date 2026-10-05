<script>
	import { projectIndex } from '../../store';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<title>Projects Archive // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="A display of projects, applications, and experiments engineered by Rodrigo Agustin Cisterna."
	/>
</svelte:head>

<section class="h-auto w-full m-auto relative">
	<h2 class="pagename">PROJECTS.md</h2>

	<h1
		class={`hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[20%] fixed left-[0%] top-[13%] text-right border-b 
		border-b-cyber-blue-electric z-40 text-cyber-light font-synth
		${page.url.pathname === '/projects' && 'invisible'}
		`}
	>
		.0{$projectIndex}
	</h1>

	{@render children()}
</section>
