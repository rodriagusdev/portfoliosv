import { projectAssets } from '#lib/images';

export interface ProjectItem {
	name: string;
	image: string;
	imageAlt: string;
	link: string;
	type: 'Design' | 'Website' | 'Game' | string;
	description?: string;
	tech?: string[];
	status?: string;
	featured?: boolean;
	year?: string;
	code?: string;
	sector?: string;
	metrics?: string;
	gallery?: string[];
	slices?: string[];
}

export const projectsPreview: ProjectItem[] = [
	{
		name: 'ARCFiction',
		image: projectAssets.arcfiction.main,
		imageAlt: 'Home menu featuring streaming catalogue',
		link: '/projects/arcfiction',
		type: 'Website',
		description:
			'Full-stack streaming database with user authentication, dynamic catalog exploration, and custom personal watchlists.',
		tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'NextAuth', 'Prisma', 'MongoDB'],
		status: 'ONLINE // DEPLOYED',
		featured: true,
		year: '2024',
		code: 'SYS_01 // MEDIA_CORE',
		sector: 'STREAMING_ENGINE',
		metrics: '99.9% UPTIME • AUTH_V5',
		gallery: projectAssets.arcfiction.gallery,
		slices: projectAssets.arcfiction.slices
	},
	{
		name: 'Google Clone',
		image: projectAssets.googleclone.main,
		imageAlt: 'Google Searcher custom interface preview',
		link: '/projects/googleclone',
		type: 'Website',
		description:
			'Feature-complete Google Search reproduction powered by Google Programmable Search API with live image and web indexing.',
		tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Google API', 'Geolocation'],
		status: 'ONLINE // DEPLOYED',
		featured: true,
		year: '2023',
		code: 'SYS_02 // QUERY_SYS',
		sector: 'SEARCH_INDEX',
		metrics: 'REST_V2 • ZERO_LATENCY',
		gallery: projectAssets.googleclone.gallery,
		slices: projectAssets.googleclone.slices
	},
	{
		name: 'Forest of An Ylthin',
		image: projectAssets.anylthin.main,
		imageAlt: 'Card Battle from the tactical game of An Ylthin',
		link: '/projects/anylthin',
		type: 'Game',
		description:
			'Tactical dark fantasy card battle game featuring turn-based combat, hero deck building, and custom encounter mechanics.',
		tech: ['React', 'TypeScript', 'Context API', 'SASS', 'Deck Builder'],
		status: 'PLAYABLE // BUILD',
		featured: true,
		year: '2023',
		code: 'SYS_03 // TACTICAL_CORE',
		sector: 'GAMEPLAY_ENGINE',
		metrics: '60 FPS • CUSTOM_SPRITES',
		gallery: projectAssets.anylthin.gallery,
		slices: projectAssets.anylthin.slices
	},
	{
		name: 'City of Hithair',
		image: projectAssets.cityhithair.main,
		imageAlt: 'Cemetery Level with skeletons from the game: City of Hithair',
		link: '/projects/cityofhithair',
		type: 'Game',
		description:
			'Atmospheric 2D action combat experience set inside a gothic cemetery infested with skeletal legions and boss encounters.',
		tech: ['React', 'TypeScript', 'Zustand', '2D Physics', 'Sprite Animation'],
		status: 'PLAYABLE // BUILD',
		year: '2023',
		code: 'SYS_04 // ACTION_SIM',
		sector: 'COMBAT_ARENA',
		metrics: '2D_PHYSICS • MULTI_LEVEL',
		gallery: projectAssets.cityhithair.gallery,
		slices: projectAssets.cityhithair.slices
	},
	{
		name: 'Basic Agency Concept',
		image: projectAssets.basicdept.main,
		imageAlt: 'Basic Department Agency Concept preview',
		link: 'https://basicagencymock.netlify.app/',
		type: 'Design',
		description:
			'High-impact agency concept with editorial typography, kinetic layout grids, and award-winning visual aesthetics.',
		tech: ['UI/UX', 'Responsive Web', 'Typography', 'Micro-Interactions'],
		status: 'LIVE PROTOTYPE',
		year: '2023',
		code: 'SYS_05 // EDITORIAL_UI',
		sector: 'CREATIVE_AGENCY',
		metrics: 'FLUID_MOTION • 100_SCORE',
		gallery: projectAssets.basicdept.gallery,
		slices: projectAssets.basicdept.slices
	},
	{
		name: 'Dua Lipa Albums',
		image: projectAssets.dualipa.main,
		imageAlt: 'Dua Lipa Concept two albums preview',
		link: 'https://dualipaconcept.netlify.app/',
		type: 'Design',
		description:
			'Synth-pop aesthetic discography showcase exploring neon chromatic styling, interactive album tracklists, and cover art.',
		tech: ['Visual Design', 'CSS Art', 'Synthwave UI', 'Responsive'],
		status: 'LIVE PROTOTYPE',
		year: '2023',
		code: 'SYS_06 // SYNTH_POP',
		sector: 'CHROMATIC_AUDIO',
		metrics: 'NEON_FX • GLASSMORPHISM',
		gallery: projectAssets.dualipa.gallery,
		slices: projectAssets.dualipa.slices
	}
];
