import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function NavBar() {
	return (
		<nav>
			<div
				className={`top-0 w-full flex justify-center z-30 bg-customWhite dark:bg-customDark`}
			>
				<div className="md:mx-5 flex h-16 items-center w-full">
					<MobileMenu />
					<DesktopMenu />
				</div>
			</div>
		</nav>
	);
}
