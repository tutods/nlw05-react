import GlobalStyles from 'assets/styles/global';
import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { createContext, ReactElement, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider as ThemeStyledProvider } from 'styled-components';

export interface ThemeContextData {
	switchTheme: () => void;
	theme: DefaultTheme;
}

interface ThemeProps {
	children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProps): ReactElement {
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
}
