import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Hero from '@/components/Hero';

type Props = {
	// Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation('common');

	return (
		<>
			<main className="w-full flex min-h-screen flex-col items-center bg-customWhite dark:bg-customDark text-black dark:text-white">
				<div className="flex w-full p-3 text-sm items-center justify-center font-semibold bg-customGray text-white dark:bg-customBitcoin">
					{t('Free Bitcoin Ordinals Education')}
				</div>
				{/* <Header heading={t('h1')} title={t('title')} /> */}
				<Hero />
			</main>
		</>
	);
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
	},
});

export default Homepage;
