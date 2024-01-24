// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/ui',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts'
	],
	googleFonts: {
		display: 'swap',
		families: {
			'Inter': true
		}
	},
	ui: {
		icons: ['mdi', 'heroicons']
	},
	app: {
		head: {
			title: 'Melvin MENANTEAU',
			htmlAttrs: {
				lang: 'fr'
			}
		}
	},
	colorMode: {
		preference: 'light'
	},
	devtools: {
		enabled: false
	}
})