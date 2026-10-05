<script lang="ts">
	import { projectIndex } from '../../store';
	import type { ProjectItem } from '#lib/projectData/projectsPreview';
	import { projectCardThemes } from '#lib/theme';
	import { openLightbox } from '#lib/lightbox';

	interface Props {
		projectPreview: ProjectItem;
		index: number;
		viewMode?: 'grid' | 'spread';
	}

	let { projectPreview, index, viewMode = 'grid' }: Props = $props();

	const updateProjectIndex = () => {
		$projectIndex = index + 1;
	};

	const openProjectGallery = (startIndex = 0) => {
		const imgs = (projectPreview.gallery || projectPreview.slices || [projectPreview.image]).map(
			(src, i) => ({
				src,
				title: `${projectPreview.name} // Telemetry Visual Frame 0${i + 1}`,
				label: `${projectPreview.name.toUpperCase()} // P_0${i + 1}`
			})
		);
		openLightbox(imgs, startIndex);
	};

	let isExternal = $derived(projectPreview.link.startsWith('http'));
	let formattedIndex = $derived(String(index + 1).padStart(2, '0'));
	let theme = $derived(projectCardThemes[index % projectCardThemes.length]);

	// Extract unique slice images with fallback cascade
	let slice1 = $derived(projectPreview.slices?.[0] || projectPreview.image);
	let slice2 = $derived(
		projectPreview.slices?.[1] || projectPreview.gallery?.[1] || projectPreview.image
	);
	let slice3 = $derived(
		projectPreview.slices?.[2] ||
			projectPreview.gallery?.[2] ||
			projectPreview.gallery?.[0] ||
			projectPreview.image
	);
</script>

