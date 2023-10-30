import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPostsByLocale } from '@/utils/posts';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Scrollspy from 'react-scrollspy';
import { formatDate } from 'utils/date';
import { useTranslation } from 'next-i18next';

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

function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { t } = useTranslation('common');
	const body = postData?.contentHtml;

	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(`${BASE_URL}/articles/${postData?.id}`)
			.then(
				() => {
					alert('Link copied to clipboard!');
				},
				(err) => {
					alert('Failed to copy link! Try manually copying.');
					//todo add toastify
				}
			);
	};

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
					name="og:image"
					content={
						'https://raw.githubusercontent.com/OrdinalsAcademy/ordinals-academy/main/web/public/professor_franken.jpg'
					}
				/>
				<meta
					property="og:url"
					content={`${BASE_URL}/articles/${postData?.id}`}
				/>
				<meta property="og:robots" content="index, follow" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@OrdinalsAcademy" />
				<meta name="twitter:title" content={postData?.title} />
				<meta
					name="twitter:description"
					content={postData?.description}
				/>
				<meta
					name="twitter:image"
					content={
						'https://raw.githubusercontent.com/OrdinalsAcademy/ordinals-academy/main/web/public/professor_franken.jpg'
					}
				/>
			</Head>
			<div className="flex items-center justify-center md:p-20 md:pt-0 pb-0 bg-customWhite text-customDark dark:bg-customDark dark:text-customWhite">
				<div className="flex flex-col md:flex-row">
					<div>
						<article className="max-w-2xl mx-auto p-6 shadow-md">
							<div>
								{/* Post Image */}
								<div className="my-6">
									<img
										src={
											'https://raw.githubusercontent.com/OrdinalsAcademy/ordinals-academy/main/web/public/professor_franken.jpg'
										}
										alt={postData?.title}
										className="w-full object-cover rounded-lg shadow-sm"
									/>
								</div>
								{/* Breadcrumbs */}
								<div className="text-sm text-gray-400 mb-6">
									<a href="/" className="hover:underline">
										{t('Home')}
									</a>{' '}
									&gt;
									<a
										href="/articles"
										className="hover:underline ml-2"
									>
										{t('Articles')}
									</a>{' '}
									&gt;
									<span className="ml-2">
										{postData?.title}
									</span>
								</div>
								{/* Post Title */}
								<h1 className="text-4xl font-bold mb-4">
									{postData?.title}
								</h1>
								{/* difficulty, published date, updated date, read time */}
								<div className="flex flex-row items-center space-x-4 text-sm text-gray-400 mb-10">
									{postData?.difficulty && (
										<div className="items-center rounded-lg inline-flex justify-center px-2 text-customGray dark:text-white bg-green-400 bg-opacity-30 h-8">
											<div className="bg-[rgb(2,192,118)] rounded-full mr-2 h-2 w-2" />
											{postData?.difficulty}
										</div>
									)}
									{postData?.datePublished && (
										<div>
											{t('Published')}{' '}
											{formatDate(
												postData?.datePublished
											)}
										</div>
									)}
									{postData?.dateUpdated && (
										<div>
											{t('Updated')}{' '}
											{formatDate(postData?.dateUpdated)}
										</div>
									)}
									{postData?.readTimeInMin && (
										<div className="flex flex-row items-center gap-0.5">
											<svg
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="h-3 w-3"
											>
												<path
													d="M11.9963 4C13.5785 4 15.1252 4.46919 16.4408 5.34824C17.7564 6.22729 18.7818 7.47672 19.3873 8.93853C19.9928 10.4003 20.1512 12.0089 19.8426 13.5607C19.5339 15.1126 18.772 16.538 17.6531 17.6569C16.5343 18.7757 15.1089 19.5376 13.557 19.8463C12.0052 20.155 10.3966 19.9965 8.93481 19.391C7.473 18.7855 6.22358 17.7602 5.34452 16.4446C4.46547 15.129 3.99628 13.5823 3.99628 12C3.99871 9.87901 4.84234 7.84559 6.34211 6.34583C7.84187 4.84606 9.87529 4.00243 11.9963 4ZM11.9963 2C10.0185 2 8.08507 2.58649 6.44058 3.6853C4.79609 4.78412 3.51436 6.3459 2.75749 8.17317C2.00061 10.0004 1.80258 12.0111 2.18843 13.9509C2.57428 15.8907 3.52669 17.6725 4.92521 19.0711C6.32374 20.4696 8.10557 21.422 10.0454 21.8079C11.9852 22.1937 13.9959 21.9957 15.8231 21.2388C17.6504 20.4819 19.2122 19.2002 20.311 17.5557C21.4098 15.9112 21.9963 13.9778 21.9963 12C21.9963 10.6868 21.7377 9.38641 21.2351 8.17315C20.7326 6.95988 19.996 5.85748 19.0674 4.92889C18.1388 4.0003 17.0364 3.26371 15.8231 2.76117C14.6099 2.25863 13.3095 1.99998 11.9963 2Z"
													fill="currentColor"
												></path>
												<path
													d="M15.561 16.972L11.003 12.414V6.004H13.003V11.586L16.975 15.558L15.561 16.972Z"
													fill="currentColor"
												></path>
											</svg>
											{postData?.readTimeInMin}m
										</div>
									)}
								</div>
								{/* Post TL;DR */}
								<div className="mb-10">
									<h2 className="text-xl font-bold mb-4">
										TL;DR
									</h2>
									<ul className="list-disc pl-8 space-y-2 text-gray-400 text-lg">
										{postData?.tldr?.map(
											(point: any, index: any) => (
												<li key={index} className="">
													{point}
												</li>
											)
										)}
									</ul>
								</div>
								{/* Post content */}
								<div
									className="prose prose-sm prose-blue max-w-none dark:text-customWhite dark-mode-content text-lg custom-h3-size custom-img-height"
									dangerouslySetInnerHTML={{
										__html: body ?? '',
									}}
								></div>
								{/* ...continue with the rest of your article structure... */}
								<div>
									<p className="mt-6 italic">
										<strong>{t('Disclaimer')}: </strong>
										{t('disclaimerText')}
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="top-10 p-12 sticky self-start">
						<div className="space-y-6">
							<div className="mb-12">
								<div className="text-xl font-bold">
									{t('Share this Post')}
								</div>
								<div className="mt-6 gap-10 flex">
									<div>
										<a
											href={`https://twitter.com/intent/tweet?text=${postData?.title}&url=${BASE_URL}/articles/${postData?.id}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												viewBox="0 0 18 14"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="h-6 w-6 text-customIcons hover:text-customBitcoin"
											>
												<path d="M5.90944 13.7676C7.18903 13.7764 8.45762 13.5308 9.64152 13.0452C10.8254 12.5596 11.901 11.8436 12.8058 10.9387C13.7107 10.0339 14.4267 8.95831 14.9123 7.77442C15.398 6.59052 15.6435 5.32193 15.6347 4.04234C15.6347 3.89424 15.6318 3.74692 15.6251 3.6004C16.294 3.11637 16.8714 2.51704 17.3301 1.83048C16.7065 2.10711 16.0448 2.28853 15.3673 2.36867C16.081 1.9415 16.6151 1.26951 16.8702 0.47784C16.1993 0.875917 15.4653 1.15658 14.7 1.30773C14.1847 0.759649 13.5031 0.396688 12.7607 0.275024C12.0184 0.153359 11.2566 0.279775 10.5933 0.634706C9.93003 0.989637 9.40223 1.55329 9.09159 2.23844C8.78095 2.92358 8.7048 3.69201 8.87492 4.4248C7.51583 4.35687 6.18622 4.00382 4.97245 3.38858C3.75868 2.77334 2.6879 1.90967 1.82965 0.853666C1.39239 1.60611 1.2584 2.49693 1.45497 3.3447C1.65154 4.19248 2.16388 4.93344 2.88765 5.41668C2.34485 5.40017 1.81395 5.25358 1.33958 4.98925C1.3388 5.00353 1.3388 5.01782 1.3388 5.03287C1.33896 5.82207 1.61213 6.58691 2.11194 7.19765C2.61176 7.8084 3.30746 8.22744 4.08103 8.38371C3.57776 8.52103 3.0497 8.5411 2.53745 8.4424C2.75578 9.12162 3.18095 9.7156 3.75349 10.1413C4.32603 10.5669 5.01731 10.803 5.73063 10.8164C4.51983 11.7668 3.02454 12.2822 1.48533 12.2798C1.21283 12.2799 0.940561 12.264 0.669922 12.2322C2.23287 13.2363 4.05177 13.7693 5.90944 13.7676Z"></path>
											</svg>
										</a>
									</div>
									<div>
										<a
											href={`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}/articles/${postData?.id}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="h-6 w-6 text-customIcons hover:text-customBitcoin"
											>
												<path d="M19.375 10.06a9.383 9.383 0 0 1-7.907 9.257V12.77h2.185l.408-2.71h-2.593V8.3a1.356 1.356 0 0 1 1.521-1.468h1.2V4.53a14.7 14.7 0 0 0-2.1-.182 3.31 3.31 0 0 0-3.547 3.643v2.068h-2.38v2.71h2.38v6.546a9.374 9.374 0 1 1 10.843-9.257z"></path>
											</svg>
										</a>
									</div>
									<div>
										<a
											href={`https://t.me/share/url?text=${postData?.title}&url=${BASE_URL}/articles/${postData?.id}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											<svg
												viewBox="0 0 18 16"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="h-6 w-6 text-customIcons hover:text-customBitcoin"
											>
												<path d="M16.5257 0.95613L0.992894 6.94483C-0.066948 7.37023 -0.061323 7.96196 0.800144 8.22551L4.78605 9.46968L14.0138 3.64787C14.4499 3.3832 14.8494 3.52537 14.5213 3.81704L7.04397 10.5643L7.12095 10.6987L7.04397 10.5649L6.76974 14.675C6.92584 14.6731 7.07947 14.6358 7.21913 14.566C7.35878 14.4963 7.48083 14.3958 7.57613 14.2721L9.51318 12.389L13.5423 15.3662C14.2841 15.7748 14.8191 15.5629 15.004 14.6773L17.6491 2.21212C17.9199 1.12644 17.2349 0.634171 16.5258 0.956163"></path>
											</svg>
										</a>
									</div>
									<div>
										<div
											onClick={copyToClipboard}
											className="cursor-pointer"
										>
											<svg
												viewBox="0 0 14 17"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												className="h-6 w-6 text-customIcons hover:text-customBitcoin"
											>
												<path d="M13.8801 0V12.26H11.8801V2H4.12012V0H13.8801Z"></path>
												<path d="M0.120117 3.97998V16.24H9.88012V3.99998L0.120117 3.97998ZM7.87012 14.26H2.12012V5.99998H7.88012L7.87012 14.26Z"></path>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<Scrollspy
								items={postData?.h3Topics.map(
									(header: any) => header.id
								)}
								currentClassName="is-current"
							>
								{postData?.h3Topics.map(
									(header: any, index: number) => (
										<div
											key={header.id}
											className="relative mb-2 pb-6"
										>
											<div className="flex items-center space-x-3">
												<div className="tail-wrapper">
													{index !==
														postData.h3Topics
															.length -
															1 && (
														<div className="item-tail"></div>
													)}
												</div>
												<div className="w-7 h-7 flex items-center justify-center">
													<div className="dot-bullet indicator border-customDark dark:border-customWhite"></div>
												</div>
												<div className="cursor-pointer overflow-hidden">
													<a
														href={`#${header.id}`}
														className="font-bold hover:underline link"
													>
														{header.title}
													</a>
												</div>
											</div>
										</div>
									)
								)}
							</Scrollspy>
							{/* <div>related articles</div>
							<div>cta newsletter</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Post;
