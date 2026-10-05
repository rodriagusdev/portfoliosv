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
	<title>About // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="About Rodrigo Agustin Cisterna Cruz — Full-Stack Developer and System Analyst specializing in Svelte, React, TypeScript, and .NET."
	/>
</svelte:head>

<section
	class="w-full min-h-screen pt-20 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8 projectAnim flex flex-col items-center"
>
	<div class="w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
		<!-- =========================================================================
		     DOSSIER HEADER // SYSTEM FILE BANNER
		     ========================================================================= -->
		<header
			class="w-full flex flex-wrap items-center justify-between gap-4 border-b border-cyber-pink/30 pb-4"
		>
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 rounded-sm bg-cyber-pink animate-pulse"></span>
				<h1 class="text-xl sm:text-2xl font-synth font-bold tracking-wider text-cyber-pink">
					OPERATIVE_DOSSIER // ABOUT.SYS
				</h1>
			</div>

			<div class="flex items-center gap-2 font-mono text-xs text-cyber-gray">
				<span class="px-2.5 py-1 bg-cyber-card border border-white/10 rounded">
					ID: RODRICCRZ_01
				</span>
				<span
					class="px-2.5 py-1 bg-cyber-green/15 text-cyber-green border border-cyber-green/30 rounded font-bold"
				>
					STATUS: ACTIVE
				</span>
			</div>
		</header>

		<!-- =========================================================================
		     PROFILE SUMMARY & COMMUNICATION CONSOLE
		     ========================================================================= -->
		<div
			class="relative w-full rounded-2xl border border-cyber-pink/40 bg-cyber-void/85 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_25px_rgba(255,0,122,0.12)]"
		>
			<!-- Tactical Corner Decors -->
			<div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-pink"></div>
			<div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-cyan"></div>
			<div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-green"></div>
			<div
				class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-violet"
			></div>

			<div
				class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
			>
				<!-- Avatar / Monogram & Identity Info -->
				<div class="flex items-center gap-5 sm:gap-6">
					<div
						class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-cyberpunk-nightcity border-2 border-cyber-pink flex items-center justify-center shadow-glowPink flex-shrink-0"
					>
						<span class="font-poster text-4xl sm:text-5xl text-cyber-cyan tracking-wider">
							RC
						</span>
					</div>

					<div class="flex flex-col gap-1.5">
						<div class="flex items-center gap-2">
							<span
								class="font-mono text-xs uppercase px-2 py-0.5 rounded bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40"
							>
								Developer
							</span>
							<span
								class="font-mono text-xs uppercase px-2 py-0.5 rounded bg-cyber-pink/15 text-[#FDA4AF] border border-cyber-pink/40"
							>
								System Analyst
							</span>
						</div>

						<h2 class="text-2xl sm:text-3xl font-synth font-bold text-white tracking-wide">
							Rodrigo Agustin Cisterna Cruz
						</h2>

						<p class="font-mono text-xs sm:text-sm text-cyber-gray flex items-center gap-2">
							<span>📍 Argentina (UTC-3)</span>
							<span class="text-cyber-border-subtle">•</span>
						</p>
					</div>
				</div>

				<!-- Direct Communication Matrix -->
				<div class="flex flex-wrap md:flex-col gap-2.5 w-full md:w-auto">
					<button
						type="button"
						onclick={copyEmail}
						class={`px-4 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center justify-center gap-2 ${
							copied
								? 'bg-cyber-green text-black border-cyber-green shadow-glowGreen'
								: 'bg-cyber-card text-cyber-cyan border-cyber-cyan/40 hover:bg-cyber-cyan hover:text-black shadow-glowCyan'
						}`}
						aria-label="Copy email address"
					>
						{#if copied}
							<span>✓ SIGNAL COPIED</span>
						{:else}
							<span>rodriccrz@gmail.com</span>
						{/if}
					</button>

					<div class="flex items-center gap-2 w-full">
						<a
							href="https://github.com/rodriagusdev"
							target="_blank"
							rel="noopener noreferrer"
							class="flex-1 text-center px-3.5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-card border border-white/15 text-slate-200 hover:border-white hover:text-white hover:bg-cyber-surface transition-all after:hidden"
							aria-label="Visit GitHub profile"
						>
							GitHub ↗
						</a>

						<a
							href="https://www.linkedin.com/in/rodrigoagustinccrz/"
							target="_blank"
							rel="noopener noreferrer"
							class="flex-1 text-center px-3.5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-card border border-cyber-blue/40 text-cyber-sky hover:border-cyber-blue hover:bg-cyber-blue/15 transition-all after:hidden"
							aria-label="Visit LinkedIn profile"
						>
							LinkedIn ↗
						</a>

						<a
							href="/resume"
							target="_blank"
							class="flex-1 text-center px-3.5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-card border border-cyber-pink/40 text-[#FDA4AF] hover:border-cyber-pink hover:bg-cyber-pink/15 transition-all after:hidden"
							aria-label="View Resume PDF"
						>
							Resume ↗
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- =========================================================================
		     DOSSIER CONTENT GRID
		     ========================================================================= -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
			<!-- Left Column (8 cols): Bio & Architecture Principles -->
			<div class="lg:col-span-8 flex flex-col gap-8">
				<!-- Bio & Background Panel -->
				<div
					class="p-6 sm:p-8 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col gap-4"
				>
					<div class="flex items-center gap-3 border-b border-white/10 pb-3">
						<span class="text-cyber-cyan text-base">◈</span>
						<h3 class="font-synth text-base sm:text-lg text-cyber-cyan font-bold tracking-wider">
							OPERATIVE_SUMMARY // PHILOSOPHY
						</h3>
					</div>

					<p class="font-slab text-sm sm:text-base text-cyber-light/90 leading-relaxed">
						I am a software developer and system analyst dedicated to building high-performance web
						applications, responsive user interfaces, and robust system backends. My approach
						centers around clean, modular architecture, strict type safety, and crafting seamless
						interactive user experiences with cyber-aesthetic precision.
					</p>

					<p class="font-slab text-sm sm:text-base text-cyber-light/90 leading-relaxed">
						My primary technical specialization is in modern frontend engineering (<strong
							class="text-cyber-cyan">React</strong
						>, <strong class="text-cyber-cyan">Next.js</strong>,
						<strong class="text-cyber-cyan">TypeScript</strong>,
						<strong class="text-cyber-cyan">SvelteKit</strong>,
						<strong class="text-cyber-cyan">Tailwind CSS</strong>), crafting dynamic interfaces and
						responsive web applications, complemented by supporting knowledge in backend services
						and databases (<strong class="text-cyber-violet">Node.js</strong>,
						<strong class="text-cyber-violet">.NET / C#</strong>,
						<strong class="text-cyber-green">MySQL</strong>,
						<strong class="text-cyber-green">MongoDB</strong>).
					</p>
				</div>

				<!-- Quick Route to Experience Page -->
				<div
					class="p-6 sm:p-8 rounded-xl border border-cyber-green/40 bg-cyber-void/75 backdrop-blur-sm card-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
				>
					<div class="flex flex-col gap-1.5">
						<div class="flex items-center gap-2">
							<span class="w-2 h-2 rounded-full bg-cyber-green animate-ping"></span>
							<span class="font-mono text-xs text-cyber-green font-bold uppercase tracking-wider">
								Production Deployments
							</span>
						</div>
						<h3 class="font-synth text-lg sm:text-xl text-white font-bold">
							Explore Verified Work Experience
						</h3>
						<p class="font-slab text-xs sm:text-sm text-cyber-light/80 max-w-lg">
							Discover full-scale deployments for <strong class="text-cyber-green"
								>Hair and Health</strong
							>
							and <strong class="text-cyber-cyan">IAT Trichology</strong>.
						</p>
					</div>

					<a
						href="/experience"
						class="px-6 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-green text-black hover:bg-white transition-all shadow-glowGreen flex-shrink-0 after:hidden"
					>
						View Experience Log →
					</a>
				</div>
			</div>

			<!-- Right Column (4 cols): Education, Languages & Core Strengths -->
			<div class="lg:col-span-4 flex flex-col gap-8">
				<!-- Academic Credentials -->
				<div
					class="p-6 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col gap-4"
				>
					<div class="flex items-center gap-3 border-b border-white/10 pb-3">
						<span class="text-cyber-pink text-base">◈</span>
						<h3 class="font-synth text-sm sm:text-base text-cyber-pink font-bold tracking-wider">
							ACADEMIC_CREDENTIALS
						</h3>
					</div>

					<div class="flex flex-col gap-4">
						<div class="flex flex-col gap-1 border-l-2 border-cyber-violet pl-3">
							<span class="font-synth text-xs sm:text-sm font-bold text-white">
								System Analyst
							</span>
							<span class="font-mono text-xs text-cyber-cyan">HILET</span>
							<span class="font-mono text-[11px] text-cyber-gray">2023 — 2026 (In Progress)</span>
						</div>

						<div class="flex flex-col gap-1 border-l-2 border-cyber-pink pl-3">
							<span class="font-synth text-xs sm:text-sm font-bold text-white">
								Computer Technician
							</span>
							<span class="font-mono text-xs text-cyber-pink">E.E.S.T. N°5</span>
							<span class="font-mono text-[11px] text-cyber-gray">2011 — 2017</span>
						</div>
					</div>
				</div>

				<!-- Linguistic Telemetry -->
				<div
					class="p-6 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col gap-4 overflow-hidden"
				>
					<div class="flex items-center gap-3 border-b border-white/10 pb-3">
						<span class="text-cyber-amber text-base">◈</span>
						<h3
							class="font-synth text-xs sm:text-sm text-cyber-amber font-bold tracking-wider uppercase truncate"
						>
							LANGUAGES // LOCALIZATION
						</h3>
					</div>

					<div class="flex flex-col gap-2.5">
						<div
							class="flex items-center justify-between p-3 rounded-lg bg-cyber-card border border-white/10 font-mono text-xs"
						>
							<span class="text-white font-bold tracking-wide">Spanish</span>
							<span class="text-cyber-green font-bold uppercase tracking-wider">Native</span>
						</div>

						<div
							class="flex items-center justify-between p-3 rounded-lg bg-cyber-card border border-white/10 font-mono text-xs"
						>
							<span class="text-white font-bold tracking-wide">English</span>
							<span class="text-cyber-cyan font-bold uppercase tracking-wider">Professional</span>
						</div>
					</div>
				</div>

				<!-- Core Competencies -->
				<div
					class="p-6 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col gap-4 overflow-hidden"
				>
					<div class="flex items-center gap-3 border-b border-white/10 pb-3">
						<span class="text-cyber-sky text-base">◈</span>
						<h3
							class="font-synth text-xs sm:text-sm text-cyber-sky font-bold tracking-wider uppercase truncate"
						>
							CORE_COMPETENCIES
						</h3>
					</div>

					<div class="flex flex-wrap gap-2">
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan"
						>
							React &amp; Next.js
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan"
						>
							TypeScript &amp; JS
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan"
						>
							Svelte &amp; SvelteKit
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan"
						>
							Tailwind CSS &amp; UI
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-white/10 text-slate-200"
						>
							REST API Integration
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-white/10 text-slate-200"
						>
							Responsive Layouts
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-white/10 text-slate-200"
						>
							State Management
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-green/30 text-[#34D399]"
						>
							MySQL &amp; Databases
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-amber/30 text-[#FCD34D]"
						>
							WordPress &amp; cPanel
						</span>
						<span
							class="font-mono text-xs px-2.5 py-1 rounded bg-cyber-card border border-cyber-amber/30 text-[#FCD34D]"
						>
							Cloudflare Security
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
