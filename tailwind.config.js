/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F172A', // azul marino muy oscuro
				accent: '#F59E0B', // ámbar
				surface: '#F8FAFC', // gris clarísimo
				ink: '#1E293B', // texto principal
				muted: '#64748B' // texto secundario
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};
