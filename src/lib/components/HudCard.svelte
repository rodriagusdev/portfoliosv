<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		sysId?: string;
		badge?: string;
		status?: string;
		borderColor?: string;
		glowColor?: string;
		children?: Snippet;
		headerExtra?: Snippet;
		class?: string;
	}

	let {
		title = '',
		sysId = '',
		badge = '',
		status = '',
		borderColor = 'border-cyber-cyan/40',
		glowColor = 'shadow-[0_0_25px_rgba(0,240,255,0.12)]',
		children,
		headerExtra,
		class: customClass = ''
	}: Props = $props();
</script>

<div
	class={`relative w-full rounded-2xl border ${borderColor} bg-cyber-surface/90 backdrop-blur-md p-6 sm:p-8 card-glow overflow-hidden ${glowColor} ${customClass}`}
>
	<!-- Tactical Corner Decors -->
	<div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyber-cyan"></div>
	<div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyber-green"></div>
	<div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyber-violet"></div>
	<div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyber-pink"></div>

	{#if sysId || badge || status || headerExtra}
		<div
			class="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6"
		>
			<div class="flex items-center gap-2.5">
				{#if sysId}
					<span
						class="font-mono text-xs font-bold px-2.5 py-0.5 bg-black text-cyber-cyan border border-cyber-cyan/40 rounded"
					>
						{sysId}
					</span>
				{/if}
				{#if badge}
					<span
						class="font-mono text-xs uppercase px-2.5 py-0.5 rounded bg-cyber-green/15 text-cyber-green border border-cyber-green/40"
					>
						{badge}
					</span>
				{/if}
			</div>

			<div class="flex items-center gap-3">
				{#if status}
					<span class="flex items-center gap-1.5 font-mono text-xs text-cyber-green">
						<span class="w-2 h-2 rounded-full bg-cyber-green animate-pulse"></span>
						{status}
					</span>
				{/if}
				{#if headerExtra}
					{@render headerExtra()}
				{/if}
			</div>
		</div>
	{/if}

	{#if title}
		<div class="relative z-10 mb-4">
			<h3 class="font-synth text-lg sm:text-xl font-bold text-white tracking-wide">{title}</h3>
		</div>
	{/if}

	<div class="relative z-10">
		{@render children?.()}
	</div>
</div>
