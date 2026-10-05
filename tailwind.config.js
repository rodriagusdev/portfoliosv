/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				textured: 'url(src/lib/noise.svg)',
				'gradient-cyberpunk-nightcity':
					'linear-gradient(160deg, #06080F 0%, #0A0E1A 50%, #06080F 100%)',
				'gradient-cyberpunk-alley':
					'linear-gradient(160deg, #030408 0%, #06080F 40%, #0A0E1A 100%)',
				'gradient-cyberpunk-alley90':
					'linear-gradient(90deg, #030408 0%, #06080F 50%, #0A0E1A 100%)',
				'gradient-cyberpunk-void': 'linear-gradient(160deg, #030408 0%, #06080F 50%, #0F172A 100%)',
				'gradient-cyberpunk-synthcore':
					'linear-gradient(160deg, #0A0E1A 0%, #1A0D32 50%, #00F0FF 100%)'
			},
			colors: {
				// ⚡ Centralized High-Tech Cyber Matrix Palette
				cyber: {
					void: '#06080F', // Deep void black base
					surface: '#090D18', // Primary surface panel
					card: '#0A0E1A', // Sub-panel / card surface
					deep: '#0D1322', // Interactive container surface
					dark: '#030408', // Deepest contrast black

					// Core Neon Accents
					cyan: '#00F0FF', // Primary electric cyan
					turquoise: '#00F0FF', // Alias
					violet: '#A855F7', // Laser violet / quantum purple
					purple: '#A855F7', // Alias
					green: '#00FF66', // Matrix terminal green
					'green-neon': '#00FF66', // Alias
					pink: '#FF007A', // Synthwave magenta / coral
					amber: '#FFB800', // Solar amber / warning gold
					yellow: '#FFB800', // Alias
					blue: '#3B82F6', // Hyper cobalt blue
					'blue-electric': '#3B82F6', // Alias
					sky: '#38BDF8', // Electric ice sky

					// Monochromatic & Typography
					light: '#E2E8F0', // Primary light body text
					gray: '#94A3B8', // Muted secondary text
					glow: '#00F0FF', // Header glow
					'text-primary': '#F8FAFC',
					'text-muted': '#64748B',
					'text-accent': '#38BDF8',

					// Semantic Border & Outlines
					border: 'rgba(0, 240, 255, 0.3)',
					'border-subtle': 'rgba(255, 255, 255, 0.12)'
				}
			},
			fontFamily: {
				synth: ['Orbitron', 'sans-serif'],
				slab: ['Roboto Slab', 'sans-serif'],
				poster: ['"Bebas Neue"', 'Impact', 'sans-serif'],
				syne: ['Syne', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
			},
			boxShadow: {
				glowCyan: '0 0 15px rgba(0, 240, 255, 0.4)',
				glowViolet: '0 0 15px rgba(168, 85, 247, 0.4)',
				glowGreen: '0 0 15px rgba(0, 255, 102, 0.4)',
				glowPink: '0 0 15px rgba(255, 0, 122, 0.4)',
				glowAmber: '0 0 15px rgba(255, 184, 0, 0.4)'
			},
			screens: {
				base: '1048px',
				'2xl': '1420px'
			}
		}
	},
	plugins: []
};
