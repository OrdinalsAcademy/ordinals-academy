import Link from 'next/link';
import { formatDate } from 'utils/date';

function truncateText(str: any, maxLength: any) {
	if (str?.length <= maxLength) return str;
	return `${str?.substring(0, maxLength - 3)}...`;
}

interface ArticlesGridProps {
	articles: any[];
}

const ArticlesDisplay: React.FC<ArticlesGridProps> = ({ articles }: any) => {
	return (
		<div className="mb-12 grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-4 items-stretch">
			{articles.map((article: any) => (
				<Link key={article.id} href={`/articles/${article.id}`}>
					<div className="relative transition-shadow duration-250 ease-in block rounded-2xl shadow-sm shadow-lg flex flex-col h-full bg-white dark:bg-customGray">
						<div className="flex flex-col items-start h-full">
							<div className="relative block w-full h-0 max-w-full pt-[56.25%] rounded-2xl overflow-hidden">
								<img
									src={
										'/images/how-to-buy-your-first-ordinal/image7.png'
									}
									alt="placeholder image"
									className="absolute top-0 left-0 w-full h-full object-cover"
								/>
							</div>
							<div className="p-6 pb-0 flex-grow">
								<div className="text-lg font-bold w-90">
									{truncateText(article.title, 64)}
								</div>
							</div>
							<div className="flex flex-row items-center space-x-4 text-sm text-gray-400 p-6">
								{article.difficulty && (
									<div className="items-center rounded-lg inline-flex justify-center px-2 text-customGray dark:text-white bg-green-400 bg-opacity-30 h-8">
										<div className="bg-[rgb(2,192,118)] rounded-full mr-2 h-2 w-2" />
										{article.difficulty}
									</div>
								)}
								{article.datePublished && (
									<div>
										{formatDate(article.datePublished)}
									</div>
								)}
								{article.readTimeInMin && (
									<div className="flex flex-row items-center gap-0.5">
										{/* SVG Code */}
										{article.readTimeInMin}m
									</div>
								)}
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ArticlesDisplay;
