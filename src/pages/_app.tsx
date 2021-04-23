import { ProjectIcons } from 'components/icons/ProjectIcons';
import EmptyLayout from 'components/layouts/empty';
import { ThemeProvider } from 'contexts/ThemeContext';
import { NextPage } from 'next';
import React from 'react';
import { AppCustomProps } from 'utils/types/app';

const MyApp: NextPage<AppCustomProps> = ({ Component, pageProps }) => {
	const Layout = Component.layout || EmptyLayout;

	return (
		<ThemeProvider>
			{/* SVG Sprite */}
			<ProjectIcons />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default MyApp;
