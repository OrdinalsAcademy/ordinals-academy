import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				customDark: 'rgb(20, 21, 26)',
				customWhite: 'rgb(234, 236, 239)',
				customGray: 'rgb(43, 47, 54)',
				customLightGray: 'rgb(236, 239, 240)',
				customDarker: 'rgb(11, 14, 17)',
				customBitcoin: 'rgb(247, 147, 26)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				Mitr: ['Mitr', 'cursive'],
			},
		},
	},
	plugins: [],
};
export default config;
