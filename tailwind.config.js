/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// --- Sistema Metro UI 2026 × Glass Emerald ---
		// Sin sombras, sin gradientes (salvo emerald-divider), sin border-radius.
		extend: {
			colors: {
				bg: '#FFFFFF',
				fg: '#111111',
				blue: '#0078D7',
				'blue-dark': '#005A9E',
				cyan: '#00BCF2',
				'cyan-dark': '#0097C2',
				green: '#00A300',
				'green-dark': '#007A00',
				orange: '#F7630C',
				'orange-dark': '#C44D09',
				red: '#E81123',
				'red-dark': '#B50E1C',
				caption: '#555555',
				// Glass Emerald — sistema de énfasis
				emerald: '#00C896',
				'emerald-deep': '#007A5C'
			},
			fontFamily: {
				sans: [
					'Inter',
					'Segoe UI',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'sans-serif'
				]
			},
			fontWeight: {
				light: '300'
			},
			// Geometría Metro: ángulos rectos en todo.
			borderRadius: {
				none: '0',
				DEFAULT: '0',
				sm: '0',
				md: '0',
				lg: '0',
				xl: '0',
				'2xl': '0',
				'3xl': '0',
				full: '0'
			},
			boxShadow: {
				none: 'none'
			},
			// Animaciones lineales / intencionales (Windows 8).
			transitionTimingFunction: {
				metro: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
			},
			transitionDuration: {
				150: '150ms'
			},
			keyframes: {
				'slide-in-metro': {
					from: { transform: 'translateX(-24px)', opacity: '0' },
					to: { transform: 'translateX(0)', opacity: '1' }
				},
				'emerald-appear': {
					from: {
						transform: 'translateX(-16px)',
						opacity: '0',
						boxShadow: '0 0 0px rgba(0,200,150,0)'
					},
					to: {
						transform: 'translateX(0)',
						opacity: '1',
						boxShadow: '0 0 24px rgba(0,200,150,0.15)'
					}
				}
			},
			animation: {
				'slide-in-metro': 'slide-in-metro 200ms linear both',
				'emerald-appear': 'emerald-appear 220ms cubic-bezier(0.0,0.0,0.2,1) both'
			}
		}
	},
	plugins: []
};
