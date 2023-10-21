import Link from 'next/link';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '../components/Header';
import Hero from '@/components/Hero';

type Props = {
	// Add custom props here
};

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { t, i18n } = useTranslation('common');

	// alternative language switchers
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onToggleLanguageClick = (newLocale: string) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: newLocale });
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const clientSideLanguageChange = (newLocale: string) => {
		i18n.changeLanguage(newLocale);
	};

	const changeTo = router.locale === 'en' ? 'de' : 'en';
	// const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

	return (
		<>
			<main className="w-full flex min-h-screen flex-col items-center bg-customWhite dark:bg-customDark text-black dark:text-white">
				<div className="flex w-full p-3 text-sm items-center justify-center font-semibold bg-customGray text-white dark:bg-customBitcoin">
					{t('Free Bitcoin Ordinals Education')}
				</div>
				{/* <Header heading={t('h1')} title={t('title')} /> */}
				<Hero />
				{/* <div>
					<Link href="/" locale={changeTo}>
						<button>{t('change-locale', { changeTo })}</button>
					</Link>
					<Link href="/second-page">
						<button type="button">{t('to-second-page')}</button>
					</Link>
					to demonstrate routing
				</div> */}
			</main>
		</>
	);
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
	},
});

export default Homepage;
