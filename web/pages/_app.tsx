import type { AppProps } from 'next/app';
import '/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js'
import Layout from '../components/Layout';
import ThemeProvider from 'providers/ThemeProvider';

const App = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
);

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(App /*, nextI18NextConfig */);
