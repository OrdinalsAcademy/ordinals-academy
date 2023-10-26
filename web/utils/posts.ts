import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import slug from 'remark-slug';
import cheerio from 'cheerio'; // Import cheerio

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostsByLocale(locale: string) {
	const contentDir = path.join(process.cwd(), 'content', locale);

	if (!fs.existsSync(contentDir)) {
		return getPostsByLocale('en');
	}
	const fullPath = path.join(postsDirectory, locale);
	const fileNames = fs.readdirSync(fullPath);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');
		const fileContents = fs.readFileSync(
			path.join(fullPath, fileName),
			'utf8'
		);
		const matterResult = matter(fileContents);
		const processedContent = remark()
			.use(slug as any)
			.use(html)
			.processSync(matterResult.content);
		const contentHtml = processedContent
			.toString()
			.replace(/user-content-/g, '');

		// Using cheerio to extract h3 titles
		const $ = cheerio.load(contentHtml);
		const h3Topics: any = [];
		$('h3').each((_: any, elem: any) => {
			h3Topics.push({
				title: $(elem).text(),
				id: $(elem).attr('id') || '',
			});
		});
		// console.log(contentHtml);

		return {
			id,
			contentHtml,
			h3Topics,
			...(matterResult.data as {
				datePublished: string;
				dateUpdated: string;
				readTimeInMin: string;
				difficulty: string;
				author: string;
				title: string;
				tldr: any;
				description: string;
			}),
		};
	});

	return allPostsData;
}
