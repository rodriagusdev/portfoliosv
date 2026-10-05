import { writable } from 'svelte/store';

export interface LightboxImage {
	src: string;
	alt?: string;
	title?: string;
	label?: string;
}

export interface LightboxState {
	isOpen: boolean;
	images: LightboxImage[];
	currentIndex: number;
}

export const lightboxStore = writable<LightboxState>({
	isOpen: false,
	images: [],
	currentIndex: 0
});

export const openLightbox = (images: (string | LightboxImage)[], startIndex = 0) => {
	const normalized: LightboxImage[] = images.map((img) =>
		typeof img === 'string' ? { src: img, alt: 'Project Screenshot' } : img
	);
	lightboxStore.set({
		isOpen: true,
		images: normalized,
		currentIndex: Math.max(0, Math.min(startIndex, normalized.length - 1))
	});
};

export const closeLightbox = () => {
	lightboxStore.update((state) => ({ ...state, isOpen: false }));
};

export const nextLightboxImage = () => {
	lightboxStore.update((state) => {
		if (state.images.length <= 1) return state;
		return {
			...state,
			currentIndex: (state.currentIndex + 1) % state.images.length
		};
	});
};

export const prevLightboxImage = () => {
	lightboxStore.update((state) => {
		if (state.images.length <= 1) return state;
		return {
			...state,
			currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length
		};
	});
};
