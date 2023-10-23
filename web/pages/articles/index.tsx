import Link from 'next/link';
import { getPostsByLocale } from '@/utils/posts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { formatDate } from 'utils/date';

function truncateText(str: any, maxLength: any) {
	if (str.length <= maxLength) return str;
	return `${str.substring(0, maxLength - 3)}...`;
}

export default function ArticlesOverview({ articles }: any) {
	return (
		<div className="min-h-screen flex flex-col items-center pt-10 md:p-20 pb-0  bg-customWhite text-black dark:bg-customDark dark:text-white">
			<div className="w-full  max-w-7xl">
				<div className="items-start flex justify-between">
					<h1 className="text-2xl font-bold mb-6">
						Articles ({articles.length})
					</h1>
				</div>
				<div className="mb-12 grid grid-cols-3 gap-4 items-stretch">
					{articles.map((article: any) => (
						<Link key={article.id} href={`/articles/${article.id}`}>
							<div className="relative transition-shadow duration-250 ease-in bg-[rgb(43,47,54)] block rounded-2xl shadow-sm shadow-lg flex flex-col h-full">
								<div className="flex flex-col items-start h-full">
									<div className="relative block w-full h-0 max-w-full pt-[56.25%] rounded-2xl overflow-hidden">
										<img
											src={
												'/images/how-to-buy-your-first-ordinal/image7.png'
											}
											alt="Descriptive alt text"
											className="absolute top-0 left-0 w-full h-full object-cover"
										/>
									</div>
									<div className="p-6 pb-0 flex-grow">
										<div className="text-lg font-bold w-90">
											{truncateText(article.title, 64)}
										</div>
									</div>
									<div className="flex flex-row items-center space-x-4 text-sm text-gray-400 p-6">
										{article?.difficulty && (
											<div className="items-center rounded-lg inline-flex justify-center px-2 text-customGray dark:text-white bg-green-400 bg-opacity-30 h-8">
												<div className="bg-[rgb(2,192,118)] rounded-full mr-2 h-2 w-2" />
												{article?.difficulty}
											</div>
										)}
										{article?.datePublished && (
											<div>
												{formatDate(
													article?.datePublished
												)}
											</div>
										)}
										{article?.readTimeInMin && (
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
												{article?.readTimeInMin}m
											</div>
										)}
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps({ locale }: any) {
	// Fetch posts for the given locale.
	const allPostsData = getPostsByLocale(locale);

	return {
		props: {
			articles: allPostsData,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
