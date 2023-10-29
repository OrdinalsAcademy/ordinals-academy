import React from 'react';
import Image from 'next/image';
import FrankenImage from 'public/franken_pfp.jpeg';
import { useTranslation } from 'next-i18next';

const Banner: React.FC = () => {
	const { t } = useTranslation('common');
	return (
		<div className="flex flex-col mb-10">
			<div className="rounded-xl bg-white dark:bg-customGray grid grid-cols-1 md:grid-cols-2 pt-4 pb-10 md:p-0">
				<div className="p-6 md:p-10 md:pr-0">
					<div className="font-bold text-3xl md:text-4xl mb-4">
						{t('No idea where to start?')}
					</div>
					<div className="text-lg md:text-xl mb-10">
						{t(
							'Do not worry. Our glossary is a great place to get you up to speed.'
						)}
					</div>
					<a href="/glossary">
						<button className="items-center border border-transparent rounded inline-flex font-semibold justify-center whitespace-nowrap focus:outline-none text-base h-12 leading-6 px-8 bg-customBitcoin text-white dark:bg-customBitcoin dark:text-white">
							{t('startButton')}
						</button>
					</a>
				</div>
				<div className="md:p-10 md:pl-0 flex justify-center md:justify-end">
					<div>
						<Image
							src={FrankenImage.src}
							alt="Bitcoin Ordinals Terminology"
							width={250}
							height={100}
							className="rounded-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
