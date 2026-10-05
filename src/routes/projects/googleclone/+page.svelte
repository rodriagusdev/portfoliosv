<script lang="ts">
	import ProjectNavbar from '../ProjectNavbar.svelte';
	import { openLightbox } from '#lib/lightbox';
	import { googleclone_main, googleclone_1, googleclone_2 } from '#lib/images';

	const galleryImages = [
		{
			src: googleclone_main,
			title: 'Google Clone // Home Search Terminal & Geolocation Badge',
			label: 'MAIN_VIEW // QUERY_INDEX'
		},
		{
			src: googleclone_1,
			title: 'Google Clone // Web & Article Search Results Pagination',
			label: 'MODE_01 // ARTICLES'
		},
		{
			src: googleclone_2,
			title: 'Google Clone // Image Search Gallery & Source Preview',
			label: 'MODE_02 // IMAGES'
		}
	];
</script>

<svelte:head>
	<title>Google Clone // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="Google Clone — Feature-complete Google Search reproduction powered by Google Programmable Search API with live image and web indexing, engineered with Next.js, TypeScript, and TailwindCSS."
	/>
</svelte:head>

<div class="w-full min-h-screen bg-cyber-void text-slate-100 flex flex-col items-center">
	<ProjectNavbar />

	<section
		class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col gap-10 lg:gap-14 projectAnim"
	>
		<!-- =========================================================================
		     HUD HERO MASTHEAD CARD
		     ========================================================================= -->
		<header
			class="relative w-full rounded-2xl border border-cyber-green/40 bg-cyber-surface/90 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_30px_rgba(0,255,159,0.15)]"
		>
			<!-- Corner Decors -->
			<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-green"></div>
			<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan"></div>
			<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-amber"></div>
			<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-blue"></div>

			<!-- Status Ribbon -->
			<div
				class="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10"
			>
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-xs font-bold px-3 py-1 bg-black text-cyber-green border border-cyber-green/40"
					>
						SYS_ID // 02
					</span>
					<span
						class="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyber-green/15 text-cyber-green border border-cyber-green/40"
					>
						🔍 SEARCH / QUERY_ENGINE
					</span>
				</div>

				<div class="flex items-center gap-3 font-mono text-xs text-slate-400">
					<span class="flex items-center gap-1.5 text-cyber-green">
						<span class="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
						STATUS: ONLINE // DEPLOYED
					</span>
					<span class="hidden sm:inline text-white/20">|</span>
					<span class="hidden sm:inline text-cyber-green">SECTOR: SEARCH_INDEX</span>
				</div>
			</div>

			<!-- Title & Core Summary -->
			<div class="relative z-10 flex flex-col gap-4">
				<div
					class="flex items-center gap-2 font-mono text-xs text-cyber-green tracking-widest uppercase"
				>
					<span class="h-1.5 w-6 bg-cyber-green"></span>
					PROGRAMMABLE SEARCH ENGINE REPRODUCTION
				</div>

				<h1
					class="font-poster text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-green to-cyber-cyan uppercase select-none"
				>
					GOOGLE CLONE
				</h1>

				<p class="max-w-3xl font-slab text-base sm:text-lg text-slate-300 leading-relaxed mt-2">
					A high-fidelity reproduction of Google Search powered by Google Programmable Search Engine
					API. Features real-time article and image indexing, automated country and location
					detection via Extreme-IP-Lookup, quick randomized queries, and top-bar application
					navigation.
				</p>

				<!-- Action Buttons Deck -->
				<div class="flex flex-wrap items-center gap-4 mt-4 pt-2">
					<a
						href="https://googleclonecustomscheme.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-green text-black hover:bg-white transition-all duration-300 shadow-glowGreen hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>LAUNCH SEARCH ENGINE</span>
						<span>↗</span>
					</a>

					<a
						href="https://github.com/Rodrj1/google-clone"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-card border-2 border-cyber-cyan text-white hover:bg-cyber-cyan hover:text-black transition-all duration-300 shadow-glowCyan hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>INSPECT REPOSITORY</span>
						<span>↗</span>
					</a>
				</div>
			</div>
		</header>

		<!-- =========================================================================
		     HERO SHOWCASE SCREEN: GOOGLE HOME INTERFACE
		     ========================================================================= -->
		<button
			type="button"
			onclick={() => openLightbox(galleryImages, 0)}
			class="rounded-2xl border-2 border-cyber-green/40 bg-black overflow-hidden shadow-glowGreen group cursor-pointer text-left w-full transition-transform hover:scale-[1.01]"
			aria-label="Expand Google Home Search Interface Fullscreen"
		>
			<div
				class="p-3 bg-cyber-surface border-b border-white/10 flex items-center justify-between font-mono text-xs"
			>
				<span class="text-cyber-green flex items-center gap-2">
					<span class="w-2 h-2 rounded-full bg-cyber-green animate-ping"></span>
					MAIN_VIEW // HOME_SEARCH_INDEX
				</span>
				<span class="text-slate-400">ENGINE: GOOGLE_PROGRAMMABLE (CLICK TO EXPAND)</span>
			</div>
			<div class="relative overflow-hidden aspect-video max-h-[520px]">
				<img
					src={googleclone_main}
					alt="Google Clone Main search interface with custom scheme"
					class="w-full h-full object-cover object-top filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
				></div>
				<div
					class="absolute bottom-4 left-4 sm:left-6 font-mono text-xs text-cyber-green bg-black/80 px-3 py-1.5 border border-cyber-green/40 flex items-center gap-2"
				>
					<span>✦</span>
					<span>LIVE INDEXING: SEARCH QUERY TERMINAL (CLICK TO EXPAND FULLSCREEN)</span>
				</div>
			</div>
		</button>

		<!-- =========================================================================
		     SCREENSHOT MATRIX & ARCHITECTURE SPECIFICATIONS
		     ========================================================================= -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<!-- Left Column (7 cols): Dual Mode Slices (Articles vs Images) -->
			<div class="lg:col-span-7 flex flex-col gap-6">
				<div class="flex items-center gap-3">
					<div class="h-0.5 w-6 sm:w-10 bg-cyber-green"></div>
					<h2 class="text-sm sm:text-base font-synth tracking-widest text-cyber-green uppercase">
						INDEX_MODES // ARTICLES &amp; IMAGES (CLICK TO ZOOM)
					</h2>
					<div class="h-0.5 flex-1 bg-cyber-green/20"></div>
				</div>

				<div class="flex flex-col gap-5">
					<!-- Articles / Web View -->
					<button
						type="button"
						onclick={() => openLightbox(galleryImages, 1)}
						class="rounded-xl border border-white/10 bg-black overflow-hidden group flex flex-col transition-transform hover:-translate-y-1 hover:border-cyber-cyan cursor-pointer text-left w-full"
						aria-label="Expand Web & Articles Results Fullscreen"
					>
						<div
							class="p-3 bg-cyber-surface border-b border-white/10 font-mono text-xs text-cyber-cyan flex justify-between items-center w-full"
						>
							<span class="font-bold">MODE 01: WEB &amp; ARTICLES QUERY VIEW</span>
							<span class="text-slate-400">PAGINATION_ACTIVE</span>
						</div>
						<div class="relative h-56 overflow-hidden bg-black w-full">
							<img
								src={googleclone_1}
								alt="Google Clone Articles and web search results"
								class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div
							class="p-3 bg-cyber-card border-t border-white/5 font-mono text-xs text-slate-300 w-full"
						>
							Full URL breadcrumbs, snippets, and fast pagination for billions of indexed web pages.
						</div>
					</button>

					<!-- Image Search Grid -->
					<button
						type="button"
						onclick={() => openLightbox(galleryImages, 2)}
						class="rounded-xl border border-white/10 bg-black overflow-hidden group flex flex-col transition-transform hover:-translate-y-1 hover:border-cyber-amber cursor-pointer text-left w-full"
						aria-label="Expand Image Gallery Results Fullscreen"
					>
						<div
							class="p-3 bg-cyber-surface border-b border-white/10 font-mono text-xs text-cyber-amber flex justify-between items-center w-full"
						>
							<span class="font-bold">MODE 02: IMAGE GALLERY SEARCH INDEX</span>
							<span class="text-slate-400">GRID_VIEW</span>
						</div>
						<div class="relative h-56 overflow-hidden bg-black w-full">
							<img
								src={googleclone_2}
								alt="Google Clone visual search results gallery"
								class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div
							class="p-3 bg-cyber-card border-t border-white/5 font-mono text-xs text-slate-300 w-full"
						>
							High-density responsive image grid with source previews and direct link routing.
						</div>
					</button>
				</div>
			</div>

			<!-- Right Column (5 cols): Architecture Specifications & Features -->
			<div class="lg:col-span-5 flex flex-col gap-6">
				<!-- Specification Panel -->
				<div
					class="p-6 sm:p-8 rounded-2xl border border-white/15 bg-cyber-surface/90 backdrop-blur-md card-glow flex flex-col gap-5"
				>
					<div class="flex items-center gap-2 border-b border-white/10 pb-3">
						<span class="text-cyber-green">◈</span>
						<h3 class="font-synth text-sm text-cyber-green font-bold tracking-wider uppercase">
							SYSTEM_SPECS // ARCHITECTURE
						</h3>
					</div>

					<p class="font-slab text-sm text-slate-300 leading-relaxed">
						Constructed with Next.js and TypeScript. Queries are dispatched asynchronously to Google
						Programmable Search REST APIs with server-side caching and dynamic client-side
						pagination.
					</p>

					<!-- Key Platform Metrics -->
					<ul class="flex flex-col gap-2.5 list-none p-0 m-0 font-mono text-xs text-slate-300">
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">SEARCH API:</span>
							<span class="text-cyber-green font-bold">Google Custom Search</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">GEOLOCATION:</span>
							<span class="text-cyber-cyan font-bold">Extreme-IP-Lookup</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">SEARCH MODES:</span>
							<span class="text-cyber-amber font-bold">Web &amp; Image Index</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">SPECIAL ACTIONS:</span>
							<span class="text-cyber-violet font-bold">Feeling Lucky Randomizer</span>
						</li>
					</ul>

					<!-- Tech Stack Badges -->
					<div class="flex flex-wrap gap-2 pt-2 border-t border-white/10">
						<span
							class="font-mono text-xs px-3 py-1 bg-[#061226] text-cyber-cyan border border-cyber-cyan/40"
							>Next.js</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#061226] text-cyber-cyan border border-cyber-cyan/40"
							>TypeScript</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#051937] text-cyber-blue border border-cyber-blue/40"
							>TailwindCSS</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#0d2818] text-cyber-green border border-cyber-green/40"
							>Google API</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#1F1600] text-cyber-amber border border-cyber-amber/40"
							>Geolocation API</span
						>
					</div>
				</div>

				<!-- Core Features Breakdown -->
				<div
					class="p-6 rounded-2xl border border-cyber-green/30 bg-cyber-card/85 backdrop-blur-md card-glow flex flex-col gap-4"
				>
					<h3 class="font-synth text-sm text-cyber-green font-bold tracking-wider uppercase">
						ENGINEERED CAPABILITIES
					</h3>
					<ul
						class="flex flex-col gap-2 font-slab text-xs sm:text-sm text-slate-300 list-none p-0 m-0"
					>
						<li class="flex items-start gap-2">
							<span class="text-cyber-green font-mono">▸</span>
							<span
								><strong>Global Keyword Querying:</strong> Real-time search across global web indexes
								with sub-second response times.</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-cyber-green font-mono">▸</span>
							<span
								><strong>Randomized Queries:</strong> One-click "I'm Feeling Lucky" randomizer pulling
								curated search terms.</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-cyber-green font-mono">▸</span>
							<span
								><strong>Extreme IP Geolocation:</strong> Automatically determines and prints user geographical
								origin in footer telemetry.</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-cyber-green font-mono">▸</span>
							<span
								><strong>Google Apps Grid Modal:</strong> Interactive launcher simulating standard Google
								Suite products.</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</div>
