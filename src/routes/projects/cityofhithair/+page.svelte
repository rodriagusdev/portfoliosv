<script lang="ts">
	import ProjectNavbar from '../ProjectNavbar.svelte';
	import { openLightbox } from '#lib/lightbox';
	import {
		cityhithair_1,
		cityhithair_2,
		cityhithair_p1,
		cityhithair_p2,
		cityhithair_p3,
		cityhithair_p4,
		cityhithair_p5
	} from '#lib/images';

	const characters = [
		{
			name: 'Nicolai',
			role: 'The Wanderer',
			img: cityhithair_p1,
			badge: 'PROTAGONIST',
			border: 'border-cyber-cyan'
		},
		{
			name: 'Dark Mage',
			role: 'Playable Hero',
			img: cityhithair_p2,
			badge: 'CASTER',
			border: 'border-cyber-violet'
		},
		{
			name: 'Knight',
			role: 'Playable Hero',
			img: cityhithair_p3,
			badge: 'MELEE',
			border: 'border-cyber-green'
		},
		{
			name: 'Knight Guard',
			role: 'NPC Unit',
			img: cityhithair_p4,
			badge: 'DEFENDER',
			border: 'border-white/20'
		},
		{
			name: 'Marion',
			role: 'NPC Unit',
			img: cityhithair_p5,
			badge: 'SCOUT',
			border: 'border-white/20'
		}
	];
</script>

