import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const languages = [
	{ code: 'en', label: 'English' },
	{ code: 'zh', label: '中文' }, // Simplified Chinese
	{ code: 'vi', label: 'Tiếng Việt' }, // Vietnamese
	{ code: 'ru', label: 'Русский' }, // Russian
	{ code: 'ko', label: '한국어' }, // Korean
	{ code: 'ja', label: '日本語' }, // Japanese
	{ code: 'es', label: 'Español' }, // Spanish
	{ code: 'pt', label: 'Português' }, // Portuguese
	{ code: 'fr', label: 'Français' }, // French
	{ code: 'de', label: 'Deutsch' }, // German
	{ code: 'nl', label: 'Nederlands' }, // Dutch
];

export default function LanguageSwitcher() {
	const [showDropdown, setShowDropdown] = useState(false);
	const containerRef = useRef<any>(null);
	const router = useRouter();

	useEffect(() => {
		function handleOutsideClick(event: any) {
			// If the dropdown is open and the click is outside the container, close the dropdown
			if (showDropdown && !containerRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		}

		// Attach the click event listener
		document.addEventListener('mousedown', handleOutsideClick);

		// Cleanup the listener on component unmount
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [showDropdown]);

	const handleChangeLanguage = async (locale: string) => {
		await router.push(router.asPath, undefined, { locale });
	};

	return (
		<div
			ref={containerRef}
			className="relative inline-block p-4"
			onMouseEnter={() => setShowDropdown(true)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 cursor-pointer hover:text-customBitcoin"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<path
					d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
					fill="currentColor"
				></path>
			</svg>

			{/* Dropdown */}
			<div
				className={
					showDropdown
						? 'absolute right-0 mt-5 w-60 divide-y divide-gray-100 rounded block text-center bg-customWhite dark:bg-customDark dark:text-customWhite z-10'
						: 'hidden'
				}
			>
				<div className="grid grid-cols-2">
					{languages.map((lang) => (
						<div
							key={lang.code}
							onClick={() => handleChangeLanguage(lang.code)}
							className={`p-4 cursor-pointer hover:text-customBitcoin ${
								router.locale === lang.code
									? 'text-customBitcoin'
									: ''
							}`}
						>
							{lang.label}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
