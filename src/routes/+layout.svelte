<script lang="ts">
	import './styles.css';

	import Header from './Header.svelte';

	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<div
	id="status"
	role="status"
	class={`
	flex w-[100%] mx-auto min-h-screen h-auto flex-col
	justify-start items-center
	${path.includes('projects') ? 'bg-gradient-cyberpunk-alley90' : 'bg-gradient-cyberpunk-alley'}
	`}
>
	<div
		class="fixed h-[100vh] w-[100%] z-[500000000] bg-gradient-cyberpunk-void flex justify-center items-center animWelcome"
	>
		<h1 class="animTitle text-cyber-green-neon">Opening Portfolio</h1>
	</div>

	<Header />

	<slot />

</div>