<svelte:head>
	<title>City of Hithair // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="City of Hithair — 2D Gothic Action Simulation & Turn-Based Combat Game engineered with React, TypeScript, Zustand, and SASS."
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
			class="relative w-full rounded-2xl border border-cyber-cyan/40 bg-cyber-surface/90 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.15)]"
		>
			<!-- Corner Decors -->
			<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan"></div>
			<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-green"></div>
			<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-violet"></div>
			<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-amber"></div>

			<!-- Status Ribbon -->
			<div
				class="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10"
			>
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-xs font-bold px-3 py-1 bg-black text-cyber-cyan border border-cyber-cyan/40"
					>
						SYS_ID // 04
					</span>
					<span
						class="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyber-green/10 text-cyber-green border border-cyber-green/40"
					>
						👾 GAME / COMBAT_SIM
					</span>
				</div>

				<div class="flex items-center gap-3 font-mono text-xs text-slate-400">
					<span class="flex items-center gap-1.5 text-cyber-green">
						<span class="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
						STATUS: PLAYABLE BUILD
					</span>
					<span class="hidden sm:inline text-white/20">|</span>
					<span class="hidden sm:inline text-cyber-cyan">SECTOR: COMBAT_ARENA</span>
				</div>
			</div>

			<!-- Title & Core Summary -->
			<div class="relative z-10 flex flex-col gap-4">
				<div
					class="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase"
				>
					<span class="h-1.5 w-6 bg-cyber-cyan"></span>
					TACTICAL TURN-BASED DUNGEON CRAWLER
				</div>

				<h1
					class="font-poster text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-cyan to-cyber-green uppercase select-none"
				>
					CITY OF HITHAIR
				</h1>

				<p class="max-w-3xl font-slab text-base sm:text-lg text-slate-300 leading-relaxed mt-2">
					Hithair has turned to turmoil when a wanderer broke through the cemetery and down the
					ancient mausoleum. After his subterranean incursion, strange screeches and dark powers
					echoed from beneath the earth. A 2D turn-based dungeon combat game built with React,
					TypeScript, and state management via Zustand.
				</p>

				<!-- Action Buttons Deck -->
				<div class="flex flex-wrap items-center gap-4 mt-4 pt-2">
					<a
						href="https://cityofhithair.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-cyan text-black hover:bg-white transition-all duration-300 shadow-glowCyan hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>LAUNCH PLAYABLE GAME</span>
						<span>↗</span>
					</a>

					<a
						href="https://github.com/Rodrj1/turnbased-minigame"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-card border-2 border-cyber-violet text-white hover:bg-cyber-violet transition-all duration-300 shadow-glowViolet hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>INSPECT REPOSITORY</span>
						<span>↗</span>
					</a>
				</div>
			</div>
		</header>

		<!-- =========================================================================
		     CHARACTER DOSSIER & CAST MATRIX
		     ========================================================================= -->
		<section class="w-full flex flex-col gap-6" aria-label="Character Roster">
			<div class="flex items-center gap-3">
				<div class="h-0.5 w-6 sm:w-10 bg-cyber-cyan"></div>
				<h2 class="text-sm sm:text-base font-synth tracking-widest text-cyber-cyan uppercase">
					TACTICAL_ROSTER // HEROES &amp; UNITS (CLICK TO EXPAND)
				</h2>
				<div class="h-0.5 flex-1 bg-cyber-cyan/20"></div>
			</div>

			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
				{#each characters as char, idx (char.name)}
					<button
						type="button"
						onclick={() =>
							openLightbox(
								characters.map((c) => ({
									src: c.img,
									title: `${c.name} — ${c.role}`,
									label: `UNIT // ${c.badge}`
								})),
								idx
							)}
						class="p-4 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 hover:border-cyber-cyan cursor-pointer text-left w-full"
						aria-label={`Inspect ${char.name} portrait`}
					>
						<div
							class={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 ${char.border} p-1 bg-black shadow-lg relative group`}
						>
							<img
								src={char.img}
								alt={char.name}
								class="w-full h-full object-cover rounded-full transition-transform group-hover:scale-110"
							/>
						</div>
						<div class="flex flex-col gap-1">
							<span class="font-mono text-[10px] text-cyber-cyan uppercase tracking-widest"
								>{char.badge}</span
							>
							<span class="font-synth text-sm font-bold text-white">{char.name}</span>
							<span class="font-mono text-xs text-slate-400">{char.role}</span>
						</div>
					</button>
				{/each}
			</div>
		</section>

		<!-- =========================================================================
		     GAMEPLAY SCREENS & LEVEL MATRIX
		     ========================================================================= -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<!-- Left Screen (7 cols): Main Cemetery Atmosphere Preview -->
			<div class="lg:col-span-7 flex flex-col gap-6">
				<button
					type="button"
					onclick={() =>
						openLightbox(
							[
								{
									src: cityhithair_1,
									title: 'City of Hithair // Gothic Cemetery Arena (Level 01)',
									label: 'VIEW_01 // CEMETERY_SURFACE'
								},
								{
									src: cityhithair_2,
									title: 'City of Hithair // 1v1 Turn-Based Combat Battle Scene',
									label: 'VIEW_02 // COMBAT_ENCOUNTER'
								}
							],
							0
						)}
					class="rounded-2xl border-2 border-cyber-cyan/40 bg-black overflow-hidden shadow-glowCyan group cursor-pointer text-left w-full transition-transform hover:scale-[1.01]"
					aria-label="Expand View 01 Cemetery Entrance Fullscreen"
				>
					<div
						class="p-3 bg-cyber-surface border-b border-white/10 flex items-center justify-between font-mono text-xs"
					>
						<span class="text-cyber-cyan">VIEW_01 // CEMETERY_ENTRANCE</span>
						<span class="text-slate-400">LEVEL: 01 - SURFACE (CLICK TO ZOOM)</span>
					</div>
					<div class="relative overflow-hidden aspect-video">
						<img
							src={cityhithair_1}
							alt="City of Hithair Cemetery level with gothic atmosphere"
							class="w-full h-full object-cover filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
						></div>
						<div
							class="absolute bottom-3 left-4 font-mono text-xs text-cyber-green bg-black/80 px-2.5 py-1 border border-cyber-green/40"
						>
							✦ GOTHIC CEMETERY ARENA (CLICK TO EXPAND)
						</div>
					</div>
				</button>

				<button
					type="button"
					onclick={() =>
						openLightbox(
							[
								{
									src: cityhithair_1,
									title: 'City of Hithair // Gothic Cemetery Arena (Level 01)',
									label: 'VIEW_01 // CEMETERY_SURFACE'
								},
								{
									src: cityhithair_2,
									title: 'City of Hithair // 1v1 Turn-Based Combat Battle Scene',
									label: 'VIEW_02 // COMBAT_ENCOUNTER'
								}
							],
							1
						)}
					class="rounded-2xl border-2 border-cyber-violet/40 bg-black overflow-hidden shadow-glowViolet group cursor-pointer text-left w-full transition-transform hover:scale-[1.01]"
					aria-label="Expand View 02 Battle Arena Fullscreen"
				>
					<div
						class="p-3 bg-cyber-surface border-b border-white/10 flex items-center justify-between font-mono text-xs"
					>
						<span class="text-cyber-violet">VIEW_02 // BATTLE_ARENA</span>
						<span class="text-slate-400">LEVEL: COMBAT_ENCOUNTER (CLICK TO ZOOM)</span>
					</div>
					<div class="relative overflow-hidden aspect-video">
						<img
							src={cityhithair_2}
							alt="City of Hithair Battle scene with skeletons"
							class="w-full h-full object-cover filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
						></div>
						<div
							class="absolute bottom-3 left-4 font-mono text-xs text-cyber-violet bg-black/80 px-2.5 py-1 border border-cyber-violet/40"
						>
							✦ 1v1 TURN-BASED COMBAT ENGINE (CLICK TO EXPAND)
						</div>
					</div>
				</button>
			</div>

			<!-- Right Column (5 cols): Architecture Specifications & Gameplay Mechanics -->
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
						Engineered using React and TypeScript for modular component rendering, paired with
						Zustand for state orchestration across turns, unit action queues, and health tracking.
					</p>

					<!-- Key Gameplay Metrics -->
					<ul class="flex flex-col gap-2.5 list-none p-0 m-0 font-mono text-xs text-slate-300">
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">COMBAT FORMAT:</span>
							<span class="text-cyber-cyan font-bold">1v1 Turn-Based</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">PLAYABLE HEROES:</span>
							<span class="text-cyber-violet font-bold">Knight &amp; Dark Wizard</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">DUNGEON LENGTH:</span>
							<span class="text-cyber-green font-bold">5 Progressive Levels</span>
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
							>Zustand</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#1A0A17] text-cyber-pink border border-cyber-pink/40"
							>SASS</span
						>
					</div>
				</div>

				<!-- Overview Deep Dive -->
				<div
					class="p-6 rounded-2xl border border-cyber-cyan/30 bg-cyber-card/85 backdrop-blur-md card-glow flex flex-col gap-4"
				>
					<h3 class="font-synth text-sm text-cyber-cyan font-bold tracking-wider uppercase">
						DUNGEON OBJECTIVE
					</h3>
					<p class="font-slab text-xs sm:text-sm text-slate-300 leading-relaxed">
						Players advance room by room into the subterranean depths of Hithair, strategically
						picking spells, guarding against lethal counter-attacks, and defeating skeletal minions
						to uncover the secret below the mausoleum.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
