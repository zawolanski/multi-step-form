import { writable } from 'svelte/store';

export const isFormValid = writable(false);
export const isConfirmed = writable(false);