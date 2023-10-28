import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import x from '/public/images/x.png';
import zealy from '/public/images/zealy.ico';

export const Footer = () => {
	const { t } = useTranslation('footer');

	return (
		<footer className="flex w-full text-white pt-12 pb-20 bg-customWhite dark:bg-customDark text-black dark:text-white">
			<div className=" max-w-6xl container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<Link
					href="/"
					className="cursor-pointer flex font-display text-2xl"
				>
					<div className="flexflex-shrink-0 text-white">
						<span className="rounded-full p-1.5 text-xl tracking-tight font-Mitr text-customGray dark:text-white hover:text-customBitcoin dark:hover:text-customBitcoin">
							Ordinals Academy
						</span>
					</div>
				</Link>
				<div>
					<h3 className="font-bold mb-2">Discover</h3>
					<ul>
						<li className="mb-2">
							<Link href="/articles" className="hover:underline">
								Articles
							</Link>
						</li>
						<li className="mb-2">
							<Link href="/glossary" className="hover:underline">
								Glossary
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-bold mb-2">Community</h3>
					<ul>
						<li className="mb-2">
							<a
								href="https://zealy.io/c/ordinalsacademy/questboard"
								className="hover:underline"
							>
								Contribute
							</a>
						</li>
						<li className="mb-2">
							<a
								href="https://zealy.io/c/ordinalsacademy/questboard"
								className="hover:underline"
							>
								Donate
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-bold mb-3">Socials</h3>
					<div className="flex space-x-4">
						<a
							href="https://twitter.com/OrdinalsAcademy"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={x.src}
								alt="Twitter"
								width={20}
								height={20}
							/>
						</a>
						<a
							href="https://zealy.io/c/ordinalsacademy/questboard"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={zealy.src}
								alt="Zealy"
								width={20}
								height={20}
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
