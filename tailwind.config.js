/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

				textured: 'url(src/lib/noise.svg)'
			},
			colors: {
				// 🌃 Paleta Interfaz Oscura / Synthwave (Ajustada)

				// FONDOS BASE
				'cyber-bg': '#0D091D', // Fondo base principal. Un negro muy oscuro con un toque de azul/púrpura. (El más oscuro de la imagen).
				'cyber-deep': '#1A0D32', // Fondo de panel/tarjeta de contenido (p. ej., el panel de 'COMMIT MESSAGE'). Tono intermedio.
				'cyber-bg-dark': '#2A1847', // Tono de fondo de elemento "seleccionado" o activo (p. ej., la barra bajo 'COMMIT MESSAGE').

				// COLORES DE LÍNEAS / GRÁFICO (GRAPHS)
				'cyber-purple': '#A200FF', // Violeta brillante de las líneas principales del gráfico y puntos de commit.
				'cyber-pink': '#FF00FF', // Magenta/Fucsia intenso. Puntos y líneas de acento o ramas secundarias. (Más brillante que el 'pink' original).
				'cyber-sky': '#4C4CFF', // Azul mediano/brillante. Se ve en algunas burbujas y líneas del gráfico.
				'cyber-turquoise': '#00FFE7', // Acento frío para contraste, se mantiene.

				// TEXTOS Y ELEMENTOS PEQUEÑOS
				'cyber-light': '#E0E0FF', // Texto claro principal (casi blanco, pero con tinte azulado).
				'cyber-gray': '#9D9DB8', // Texto secundario (p. ej., las horas "3 hours ago").
				'cyber-glow': '#B8B8FF', // Texto de las cabeceras (p. ej., 'BRANCHITAS', 'GRAPH'). Un azul/violeta claro.
				'cyber-text-primary': '#D8D8FF', // Un poco más brillante que 'cyber-light'. Para títulos o foco.
				'cyber-text-muted': '#B0B0E0', // Suavizado para hints, placeholders, tooltips.
				'cyber-text-accent': '#C0C0FF', // Resaltado sutil (p. ej., nombre de rama activa).

				// ETIQUETAS Y ESTADOS
				'cyber-red': '#FF3131', // Se mantiene para errores o estados de peligro. (No visible en esta imagen, pero útil).
				'cyber-yellow': '#f3ff6c', // Se mantiene para advertencias o detalles de foco.
				'cyber-green-neon': '#39ff14', // Se mantiene para éxito o estados activos.
				'cyber-blue-electric': '#3366FF'
			},
			fontFamily: {
				synth: ['Orbitron', 'sans-serif'],
				slab: ['Roboto Slab', 'sans-serif']
			},

			boxShadow: {
				glowPink: '0 0 12px #ff007f',
				glowBlue: '0 0 12px #0f3bff',
				glowPurple: '0 0 12px #a200ff'
			},

			backgroundImage: {
				// 🌌 NIGHT CITY — Fondo de Panel Profundo (Sustituto de fondo base para dar profundidad a secciones)
				'gradient-cyberpunk-nightcity':
					// Un degradado sutil de los fondos más oscuros para dar una sensación de profundidad.
					'linear-gradient(160deg, #0D091D 0%, #1A0D32 50%, #0D091D 100%)',
				'gradient-cyberpunk-alley':
					'linear-gradient(160deg, #010005 0%, #03000d 30%, #04001a 65%, #00080f 100%)',
				'gradient-cyberpunk-alley90':
					'linear-gradient(90deg, #010005 0%, #03000d 30%, #04001a 65%, #00080f 100%)',

				'gradient-cyberpunk-void': 'linear-gradient(160deg, #060312 0%, #120A25 40%, #1F1040 100%)',
				'gradient-cyberpunk-synthcore':
					'linear-gradient(160deg, #1A0D32 0%, #2A1847 40%, #4C4CFF 100%)'
			},
			screens: {
				base: '1048px',
				'2xl': '1420px'
			}
		}
	},
	plugins: []
};
