import {
	createContext,
	useContext,
	ReactNode,
	useState,
	useEffect,
} from 'react';

type Theme = 'light' | 'dark';

interface State {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<State | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>('dark');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	useEffect(() => {
		const root = window.document.documentElement;

		if (theme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useTheme = (): State => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
