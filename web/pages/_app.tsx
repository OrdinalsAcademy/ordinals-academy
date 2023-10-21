import type { AppProps } from 'next/app';
import '/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js'
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(App /*, nextI18NextConfig */);
