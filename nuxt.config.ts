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
	devtools: {
		enabled: false
	}
})