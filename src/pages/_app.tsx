import { AppWrapper } from 'assets/styles/pages/app-styles';
import ProjectIcons from 'components/icons/ProjectIcons';
import { Header } from 'components/layout/Header';
import { Player } from 'components/Player';
import { ThemeProvider } from 'contexts/ThemeContext';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider>
			{/* SVG Sprite */}
			<ProjectIcons />
			<AppWrapper>
				<main>
					<Header />
					<Component {...pageProps} />
				</main>

				<Player />
			</AppWrapper>
		</ThemeProvider>
	);
};

export default MyApp;
