import React from 'react';
import Image from 'next/image';
import FrankenImage from 'public/franken_pfp.jpeg';

interface BannerProps {
	text: any;
}

const Banner: React.FC<BannerProps> = ({ text }: BannerProps) => {
	return (
		<div className="flex flex-col mb-10">
			<div className="rounded-xl dark:bg-customGray grid grid-cols-1 md:grid-cols-2">
				<div className="p-10 pr-0">
					<div className="font-bold text-3xl md:text-5xl mb-4">
						No idea where to start?
					</div>
					<div className="text-lg md:text-2xl mb-10">
						Do not worry. Our glossary is a great place to get you
						up to speed.
					</div>
					<a href="/glossary">
						<button className="items-center border border-transparent rounded inline-flex font-semibold justify-center whitespace-nowrap focus:outline-none text-base h-12 leading-6 px-10 bg-customBitcoin text-white dark:bg-customBitcoin dark:text-white">
							{text}
						</button>
					</a>
				</div>
				<div className="p-10 pl-0 flex justify-center md:justify-end">
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
