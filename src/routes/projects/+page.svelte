<script lang="ts">
	import { projectsPreview, type ProjectItem } from '#lib/projectData/projectsPreview';
	import ProjectPreview from '../components/ProjectPreview.svelte';
	import { newdua_1, arcfiction_main, cityhithair_2 } from '#lib/images';

	let activeFilter = $state('');
	let searchQuery = $state('');
	let sortBy = $state('default');
	let viewMode = $state<'spread' | 'grid'>('spread');

	let displayProjects = $state<ProjectItem[]>(projectsPreview);

	const filterBy = (type: string) => {
		activeFilter = type;
		applyFilters();
	};

	const handleSearchInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		searchQuery = target.value;
		applyFilters();
	};

	const applyFilters = () => {
		let list = projectsPreview.filter((p) => {
			const matchesType =
				activeFilter === '' || p.type.toLowerCase() === activeFilter.toLowerCase();
			const query = searchQuery.trim().toLowerCase();
			const matchesSearch =
				query === '' ||
				p.name.toLowerCase().includes(query) ||
				(p.description && p.description.toLowerCase().includes(query)) ||
				(p.tech && p.tech.some((t) => t.toLowerCase().includes(query))) ||
				(p.sector && p.sector.toLowerCase().includes(query));

			return matchesType && matchesSearch;
		});

		if (sortBy === 'name') {
			list = [...list].sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === 'year') {
			list = [...list].sort((a, b) => (b.year || '0').localeCompare(a.year || '0'));
		}

		displayProjects = list;
	};

	const resetFilters = () => {
		activeFilter = '';
		searchQuery = '';
		sortBy = 'default';
		applyFilters();
	};

	let totalCount = $derived(projectsPreview.length);
	let websiteCount = $derived(projectsPreview.filter((p) => p.type === 'Website').length);
	let gameCount = $derived(projectsPreview.filter((p) => p.type === 'Game').length);
	let designCount = $derived(projectsPreview.filter((p) => p.type === 'Design').length);
</script>

<svelte:head>
	<title>CYBER//ARCHIVE // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="Full-bleed Cyberpunk Tech Magazine & Systems Gallery by Rodrigo Agustin Cisterna."
	/>
</svelte:head>

<!-- Full-bleed container from edge to edge with Tech-Side Carbon Void -->
<section
	class="w-full min-h-screen pt-14 sm:pt-16 pb-28 md:pb-16 px-0 overflow-x-hidden projectAnim bg-cyber-void text-slate-100"
