import Icon from 'components/icons/Icon';
import ProjectIcons from 'components/icons/ProjectIcons';
import { ThemeSwitch } from 'components/ThemeSwitch';
import { ThemeProvider } from 'contexts/ThemeContext';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider>
			<ProjectIcons />
			<Head>
				<title>Podcastr</title>
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<ThemeSwitch />

			<Icon name='playing' />

			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
