<script>
	import { projectIndex } from '../../store';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>rodriccrz</title>
	<meta
		name="description"
		content="A display of the projects I, Rodrigo Cisterna, had made. Front-end developer"
	/>
</svelte:head>

<section
	class="h-auto w-full m-auto relative sm:mb-40 xl:mb-20"
>
	<h2 class="pagename">PROJECTS.md</h2>

	<h1
		class={`hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-4xl w-[20%] fixed left-[0%] top-[13%] text-right border-b 
		border-b-slate-200 z-[100000000] text-slate-200
		${$page.url.pathname === '/projects' && 'invisible'}
		`}
	>
		.0{$projectIndex}
	</h1>

	<slot />
</section>
