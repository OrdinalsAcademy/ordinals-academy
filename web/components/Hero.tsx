import { useTranslation } from 'next-i18next';

export default function Hero() {
	const { t } = useTranslation('common');
	return (
		<div className="grid grid-cols-1 items-center md:grid-cols-2">
			<div className="md:ml-[200px] pl-24 text-customGray dark:text-customWhite">
				<div className="uppercase font-bold mb-2">
					{t('Learn All About')}
				</div>
				<h1 className="text-6xl font-bold mb-5">Bitcoin Ordinals</h1>
				<p className="text-lg mb-8 md:mr-10">
					Your one-stop guide to Bitcoin Ordinals. Whether you&apos;re
					a rookie trying to understand inscribing or a builder
					looking to develop an Ordinals project, we&apos;ve got you
					covered.
				</p>
				<a href="/glossary">
					<button className="items-center border border-transparent rounded inline-flex font-semibold justify-center whitespace-nowrap focus:outline-none text-base h-12 leading-6 px-4 bg-customBitcoin text-white dark:bg-customWhite dark:text-customDark">
						Start here
					</button>
				</a>
			</div>
			<div className="dark:bg-customGray p-16 pl-10">
				<div>
					<div className="uppercase font-bold mb-2">Featured</div>
					<div className="mb-4">
						<iframe
							className="rounded-lg w-[auto] md:w-[560px]"
							height="315"
							src="https://www.youtube.com/embed/z8gtUPtji1c?si=OdH0gTN50_XElgyY"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen={true}
						></iframe>
					</div>
					<a className="text-xl text-customWhite mb-4 font-bold">
						What are UTXOs?
					</a>
					<div className="flex items-center text-gray-500 mb-4">
						<span>Oct 11, 2023</span>
						<div className="ml-4">
							<span>27m</span>
						</div>
					</div>
					<div className="items-center rounded-lg inline-flex justify-center px-2 text-white bg-green-400 bg-opacity-30 h-9 text-base">
						<div className="bg-[rgb(2,192,118)] rounded-full mr-2 h-2 w-2" />
						Intermediate
					</div>
				</div>
			</div>
		</div>
	);
}
