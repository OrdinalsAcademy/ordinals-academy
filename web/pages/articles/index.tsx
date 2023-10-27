import { getPostsByLocale } from '@/utils/posts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticlesDisplay from '@/components/ArticlesDisplay';
import Head from 'next/head';

export default function ArticlesOverview({ articles }: any) {
	return (
		<>
			<Head>
				<title>{'Articles | Ordinals Academy'}</title>
				<meta
					property="og:title"
					content={'Articles | Ordinals Academy'}
				/>
			</Head>
			<div className="min-h-screen flex flex-col items-center pt-10 md:p-20 pb-0  bg-customWhite text-black dark:bg-customDark dark:text-white">
				<div className="w-full  max-w-7xl">
					<div className="items-start flex justify-between">
						<h1 className="text-2xl font-bold mb-6">
							Articles ({articles.length})
						</h1>
					</div>
					<ArticlesDisplay articles={articles} />
				</div>
			</div>
		</>
	);
}

export async function getStaticProps({ locale }: any) {
	const allPostsData = getPostsByLocale(locale);

	return {
		props: {
			articles: allPostsData,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
