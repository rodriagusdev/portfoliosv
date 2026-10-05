<script lang="ts">
	let copied = $state(false);
	let copyTimeout: ReturnType<typeof setTimeout>;

	const copyEmail = () => {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText('rodriccrz@gmail.com');
			copied = true;
			clearTimeout(copyTimeout);
			copyTimeout = setTimeout(() => {
				copied = false;
			}, 2200);
		}
	};
</script>

<svelte:head>
	<title>Rodrigo Agustin Cisterna | Portfolio &amp; Systems</title>
	<meta
		name="description"
		content="Portfolio of Rodrigo Agustin Cisterna — Software & Systems Developer specializing in Svelte, React, TypeScript, and .NET."
	/>
</svelte:head>

<section
	class="w-full min-h-[calc(100vh-80px)] flex flex-col justify-start items-center pt-20 pb-28 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-8"
>
	<div class="w-full max-w-5xl mx-auto flex flex-col gap-10 lg:gap-14">
		<!-- =========================================================================
		     HUD HERO COMMAND DECK
		     ========================================================================= -->
		<header
			class="relative w-full border border-cyber-cyan/30 bg-cyber-void/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 lg:p-12 card-glow overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]"
		>
			<!-- Tactical Background Grid -->
			<div
				class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"
			></div>

			<!-- Corner Cyber Decors -->
			<div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan"></div>
			<div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-violet"></div>
			<div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-pink"></div>
			<div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-green"></div>

			<!-- HUD Status Header -->
			<div
				class="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10"
			>
				<div class="flex items-center gap-3">
					<span class="relative flex h-3 w-3">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"
						></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-cyber-green"></span>
					</span>
					<span class="font-mono text-xs font-bold tracking-widest text-cyber-green uppercase">
						SYSTEM_ONLINE // CORE_ACTIVE
					</span>
				</div>

				<div class="flex items-center gap-3 font-mono text-xs text-cyber-gray">
					<span
						class="hidden sm:inline-block px-2.5 py-0.5 bg-cyber-surface border border-white/10 rounded"
					>
						CLEARANCE: LEVEL_01
					</span>
					<span class="text-cyber-cyan font-bold">NODE: HOME.SYS</span>
				</div>
			</div>

			<!-- Hero Content -->
			<div class="relative z-10 flex flex-col items-center text-center gap-5">
				<div
					class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan font-mono text-xs tracking-widest uppercase"
				>
					<span class="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
					Full-Stack &amp; Systems Developer
				</div>

				<h1
					class="text-3xl sm:text-5xl md:text-6xl font-synth font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-violet text-glow leading-tight"
				>
					RODRIGO AGUSTIN CISTERNA
				</h1>

				<p class="max-w-3xl text-cyber-light font-slab text-base sm:text-lg leading-relaxed mt-1">
					Crafting high-performance web applications, responsive user interfaces, and robust systems
					with clean architecture, modern frameworks, and a variety of different aesthetics.
				</p>

				<!-- Hero Action Controls -->
				<div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 pt-2">
					<a
						href="/projects"
						class="px-7 py-3.5 rounded-lg font-synth text-xs sm:text-sm tracking-widest uppercase font-bold text-black bg-cyber-cyan hover:bg-white transition-all duration-300 shadow-glowCyan hover:scale-105 active:scale-95 after:hidden"
					>
						Explore Projects →
					</a>

					<a
						href="/experience"
						class="px-7 py-3.5 rounded-lg font-synth text-xs sm:text-sm tracking-widest uppercase font-bold text-cyber-light border-2 border-cyber-green hover:border-white bg-cyber-green/15 hover:bg-cyber-surface transition-all duration-300 shadow-glowGreen hover:scale-105 active:scale-95 after:hidden"
					>
						Experience Log
					</a>

					<a
						href="/about"
						class="px-7 py-3.5 rounded-lg font-synth text-xs sm:text-sm tracking-widest uppercase font-bold text-cyber-light border-2 border-cyber-violet hover:border-cyber-cyan bg-cyber-violet/15 hover:bg-cyber-surface transition-all duration-300 shadow-glowViolet hover:scale-105 active:scale-95 after:hidden"
					>
						Operative Dossier
					</a>

					<button
						type="button"
						onclick={copyEmail}
						class={`px-5 py-3.5 rounded-lg font-mono text-xs sm:text-sm tracking-wider uppercase font-bold transition-all duration-300 border flex items-center gap-2 ${
							copied
								? 'bg-cyber-green text-black border-cyber-green shadow-glowGreen'
								: 'bg-cyber-card text-cyber-gray border-cyber-border-subtle hover:border-cyber-cyan/50 hover:text-white'
						}`}
						aria-label="Copy direct contact email to clipboard"
					>
						{#if copied}
							<span>✓ SIGNAL COPIED</span>
						{:else}
							<span>📋 rodriccrz@gmail.com</span>
						{/if}
					</button>
				</div>
			</div>
		</header>

		<!-- =========================================================================
		     HUD TELEMETRY & SYSTEM METRICS
		     ========================================================================= -->
		<section aria-label="System Metrics" class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div
				class="p-5 rounded-xl border border-cyber-violet/20 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col justify-between"
			>
				<span class="font-mono text-[10px] sm:text-xs text-cyber-gray uppercase tracking-widest">
					// CORE_STACK
				</span>
				<div class="mt-2 flex items-baseline justify-between">
					<span class="font-synth text-xl sm:text-2xl text-cyber-violet font-bold">React // TS</span
					>
					<span class="font-mono text-[11px] text-cyber-sky">V5</span>
				</div>
			</div>

			<div
				class="p-5 rounded-xl border border-cyber-amber/20 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col justify-between"
			>
				<span class="font-mono text-[10px] sm:text-xs text-cyber-gray uppercase tracking-widest">
					// STATUS_BEACON
				</span>
				<div class="mt-2 flex items-baseline justify-between">
					<span class="font-synth text-sm sm:text-base text-cyber-amber font-bold">AVAILABLE</span>
					<span class="font-mono text-[11px] text-cyber-amber">FULL-TIME</span>
				</div>
			</div>
		</section>

		<!-- =========================================================================
		     TECH MATRIX // CAPABILITIES DECK
		     ========================================================================= -->
		<section class="w-full flex flex-col gap-6" aria-label="Technical Skills Matrix">
			<div class="flex items-center gap-3">
				<div class="h-0.5 w-6 sm:w-10 bg-cyber-violet"></div>
				<h2 class="text-base sm:text-xl font-synth tracking-widest text-cyber-violet">
					TECH_MATRIX // SPECIALIZATIONS
				</h2>
				<div class="h-0.5 flex-1 bg-cyber-violet/20"></div>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<!-- Front-End Architecture Card -->
				<div
					class="flex flex-col gap-4 p-5 rounded-xl border border-cyber-cyan/30 bg-cyber-surface/90 backdrop-blur-sm card-glow transition-transform duration-300 hover:-translate-y-1"
				>
					<div class="flex items-center justify-between border-b border-cyber-cyan/20 pb-3">
						<h3 class="font-synth text-sm text-cyber-cyan flex items-center gap-2">
							<span>◈</span> Frontend
						</h3>
						<span class="text-xs font-mono text-cyber-gray">01</span>
					</div>
					<div class="flex flex-wrap gap-2 pt-1">
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
							>Svelte / Kit</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
							>React / Next.js</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
							>TypeScript</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
							>Tailwind CSS</span
						>
					</div>
				</div>

				<!-- Systems & Backends Card -->
				<div
					class="flex flex-col gap-4 p-5 rounded-xl border border-cyber-violet/30 bg-cyber-surface/90 backdrop-blur-sm card-glow transition-transform duration-300 hover:-translate-y-1"
				>
					<div class="flex items-center justify-between border-b border-cyber-violet/20 pb-3">
						<h3 class="font-synth text-sm text-[#C084FC] flex items-center gap-2">
							<span>◈</span> Systems &amp; API
						</h3>
						<span class="text-xs font-mono text-cyber-gray">02</span>
					</div>
					<div class="flex flex-wrap gap-2 pt-1">
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-violet/30 text-[#D8B4FE]"
							>.NET / C#</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-violet/30 text-[#D8B4FE]"
							>C++</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-violet/30 text-[#D8B4FE]"
							>Node.js</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-violet/30 text-[#D8B4FE]"
							>RESTful APIs</span
						>
					</div>
				</div>

				<!-- Databases & Storage Card -->
				<div
					class="flex flex-col gap-4 p-5 rounded-xl border border-cyber-green/30 bg-cyber-surface/90 backdrop-blur-sm card-glow transition-transform duration-300 hover:-translate-y-1"
				>
					<div class="flex items-center justify-between border-b border-cyber-green/20 pb-3">
						<h3 class="font-synth text-sm text-cyber-green flex items-center gap-2">
							<span>◈</span> Data &amp; DBs
						</h3>
						<span class="text-xs font-mono text-cyber-gray">03</span>
					</div>
					<div class="flex flex-wrap gap-2 pt-1">
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-green/30 text-[#34D399]"
							>MySQL</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-green/30 text-[#34D399]"
							>MongoDB</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-green/30 text-[#34D399]"
							>Prisma ORM</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-green/30 text-[#34D399]"
							>State Engines</span
						>
					</div>
				</div>

				<!-- Architecture & Tooling Card -->
				<div
					class="flex flex-col gap-4 p-5 rounded-xl border border-cyber-pink/30 bg-cyber-surface/90 backdrop-blur-sm card-glow transition-transform duration-300 hover:-translate-y-1"
				>
					<div class="flex items-center justify-between border-b border-cyber-pink/20 pb-3">
						<h3 class="font-synth text-sm text-cyber-pink flex items-center gap-2">
							<span>◈</span> Architecture
						</h3>
						<span class="text-xs font-mono text-cyber-gray">04</span>
					</div>
					<div class="flex flex-wrap gap-2 pt-1">
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-pink/30 text-[#FDA4AF]"
							>Vite &amp; Build Tools</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-pink/30 text-[#FDA4AF]"
							>Git &amp; CI/CD</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-pink/30 text-[#FDA4AF]"
							>UI / UX Design</span
						>
						<span
							class="font-mono text-xs px-3 py-1.5 bg-cyber-card border border-cyber-pink/30 text-[#FDA4AF]"
							>Responsive Web</span
						>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
