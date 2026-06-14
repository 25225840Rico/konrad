/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#0A1628',
				secondary: '#0F2040',
				accent: '#F59E0B',
				accent2: '#0EA5E9',
				accent3: '#8B5CF6',
				accentAI: '#10B981',
				surface: '#F8FAFC',
				ink: '#E2E8F0',
				muted: '#64748B',
				glass: 'rgba(255,255,255,0.06)',
				glassBorder: 'rgba(255,255,255,0.12)',
				aiGlow: 'rgba(16,185,129,0.15)'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
			},
			keyframes: {
				ticker: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'city-in': {
					from: { opacity: '0', transform: 'translateY(12px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'city-out': {
					from: { opacity: '1', transform: 'translateY(0)' },
					to: { opacity: '0', transform: 'translateY(-12px)' }
				}
			},
			animation: {
				ticker: 'ticker 30s linear infinite',
				float: 'float 6s ease-in-out infinite',
				'city-in': 'city-in 0.5s cubic-bezier(0.4,0,0.2,1) both',
				'city-out': 'city-out 0.4s cubic-bezier(0.4,0,0.2,1) both'
			}
		}
	},
	plugins: []
};
