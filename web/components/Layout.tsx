// components/Layout.tsx

import React, { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { Footer } from './Footer';
import NavBar from './Navbar/Navbar';

type LayoutProps = {
	children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { t } = useTranslation('common');

	return (
		<div className="layout">
			<header>
				<NavBar />
			</header>

			<main>{children}</main>

			<Footer />
		</div>
	);
};

export default Layout;
