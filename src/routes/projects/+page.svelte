<script lang="ts">
	import { onMount } from 'svelte';
	import { projectsPreview } from '$lib/projectData/projectsPreview';
	import ProjectPreview from '../components/ProjectPreview.svelte';

	let scrollEnd = 0;
	let windowHe = 0;
	let displayProjects = projectsPreview;

	const updateScrollEnd = () => {
		const content = document.querySelector('section');
		if (content) {
			const contentHeight = content.scrollHeight;
			const viewportHeight = window.innerHeight;
			scrollEnd = contentHeight - viewportHeight;
		} else {
			scrollEnd = document.body.scrollHeight - window.innerHeight;
		}
	};

	const handleScroll = () => {
		windowHe = window.scrollY;
	};

	const filterBy = (type: string) => {
		if (type === '') displayProjects = projectsPreview;
		else {
			displayProjects = projectsPreview.filter((p) => p.type === type);
		}

		setTimeout(updateScrollEnd, 100);
	};

	onMount(() => {
		updateScrollEnd();

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', updateScrollEnd);

		const observer = new MutationObserver(updateScrollEnd);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', updateScrollEnd);
			observer.disconnect();
		};
	});
</script>

<section class="w-full mt-40 mb-40 xl:mb-20">
	<!--slider that shows the progress in the scroll-->
	<div
		class="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 w-1 bg-cyber-purple/20 rounded-full h-80 overflow-hidden shadow-lg"
	>
		<div
			style={`height: ${scrollEnd > 0 ? (windowHe / scrollEnd) * 100 : 0}%`}
			class="absolute inset-x-0 top-0 w-full bg-cyber-sky rounded-full transition-all duration-300 ease-out
           shadow-[0_0_12px_2px_rgba(76,76,255,0.6)]
           before:content-[''] before:absolute before:bottom-0 before:left-1/2
           before:-translate-x-1/2 before:w-3 before:h-3
           before:bg-cyber-turquoise before:rounded-full
           before:shadow-[0_0_16px_4px_rgba(0,255,231,0.8)] before:z-10"
		/>
	</div>

	<div class="flex flex-col w-[95%] px-5 m-auto gap-5 border-l-2 border-l-cyber-purple">
		<div class="w-full flex flex-col gap-3 mb-5">
			<h3 class="h-auto text-3xl">Explore</h3>

			<a
				class="text-left w-[50px]"
				href="https://github.com/rodriagusdev"
				target="_blank"
				aria-label="click to see my Github Profile: rodriagusdev">Github</a
			>

			<ul
				class="flex w-[100%] m-auto gap-14 text-sm font-sans font-medium spacing overflow-y-hidden overflow-x-scroll sm:overflow-hidden sm:justify-start list-none pl-9 pb-3"
			>
				<li>
					<button on:click={() => filterBy('')} class="filterButton relative">VIEW ALL</button>
				</li>
				<li>
					<button on:click={() => filterBy('Design')} class="filterButton relative">DESIGNS</button>
				</li>
				<li>
					<button on:click={() => filterBy('Game')} class="filterButton relative">GAMES</button>
				</li>
				<li>
					<button on:click={() => filterBy('Website')} class="filterButton relative"
						>WEBSITES</button
					>
				</li>
			</ul>
		</div>

		<ul class="p-0 flex flex-col gap-5 list-none">
			{#each displayProjects as projectPreview, index (index)}
				<li class="flex-1">
					<ProjectPreview {projectPreview} {index} />
				</li>
			{/each}
		</ul>
	</div>
</section>
