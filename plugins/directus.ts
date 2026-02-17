import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

//const directus = createDirectus('http://localhost:8055').with(rest());

const directus = createDirectus('https://karbon-planet-directus-ua6jt.ondigitalocean.app').with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { 
			directus, readItem, readItems },
	};
});

export const directusURL = 'https://karbon-planet-directus-ua6jt.ondigitalocean.app/'
export const directusURLAssets = 'https://karbon-planet-directus-ua6jt.ondigitalocean.app/assets/'