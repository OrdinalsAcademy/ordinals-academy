import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Hero from '@/components/Hero';
import { getPostsByLocale } from '@/utils/posts';
import ArticlesDisplay from '@/components/ArticlesDisplay';
import FrankenImage from 'public/franken_pfp.jpeg';
import Image from 'next/image';
import Banner from '@/components/Banner';
import CustomSubstackEmbed from '@/components/CustomSubstackEmbed';
import SubstackCTA from '@/components/SubstackCTA';
import Head from 'next/head';

type Props = {
	// Add custom props here
	articles: any;
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>
					{'Learn All About Bitcoin Ordinals | Ordinals Academy'}
				</title>
				<meta
					property="og:title"
					content={
						'Learn All About Bitcoin Ordinals | Ordinals Academy'
					}
				/>
			</Head>
			<main className="w-full flex min-h-screen flex-col items-center bg-customWhite dark:bg-customDark text-black dark:text-white">
				<div className="flex w-full p-3 text-sm items-center justify-center font-semibold bg-customGray text-white dark:bg-customBitcoin">
					{t('Free Bitcoin Ordinals Education')}
				</div>
				{/* <Header heading={t('h1')} title={t('title')} /> */}
				<Hero />
				<div className="w-full max-w-6xl mt-20 mb-10">
					<Banner />
					<div className="items-start flex justify-between mb-2">
						<h1 className="text-xl mb-6 text-customLightGray w-full pl-6 md:p-0">
							{t('Latest Releases')}
						</h1>
					</div>
					<ArticlesDisplay articles={_props.articles} />
				</div>
				<SubstackCTA />
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	const allPostsData = getPostsByLocale(locale || 'en');

	return {
		props: {
			articles: allPostsData,
			...(await serverSideTranslations(locale || 'en', ['common'])),
		},
	};
};

export default Homepage;
