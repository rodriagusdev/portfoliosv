<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import ReturnToOrbit from '#lib/components/ReturnToOrbit.svelte';
	import KeyboardNavigation from '#lib/components/KeyboardNavigation.svelte';
	import HudLightbox from '#lib/components/HudLightbox.svelte';
	import { page } from '$app/state';

	let { children } = $props();
	let path = $derived(page.url.pathname);
	let canonicalUrl = $derived(`https://rodriccrz.netlify.app${path}`);
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:url" content={canonicalUrl} />
</svelte:head>

<!-- Accessibility: Skip to Main Content Link -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999999] focus:px-4 focus:py-2 focus:bg-cyber-cyan focus:text-black focus:font-mono focus:text-xs focus:font-bold focus:shadow-glowCyan focus:outline-none"
>
	Skip to main content [TAB]
</a>

<div
	id="status"
	role="status"
	class={`
	flex w-[100%] mx-auto min-h-screen h-auto flex-col
	justify-start items-center
	${path.includes('projects') ? 'bg-gradient-cyberpunk-alley90' : 'bg-gradient-cyberpunk-alley'}
	`}
>
	<Header />

	<main id="main-content" class="w-full">
		{@render children()}
	</main>

	<!-- Global High-Resolution Screenshot Lightbox -->
	<HudLightbox />

	<!-- Floating Return to Orbit Widget -->
	<ReturnToOrbit />

	<!-- Accessible Keyboard Telemetry & Navigation -->
	<KeyboardNavigation />
</div>
