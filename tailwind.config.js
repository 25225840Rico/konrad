/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// --- Base oscura (tema premium) ---
				primary: '#0F172A', // navy (acentos / superficies sólidas)
				abyss: '#070B16', // fondo más profundo de la escena
				accent: '#F59E0B', // ámbar (CTAs, foco)
				'accent-soft': '#FBBF24',
				surface: '#0B1120', // fondo base de página (antes era claro)
				// Texto sobre oscuro
				ink: '#F1F5F9', // texto principal (slate-100)
				muted: '#94A3B8', // texto secundario (slate-400)
				faint: '#64748B' // texto terciario (slate-500)
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			// Sistema de espaciado en múltiplos de 8px (grid 8pt)
			spacing: {
				18: '4.5rem', // 72
				22: '5.5rem', // 88
				30: '7.5rem' // 120
			},
			borderRadius: {
				xl: '0.875rem',
				'2xl': '1.25rem',
				'3xl': '1.75rem'
			},
			transitionTimingFunction: {
				// Easing natural / spring para motion (iOS / VisionOS / Linear)
				spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
				'spring-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				exit: 'cubic-bezier(0.4, 0, 1, 1)'
			},
			transitionDuration: {
				90: '90ms', // click
				120: '120ms' // hover
			},
			boxShadow: {
				// Sombra de vidrio: elevación + highlight interno superior (Fresnel)
				glass:
					'0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.20), inset 0 -1px 0 rgba(0,0,0,0.25)',
				'glass-lg':
					'0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.30)',
				glow: '0 0 0 1px rgba(245,158,11,0.35), 0 8px 30px rgba(245,158,11,0.25)'
			},
			backdropBlur: {
				glass: '24px'
			}
		}
	},
	plugins: []
};