{#if viewMode === 'spread'}
	<!-- =========================================================================
	     FULL-BLEED CYBER TECH MAGAZINE SPREAD (Edge-to-Edge Double Page Spread)
	     ========================================================================= -->
	<article
		class={`group relative w-full border-b-2 ${theme.border} ${theme.bg} overflow-hidden transition-all duration-300`}
	>
		<!-- Background Grid Matrix -->
		<div
			class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
		></div>

		<div class="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-stretch">
			<!-- Left Editorial Page (5 cols) -->
			<div
				class={`lg:col-span-5 p-6 sm:p-10 md:p-14 flex flex-col justify-between gap-8 border-b-2 lg:border-b-0 lg:border-r-2 ${theme.border} bg-black/40 backdrop-blur-sm`}
			>
				<!-- Top Masthead Bar -->
				<div
					class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4"
				>
					<div class="flex items-center gap-2">
						<span
							class="font-mono text-xs font-bold px-2.5 py-1 bg-black text-white border border-white/20"
						>
							SYS_ID // {formattedIndex}
						</span>
						<span
							class={`font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 border ${theme.badge}`}
						>
							{projectPreview.type}
						</span>
					</div>

					<!-- Telemetry Status Stamp -->
					<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
						<span class="h-2 w-2 rounded-full bg-[#00FF66] animate-pulse"></span>
						<span>{projectPreview.status || 'DEPLOYED'}</span>
					</div>
				</div>

				<!-- Massive Headline Title & Tech Overview -->
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2 font-mono text-xs text-slate-400">
						<span class="text-[{theme.neonColor}]"
							>{projectPreview.code || `SEC_${formattedIndex}`}</span
						>
						<span>//</span>
						<span>{projectPreview.sector || 'PRODUCTION'}</span>
					</div>

					<a
						href={projectPreview.link}
						target={isExternal ? '_blank' : ''}
						rel={isExternal ? 'noopener noreferrer' : ''}
						onclick={updateProjectIndex}
						class={`font-poster text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight ${theme.titleColor} transition-colors uppercase after:hidden block select-none`}
					>
						{projectPreview.name}
					</a>

					{#if projectPreview.description}
						<div
							class="bg-[#03060C]/90 text-slate-200 p-4 sm:p-5 border border-white/10 shadow-lg mt-2"
						>
							<span
								class="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1"
							>
								✦ ARCHITECTURE // SPECIFICATION
							</span>
							<p class="font-slab text-sm sm:text-base leading-relaxed text-slate-300">
								{projectPreview.description}
							</p>
							{#if projectPreview.metrics}
								<div
									class="mt-3 pt-2 border-t border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between"
								>
									<span>METRICS:</span>
									<span class="text-white font-bold">{projectPreview.metrics}</span>
								</div>
							{/if}
						</div>
					{/if}
				</div>

				<!-- Bottom Spec Sheet & Massive Launch Trigger -->
				<div class="flex flex-col gap-5 pt-4 border-t border-white/10">
					<!-- Tech Stack Badges -->
					{#if projectPreview.tech && projectPreview.tech.length > 0}
						<div class="flex flex-wrap gap-1.5">
							{#each projectPreview.tech as t (t)}
								<span class={`font-mono text-xs uppercase px-2.5 py-1 border ${theme.tagBg}`}>
									{t}
								</span>
							{/each}
						</div>
					{/if}

					<!-- Action Buttons -->
					<div class="flex flex-wrap items-center gap-4">
						<a
							href={projectPreview.link}
							target={isExternal ? '_blank' : ''}
							rel={isExternal ? 'noopener noreferrer' : ''}
							onclick={updateProjectIndex}
							class={`flex-1 inline-flex items-center justify-center gap-3 px-8 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest ${theme.btn} transition-all active:translate-y-0.5 after:hidden`}
						>
							<span>{isExternal ? 'LAUNCH LIVE PROTOTYPE ↗' : 'INSPECT MODULE →'}</span>
						</a>

						{#if projectPreview.year}
							<div
								class="px-4 py-3 font-mono text-xs bg-black text-slate-300 border border-white/20"
							>
								CAL // {projectPreview.year}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Right Sliced Visual Canvas (7 cols) - Uses 3 Distinct Slice Images with Interactive Lightbox Triggers -->
			<div
				class={`lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] lg:min-h-full bg-[#020408] overflow-hidden flex flex-col justify-stretch border-b-2 lg:border-b-0 ${theme.border}`}
			>
				<div class="relative w-full h-full flex flex-col group/slice overflow-hidden">
					<!-- Top Slice (Unique Asset 1) -->
					<div
						class="flex-1 overflow-hidden border-b border-white/10 relative min-h-[120px] group/item"
					>
						<button
							type="button"
							class="w-full h-full p-0 border-0 bg-transparent text-left cursor-pointer block relative overflow-hidden"
							onclick={() => openProjectGallery(0)}
							aria-label={`Open fullscreen lightbox for ${projectPreview.name} Primary View`}
						>
							<img
								loading="lazy"
								class="w-full h-full object-cover object-top filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover/item:scale-105"
								src={slice1}
								alt={`${projectPreview.name} Primary View`}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
							></div>
							<div
								class="absolute bottom-2 left-3 font-mono text-[10px] text-slate-300 bg-black/80 px-2 py-0.5 border border-white/20 flex items-center gap-1.5"
							>
								<span>VIEW_01 // PRIMARY_INTERFACE</span>
								<span
									class="text-cyber-cyan font-bold opacity-0 group-hover/item:opacity-100 transition-opacity"
									>⛶ EXPAND</span
								>
							</div>
						</button>
					</div>

					<!-- Middle Slice (Unique Asset 2) -->
					<div
						class="flex-1 overflow-hidden border-b border-white/10 relative min-h-[120px] group/item"
					>
						<button
							type="button"
							class="w-full h-full p-0 border-0 bg-transparent text-left cursor-pointer block relative overflow-hidden"
							onclick={() => openProjectGallery(1)}
							aria-label={`Open fullscreen lightbox for ${projectPreview.name} Secondary Feature`}
						>
							<img
								loading="lazy"
								class="w-full h-full object-cover object-center filter brightness-90 contrast-120 saturate-125 transition-transform duration-700 group-hover/item:scale-105"
								src={slice2}
								alt={`${projectPreview.name} Secondary Feature`}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
							></div>
							<div
								class="absolute bottom-2 left-3 font-mono text-[10px] text-slate-300 bg-black/80 px-2 py-0.5 border border-white/20 flex items-center gap-1.5"
							>
								<span>VIEW_02 // SUBSYSTEM_GALLERY</span>
								<span
									class="text-cyber-cyan font-bold opacity-0 group-hover/item:opacity-100 transition-opacity"
									>⛶ EXPAND</span
								>
							</div>
						</button>
					</div>

					<!-- Bottom Slice (Unique Asset 3) -->
					<div class="flex-1 overflow-hidden relative min-h-[120px] group/item">
						<button
							type="button"
							class="w-full h-full p-0 border-0 bg-transparent text-left cursor-pointer block relative overflow-hidden"
							onclick={() => openProjectGallery(2)}
							aria-label={`Open fullscreen lightbox for ${projectPreview.name} Tertiary Feature`}
						>
							<img
								loading="lazy"
								class="w-full h-full object-cover object-bottom filter brightness-90 contrast-110 saturate-110 transition-transform duration-700 group-hover/item:scale-105"
								src={slice3}
								alt={`${projectPreview.name} Tertiary Feature`}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
							></div>
							<div
								class="absolute bottom-2 left-3 font-mono text-[10px] text-slate-300 bg-black/80 px-2 py-0.5 border border-white/20 flex items-center gap-1.5"
							>
								<span>VIEW_03 // CORE_RENDER</span>
								<span
									class="text-cyber-cyan font-bold opacity-0 group-hover/item:opacity-100 transition-opacity"
									>⛶ EXPAND</span
								>
							</div>
						</button>
					</div>

					<!-- Tech Corner Ribbon Stamp with Quick Lightbox Trigger -->
					<div class="absolute top-4 right-4 flex items-center gap-2 z-20">
						<button
							type="button"
							onclick={() => openProjectGallery(0)}
							class="bg-[#03060C]/90 text-cyber-cyan hover:text-white font-mono text-xs px-3 py-1.5 border border-cyber-cyan/40 hover:border-cyber-cyan backdrop-blur-md shadow-lg uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
						>
							<span class="h-2 w-2 rounded-full bg-[#00F0FF] animate-ping"></span>
							<span>⛶ HUD LIGHTBOX ✦</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</article>
{:else}
	<!-- =========================================================================
	     FULL-BLEED HIGH-TECH MATRIX GRID (Seamless Flush Poster Grid)
	     ========================================================================= -->
	<article
		class={`group relative flex flex-col justify-between h-full border-r-2 border-b-2 ${theme.border} ${theme.bg} transition-all duration-300 overflow-hidden`}
	>
		<!-- Header Tab -->
		<div
			class={`p-4 sm:p-5 flex items-center justify-between border-b-2 ${theme.border} bg-black/50`}
		>
			<div class="flex items-center gap-2">
				<span
					class="font-mono text-xs font-bold px-2 py-0.5 bg-black text-white border border-white/20"
				>
					#{formattedIndex}
				</span>
				<span
					class={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 border ${theme.badge}`}
				>
					{projectPreview.type}
				</span>
			</div>

			<button
				type="button"
				onclick={() => openProjectGallery(0)}
				class="font-mono text-[10px] text-cyber-cyan hover:text-white uppercase tracking-wider px-2 py-0.5 bg-black/60 border border-cyber-cyan/30 hover:border-cyber-cyan transition-all flex items-center gap-1 cursor-pointer"
				title="Open Fullscreen Lightbox"
			>
				<span>⛶</span>
				<span>EXPAND HUD</span>
			</button>
		</div>

		<!-- Sliced Media Window with 2 Unique Distinct Image Views & Lightbox Buttons -->
		<div
			class={`relative w-full h-64 sm:h-72 border-b-2 ${theme.border} overflow-hidden block group/img after:hidden bg-black`}
		>
			<!-- Top Half Slice (Asset 1) -->
			<button
				type="button"
				onclick={() => openProjectGallery(0)}
				class="h-1/2 w-full overflow-hidden border-b border-white/10 relative block p-0 border-0 text-left cursor-pointer group/slice1"
				aria-label={`Open lightbox for ${projectPreview.name} Top Feature`}
			>
				<img
					loading="lazy"
					class="w-full h-full object-cover object-top filter brightness-95 contrast-110 saturate-125 transition-transform duration-700 group-hover/slice1:scale-105"
					src={slice1}
					alt={`${projectPreview.name} Top Feature`}
				/>
				<div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
				<div
					class="absolute top-1.5 left-2 font-mono text-[9px] text-slate-300 bg-black/80 px-1.5 py-0.5 border border-white/10 flex items-center gap-1"
				>
					<span>P_01</span>
					<span class="text-cyber-cyan opacity-0 group-hover/slice1:opacity-100 transition-opacity"
						>⛶</span
					>
				</div>
			</button>

			<!-- Bottom Half Slice (Asset 2) -->
			<button
				type="button"
				onclick={() => openProjectGallery(1)}
				class="h-1/2 w-full overflow-hidden relative block p-0 border-0 text-left cursor-pointer group/slice2"
				aria-label={`Open lightbox for ${projectPreview.name} Bottom Feature`}
			>
				<img
					loading="lazy"
					class="w-full h-full object-cover object-bottom filter brightness-90 contrast-110 saturate-120 transition-transform duration-700 group-hover/slice2:scale-105"
					src={slice2}
					alt={`${projectPreview.name} Bottom Feature`}
				/>
				<div class="absolute inset-0 bg-black/20 pointer-events-none"></div>
				<div
					class="absolute bottom-1.5 left-2 font-mono text-[9px] text-slate-300 bg-black/80 px-1.5 py-0.5 border border-white/10 flex items-center gap-1"
				>
					<span>P_02</span>
					<span class="text-cyber-cyan opacity-0 group-hover/slice2:opacity-100 transition-opacity"
						>⛶</span
					>
				</div>
			</button>

			<a
				href={projectPreview.link}
				target={isExternal ? '_blank' : ''}
				rel={isExternal ? 'noopener noreferrer' : ''}
				onclick={updateProjectIndex}
				class="absolute bottom-3 right-3 bg-black/90 hover:bg-cyber-cyan hover:text-black text-white font-mono text-xs px-3 py-1 border border-white/30 backdrop-blur-sm uppercase tracking-wider transition-colors"
			>
				INSPECT ↗
			</a>
		</div>

		<!-- Headline & Description Content -->
		<div class="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-5 bg-black/30">
			<div class="flex flex-col gap-2.5">
				<a
					href={projectPreview.link}
					target={isExternal ? '_blank' : ''}
					rel={isExternal ? 'noopener noreferrer' : ''}
					onclick={updateProjectIndex}
					class={`font-poster text-5xl sm:text-6xl leading-[0.85] tracking-tight ${theme.titleColor} transition-colors uppercase after:hidden block select-none`}
				>
					{projectPreview.name}
				</a>

				{#if projectPreview.description}
					<p class="font-slab text-xs sm:text-sm text-slate-300 line-clamp-3 leading-snug">
						{projectPreview.description}
					</p>
				{/if}
			</div>

			<!-- Tech Specs Tag Cloud -->
			{#if projectPreview.tech && projectPreview.tech.length > 0}
				<div class="flex flex-wrap gap-1.5 pt-1">
					{#each projectPreview.tech.slice(0, 4) as t (t)}
						<span class={`font-mono text-[10px] uppercase px-2 py-0.5 border ${theme.tagBg}`}>
							{t}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Action Trigger -->
			<div class="pt-2">
				<a
					href={projectPreview.link}
					target={isExternal ? '_blank' : ''}
					rel={isExternal ? 'noopener noreferrer' : ''}
					onclick={updateProjectIndex}
					class={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 font-mono text-xs uppercase tracking-widest font-bold ${theme.btn} transition-all after:hidden`}
				>
					<span>{isExternal ? 'LAUNCH PROTOTYPE' : 'INSPECT CODE'}</span>
					<span>→</span>
				</a>
			</div>
		</div>
	</article>
{/if}
