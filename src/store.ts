import { writable, type Writable } from 'svelte/store';

export const accessibilityMenuIsOpen: Writable<boolean> = writable(false);

export const ADHDMode: Writable<boolean> = writable(false);

export const cognitiveDissabilityMode: Writable<boolean> = writable(false);

export const projectIndex: Writable<number> = writable(0);
