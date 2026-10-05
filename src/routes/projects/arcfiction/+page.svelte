<script lang="ts">
	import ProjectNavbar from '../ProjectNavbar.svelte';
	import { openLightbox } from '#lib/lightbox';
	import {
		arcfiction_main,
		arcfiction_1,
		arcfiction_2,
		arcfiction_3,
		arcfiction_4
	} from '#lib/images';

	const showPreviews = [
		{
			title: 'ANIME & SERIES',
			img: arcfiction_1,
			label: 'CATALOG_01',
			desc: 'Demon Slayer & My Hero Academia'
		},
		{
			title: 'THEATRICAL RELEASES',
			img: arcfiction_2,
			label: 'CATALOG_02',
			desc: 'Barbie & Oppenheimer Feature'
		},
		{
			title: 'SERIES DETAIL VIEW',
			img: arcfiction_3,
			label: 'MODAL_03',
			desc: 'The Owl House Overview & Cast'
		},
		{
			title: 'EXPANDED CATALOG',
			img: arcfiction_4,
			label: 'GRID_04',
			desc: 'Multi-genre TV Show Discovery'
		}
	];

	const galleryImages = [
		{
			src: arcfiction_main,
			title: 'ARC Fiction // Streaming Masthead (The Last of Us)',
			label: 'MAIN_VIEW // HERO_MASTHEAD'
		},
		{
			src: arcfiction_1,
			title: 'ARC Fiction // TV Series Catalog (Demon Slayer & MHA)',
			label: 'CATALOG_01 // SERIES'
		},
		{
			src: arcfiction_2,
			title: 'ARC Fiction // Theatrical Movies (Barbie & Oppenheimer)',
			label: 'CATALOG_02 // MOVIES'
		},
		{
			src: arcfiction_3,
			title: 'ARC Fiction // Detail View Modal (The Owl House)',
			label: 'MODAL_03 // CAST_INFO'
		},
		{
			src: arcfiction_4,
			title: 'ARC Fiction // Multi-genre TV Show Discovery Grid',
			label: 'GRID_04 // CATALOG'
		}
	];
</script>

