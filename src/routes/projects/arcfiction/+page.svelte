<script>
	import arcfictionmedia from '$lib/images/arcfictionmain.webp';
	import arcfictiondisplay1 from '$lib/images/arcfictionshows.webp';
	import arcfictiondisplay2 from '$lib/images/arcfictionshows2.webp';
	import arcfictiondisplay3 from '$lib/images/arcfictionshows3.webp';
</script>

<section
	class="mt-40 flex flex-col base:flex-row gap-5 m-auto h-full w-[90%] md:w-[50%] justify-center md:projectAnim mb-20 sm:mb-0"
>
	<article class="flex flex-col flex-1 gap-5">
		<picture class="h-auto w-full">
			<img
				class="object-cover w-full h-full object-top sm:object-left"
				src={arcfictionmedia}
				alt="Media preview of Last Of Us."
			/>
		</picture>

		<h2>ARC Fiction</h2>

		<article class="w-full py-2 relative h-auto">
			<div class="flex justify-between">
				<h3>Overview</h3>

				<div class="flex gap-2 items-center pr-2">
					<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
					<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
				</div>
			</div>

			<p>Movie/tv show searcher that uses MovieDB API.</p>

			<ul class="project-list text-sm gap-3 flex flex-col mt-5">
				<li>
					Auth implemented. Alternatively, you can enter the links in the form to test the app
					without providing data.
				</li>
				<li>Catalogs of movies and tv shows.</li>
				<li>Displayed movies and tv shows can be accessed for more details.</li>
				<li>You can make your own lists and delete them.</li>
			</ul>
		</article>
	</article>

	<div class="flex-1 flex flex-col-reverse base:flex-col gap-2">
		<picture class="flex-1">
			<img
				class="w-full h-full object-cover"
				src={arcfictiondisplay1}
				alt="A showcase of some popular tv-shows like Demon Slayer or My Hero Academia."
			/>
		</picture>

		<picture class="flex-1">
			<img
				class="w-full h-full object-cover"
				src={arcfictiondisplay2}
				alt="A display of two movies: Barbie and Oppenheimer."
			/>
		</picture>

		<picture class="flex-1">
			<img
				class="w-full h-full object-cover"
				src={arcfictiondisplay3}
				alt="Overview of The Owl Hous."
			/>
		</picture>

		<ul class="project-techs">
			<li class="tech"><div class="skill">NextJS</div></li>

			<li class="tech"><div class="skill">Next-Auth</div></li>

			<li class="tech"><div class="skill">Typescript</div></li>

			<li class="tech"><div class="skill">TailwindCSS</div></li>

			<li class="tech"><div class="skill">Prisma</div></li>

			<li class="tech"><div class="skill">MongoDB</div></li>
		</ul>

		<div class="link-card">
			<a aria-label="To ARCFiction website" href="https://arcfictionrem.vercel.app/" target="_blank"
				>Website</a
			>

			<span class="divider" />

			<a
				aria-label="To github repository"
				href="https://github.com/Rodrj1/arcfiction-w-auth"
				target="_blank">Github</a
			>
		</div>
	</div>
</section>
