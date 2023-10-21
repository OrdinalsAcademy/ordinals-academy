import { useTheme } from '@/providers/ThemeProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const navItems = [
	{ name: 'Glossary', href: '/glossary' },
	// { name: 'Articles', href: '/articles' },
	// { name: 'Courses', href: '/courses' },
];

const NavItem = ({ item }: any) => (
	<Link href={item.href}>
		<span className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black hover:text-customBitcoin ml-4 dark:text-customWhite dark:hover:text-customBitcoin">
			{item.name}
		</span>
	</Link>
);

export default function DesktopMenu() {
	const { theme, toggleTheme } = useTheme();
	const { t, i18n } = useTranslation('common');

	const router = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onToggleLanguageClick = (newLocale: string) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: newLocale });
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const clientSideLanguageChange = (newLocale: string) => {
		i18n.changeLanguage(newLocale);
	};

	const changeTo = router.locale === 'en' ? 'de' : 'en';
	return (
		<div className="hidden lg:flex items-center justify-between w-full">
			<Link href="/">
				<span className="cursor-pointer flex items-center font-display text-2xl">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<span className="rounded-full p-1.5 px-5 text-xl tracking-tight font-Mitr text-customGray dark:text-white hover:text-customBitcoin dark:hover:text-customBitcoin">
							Ordinals Academy
						</span>
					</div>
				</span>
			</Link>
			<div className="text-sm lg:flex-grow flex items-center justify-end text-black dark:text-customWhite">
				{navItems.map((item) => (
					<NavItem key={item.name} item={item} />
				))}
				{/* 
				<Link href="/" locale={changeTo}>
					<button>{t('change-locale', { changeTo })}</button>
				</Link> */}
				<LanguageSwitcher />
				<button onClick={toggleTheme}>
					{theme === 'dark' ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							className="h-5 w-5 hover:text-customBitcoin"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
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
							className="h-5 w-5 hover:text-customBitcoin"
						>
							<path
								d="M20.968 12.768a7 7 0 01-9.735-9.735 9 9 0 109.735 9.735z"
								fill="currentColor"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);
}
