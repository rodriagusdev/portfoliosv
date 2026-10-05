<script lang="ts">
	import { page } from '$app/state';

	let path = $derived(page.url.pathname);
</script>

<header
	class="fixed top-0 left-0 w-full z-50 h-14 sm:h-16 bg-cyber-void/90 backdrop-blur-md border-b-2 border-cyber-border flex items-center justify-between px-3 sm:px-8 transition-all"
>
	<!-- Left Branding / Monogram -->
	<a
		href="/"
		aria-label="To Home page"
		class="flex items-center gap-2.5 after:hidden text-decoration-none group"
	>
		<span
			class="font-poster text-2xl sm:text-3xl tracking-wider text-cyber-cyan group-hover:text-white transition-colors"
		>
			RODRICCRZ
		</span>
		<span
			class="hidden md:inline-block font-mono text-[10px] uppercase tracking-widest text-cyber-green px-2 py-0.5 bg-cyber-surface border border-cyber-green/40"
		>
			★ SYS_ARCHIVE
		</span>
	</a>

	<!-- Right Navigation Capsule -->
	<nav aria-label="Main Navigation">
		<ul class="flex items-center gap-1 sm:gap-2.5 list-none p-0 m-0">
			<li>
				<a
					href="/"
					aria-label="To Home page"
					class={`font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-2.5 sm:px-3.5 py-1.5 transition-all border after:hidden rounded ${
						path === '/'
							? 'bg-cyber-cyan text-black border-cyber-cyan shadow-glowCyan'
							: 'text-slate-300 border-transparent hover:border-cyber-cyan/50 hover:bg-cyber-surface hover:text-white'
					}`}
				>
					Home
				</a>
			</li>

			<li>
				<a
					href="/projects"
					aria-label="To Projects page"
					class={`font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-2.5 sm:px-3.5 py-1.5 transition-all border after:hidden rounded ${
						path.startsWith('/projects')
							? 'bg-cyber-violet text-white border-cyber-violet shadow-glowViolet'
							: 'text-slate-300 border-transparent hover:border-cyber-violet/50 hover:bg-cyber-surface hover:text-white'
					}`}
				>
					Projects
				</a>
			</li>

			<li>
				<a
					href="/experience"
					aria-label="To Experience page"
					class={`font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-2.5 sm:px-3.5 py-1.5 transition-all border after:hidden rounded ${
						path === '/experience'
							? 'bg-cyber-green text-black border-cyber-green shadow-glowGreen'
							: 'text-slate-300 border-transparent hover:border-cyber-green/50 hover:bg-cyber-surface hover:text-white'
					}`}
				>
					Experience
				</a>
			</li>

			<li>
				<a
					href="/about"
					aria-label="To About page"
					class={`font-mono text-xs sm:text-sm font-bold tracking-wider uppercase px-2.5 sm:px-3.5 py-1.5 transition-all border after:hidden rounded ${
						path === '/about'
							? 'bg-cyber-pink text-white border-cyber-pink shadow-glowPink'
							: 'text-slate-300 border-transparent hover:border-cyber-pink/50 hover:bg-cyber-surface hover:text-white'
					}`}
				>
					About
				</a>
			</li>
		</ul>
	</nav>
</header>