>
	<!-- =========================================================================
	     1. TOP FULL-BLEED CYBER TELEMETRY TICKER (Tech Side)
	     ========================================================================= -->
	<div
		class="w-full bg-cyber-dark text-cyber-cyan border-b-2 border-cyber-border py-2.5 px-4 sm:px-6 flex items-center justify-between overflow-x-auto scrollbar-none font-mono text-xs tracking-wider uppercase"
	>
		<div class="flex items-center gap-4 whitespace-nowrap">
			<span class="bg-cyber-cyan text-black font-black px-2 py-0.5 tracking-widest shadow-glowCyan">
				CORE // ARCHIVE 2026
			</span>
			<span class="flex items-center gap-1.5 text-white">
				<span class="h-2 w-2 rounded-full bg-cyber-green animate-ping"></span>
				SYS_STATUS: 100% NOMINAL
			</span>
			<span class="text-white/30">|</span>
			<span class="text-cyber-violet">OPERATOR: RODRIGO AGUSTIN CISTERNA</span>
			<span class="text-white/30">|</span>
			<span class="text-cyber-green">RENDER_ENGINE: WEBGL_HYBRID</span>
			<span class="text-white/30">|</span>
			<span class="text-cyber-amber">GRID: FULL_BLEED_EDGE</span>
		</div>

		<div class="hidden lg:flex items-center gap-4 whitespace-nowrap text-xs text-slate-400">
			<span>MEM_BUFFER: <strong class="text-cyber-cyan">512MB / OK</strong></span>
			<span
				class="bg-cyber-card text-cyber-cyan px-2 py-0.5 border border-cyber-border font-bold tracking-widest"
			>
				||| | |||| | ||| | ||
			</span>
		</div>
	</div>

	<!-- =========================================================================
	     2. FULL-BLEED 4-QUADRANT TECH COVER GRID (Zero Gap, Edge to Edge)
	     ========================================================================= -->
	<div class="w-full border-b-2 border-cyber-border bg-cyber-void">
		<div class="w-full grid grid-cols-1 md:grid-cols-2">
			<!-- Quadrant 1 (Top-Left): Huge Tech Masthead Block -->
			<div
				class="relative p-6 sm:p-10 lg:p-14 bg-cyber-surface border-b-2 md:border-b-2 md:border-r-2 border-cyber-border/80 flex flex-col justify-between overflow-hidden group"
			>
				<!-- Background Cyber Grid Mesh -->
				<div
					class="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF08_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"
				></div>

				<div
					class="relative z-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest"
				>
					<div class="flex items-center gap-2">
						<span class="bg-cyber-violet text-white px-2.5 py-1 font-bold shadow-glowViolet">
							SECTION // 01
						</span>
						<span class="text-cyber-cyan">TECH_INDEX</span>
					</div>
					<span class="text-slate-400">LAT: 34.0522° N</span>
				</div>

				<div class="relative z-10 my-8 sm:my-12">
					<div class="flex items-center gap-2 mb-2">
						<span class="h-2 w-8 bg-cyber-cyan"></span>
						<span class="font-mono text-xs uppercase tracking-widest text-cyber-cyan"
							>PRODUCTION ARCHIVE</span
						>
					</div>
					<h1
						class="font-poster text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-[0.78] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-cyan to-cyber-violet uppercase select-none transition-transform duration-500 group-hover:scale-[1.01] block"
					>
						SYSTEMS
					</h1>
					<div
						class="font-mono text-xs sm:text-sm text-cyber-green tracking-widest uppercase mt-4 bg-[#04140D] inline-flex items-center gap-2 px-3 py-1.5 border border-cyber-green/40 shadow-glowGreen"
					>
						<span class="h-2 w-2 rounded-full bg-cyber-green animate-pulse"></span>
						FULL-STACK ARCHITECTURE • RETRO-TECH • IMMERSIVE WEB
					</div>
				</div>

				<div
					class="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm tracking-wider text-slate-300 pt-4 border-t border-cyber-border/60"
				>
					<div class="flex items-center gap-3">
						<span class="h-3 w-3 bg-cyber-cyan shadow-glowCyan"></span>
						<span
							><strong class="text-cyber-cyan text-base">{totalCount}</strong> DEPLOYED MODULES ACTIVE</span
						>
					</div>
					<span class="font-mono text-cyber-violet tracking-widest">BUILD_ID: 0x9AF4</span>
				</div>
			</div>

			<!-- Quadrant 2 (Top-Right): Sliced Multi-Layer Tech Artwork Collage -->
			<div
				class="relative min-h-[350px] sm:min-h-[440px] md:min-h-[520px] bg-cyber-dark border-b-2 border-cyber-border/80 overflow-hidden flex flex-col group/slice"
			>
				<!-- Slice A: Dua Lipa Concept Image -->
				<div class="flex-1 overflow-hidden border-b border-cyber-border/80 relative">
					<img
						src={newdua_1}
						alt="Cyber Tech Slice 1 - Dua Lipa Synthwave"
						class="w-full h-full object-cover object-top filter brightness-90 contrast-125 saturate-125 transition-transform duration-700 group-hover/slice:scale-105"
					/>
					<div
						class="absolute inset-0 bg-cyber-cyan/15 mix-blend-color-dodge pointer-events-none"
					></div>
					<div
						class="absolute bottom-2 left-3 font-mono text-[10px] text-cyber-cyan bg-black/80 px-2 py-0.5 border border-cyber-cyan/40"
					>
						LAYER_01 // SYNTH_POP_UI
					</div>
				</div>

				<!-- Slice B: ARCFiction Streaming Hub Image -->
				<div class="flex-1 overflow-hidden border-b border-cyber-border/80 relative">
					<img
						src={arcfiction_main}
						alt="Cyber Tech Slice 2 - ARCFiction Database"
						class="w-full h-full object-cover object-center filter brightness-90 contrast-125 saturate-150 transition-transform duration-700 group-hover/slice:-translate-x-4"
					/>
					<div
						class="absolute inset-0 bg-cyber-violet/20 mix-blend-screen pointer-events-none"
					></div>
					<div
						class="absolute bottom-2 left-3 font-mono text-[10px] text-cyber-violet bg-black/80 px-2 py-0.5 border border-cyber-violet/40"
					>
						LAYER_02 // STREAMING_ENGINE
					</div>
				</div>

				<!-- Slice C: City of Hithair Game Scene Image -->
				<div class="flex-1 overflow-hidden relative">
					<img
						src={cityhithair_2}
						alt="Cyber Tech Slice 3 - City of Hithair Arena"
						class="w-full h-full object-cover object-bottom filter brightness-90 contrast-110 saturate-125 transition-transform duration-700 group-hover/slice:translate-x-4"
					/>
					<div
						class="absolute inset-0 bg-cyber-green/15 mix-blend-color-dodge pointer-events-none"
					></div>
					<div
						class="absolute bottom-2 left-3 font-mono text-[10px] text-cyber-green bg-black/80 px-2 py-0.5 border border-cyber-green/40"
					>
						LAYER_03 // ACTION_SIM_ENGINE
					</div>
				</div>

				<!-- Floating HUD Tech Ribbon -->
				<div
					class="absolute top-5 right-5 bg-cyber-dark/90 text-cyber-cyan font-mono text-xs px-4 py-2 border-2 border-cyber-cyan shadow-glowCyan backdrop-blur-md uppercase tracking-wider flex items-center gap-2"
				>
					<span class="h-2 w-2 bg-cyber-cyan animate-ping"></span>
					<span>LIVE HUD MATRIX ✦</span>
				</div>
			</div>

			<!-- Quadrant 3 (Bottom-Left): Circuit Telemetry & Tech Matrix -->
			<div
				class="relative p-6 sm:p-10 lg:p-14 bg-cyber-card border-b-2 md:border-b-0 md:border-r-2 border-cyber-border/80 overflow-hidden flex flex-col justify-between min-h-[260px]"
			>
				<!-- Circuit Pattern Background -->
				<div
					class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px]"
				></div>

				<div class="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
					<div class="flex flex-col gap-2">
						<span
							class="font-mono text-xs text-cyber-cyan uppercase tracking-widest flex items-center gap-1.5"
						>
							<span class="h-2 w-2 bg-cyber-green"></span>
							CORE ARCHITECT PROFILE
						</span>
						<span class="font-poster text-4xl sm:text-5xl text-white tracking-wide uppercase">
							SYSTEMS DEVELOPER
						</span>
						<span class="font-mono text-xs text-slate-400">
							SPECIALIZED IN FULL-STACK, PERFORMANCE & GRAPHICS
						</span>
					</div>

					<div
						class="w-16 h-16 rounded border-2 border-cyber-green bg-[#04140D] flex flex-col items-center justify-center font-mono text-xs text-cyber-green shadow-glowGreen shrink-0"
					>
						<span class="font-bold text-base">100%</span>
						<span class="text-[9px] uppercase">SCORE</span>
					</div>
				</div>

				<div class="relative z-10 flex flex-wrap gap-2 mt-6">
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#061226] text-cyber-cyan border border-cyber-cyan/40 shadow-[0_0_8px_rgba(0,240,255,0.2)]"
					>
						TypeScript
					</span>
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#1A0B2E] text-cyber-violet border border-cyber-violet/40 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
					>
						SvelteKit
					</span>
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#061826] text-cyber-sky border border-cyber-sky/40 shadow-[0_0_8px_rgba(56,189,248,0.2)]"
					>
						React
					</span>
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#041710] text-cyber-green border border-cyber-green/40 shadow-[0_0_8px_rgba(0,255,102,0.2)]"
					>
						TailwindCSS
					</span>
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#1C1405] text-cyber-amber border border-cyber-amber/40 shadow-[0_0_8px_rgba(255,184,0,0.2)]"
					>
						.NET (C#)
					</span>
					<span
						class="font-mono text-xs uppercase px-3 py-1 bg-[#1A0A17] text-cyber-pink border border-cyber-pink/40 shadow-[0_0_8px_rgba(255,0,122,0.2)]"
					>
						REST
					</span>
				</div>
			</div>

			<!-- Quadrant 4 (Bottom-Right): High-Energy Tech CTA "EXECUTE" Block -->
			<div
				class="relative p-6 sm:p-10 lg:p-14 bg-cyber-void flex flex-col justify-between overflow-hidden group"
			>
				<div
					class="relative z-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-slate-400"
				>
					<span class="text-cyber-cyan">MODULE // 04</span>
					<span
						class="bg-cyber-cyan/10 text-cyber-cyan px-2.5 py-1 border border-cyber-cyan/40 shadow-glowCyan"
					>
						READY_TO_LAUNCH
					</span>
				</div>

				<div class="relative z-10 my-8 sm:my-12">
					<h2
						class="font-poster text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-[0.78] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-sky to-white uppercase select-none transition-transform duration-500 group-hover:scale-[1.01] block"
					>
						EXECUTE
					</h2>
				</div>

				<div
					class="relative z-10 flex items-center justify-between pt-4 border-t border-cyber-border/60"
				>
					<span class="font-mono text-xs text-slate-400 uppercase tracking-wider">
						INSPECT FULL SCHEMATICS & DEPLOYMENTS BELOW
					</span>
					<span class="font-mono text-2xl text-cyber-cyan animate-bounce"> ↓ </span>
				</div>
			</div>
		</div>
	</div>

	<!-- =========================================================================
	     3. FULL-BLEED TECH FILTER & CONSOLE HUD BAR
	     ========================================================================= -->
	<div
		class="w-full bg-cyber-surface border-b-2 border-cyber-border p-4 sm:p-6 lg:p-8 backdrop-blur-md"
	>
		<div class="w-full flex flex-col xl:flex-row xl:items-center justify-between gap-6">
			<!-- Filter Category Pills (Tech-Side) -->
			<div class="flex flex-wrap items-center gap-2 sm:gap-3">
				<span
					class="font-mono text-xs text-cyber-cyan mr-2 uppercase tracking-widest flex items-center gap-1.5"
				>
					<span class="h-2 w-2 bg-cyber-cyan"></span>
					FILTERS:
				</span>

				<button
					onclick={() => filterBy('')}
					class={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
						activeFilter === ''
							? 'bg-cyber-cyan text-black border-cyber-cyan shadow-glowCyan -translate-y-0.5'
							: 'bg-cyber-card text-slate-300 border-cyber-border hover:border-cyber-cyan hover:text-white'
					}`}
				>
					⚡ ALL SYSTEMS [{totalCount}]
				</button>

				<button
					onclick={() => filterBy('Website')}
					class={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
						activeFilter === 'Website'
							? 'bg-cyber-violet text-white border-cyber-violet shadow-glowViolet -translate-y-0.5'
							: 'bg-cyber-card text-slate-300 border-cyber-border hover:border-cyber-violet hover:text-white'
					}`}
				>
					🌐 WEBSITES [{websiteCount}]
				</button>

				<button
					onclick={() => filterBy('Game')}
					class={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
						activeFilter === 'Game'
							? 'bg-cyber-green text-black border-cyber-green shadow-glowGreen -translate-y-0.5'
							: 'bg-cyber-card text-slate-300 border-cyber-border hover:border-cyber-green hover:text-white'
					}`}
				>
					👾 ENGINES & GAMES [{gameCount}]
				</button>

				<button
					onclick={() => filterBy('Design')}
					class={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
						activeFilter === 'Design'
							? 'bg-cyber-pink text-white border-cyber-pink shadow-glowPink -translate-y-0.5'
							: 'bg-cyber-card text-slate-300 border-cyber-border hover:border-cyber-pink hover:text-white'
					}`}
				>
					🎨 DESIGN SYSTEMS [{designCount}]
				</button>
			</div>

			<!-- Search & View Mode Switcher -->
			<div class="flex flex-wrap items-center gap-3">
				<!-- Terminal Query Input -->
				<div class="relative flex-1 sm:w-80">
					<div
						class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none font-mono text-xs text-cyber-cyan"
					>
						&gt;_
					</div>
					<input
						type="text"
						value={searchQuery}
						oninput={handleSearchInput}
						placeholder="QUERY_KEYWORDS..."
						class="w-full pl-8 pr-4 py-2 border border-cyber-border bg-cyber-card text-cyber-cyan placeholder-slate-500 font-mono text-xs sm:text-sm uppercase tracking-wider focus:outline-none focus:border-cyber-cyan focus:shadow-glowCyan transition-all"
					/>
				</div>

				<!-- View Mode Switcher -->
				<div class="flex items-center border border-cyber-border bg-cyber-card">
					<button
						onclick={() => (viewMode = 'spread')}
						class={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
							viewMode === 'spread'
								? 'bg-cyber-cyan text-black font-bold shadow-glowCyan'
								: 'text-slate-300 hover:text-white hover:bg-white/5'
						}`}
					>
						// SPREAD VIEW
					</button>
					<button
						onclick={() => (viewMode = 'grid')}
						class={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors border-l border-cyber-border ${
							viewMode === 'grid'
								? 'bg-cyber-cyan text-black font-bold shadow-glowCyan'
								: 'text-slate-300 hover:text-white hover:bg-white/5'
						}`}
					>
						// MATRIX GRID
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- =========================================================================
	     4. FULL-BLEED TECH PROJECTS GALLERY
	     ========================================================================= -->
	<div class="w-full">
		{#if displayProjects.length > 0}
			{#if viewMode === 'spread'}
				<!-- FULL-WIDTH MAGAZINE DOUBLE PAGE SPREADS -->
				<div class="w-full flex flex-col">
					{#each displayProjects as projectPreview, index (projectPreview.name)}
						<ProjectPreview {projectPreview} {index} viewMode="spread" />
					{/each}
				</div>
			{:else}
				<!-- FULL-WIDTH TABLOID WALL GRID (Flush High-Tech Poster Grid) -->
				<div
					class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l-2 border-cyber-border"
				>
					{#each displayProjects as projectPreview, index (projectPreview.name)}
						<ProjectPreview {projectPreview} {index} viewMode="grid" />
					{/each}
				</div>
			{/if}
		{:else}
			<!-- Full-Bleed Empty State -->
			<div
				class="w-full border-b-2 border-cyber-border bg-cyber-card p-16 text-center flex flex-col items-center gap-6"
			>
				<div class="font-mono text-4xl text-cyber-pink">⚠️ [0 QUERY MATCHES FOUND]</div>
				<p class="font-mono text-sm text-slate-400 max-w-md">
					No telemetry or modules match query parameters "{searchQuery}".
				</p>
				<button onclick={resetFilters} class="cyber-btn-cyan"> RESET TELEMETRY FILTER </button>
			</div>
		{/if}
	</div>
</section>
