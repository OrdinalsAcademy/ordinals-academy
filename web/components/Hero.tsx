import { useTranslation } from 'next-i18next';

export default function Hero() {
	const { t } = useTranslation('common');

	const videoDate = 11;
	const videoLength = 27;

	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2">
			<div className="pl-6 m-5 md:ml-[200px] md:pl-24 text-customGray dark:text-customWhite">
				<div className="uppercase font-bold mb-2">
					{t('subheading')}
				</div>
				<h1 className="text-4xl md:text-6xl font-bold mb-5">
					{t('h1')}
				</h1>
				<p className="text-lg mb-8 md:mr-10">{t('description')}</p>
				<a href="/glossary">
					<button className="items-center border border-transparent rounded inline-flex font-semibold justify-center whitespace-nowrap focus:outline-none text-base h-12 leading-6 px-4 bg-customBitcoin text-white dark:bg-customWhite dark:text-customDark">
						{t('startButton')}
					</button>
				</a>
			</div>
			<div className="p-4 md:p-16 pl-10 bg-white dark:bg-customGray">
				<div>
					<div className="uppercase font-bold mb-2">
						{t('featured')}
					</div>
					<div className="mb-4 relative rounded-lg overflow-hidden">
						<iframe
							className="rounded-lg w-[auto] md:w-[560px] h-[200px] md:h-[315px]"
							src="https://www.youtube.com/embed/z8gtUPtji1c?si=OdH0gTN50_XElgyY"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen={true}
						></iframe>
					</div>
					<a className="text-xl text-customGray dark:text-customWhite mb-4 font-bold">
						{t('titleVideo')}
					</a>
					<div className="flex items-center text-gray-500 mb-4">
						<span>
							{t('datePrefix')} {videoDate}, 2023
						</span>
						<div className="ml-4">
							<span>
								{videoLength}
								{t('videoLengthSuffix')}
							</span>
						</div>
					</div>
					<div className="items-center rounded-lg inline-flex justify-center px-2 text-customGray dark:text-white bg-green-400 bg-opacity-30 h-9 text-base">
						<div className="bg-[rgb(2,192,118)] rounded-full mr-2 h-2 w-2" />
						{t('skillLevel')}
					</div>
				</div>
			</div>
		</div>
	);
}
