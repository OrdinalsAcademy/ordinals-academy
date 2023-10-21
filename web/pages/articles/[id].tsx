import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPostsByLocale } from '../../utils/posts';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

export async function getStaticPaths({ locales }: any) {
	const paths = locales.flatMap((locale: any) => {
		const posts = getPostsByLocale(locale);
		return posts.map((post) => ({ params: { id: post.id }, locale }));
	});

	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params, locale }: any) {
	let postData;

	// Fetch posts for the given locale.
	const allPostsData = getPostsByLocale(locale);
	postData = allPostsData.find((post) => post.id === params.id);

	// If the post doesn't exist for the given locale, default to the English version.
	if (!postData) {
		const defaultPostsData = getPostsByLocale('en');
		postData = defaultPostsData.find((post) => post.id === params.id);
	}

	return {
		props: {
			postData,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const BASE_URL = 'https://ordinalsacademy.org';

const IconBack = () => <span>🔙</span>; // Placeholder icon, replace with your actual icon
const IconYoutube = () => <span>🎥</span>;
const IconLinkedin = () => <span>🔗</span>;
const IconTwitter = () => <span>🐦</span>;
const IconGithub = () => <span>👾</span>;

const getAssetURL = (id: any) => `https://yourcdn.com/assets/${id}`; // Adjust to your actual asset URL structure
const formatRelativeTime = (date: any) => date.toLocaleDateString(); // Simple date format, replace with a more advanced formatter if needed

function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
	const body = postData?.contentHtml;

	return (
		<>
			<Head>
				<title>{postData?.title}</title>
				<meta name="description" content={postData?.description} />
				<meta property="og:title" content={postData?.title} />
				<meta
					property="og:description"
					content={postData?.description}
				/>
				<meta
					property="og:url"
					content={`${BASE_URL}/articles/${postData?.id}`}
				/>
			</Head>
			<div className="flex items-center justify-between bg-customWhite text-customDark dark:bg-customDark dark:text-customWhite">
				<article className="max-w-2xl mx-auto p-6 shadow-md">
					<div className="space-y-4">
						<h2 className="text-xl font-bold mb-2">TL;DR</h2>
						<ul className="list-disc pl-6 space-y-2">
							{/* ...You can map through a list of summary points here... */}
							<li className="">Your summary point 1...</li>
							{/* ... */}
						</ul>
						<div className="my-6">
							<img
								src={
									'https://raw.githubusercontent.com/OrdinalsAcademy/ordinals-academy/main/web/public/professor_franken.jpg'
								}
								alt=""
								className="w-full object-cover rounded-lg shadow-sm"
							/>
						</div>
						<h1 className="text-3xl font-bold mb-4">
							{postData?.title}
						</h1>
						<div
							className="prose prose-sm prose-blue max-w-none dark:text-customWhite dark-mode-content"
							dangerouslySetInnerHTML={{ __html: body ?? '' }}
						></div>
						{/* ...You can continue with the rest of your article structure... */}
					</div>
				</article>
			</div>
		</>
	);
}

export default Post;
