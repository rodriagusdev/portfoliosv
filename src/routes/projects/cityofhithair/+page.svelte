<script>
	import cemetery from '$lib/images/cemetery.webp';
	import battlecity from '$lib/images/battlecity.webp';
	import cityhithair from '$lib/images/cityhithair.webp';
	import nicolai from '$lib/images/nicolai.jpg';
	import magehero from '$lib/images/magehero.jpg';
	import knighthero from '$lib/images/knighthero.jpg';
	import knight from '$lib/images/knight.jpg';
	import marion from '$lib/images/marion.jpg';
</script>

<section
	class=" mt-40 flex flex-col base:flex-row gap-5 m-auto h-full w-[90%] md:w-[50%] justify-center projectAnim mb-20 sm:mb-0"
>
	<article class="flex flex-col flex-1 gap-5">
		<picture class="h-auto w-full">
			<img
				class="w-full h-full object-cover"
				loading="lazy"
				src={cityhithair}
				alt="Cemetery level."
			/>
		</picture>

		<h2>City of Hithair</h2>

		<div class="flex justify-between z-50">
			<h3>Overview</h3>
			<div class="flex gap-2 items-center pr-2">
				<div class="h-[10px] w-[10px] bg-orange-400 rounded-full" />
				<div class="h-[10px] w-[10px] bg-green-400 rounded-full" />
				<div class="h-[10px] w-[10px] bg-red-500 rounded-full" />
			</div>
		</div>

		<p class="z-50">
			Meant to be played in desktop. Hithair has turned to turmoil when a wanderer broke through the
			cemetery and down the mausoleum. After his incursion beneath, sounds, screeches, and voices
			echoed underground. Find the secret below the earth.
		</p>

		<ul class="project-list text-sm gap-3 flex flex-col z-50 mt-5">
			<li>Two eligible heroes: Knight and Dark Wizard.</li>
			<li>1v1 turn-based game.</li>
			<li>Five levels.</li>
		</ul>
	</article>

	<div class="flex-1 flex flex-col-reverse base:flex-col gap-3 justify-between">
		<div class="flex-1 flex gap-3 ">
			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={magehero}
					alt="Dark Mage Hero."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={knighthero}
					alt="Knight Hero."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={knight}
					alt="NPC Knight."
				/>
			</picture>

			<picture class="flex-1">
				<img
					class="w-full h-[100px] rounded-full p-2 border border-zinc-800 object-cover"
					src={marion}
					alt="NPC Marion."
				/>
			</picture>

			<picture class="h-[205px] w-[205px] fixed invisible lg:visible left-[4.5%] top-[20%]">
				<img
					class="object-cover h-full w-full rounded-full p-2 border border-zinc-800"
					loading="lazy"
					src={nicolai}
					alt="Nicolai, the wanderer."
				/>
			</picture>
		</div>

		<picture class="z-20">
			<img
				class="object-cover base:max-h-[200px] w-full"
				src={cemetery}
				loading="lazy"
				alt="Preview of Cemetery level in City of Hithair."
			/>
		</picture>

		<picture class="w-full">
			<img
				class="object-cover base:max-h-[200px] w-full"
				loading="lazy"
				src={battlecity}
				alt="City of Hithair battle preview."
			/>
		</picture>

		<ul class="project-techs">
			<li class="tech"><div class="skill">React</div></li>
			<li class="tech"><div class="skill">Typescript</div></li>
			<li class="tech"><div class="skill">Zustand</div></li>
			<li class="tech"><div class="skill">SASS</div></li>
		</ul>

		<div class="link-card">
			<a
				aria-label="To City of Hithair website"
				href="https://cityofhithair.netlify.app/"
				target="_blank">Play</a
			>

			<span class="divider" />

			<a
				aria-label="To github repository"
				href="https://github.com/Rodrj1/turnbased-minigame"
				target="_blank">Github</a
			>
		</div>
	</div>
</section>
