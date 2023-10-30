import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import { useTranslation } from 'next-i18next';

const NavItem = ({ item }: any) => (
	<Link href={item.href}>
		<span className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black hover:text-customBitcoin ml-4 dark:text-customWhite dark:hover:text-customBitcoin">
			{item.name}
		</span>
	</Link>
);

export default function DesktopMenu() {
	const { t } = useTranslation('common');
	return (
		<div className="hidden lg:flex items-center justify-between w-full">
			<Link href="/">
				<span className="cursor-pointer flex items-center font-display text-2xl">
					<div className="flex items-center flex-shrink-0 text-white">
						<span className="rounded-full p-1.5 text-xl tracking-tight font-Mitr text-customGray dark:text-white hover:text-customBitcoin dark:hover:text-customBitcoin">
							Ordinals Academy
						</span>
					</div>
				</span>
			</Link>
			<div className="text-sm lg:flex-grow flex items-center justify-end text-black dark:text-customWhite">
				{/* {navItems.map((item) => (
					<NavItem key={item.name} item={item} />
				))} */}
				<NavItem item={{ name: t('Home'), href: '/' }} />
				<NavItem item={{ name: t('Glossary'), href: '/glossary' }} />
				<NavItem item={{ name: t('Articles'), href: '/articles' }} />
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</div>
	);
}
