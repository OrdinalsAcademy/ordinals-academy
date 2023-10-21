// utils/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content');

export function getPostsByLocale(locale: string) {
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
			.use(html)
			.processSync(matterResult.content);
		const contentHtml = processedContent.toString();

		return {
			id,
			contentHtml,
			...(matterResult.data as {
				date: string;
				title: string;
				description: string;
			}),
		};
	});

	return allPostsData;
}