<svelte:head>
	<title>ARC Fiction // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="ARC Fiction — Full-stack streaming media catalog and custom watchlist platform engineered with Next.js, TypeScript, NextAuth, Prisma, MongoDB, and TailwindCSS."
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
			<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-blue"></div>
			<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-violet"></div>
			<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-green"></div>

			<!-- Status Ribbon -->
			<div
				class="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10"
			>
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-xs font-bold px-3 py-1 bg-black text-cyber-cyan border border-cyber-cyan/40"
					>
						SYS_ID // 01
					</span>
					<span
						class="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 bg-cyber-blue/15 text-cyber-blue border border-cyber-blue/40"
					>
						🎬 MEDIA / STREAMING_CORE
					</span>
				</div>

				<div class="flex items-center gap-3 font-mono text-xs text-slate-400">
					<span class="flex items-center gap-1.5 text-cyber-green">
						<span class="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
						STATUS: ONLINE // DEPLOYED
					</span>
					<span class="hidden sm:inline text-white/20">|</span>
					<span class="hidden sm:inline text-cyber-cyan">SECTOR: STREAMING_ENGINE</span>
				</div>
			</div>

			<!-- Title & Core Summary -->
			<div class="relative z-10 flex flex-col gap-4">
				<div
					class="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase"
				>
					<span class="h-1.5 w-6 bg-cyber-cyan"></span>
					FULL-STACK STREAMING &amp; ENTERTAINMENT DATABASE
				</div>

				<h1
					class="font-poster text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-cyan to-cyber-blue uppercase select-none"
				>
					ARC FICTION
				</h1>

				<p class="max-w-3xl font-slab text-base sm:text-lg text-slate-300 leading-relaxed mt-2">
					Full-stack movie and television discovery hub consuming The Movie Database (TMDB) REST
					API. Features secure authentication via NextAuth, granular media exploration, dynamic
					search indexing, and persistent personal watchlists powered by Prisma ORM and MongoDB.
				</p>

				<!-- Action Buttons Deck -->
				<div class="flex flex-wrap items-center gap-4 mt-4 pt-2">
					<a
						href="https://arcfictionrem.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-cyan text-black hover:bg-white transition-all duration-300 shadow-glowCyan hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>LAUNCH WEB APPLICATION</span>
						<span>↗</span>
					</a>

					<a
						href="https://github.com/Rodrj1/arcfiction-w-auth"
						target="_blank"
						rel="noopener noreferrer"
						class="px-8 py-3.5 rounded-lg font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-cyber-card border-2 border-cyber-blue text-white hover:bg-cyber-blue hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:scale-105 active:scale-95 after:hidden flex items-center gap-2"
					>
						<span>INSPECT REPOSITORY</span>
						<span>↗</span>
					</a>
				</div>
			</div>
		</header>

		<!-- =========================================================================
		     HERO SHOWCASE SCREEN: THE LAST OF US HERO INTERFACE
		     ========================================================================= -->
		<button
			type="button"
			onclick={() => openLightbox(galleryImages, 0)}
			class="rounded-2xl border-2 border-cyber-cyan/40 bg-black overflow-hidden shadow-glowCyan group cursor-pointer text-left w-full transition-transform hover:scale-[1.01]"
			aria-label="Expand Main Streaming Viewport Fullscreen"
		>
			<div
				class="p-3 bg-cyber-surface border-b border-white/10 flex items-center justify-between font-mono text-xs"
			>
				<span class="text-cyber-cyan flex items-center gap-2">
					<span class="w-2 h-2 rounded-full bg-cyber-cyan animate-ping"></span>
					MAIN_VIEW // STREAMING_HERO_MASTHEAD
				</span>
				<span class="text-slate-400">RESOLUTION: FULL_HD (CLICK TO EXPAND)</span>
			</div>
			<div class="relative overflow-hidden aspect-video max-h-[520px]">
				<img
					src={arcfiction_main}
					alt="ARC Fiction Main interface preview with The Last of Us spotlight"
					class="w-full h-full object-cover object-top filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
				></div>
				<div
					class="absolute bottom-4 left-4 sm:left-6 font-mono text-xs text-cyber-cyan bg-black/80 px-3 py-1.5 border border-cyber-cyan/40 flex items-center gap-2"
				>
					<span>✦</span>
					<span>ACTIVE SPOTLIGHT: THE LAST OF US (CLICK TO EXPAND FULLSCREEN)</span>
				</div>
			</div>
		</button>

		<!-- =========================================================================
		     SCREENSHOT MATRIX & ARCHITECTURE SPECIFICATIONS
		     ========================================================================= -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<!-- Left Column (7 cols): 2x2 Feature Slices -->
			<div class="lg:col-span-7 flex flex-col gap-6">
				<div class="flex items-center gap-3">
					<div class="h-0.5 w-6 sm:w-10 bg-cyber-cyan"></div>
					<h2 class="text-sm sm:text-base font-synth tracking-widest text-cyber-cyan uppercase">
						CATALOG_MATRIX // MEDIA MODULES (CLICK TO ZOOM)
					</h2>
					<div class="h-0.5 flex-1 bg-cyber-cyan/20"></div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each showPreviews as item, idx (item.label)}
						<button
							type="button"
							onclick={() => openLightbox(galleryImages, idx + 1)}
							class="rounded-xl border border-white/10 bg-black overflow-hidden group flex flex-col transition-transform hover:-translate-y-1 hover:border-cyber-cyan cursor-pointer text-left w-full"
							aria-label={`Expand ${item.title} Fullscreen`}
						>
							<div
								class="p-2.5 bg-cyber-surface border-b border-white/10 font-mono text-[11px] text-cyber-cyan flex justify-between items-center w-full"
							>
								<span class="font-bold">{item.title}</span>
								<span class="text-slate-400">{item.label}</span>
							</div>
							<div class="relative h-44 overflow-hidden bg-black w-full">
								<img
									src={item.img}
									alt={item.title}
									class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div
								class="p-2.5 bg-cyber-card border-t border-white/5 font-mono text-xs text-slate-400 w-full"
							>
								{item.desc}
							</div>
						</button>
					{/each}
				</div>
			</div>

			<!-- Right Column (5 cols): Architecture Specifications & Features -->
			<div class="lg:col-span-5 flex flex-col gap-6">
				<!-- Specification Panel -->
				<div
					class="p-6 sm:p-8 rounded-2xl border border-white/15 bg-cyber-surface/90 backdrop-blur-md card-glow flex flex-col gap-5"
				>
					<div class="flex items-center gap-2 border-b border-white/10 pb-3">
						<span class="text-cyber-cyan">◈</span>
						<h3 class="font-synth text-sm text-cyber-cyan font-bold tracking-wider uppercase">
							SYSTEM_SPECS // ARCHITECTURE
						</h3>
					</div>

					<p class="font-slab text-sm text-slate-300 leading-relaxed">
						Architected using Next.js App Router and TypeScript. Data persistence and user
						watchlists are managed through Prisma ORM connected to a MongoDB cluster, with session
						handling managed by NextAuth.
					</p>

					<!-- Key Platform Metrics -->
					<ul class="flex flex-col gap-2.5 list-none p-0 m-0 font-mono text-xs text-slate-300">
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">API INTEGRATION:</span>
							<span class="text-cyber-cyan font-bold">TMDB REST API</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">AUTHENTICATION:</span>
							<span class="text-cyber-blue font-bold">NextAuth + Guest Bypass</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">DATABASE &amp; ORM:</span>
							<span class="text-cyber-green font-bold">MongoDB + Prisma</span>
						</li>
						<li
							class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
						>
							<span class="text-slate-400">CUSTOM LISTS:</span>
							<span class="text-cyber-amber font-bold">CRUD Watchlists</span>
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
							class="font-mono text-xs px-3 py-1 bg-[#1A0B2E] text-cyber-violet border border-cyber-violet/40"
							>NextAuth</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#0d2818] text-cyber-green border border-cyber-green/40"
							>Prisma</span
						>
						<span
							class="font-mono text-xs px-3 py-1 bg-[#0d2818] text-cyber-green border border-cyber-green/40"
							>MongoDB</span
						>
					</div>
				</div>

				<!-- Core Features Breakdown -->
				<div
					class="p-6 rounded-2xl border border-cyber-cyan/30 bg-cyber-card/85 backdrop-blur-md card-glow flex flex-col gap-4"
				>
					<h3 class="font-synth text-sm text-cyber-cyan font-bold tracking-wider uppercase">
						ENGINEERED CAPABILITIES
					</h3>
					<ul
						class="flex flex-col gap-2 font-slab text-xs sm:text-sm text-slate-300 list-none p-0 m-0"
					>
						<li class="flex items-start gap-2">
							<span class="text-cyber-cyan font-mono">▸</span>
							<span
								><strong>Authentication &amp; Guest Access:</strong> Secure credentials auth with an instant
								guest testing bypass for frictionless evaluations.</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-cyber-cyan font-mono">▸</span>
							<span
								><strong>Deep Media Modals:</strong> Cast rosters, episode overviews, release metadata,
								and trailers.</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-cyber-cyan font-mono">▸</span>
							<span
								><strong>Dynamic User Watchlists:</strong> Create, modify, and delete personalized movie
								and show collections.</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</div>
