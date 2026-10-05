// ============================================================================
// Centralized Project Assets Registry
// Standardized mapping: <project>_main, <project>_1, <project>_2, ...
// ============================================================================

// Google Clone
import googleclone_main from './googleclone_main.png';
import googleclone_1 from './googleclone_1.webp';
import googleclone_2 from './googleclone_2.webp';

// ARCFiction
import arcfiction_main from './arcfictionmain.webp';
import arcfiction_1 from './arcfiction_1.webp';
import arcfiction_2 from './arcfiction_2.webp';
import arcfiction_3 from './arcfiction_3.webp';
import arcfiction_4 from './arcfictionshows_4.webp';

// Forest of An Ylthin
import anylthin_main from './anylthin_main.webp';
import anylthin_1 from './anylthin_1.webp';
import anylthin_2 from './anylthin_2.webp';
import elisith from './elisith.jpg';

// City of Hithair
import cityhithair_main from './cityhithair_main.webp';
import cityhithair_1 from './cityhithair_1.webp';
import cityhithair_2 from './cityhithair_2.webp';
import cityhithair_p1 from './cityhithair_portrait_1.jpg';
import cityhithair_p2 from './cityhithair_portrait_2.jpg';
import cityhithair_p3 from './cityhithair_portrait_3.jpg';
import cityhithair_p4 from './cityhithair_portrait_4.jpg';
import cityhithair_p5 from './cityhithair_portrait_5.jpg';

// Dua Lipa Concept
import newdua_main from './newdua_main.webp';
import newdua_1 from './newdua_1.png';
import newdua_2 from './newdua_2.png';

// Basic Agency
import basicdept_1 from './basicdept_1.png';
import basicdept_2 from './basicdept_2.png';

export interface ProjectAssetGroup {
	main: string;
	slices: string[];
	gallery: string[];
	portraits?: string[];
}

export const projectAssets = {
	arcfiction: {
		main: arcfiction_main,
		slices: [arcfiction_main, arcfiction_1, arcfiction_2],
		gallery: [arcfiction_main, arcfiction_1, arcfiction_2, arcfiction_3, arcfiction_4]
	},
	googleclone: {
		main: googleclone_main,
		slices: [googleclone_main, googleclone_1, googleclone_2],
		gallery: [googleclone_main, googleclone_1, googleclone_2]
	},
	anylthin: {
		main: anylthin_main,
		slices: [anylthin_1, anylthin_main, anylthin_2],
		gallery: [anylthin_main, anylthin_1, anylthin_2, elisith]
	},
	cityhithair: {
		main: cityhithair_main,
		slices: [cityhithair_1, cityhithair_main, cityhithair_2],
		gallery: [cityhithair_main, cityhithair_1, cityhithair_2],
		portraits: [cityhithair_p1, cityhithair_p2, cityhithair_p3, cityhithair_p4, cityhithair_p5]
	},
	basicdept: {
		main: basicdept_1,
		slices: [basicdept_1, basicdept_2, basicdept_1],
		gallery: [basicdept_1, basicdept_2]
	},
	dualipa: {
		main: newdua_main,
		slices: [newdua_main, newdua_1, newdua_2],
		gallery: [newdua_main, newdua_1, newdua_2]
	}
} satisfies Record<string, ProjectAssetGroup>;

// Re-export individual images for flexible imports
export {
	googleclone_main,
	googleclone_1,
	googleclone_2,
	arcfiction_main,
	arcfiction_1,
	arcfiction_2,
	arcfiction_3,
	arcfiction_4,
	anylthin_main,
	anylthin_1,
	anylthin_2,
	elisith,
	cityhithair_main,
	cityhithair_1,
	cityhithair_2,
	cityhithair_p1,
	cityhithair_p2,
	cityhithair_p3,
	cityhithair_p4,
	cityhithair_p5,
	newdua_main,
	newdua_1,
	newdua_2,
	basicdept_1,
	basicdept_2
};
