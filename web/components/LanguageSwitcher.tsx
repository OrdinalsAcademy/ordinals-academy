import { useTranslation } from 'next-i18next';
// ... your other imports

const languages = [
	{ code: 'en', label: 'English' },
	{ code: 'de', label: 'Deutsch' },
	// ... and so on for all your languages
];

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	return (
		<div className="relative group">
			{/* World SVG Icon */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6 cursor-pointer"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
					fill="currentColor"
				></path>
			</svg>

			{/* Dropdown */}
			<div className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg group-hover:block hidden">
				<div className="grid grid-cols-2 text-black">
					{languages.map((lang) => (
						<div
							key={lang.code}
							className="p-4 hover:bg-gray-200 cursor-pointer"
							onClick={() => i18n.changeLanguage(lang.code)}
						>
							{lang.label}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
