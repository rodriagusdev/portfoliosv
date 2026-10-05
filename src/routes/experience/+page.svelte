<script lang="ts">
</script>

<svelte:head>
	<title>Experience // Rodrigo Agustin Cisterna</title>
	<meta
		name="description"
		content="Professional work experience of Rodrigo Agustin Cisterna Cruz — Lead Frontend Developer & Systems Collaborator for Hair and Health and IAT Trichology."
	/>
</svelte:head>

<section
	class="w-full min-h-screen pt-20 pb-28 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8 projectAnim flex flex-col items-center"
>
	<div class="w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
		<!-- =========================================================================
		     EXPERIENCE HUD HEADER
		     ========================================================================= -->
		<header
			class="w-full flex flex-wrap items-center justify-between gap-4 border-b border-cyber-green/30 pb-4"
		>
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 rounded-sm bg-cyber-green animate-pulse"></span>
				<h1 class="text-xl sm:text-2xl font-synth font-bold tracking-wider text-cyber-green">
					OPERATIONAL_DEPLOYMENTS // EXPERIENCE.SYS
				</h1>
			</div>

			<div class="flex items-center gap-2 font-mono text-xs text-cyber-gray">
				<span class="px-2.5 py-1 bg-cyber-card border border-white/10 rounded">
					DEPLOYED_ROLES: 02
				</span>
				<span
					class="px-2.5 py-1 bg-cyber-green/15 text-cyber-green border border-cyber-green/30 rounded font-bold"
				>
					STATUS: ACTIVE
				</span>
			</div>
		</header>

		<!-- =========================================================================
		     DEPLOYMENTS TIMELINE & EXPERIENCE CARDS
		     ========================================================================= -->
		<div class="flex flex-col gap-8">
			<!-- Deployment 01: Hair and Health -->
			<article
				class="relative w-full rounded-2xl border border-cyber-green/40 bg-cyber-void/85 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_25px_rgba(0,255,102,0.12)] transition-all duration-300"
			>
				<!-- Tactical Corner Decors -->
				<div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-green"></div>
				<div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-cyan"></div>
				<div
					class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-green"
				></div>
				<div
					class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-amber"
				></div>

				<div class="relative z-10 flex flex-col gap-6">
					<!-- Top Masthead Info -->
					<div
						class="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5"
					>
						<div class="flex flex-col gap-1.5">
							<div class="flex items-center gap-2.5">
								<span
									class="font-mono text-xs font-bold px-2.5 py-0.5 bg-black text-cyber-green border border-cyber-green/40 rounded"
								>
									SYS_EXP // 01
								</span>
								<span
									class="font-mono text-xs uppercase px-2.5 py-0.5 rounded bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40"
								>
									Web Developer &amp; Administrator
								</span>
							</div>

							<h2 class="text-2xl sm:text-3xl font-synth font-bold text-white tracking-wide mt-1">
								Hair and Health
							</h2>
							<p class="font-mono text-xs sm:text-sm text-cyber-gray">
								WordPress Platform Engineering, Hosting &amp; Security Administration
							</p>
						</div>

						<a
							href="https://www.hairandhealth.com"
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-green text-black hover:bg-white transition-all shadow-glowGreen flex items-center gap-1.5 after:hidden"
						>
							Visit Site ↗
						</a>
					</div>

					<!-- Key Achievements & Tasks -->
					<div class="flex flex-col gap-3">
						<h3 class="font-synth text-sm text-cyber-green tracking-wider uppercase">
							Key Responsibilities &amp; Impact
						</h3>

						<ul class="flex flex-col gap-2.5 list-none p-0">
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-green mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>Responsive Design &amp; Aesthetic Standardization:</strong
									>
									Engineered a fully responsive, mobile-first interface across all screen sizes while
									standardizing visual aesthetics, typography, and UI hierarchy.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-green mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>Image Optimization &amp; AI Upscaling:</strong
									>
									Processed, compressed, and upscaled visual assets to ensure crisp high-resolution display
									on modern screens without compromising page load speeds.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-green mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>WordPress &amp; Elementor Engineering:</strong
									>
									Customized page layouts, widgets, and dynamic templates using WordPress, Elementor,
									and PHP scripts for medical hair treatment offerings.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-green mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>cPanel Hosting &amp; Cloudflare Bot Defense:</strong
									>
									Administered hosting environments on cPanel (domain, SSL, database backups) and implemented
									Cloudflare CAPTCHAs across inquiry forms to eliminate spam bots.
								</span>
							</li>
						</ul>
					</div>

					<!-- Stack Badges -->
					<div class="flex flex-wrap gap-2 pt-4 border-t border-white/10">
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-green/40 text-cyber-green font-medium"
						>
							WordPress
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-green/40 text-cyber-green font-medium"
						>
							Elementor
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-green/40 text-cyber-green font-medium"
						>
							PHP
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
						>
							cPanel Hosting
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-amber/40 text-cyber-amber font-medium"
						>
							Cloudflare CAPTCHA
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-white/10 text-slate-300"
						>
							Image Optimization &amp; Upscaling
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-white/10 text-slate-300"
						>
							Responsive UI / UX
						</span>
					</div>
				</div>
			</article>

			<!-- Deployment 02: IAT Trichology -->
			<article
				class="relative w-full rounded-2xl border border-cyber-cyan/40 bg-cyber-void/85 backdrop-blur-md p-6 sm:p-10 card-glow overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all duration-300"
			>
				<!-- Tactical Corner Decors -->
				<div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan"></div>
				<div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-violet"></div>
				<div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-cyan"></div>
				<div
					class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-pink"
				></div>

				<div class="relative z-10 flex flex-col gap-6">
					<!-- Top Masthead Info -->
					<div
						class="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5"
					>
						<div class="flex flex-col gap-1.5">
							<div class="flex items-center gap-2.5">
								<span
									class="font-mono text-xs font-bold px-2.5 py-0.5 bg-black text-cyber-cyan border border-cyber-cyan/40 rounded"
								>
									SYS_EXP // 02
								</span>
								<span
									class="font-mono text-xs uppercase px-2.5 py-0.5 rounded bg-cyber-violet/15 text-[#C084FC] border border-cyber-violet/40"
								>
									Full Website Redesign &amp; Admin
								</span>
							</div>

							<h2 class="text-2xl sm:text-3xl font-synth font-bold text-white tracking-wide mt-1">
								IAT Trichology
							</h2>
							<p class="font-mono text-xs sm:text-sm text-cyber-gray">
								International Association of Trichologists (Filial Habla Hispana)
							</p>
						</div>

						<a
							href="https://www.tricologia-iat.com.ar"
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider bg-cyber-cyan text-black hover:bg-white transition-all shadow-glowCyan flex items-center gap-1.5 after:hidden"
						>
							Visit Portal ↗
						</a>
					</div>

					<!-- Key Achievements & Tasks -->
					<div class="flex flex-col gap-3">
						<h3 class="font-synth text-sm text-cyber-cyan tracking-wider uppercase">
							Key Responsibilities &amp; Impact
						</h3>

						<ul class="flex flex-col gap-2.5 list-none p-0">
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-cyan mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>Complete Website Redesign to Modern Standards:</strong
									>
									Executed a comprehensive from-scratch architectural and visual redesign, elevating legacy
									pages to modern, mobile-first responsive standards with unified aesthetics.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-cyan mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>.htaccess Configuration &amp; SEO Optimization:</strong
									>
									Configured `.htaccess` rules (server-level caching, compression, HTTPS/canonical redirects,
									security headers) and established organic SEO structure for improved indexing.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-cyan mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>Media Asset Upscaling &amp; Optimization:</strong
									>
									Restored, upscaled, and compressed institutional imagery and specialist headshots for
									crisp high-density display across all viewports.
								</span>
							</li>
							<li class="font-slab text-sm sm:text-base text-cyber-light/90 flex items-start gap-3">
								<span class="text-cyber-cyan mt-1">▸</span>
								<span>
									<strong class="text-white font-medium"
										>cPanel, Cloudflare &amp; Specialist Directory:</strong
									>
									Managed production hosting on cPanel, integrated Cloudflare CAPTCHA protections against
									automated spam, and structured directories for certified trichologists.
								</span>
							</li>
						</ul>
					</div>

					<!-- Stack Badges -->
					<div class="flex flex-wrap gap-2 pt-4 border-t border-white/10">
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
						>
							Complete Redesign
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
						>
							WordPress &amp; Elementor
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
						>
							.htaccess &amp; SEO
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/40 text-cyber-cyan font-medium"
						>
							PHP
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-violet/40 text-[#C084FC] font-medium"
						>
							cPanel Hosting
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-cyber-amber/40 text-cyber-amber font-medium"
						>
							Cloudflare CAPTCHA
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-white/10 text-slate-300"
						>
							Image Optimization &amp; Upscaling
						</span>
						<span
							class="font-mono text-xs px-3 py-1 rounded bg-cyber-card border border-white/10 text-slate-300"
						>
							Responsive Standards
						</span>
					</div>
				</div>
			</article>
		</div>

		<!-- =========================================================================
		     ENGINEERING PRINCIPLES PANEL
		     ========================================================================= -->
		<section
			class="p-6 sm:p-8 rounded-xl border border-white/10 bg-cyber-surface/90 backdrop-blur-sm card-glow flex flex-col gap-4"
			aria-label="Engineering Standards"
		>
			<div class="flex items-center gap-3 border-b border-white/10 pb-3">
				<span class="text-cyber-violet text-base">◈</span>
				<h3 class="font-synth text-base text-cyber-violet font-bold tracking-wider">
					DEPLOYMENT_PILLARS // STANDARDS
				</h3>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
				<div class="flex flex-col gap-1 p-4 rounded-lg bg-cyber-void border border-white/10">
					<span class="font-synth text-xs text-cyber-green font-bold">01 // PERFORMANCE</span>
					<p class="font-slab text-xs text-cyber-light/80">
						Fast First Contentful Paint (FCP), optimized assets, clean bundles, and zero layout
						shift.
					</p>
				</div>

				<div class="flex flex-col gap-1 p-4 rounded-lg bg-cyber-void border border-white/10">
					<span class="font-synth text-xs text-cyber-cyan font-bold">02 // RESPONSIVENESS</span>
					<p class="font-slab text-xs text-cyber-light/80">
						Fluid layouts designed from mobile to ultra-wide displays with semantic HTML5.
					</p>
				</div>

				<div class="flex flex-col gap-1 p-4 rounded-lg bg-cyber-void border border-white/10">
					<span class="font-synth text-xs text-cyber-pink font-bold">03 // CLEAN CODE</span>
					<p class="font-slab text-xs text-cyber-light/80">
						Strict TypeScript typing, reusable component hierarchies, and maintainable
						architectures.
					</p>
				</div>
			</div>
		</section>
	</div>
</section>
