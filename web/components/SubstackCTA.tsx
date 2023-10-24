import React from 'react';
import Image from 'next/image';
import FrankenImage from 'public/franken_pfp.jpeg';
import CustomSubstackEmbed from './CustomSubstackEmbed';

const SubstackCTA: React.FC = () => {
	return (
		<div className="flex w-full">
			<div className="w-full flex items-center justify-center dark:bg-customGray pt-4 pb-10 md:p-0">
				<div className="max-w-7xl flex flex-row grid grid-cols-1 md:grid-cols-2">
					<div className="p-6 md:p-10 md:pr-0">
						<div className="font-bold text-3xl md:text-4xl mb-4">
							Don't miss out.
						</div>
						<div className="text-lg md:text-xl mb-10">
							Join the Ordinals community and sign up for our
							weekly newsletter.
						</div>
					</div>
					<div className="md:p-10 md:pl-0 flex justify-center md:justify-end">
						<div>
							<CustomSubstackEmbed />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubstackCTA;
