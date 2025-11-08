<script>
	import googleclone from '$lib/images/googleclone.png';
	import googleclonearticles from '$lib/images/googleclonearticles.webp';
	import googlecloneimages from '$lib/images/googlecloneimages.webp';
</script>

<section
	class=" mt-40 flex flex-col base:flex-row gap-5 m-auto h-full w-[90%] md:w-[50%] justify-center projectAnim mb-20 sm:mb-0"
>
	<div class="flex flex-col flex-1 gap-5">
		<picture class="w-full">
			<img
				loading="lazy"
				class="w-full h-full object-cover"
				src={googleclone}
				alt="Google Clone preview."
			/>
		</picture>

		<h2>Google Clone</h2>

		<article class="w-full py-2 relative h-auto">
			<div class="flex justify-between">
				<h3>Overview</h3>

				<div class="flex gap-2 items-center pr-2">
					<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
				</div>
			</div>

			<p>Attempt at recreating a Google clone using Programmable Search Engine from Google APIs.</p>

			<ul class="project-list text-sm gap-3 flex flex-col mt-5">
				<li>Can search for any keyword available in Google.</li>
				<li>Can make a random search.</li>
				<li>Displays location using extreme-ip-lookup.</li>
				<li>Google Apps available at top right corner.</li>
				<li>Can lookup for both articles and images.</li>
			</ul>
		</article>
	</div>

	<div class="flex flex-col-reverse base:flex-col flex-1 gap-5">
		<picture class="h-[200px] w-full">
			<img
				class="object-cover w-full h-full"
				src={googleclonearticles}
				alt="Google Clone search."
			/>
		</picture>

		<picture class="h-[150px] w-full">
			<img
				class="w-full h-full object-cover"
				src={googlecloneimages}
				alt="Google Clone search results."
			/>
		</picture>

		<ul class="project-techs">
			<li class="tech"><div class="skill">NextJS</div></li>
			<li class="tech"><div class="skill">Typescript</div></li>
			<li class="tech"><div class="skill">TailwindCSS</div></li>
		</ul>

		<div class="link-card">
			<a
				aria-label="To Google Clone website"
				href="https://googleclonecustomscheme.vercel.app/"
				target="_blank">Website</a
			>

			<span class="divider" />

			<a
				aria-label="To github repository"
				href="https://github.com/Rodrj1/google-clone"
				target="_blank">Github</a
			>
		</div>
	</div>
</section>
