<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<header
	class="fixed w-full bottom-0 md:top-0 md:bottom-auto h-auto rounded-b-md z-50 p-4 flex justify-center backdrop-blur"
>
	<nav class="w-full max-w-7xl">
		<ul class="flex flex-wrap flex-row justify-evenly py-2 gap-4 xl:gap-16 list-none link-card">
			<li class={`${path === '/' && '!border-b-2 !border-cyber-blue-electric text-glow'}`}>
				<a href="/" aria-label="To Home section" class="flex justify-center items-center h-[50px]"
					>Home</a
				>
			</li>

			<li class={`${path === '/about' && '!border-b-2 !border-cyber-blue-electric text-glow'}`}>
				<a
					href="/about"
					aria-label="To About section"
					class="flex justify-center items-center h-[50px]">About</a
				>
			</li>

			<li
				class={`${
					path.includes('projects') && '!border-b-2 !border-cyber-blue-electric text-glow'
				}`}
			>
				<a
					href="/projects"
					aria-label="To Projects section"
					class="flex justify-center items-center h-[50px]">Projects</a
				>
			</li>
		</ul>
	</nav>
</header>
