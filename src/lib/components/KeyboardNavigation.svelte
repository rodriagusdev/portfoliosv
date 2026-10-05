<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let showHelp = $state(false);

	const projectRoutes = [
		'/projects/arcfiction',
		'/projects/googleclone',
		'/projects/anylthin',
		'/projects/cityofhithair'
	];

	const handleKeyDown = (e: KeyboardEvent) => {
		// Ignore shortcuts if the user is typing in an input or textarea
		const target = e.target as HTMLElement | null;
		if (
			target &&
			(target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
		) {
			return;
		}

		// Toggle HUD shortcut cheat sheet with '?'
		if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
			e.preventDefault();
			showHelp = !showHelp;
			return;
		}

		if (e.key === 'Escape' && showHelp) {
			showHelp = false;
			return;
		}

		// Alt + Key fast navigation
		if (e.altKey) {
			const key = e.key.toLowerCase();
			if (key === 'h' || key === '1') {
				e.preventDefault();
				goto('/');
			} else if (key === 'p' || key === '2') {
				e.preventDefault();
				goto('/projects');
			} else if (key === 'e' || key === '3') {
				e.preventDefault();
				goto('/experience');
			} else if (key === 'a' || key === '4') {
				e.preventDefault();
				goto('/about');
			} else if (key === 'r' || key === '5') {
				e.preventDefault();
				goto('/resume');
			}
			return;
		}

		// Arrow navigation between project sub-routes
		const currentPath = page.url.pathname;
		const currentIndex = projectRoutes.indexOf(currentPath);
		if (currentIndex !== -1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
			if (e.key === 'ArrowRight' || e.key === 'KeyD') {
				e.preventDefault();
				const nextIndex = (currentIndex + 1) % projectRoutes.length;
				goto(projectRoutes[nextIndex]);
			} else if (e.key === 'ArrowLeft' || e.key === 'KeyA') {
				e.preventDefault();
				const prevIndex = (currentIndex - 1 + projectRoutes.length) % projectRoutes.length;
				goto(projectRoutes[prevIndex]);
			}
		}
	};

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<!-- Floating HUD Keyboard Shortcuts Helper -->
{#if showHelp}
	<div
		class="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 projectAnim"
		role="dialog"
		aria-label="Keyboard Shortcuts HUD"
	>
		<div
			class="relative w-full max-w-lg rounded-2xl border-2 border-cyber-cyan bg-cyber-void/95 p-6 sm:p-8 card-glow shadow-[0_0_30px_rgba(0,240,255,0.25)] flex flex-col gap-6"
		>
			<!-- Corner Decors -->
			<div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white"></div>
			<div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-green"></div>
			<div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-violet"></div>
			<div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-pink"></div>

			<div class="flex items-center justify-between border-b border-white/10 pb-4">
				<div
					class="flex items-center gap-2 font-synth text-sm text-cyber-cyan font-bold tracking-widest uppercase"
				>
					<span>⌨</span>
					<span>KEYBOARD_NAVIGATION // TELEMETRY</span>
				</div>
				<button
					type="button"
					onclick={() => (showHelp = false)}
					class="px-2.5 py-1 rounded font-mono text-xs text-slate-400 hover:text-white hover:bg-white/10"
					aria-label="Close keyboard shortcuts dialog"
				>
					✕ ESC
				</button>
			</div>

			<div class="flex flex-col gap-3 font-mono text-xs">
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Home Command Deck</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-cyan border border-cyber-cyan/40 font-bold"
						>ALT + H / 1</kbd
					>
				</div>
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Projects Archive</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-cyan border border-cyber-cyan/40 font-bold"
						>ALT + P / 2</kbd
					>
				</div>
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Experience Log</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-green border border-cyber-green/40 font-bold"
						>ALT + E / 3</kbd
					>
				</div>
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Operative Dossier (About)</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-pink border border-cyber-pink/40 font-bold"
						>ALT + A / 4</kbd
					>
				</div>
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Resume PDF Viewer</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-violet border border-cyber-violet/40 font-bold"
						>ALT + R / 5</kbd
					>
				</div>
				<div
					class="flex items-center justify-between p-2.5 rounded bg-cyber-card border border-white/10"
				>
					<span class="text-slate-300">Cycle Projects (When inside a project)</span>
					<kbd
						class="px-2 py-1 rounded bg-black text-cyber-amber border border-cyber-amber/40 font-bold"
						>← / →</kbd
					>
				</div>
			</div>

			<div
				class="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[11px] text-slate-400"
			>
				<span
					>Press <kbd class="px-1.5 py-0.5 bg-black text-cyber-cyan border border-white/20">?</kbd> anywhere
					to toggle this guide</span
				>
				<button
					type="button"
					onclick={() => (showHelp = false)}
					class="px-4 py-1.5 rounded bg-cyber-cyan text-black font-bold uppercase hover:bg-white transition-all"
				>
					Got It
				</button>
			</div>
		</div>
	</div>
{/if}
