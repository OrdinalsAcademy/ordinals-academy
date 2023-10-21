// import { useTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';

const navItems = [
	{ name: 'Glossary', href: '/glossary' },
	{ name: 'Articles', href: '/articles' },
	{ name: 'Courses', href: '/courses' },
];

const NavItem = ({ item }: any) => (
	<Link href={item.href}>
		<span className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4 dark:text-customWhite">
			{item.name}
		</span>
	</Link>
);

export default function DesktopMenu() {
	// const { theme, toggleTheme } = useTheme();
	return (
		<div className="hidden lg:flex items-center justify-between w-full">
			<Link href="/">
				<span className="cursor-pointer flex items-center font-display text-2xl">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="rounded-full transition-all p-1.5 px-5 font-semibold text-xl tracking-tight font-Mitr">
							Ordinals Academy
						</span>
					</div>
				</span>
			</Link>
			<div className="text-sm lg:flex-grow flex items-center justify-end text-black dark:text-customWhite">
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} />
				))}
				{/* <button onClick={toggleTheme}>
					Switch to {theme === 'dark' ? 'light' : 'dark'} mode
				</button> */}
			</div>
		</div>
	);
}
