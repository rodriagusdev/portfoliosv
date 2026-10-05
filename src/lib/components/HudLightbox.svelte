<script lang="ts">
	import {
		lightboxStore,
		closeLightbox,
		nextLightboxImage,
		prevLightboxImage
	} from '#lib/lightbox';
	import { onMount } from 'svelte';

	let isOpen = $derived($lightboxStore.isOpen);
	let images = $derived($lightboxStore.images);
	let currentIndex = $derived($lightboxStore.currentIndex);
	let currentImage = $derived(images[currentIndex]);
	let totalCount = $derived(images.length);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (!isOpen) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			closeLightbox();
		} else if (e.key === 'ArrowRight' || e.key === 'KeyD') {
			e.preventDefault();
			nextLightboxImage();
		} else if (e.key === 'ArrowLeft' || e.key === 'KeyA') {
			e.preventDefault();
			prevLightboxImage();
		}
	};

	$effect(() => {
		if (typeof document !== 'undefined') {
			if (isOpen) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
		return () => {
			if (typeof document !== 'undefined') {
				document.body.style.overflow = '';
			}
		};
	});

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#if isOpen && currentImage}
	<div
		class="fixed inset-0 z-[9999999] bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 projectAnim select-none"
		role="dialog"
		aria-modal="true"
		aria-label="High Resolution Image Lightbox"
		onclick={(e) => {
			if (e.target === e.currentTarget) closeLightbox();
		}}
		onkeydown={handleKeyDown}
		tabindex="-1"
	>
		<!-- =========================================================================
		     HUD LIGHTBOX MASTHEAD HEADER
		     ========================================================================= -->
		<header
			class="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between pb-4 border-b border-white/15"
		>
			<div class="flex items-center gap-3">
				<span class="w-2.5 h-2.5 rounded-sm bg-cyber-cyan animate-ping"></span>
				<span class="font-mono text-xs font-bold text-cyber-cyan uppercase tracking-widest">
					SYS_OPTICS // HIGH_RESOLUTION_VIEW
				</span>
				{#if currentImage.label}
					<span
						class="hidden sm:inline-block font-mono text-xs px-2.5 py-0.5 rounded bg-cyber-green/15 text-cyber-green border border-cyber-green/40"
					>
						{currentImage.label}
					</span>
				{/if}
			</div>

			<div class="flex items-center gap-4">
				<span class="font-mono text-xs text-slate-300">
					FRAME <strong class="text-white font-bold">{currentIndex + 1}</strong> / {totalCount}
				</span>

				<button
					type="button"
					onclick={closeLightbox}
					class="px-3.5 py-1.5 rounded-lg bg-cyber-card border border-white/20 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider hover:border-cyber-pink hover:text-cyber-pink hover:bg-cyber-pink/15 transition-all flex items-center gap-1.5"
					aria-label="Close Lightbox"
				>
					<span>✕</span>
					<span class="hidden sm:inline">CLOSE [ESC]</span>
				</button>
			</div>
		</header>

		<!-- =========================================================================
		     MAIN VIEWPORT & NAVIGATION ARROWS
		     ========================================================================= -->
		<div
			class="relative z-10 w-full max-w-7xl mx-auto flex-1 flex items-center justify-between gap-2 sm:gap-6 py-4 overflow-hidden"
		>
			<!-- Previous Image Button -->
			{#if totalCount > 1}
				<button
					type="button"
					onclick={prevLightboxImage}
					class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-cyber-card/90 border-2 border-white/20 text-white hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-cyan/15 transition-all duration-200 shadow-lg flex items-center justify-center font-mono text-xl sm:text-2xl font-bold flex-shrink-0 active:scale-95"
					aria-label="Previous image [Arrow Left]"
				>
					‹
				</button>
			{/if}

			<!-- Expanded Image Frame -->
			<div
				class="relative flex-1 h-full flex items-center justify-center p-2 rounded-2xl border border-cyber-cyan/40 bg-cyber-void/80 shadow-[0_0_40px_rgba(0,240,255,0.15)] overflow-hidden"
			>
				<!-- Tactical Corner Decors -->
				<div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan"></div>
				<div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-green"></div>
				<div
					class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-violet"
				></div>
				<div
					class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-pink"
				></div>

				<img
					src={currentImage.src}
					alt={currentImage.alt || currentImage.title || 'Project Screenshot Fullscreen'}
					class="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl filter brightness-95 contrast-105"
				/>
			</div>

			<!-- Next Image Button -->
			{#if totalCount > 1}
				<button
					type="button"
					onclick={nextLightboxImage}
					class="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-cyber-card/90 border-2 border-white/20 text-white hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-cyber-cyan/15 transition-all duration-200 shadow-lg flex items-center justify-center font-mono text-xl sm:text-2xl font-bold flex-shrink-0 active:scale-95"
					aria-label="Next image [Arrow Right]"
				>
					›
				</button>
			{/if}
		</div>

		<!-- =========================================================================
		     HUD FOOTER TELEMETRY & CAPTION
		     ========================================================================= -->
		<footer
			class="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/15 font-mono text-xs text-slate-300"
		>
			<div class="flex items-center gap-2">
				<span class="text-cyber-cyan font-bold">IMAGE:</span>
				<span class="text-white font-slab"
					>{currentImage.title || currentImage.alt || 'Full-scale Project Display'}</span
				>
			</div>

			<div class="flex items-center gap-3 text-slate-400 text-[11px]">
				<span>[<kbd class="text-cyber-cyan font-bold">←</kbd>] PREV</span>
				<span>•</span>
				<span>[<kbd class="text-cyber-cyan font-bold">→</kbd>] NEXT</span>
				<span>•</span>
				<span>[<kbd class="text-cyber-pink font-bold">ESC</kbd>] EXIT</span>
			</div>
		</footer>
	</div>
{/if}
