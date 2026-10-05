<script lang="ts">
	import ProjectNavbar from '../ProjectNavbar.svelte';
	import { openLightbox } from '#lib/lightbox';
	import { anylthin_main, anylthin_1, anylthin_2, elisith } from '#lib/images';

	const galleryImages = [
		{
			src: anylthin_main,
			title: 'Forest of An Ylthin // Tactical Card Battle Combat Arena',
			label: 'VIEW_01 // CARD_BATTLE'
		},
		{
			src: anylthin_1,
			title: 'Forest of An Ylthin // Hero Selection & Squad Roster',
			label: 'SLICE_01 // HERO_SELECT'
		},
		{
			src: anylthin_2,
			title: 'Forest of An Ylthin // Campaign Territory Map & Progress',
			label: 'SLICE_02 // TERRITORY_MAP'
		},
		{
			src: elisith,
			title: 'Hero Elisith // Dryeldar Warlock Operative Portrait',
			label: 'HERO_DOSSIER // ELISITH'
		}
	];
</script>

<svelte:head>
	<title>Forest of An Ylthin // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="Forest of An Ylthin — Tactical Dark Fantasy Card Battle Game engineered with React, React Context, TypeScript, and TailwindCSS."
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
			class="relative w-full rounded-2xl border border-cyber-violet/40 bg-cyber-surface/90 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)]"
		>
			<!-- Corner Decors -->
			<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-violet"></div>
			<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan"></div>
			<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-green"></div>
			<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-pink"></div>

			<!-- Status Ribbon -->
			<div
				class="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10"
			>
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-xs font-bold px-3 py-1 bg-black text-cyber-violet border border-cyber-violet/40"
					>
						SYS_ID // 03
					</span>
					<span
						class="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyber-violet/15 text-cyber-violet border border-cyber-violet/40"
					>
						👾 GAME / TACTICAL_CARDS
					</span>
				</div>

				<div class="flex items-center gap-3 font-mono text-xs text-slate-400">
					<span class="flex items-center gap-1.5 text-cyber-green">
						<span class="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
						STATUS: PLAYABLE BUILD
					</span>
					<span class="hidden sm:inline text-white/20">|</span>
					<span class="hidden sm:inline text-cyber-violet">SECTOR: GAMEPLAY_ENGINE</span>
				</div>
			</div>

			<!-- Title & Summary with Hero Avatar -->
			<div
				class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
			>
				<div class="flex flex-col gap-4 flex-1">
					<div
						class="flex items-center gap-2 font-mono text-xs text-cyber-violet tracking-widest uppercase"
					>
						<span class="h-1.5 w-6 bg-cyber-violet"></span>
						DARK FANTASY TURN-BASED CARD ENCOUNTER
					</div>

					<h1
						class="font-poster text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-violet to-cyber-pink uppercase select-none"
					>
						FOREST OF AN YLTHIN
					</h1>

					<p class="max-w-3xl font-slab text-base sm:text-lg text-slate-300 leading-relaxed mt-1">
						The forest of An Ylthin has been usurped by a powerful foreign necromancer. The dryexa
						had called for help to their loathsome ally Nicolai, but are more eager to receive the
						assistance of the dryeldar warlock Elisith. A turn-based tactical card battle game built
						with React, React Context, TypeScript, and SASS.
					</p>

					<!-- Action Buttons Deck -->
					<div class="flex flex-wrap items-center gap-4 mt-3 pt-2">
						<a
							href="https://reactanilthyn.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-violet text-white hover:bg-white hover:text-black transition-all duration-300 shadow-glowViolet hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
						>
							<span>PLAY GAME DEMO</span>
							<span>↗</span>
						</a>

						<a
							href="https://github.com/Rodrj1/minigame"
							target="_blank"
							rel="noopener noreferrer"
							class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-card border-2 border-cyber-cyan text-white hover:bg-cyber-cyan hover:text-black transition-all duration-300 shadow-glowCyan hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
						>
							<span>INSPECT REPOSITORY</span>
							<span>↗</span>
						</a>
					</div>
				</div>

				<!-- Elisith Portrait Dossier -->
				<button
					type="button"
					onclick={() => openLightbox(galleryImages, 3)}
					class="flex flex-col items-center gap-3 p-4 rounded-2xl border border-cyber-violet/30 bg-black/60 backdrop-blur-md shadow-glowViolet shrink-0 self-center md:self-auto hover:border-cyber-violet hover:scale-105 transition-all cursor-pointer text-center"
					aria-label="Inspect Elisith Portrait Fullscreen"
				>
					<div
						class="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-cyber-violet p-1 bg-black group"
					>
						<img
							src={elisith}
							alt="Hero Elisith, Dryeldar Warlock"
							class="w-full h-full object-cover rounded-full transition-transform group-hover:scale-110"
						/>
					</div>
					<div class="flex flex-col items-center text-center">
						<span class="font-mono text-[10px] text-cyber-violet uppercase tracking-widest"
							>DRYELDAR HERO (CLICK TO EXPAND)</span
						>
						<span class="font-synth text-sm font-bold text-white">ELISITH</span>
						<span class="font-mono text-xs text-slate-400">Warlock Operative</span>
					</div>
				</button>
			</div>
		</header>

		<!-- =========================================================================
		     GAMEPLAY SCREEN MATRIX & GALLERY
		     ========================================================================= -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<!-- Left Column (7 cols): Sliced Gameplay Views -->
			<div class="lg:col-span-7 flex flex-col gap-6">
				<!-- Battle Scene View -->
				<button
					type="button"
					onclick={() => openLightbox(galleryImages, 0)}
					class="rounded-2xl border-2 border-cyber-violet/40 bg-black overflow-hidden shadow-glowViolet group cursor-pointer text-left w-full transition-transform hover:scale-[1.01]"
					aria-label="Expand Tactical Card Combat View Fullscreen"
				>
					<div
						class="p-3 bg-cyber-surface border-b border-white/10 flex items-center justify-between font-mono text-xs"
					>
						<span class="text-cyber-violet">VIEW_01 // ACTIVE_CARD_BATTLE</span>
						<span class="text-slate-400">STATUS: COMBAT (CLICK TO ZOOM)</span>
					</div>
					<div class="relative overflow-hidden aspect-video">
						<img
							src={anylthin_main}
							alt="Forest of An Ylthin combat scene"
							class="w-full h-full object-cover filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
						></div>
						<div
							class="absolute bottom-3 left-4 font-mono text-xs text-cyber-violet bg-black/80 px-2.5 py-1 border border-cyber-violet/40"
						>
							✦ TACTICAL CARD COMBAT INTERFACE (CLICK TO EXPAND)
						</div>
					</div>
				</button>

				<!-- Hero Selection & Map Screens -->
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<button
						type="button"
						onclick={() => openLightbox(galleryImages, 1)}
						class="rounded-xl border border-white/10 bg-black overflow-hidden group hover:border-cyber-cyan cursor-pointer text-left transition-transform hover:-translate-y-1"
						aria-label="Expand Hero Selection Preview Fullscreen"
					>
						<div
							class="p-2 bg-cyber-surface border-b border-white/10 font-mono text-[11px] text-cyber-cyan flex justify-between"
						>
							<span>HERO SELECTION</span>
							<span>P_01 (ZOOM)</span>
						</div>
						<div class="relative h-44 overflow-hidden">
							<img
								src={anylthin_1}
								alt="Hero selection preview"
								class="w-full h-full object-cover object-bottom transition-transform group-hover:scale-105"
							/>
						</div>
					</button>

					<button
						type="button"
						onclick={() => openLightbox(galleryImages, 2)}
						class="rounded-xl border border-white/10 bg-black overflow-hidden group hover:border-cyber-green cursor-pointer text-left transition-transform hover:-translate-y-1"
						aria-label="Expand Territory Map Preview Fullscreen"
					>
						<div
							class="p-2 bg-cyber-surface border-b border-white/10 font-mono text-[11px] text-cyber-green flex justify-between"
						>
							<span>TERRITORY MAP</span>
							<span>P_02 (ZOOM)</span>
						</div>
						<div class="relative h-44 overflow-hidden">
							<img
								src={anylthin_2}
								alt="Territory map preview"
								class="w-full h-full object-cover object-right transition-transform group-hover:scale-105"
							/>
						</div>
					</button>
				</div>
			</div>

			<!-- Right Column (5 cols): Architecture Specifications & Mechanics -->
			<div class="lg:col-span-5 flex flex-col gap-6">
				<!-- Specification Panel -->
				<div
					class="p-6 sm:p-8 rounded-2xl border border-white/15 bg-cyber-surface/90 backdrop-blur-md card-glow flex flex-col gap-5"
				>
					<div class="flex items-center gap-2 border-b border-white/10 pb-3">
						<span class="text-cyber-violet">◈</span>
						<h3 class="font-synth text-sm text-cyber-violet font-bold tracking-wider uppercase">
							TACTICAL_SPECS // ARCHITECTURE
						</h3>
					</div>

					<p class="font-slab text-sm text-slate-300 leading-relaxed">
						Engineered in React using Context API to provide unified state tracking for card deck
						queues, unit cooldowns, and tactical battlefield tiles.
					</p>

					<!-- Key Gameplay Metrics -->
					<ul class="flex flex-col gap-2.5 list-none p-0 m-0 font-mono text-xs text-slate-300">
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">PLAYABLE RACES:</span>
							<span class="text-cyber-violet font-bold">Dryeldar &amp; Undead</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">COMBAT TYPE:</span>
							<span class="text-cyber-cyan font-bold">Turn-Based Multi-Unit</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">LOCATIONS TO CLEAR:</span>
							<span class="text-cyber-green font-bold">4 Campaign Zones</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">TARGET PLATFORM:</span>
							<span class="text-cyber-amber font-bold">Desktop Browser</span>
						</li>
					</ul>

					<!-- Tech Stack Badges -->
					<div class="flex flex-wrap gap-2 pt-2 border-t border-white/10">
						<span
							class="font-mono text-xs px-3 py-1 bg-[#061226] text-cyber-cyan border border-cyber-cyan/40"
							>React</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#061226] text-cyber-cyan border border-cyber-cyan/40"
							>TypeScript</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#1A0B2E] text-cyber-violet border border-cyber-violet/40"
							>React Context</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#1A0A17] text-cyber-pink border border-cyber-pink/40"
							>SASS</span
						>
					</div>
				</div>

				<!-- Campaign Objective -->
				<div
					class="p-6 rounded-2xl border border-cyber-violet/30 bg-cyber-card/85 backdrop-blur-md card-glow flex flex-col gap-4"
				>
					<h3 class="font-synth text-sm text-cyber-violet font-bold tracking-wider uppercase">
						CAMPAIGN OBJECTIVE
					</h3>
					<p class="font-slab text-xs sm:text-sm text-slate-300 leading-relaxed">
						Command dryeldar warriors and summon tactical abilities across multiple combat
						encounters. Advance through four contested territory sectors to liberate the enchanted
						forest from necromantic usurpation.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
