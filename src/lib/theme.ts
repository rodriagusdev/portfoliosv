// ============================================================================
// Centralized Cyber Theme Definitions & Project Card Presets
// ============================================================================

export interface CyberTheme {
	id: string;
	name: string;
	bg: string;
	border: string;
	neonColor: string;
	titleColor: string;
	badge: string;
	tagBg: string;
	btn: string;
	subtleBg: string;
	glow: string;
}

export const projectCardThemes: CyberTheme[] = [
	{
		id: 'cyan',
		name: 'Cyber Cyan',
		bg: 'bg-[#060D18]',
		border: 'border-cyber-cyan/30',
		neonColor: '#00F0FF',
		titleColor: 'text-white group-hover:text-cyber-cyan',
		badge: 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan/40',
		tagBg: 'bg-[#0B1A2C] text-cyber-sky border-cyber-sky/30',
		btn: 'bg-cyber-cyan text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.4)]',
		subtleBg: 'bg-cyber-cyan/5',
		glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]'
	},
	{
		id: 'violet',
		name: 'Laser Violet',
		bg: 'bg-[#0C071A]',
		border: 'border-cyber-violet/30',
		neonColor: '#A855F7',
		titleColor: 'text-white group-hover:text-[#C084FC]',
		badge: 'bg-cyber-violet/15 text-[#C084FC] border-cyber-violet/40',
		tagBg: 'bg-[#1C0D36] text-[#D8B4FE] border-[#D8B4FE]/30',
		btn: 'bg-cyber-violet text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(168,85,247,0.4)]',
		subtleBg: 'bg-cyber-violet/5',
		glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]'
	},
	{
		id: 'emerald',
		name: 'Terminal Emerald',
		bg: 'bg-[#04120B]',
		border: 'border-cyber-green/30',
		neonColor: '#00FF66',
		titleColor: 'text-white group-hover:text-cyber-green',
		badge: 'bg-cyber-green/15 text-cyber-green border-cyber-green/40',
		tagBg: 'bg-[#072415] text-[#34D399] border-[#34D399]/30',
		btn: 'bg-cyber-green text-black hover:bg-white shadow-[0_0_15px_rgba(0,255,102,0.4)]',
		subtleBg: 'bg-cyber-green/5',
		glow: 'shadow-[0_0_20px_rgba(0,255,102,0.15)]'
	},
	{
		id: 'crimson',
		name: 'Crimson Laser',
		bg: 'bg-[#14060B]',
		border: 'border-cyber-pink/30',
		neonColor: '#FF007A',
		titleColor: 'text-white group-hover:text-cyber-pink',
		badge: 'bg-cyber-pink/15 text-[#FF3377] border-cyber-pink/40',
		tagBg: 'bg-[#290B15] text-[#FDA4AF] border-[#FDA4AF]/30',
		btn: 'bg-cyber-pink text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,0,122,0.4)]',
		subtleBg: 'bg-cyber-pink/5',
		glow: 'shadow-[0_0_20px_rgba(255,0,122,0.15)]'
	},
	{
		id: 'amber',
		name: 'Solar Amber',
		bg: 'bg-[#140F05]',
		border: 'border-cyber-amber/30',
		neonColor: '#FFB800',
		titleColor: 'text-white group-hover:text-cyber-amber',
		badge: 'bg-cyber-amber/15 text-[#FCD34D] border-cyber-amber/40',
		tagBg: 'bg-[#291E0A] text-[#FDE68A] border-[#FDE68A]/30',
		btn: 'bg-cyber-amber text-black hover:bg-white shadow-[0_0_15px_rgba(255,184,0,0.4)]',
		subtleBg: 'bg-cyber-amber/5',
		glow: 'shadow-[0_0_20px_rgba(255,184,0,0.15)]'
	},
	{
		id: 'blue',
		name: 'Deep Cobalt',
		bg: 'bg-[#060B18]',
		border: 'border-cyber-blue/30',
		neonColor: '#3B82F6',
		titleColor: 'text-white group-hover:text-[#60A5FA]',
		badge: 'bg-cyber-blue/15 text-[#93C5FD] border-cyber-blue/40',
		tagBg: 'bg-[#0E1C38] text-[#BFDBFE] border-[#BFDBFE]/30',
		btn: 'bg-cyber-blue text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(59,130,246,0.4)]',
		subtleBg: 'bg-cyber-blue/5',
		glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]'
	}
];

export const filterCategoryConfig = [
	{ label: 'ALL SYSTEMS', filter: '', color: 'cyber-cyan', border: 'border-cyber-cyan' },
	{ label: 'WEBSITES', filter: 'Website', color: 'cyber-violet', border: 'border-cyber-violet' },
	{ label: 'ENGINES & GAMES', filter: 'Game', color: 'cyber-green', border: 'border-cyber-green' },
	{ label: 'DESIGN SYSTEMS', filter: 'Design', color: 'cyber-pink', border: 'border-cyber-pink' }
];
