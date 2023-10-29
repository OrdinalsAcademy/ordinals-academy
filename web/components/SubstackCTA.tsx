import React from 'react';
import CustomSubstackEmbed from './CustomSubstackEmbed';
import { useTranslation } from 'next-i18next';

const SubstackCTA: React.FC = () => {
	const { t } = useTranslation('common');
	return (
		<div className="flex w-full">
			<div className="w-full flex items-center justify-center bg-white dark:bg-customGray pt-4 pb-10 md:p-0">
				<div className="max-w-7xl flex flex-row grid grid-cols-1 md:grid-cols-2">
					<div className="p-6 md:p-10 md:pr-0">
						<div className="font-bold text-3xl md:text-4xl mb-4">
							{t("Don't miss out.")}
						</div>
						<div className="text-lg md:text-xl md:mb-10">
							{t(
								'Join the Ordinals community and sign up for our weekly newsletter.'
							)}
						</div>
					</div>
					<div className="md:p-20 flex pl-6 md:justify-start">
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
