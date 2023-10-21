import { useTheme } from '@/providers/ThemeProvider';

export default function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button onClick={toggleTheme}>
			{theme === 'dark' ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					className="h-7 w-7 hover:text-customBitcoin md:h-5 md:w-5"
				>
					<path
						d="M10.5 2h3v3h-3V2zM16 12a4 4 0 11-8 0 4 4 0 018 0zM5.99 3.869L3.867 5.99 5.99 8.112 8.111 5.99 5.989 3.87zM2 13.5v-3h3v3H2zm1.868 4.51l2.121 2.12 2.122-2.12-2.122-2.122-2.121 2.121zM13.5 19v3h-3v-3h3zm4.51-3.112l-2.121 2.122 2.121 2.121 2.121-2.121-2.121-2.122zM19 10.5h3v3h-3v-3zm-3.11-4.51l2.12 2.121 2.122-2.121-2.121-2.121-2.122 2.121z"
						fill="currentColor"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="h-7 w-7 hover:text-customBitcoin md:h-5 md:w-5"
				>
					<path
						d="M20.968 12.768a7 7 0 01-9.735-9.735 9 9 0 109.735 9.735z"
						fill="currentColor"
					/>
				</svg>
			)}
		</button>
	);
}
