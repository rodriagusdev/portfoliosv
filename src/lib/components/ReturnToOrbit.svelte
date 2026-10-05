<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(false);
	let scrollPercent = $state(0);

	const handleScroll = () => {
		if (typeof window === 'undefined') return;
		const scrollY = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		visible = scrollY > 280;
		scrollPercent = docHeight > 0 ? Math.min(100, Math.round((scrollY / docHeight) * 100)) : 0;
	};

	const scrollToTop = () => {
		if (typeof window === 'undefined') return;
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			scrollToTop();
		}
	};

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if visible}
	<div class="fixed bottom-6 right-6 z-[9999] projectAnim">
		<button
			type="button"
			onclick={scrollToTop}
			onkeydown={handleKeyDown}
			class="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cyber-void/90 border-2 border-cyber-cyan text-cyber-cyan font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-glowCyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyber-cyan"
			aria-label="Return to Orbit — Scroll back to top of page"
			title="Return to Orbit (Top)"
		>
			<!-- Corner Decors -->
			<span class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"></span>
			<span class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"></span>

			<!-- Animated Pulse Beacon -->
			<span class="relative flex h-2 w-2">
				<span
					class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"
				></span>
				<span class="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan group-hover:bg-black"
				></span>
			</span>

			<!-- Icon & Label -->
			<span
				class="text-sm font-black transition-transform duration-300 group-hover:-translate-y-0.5"
				>▲</span
			>
			<span class="tracking-widest hidden sm:inline">ORBIT</span>
			<span
				class="px-1.5 py-0.5 rounded bg-black/60 group-hover:bg-black group-hover:text-cyber-cyan border border-cyber-cyan/30 text-[10px] font-bold"
			>
				{scrollPercent}%
			</span>
		</button>
	</div>
{/if}
