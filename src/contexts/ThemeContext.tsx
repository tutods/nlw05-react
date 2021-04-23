import GlobalStyles from 'assets/styles/global';
import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider as ThemeStyledProvider } from 'styled-components';

export type ThemeContextData = {
	switchTheme: () => void;
	theme: DefaultTheme;
};

type ThemeProps = {
	children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider = ({ children }: ThemeProps): ReactElement => {
	const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

	const switchTheme = () => {
		setTheme(theme.title === 'light' ? darkTheme : lightTheme);
	};

	useEffect(() => {
		const themeStoraged = localStorage.getItem('theme-mode');

		if (themeStoraged) {
			setTheme(JSON.parse(themeStoraged));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('theme-mode', JSON.stringify(theme));
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ switchTheme, theme }}>
			<ThemeStyledProvider theme={theme || lightTheme}>
				<GlobalStyles />
				{children}
			</ThemeStyledProvider>
		</ThemeContext.Provider>
	);
};
