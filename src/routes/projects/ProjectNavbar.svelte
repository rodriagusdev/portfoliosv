<script lang="ts">
	import { page } from '$app/state';

	let path = $derived(page.url.pathname);

	const projectTabs = [
		{ name: 'ARCFiction', href: '/projects/arcfiction', tag: '01' },
		{ name: 'Google Clone', href: '/projects/googleclone', tag: '02' },
		{ name: 'An Ylthin', href: '/projects/anylthin', tag: '03' },
		{ name: 'City of Hithair', href: '/projects/cityofhithair', tag: '04' }
	];
</script>

<nav
	aria-label="Project Sub-navigation"
	class="w-full bg-cyber-void/90 border-b border-cyber-border/80 backdrop-blur-md sticky top-14 sm:top-16 z-40 px-3 sm:px-6 py-2.5 flex items-center justify-between overflow-x-auto scrollbar-none"
>
	<div class="flex items-center gap-2 sm:gap-3">
		<a
			href="/projects"
			class="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded bg-cyber-card border border-cyber-border text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all flex items-center gap-1.5 after:hidden whitespace-nowrap"
		>
			<span>←</span>
			<span class="hidden sm:inline">ALL PROJECTS</span>
			<span class="sm:hidden">ARCHIVE</span>
		</a>

		<div class="h-4 w-[1px] bg-cyber-border hidden sm:block"></div>

		<ul class="flex items-center gap-1.5 sm:gap-2 list-none p-0 m-0">
			{#each projectTabs as tab (tab.href)}
				<li>
					<a
						href={tab.href}
						class={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded border transition-all after:hidden flex items-center gap-1.5 whitespace-nowrap ${
							path === tab.href
								? 'bg-cyber-cyan text-black border-cyber-cyan shadow-glowCyan'
								: 'bg-cyber-surface/80 text-slate-300 border-white/10 hover:border-cyber-cyan/40 hover:text-white'
						}`}
					>
						<span class="text-[10px] opacity-70">#{tab.tag}</span>
						<span>{tab.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div
		class="hidden lg:flex items-center gap-2 font-mono text-[11px] text-cyber-cyan whitespace-nowrap pl-4"
	>
		<span class="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
		<span>SYS_SPEC // ACTIVE_NODE</span>
	</div>
</nav>
