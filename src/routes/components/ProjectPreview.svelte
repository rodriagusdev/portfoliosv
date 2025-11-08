<script lang="ts">
	import { projectIndex } from '../../store';
	type ProjectPreview = {
		name: string;
		image: string;
		imageAlt: string;
		link: string;
		type: string;
	};

	export let projectPreview: ProjectPreview;
	export let index: number;

	const updateProjectIndex = () => {
		$projectIndex = index;
	};
</script>

<article
	class="w-full sm:w-[90%] min-h-[50vh] p-8
	border-t border-cyber-deep
	overflow-hidden transition-colors
	hover:bg-gradient-cyberpunk-synthcore md:hover:motion-safe:animate-pulse"
>
	<a
		class="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between group py-5"
		target={projectPreview.type === 'Design' ? '_blank' : ''}
		on:click={updateProjectIndex}
		href={projectPreview.link}
	>
		<h3
			class="group-hover:text-cyber-blue-electric text-2xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
			tracking-[10px] flex-1 text-left"
		>
			{projectPreview.name}
		</h3>

		<picture
			class="flex-1 flex justify-end items-center overflow-hidden"
		>
			<img
				class="w-full object-contain md:group-hover:scale-110 transition-transform duration-500
				grayscale-[0.3] md:group-hover:grayscale-0"
				src={projectPreview.image}
				alt={projectPreview.imageAlt}
			/>
		</picture>
	</a>
</article>
