<script>
	import Resume from '#lib/resume.pdf';
</script>

<svelte:head>
	<title>Resume.pdf</title>
	<meta
		name="description"
		content="rodriccrz@gmail.com. Rodrigo Agustin Cisterna Cruz. Front-end developer."
	/>
</svelte:head>

<div class="m-auto z-[10000000000]">
	<embed src={Resume} class="h-[100vh] w-[100vw]" />
</div>
