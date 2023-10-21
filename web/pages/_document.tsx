import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';
import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
	// add custom document props
};

class MyDocument extends Document<Props> {
	render() {
		const currentLocale =
			this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
		return (
			<Html lang={currentLocale}>
				<Head>
					<meta charSet="utf-8" />
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
						rel="stylesheet"
					/>
					{/* <link href="/app.css" rel="stylesheet" /> */}
					<link
						href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600"
						rel="stylesheet"
					/>
					<link
						data-react-helmet="true"
						rel="icon"
						href="https://raw.githubusercontent.com/OrdinalsAcademy/ordinals-academy/main/web/public/favicon.ico"
					/>
					<link
						rel="alternate"
						hrefLang="x-default"
						href="https://ordinalsacademy.org/"
					/>
					{[
						'en',
						'de',
						'vi',
						'zh',
						'ja',
						'ko',
						'fr',
						'es',
						'pt',
						'ru',
						'nl',
					].map((lang) => (
						<link
							key={lang}
							rel="alternate"
							hrefLang={lang}
							href={`https://ordinalsacademy.org/${lang}`}
						/>
					))}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
