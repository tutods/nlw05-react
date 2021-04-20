import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			background: string;
			boxBackground: string;
			text: string;

			primary: {
				300: string;
				400: string;
				500: string;
				800: string;
			};

			greens: { 500: string };

			grays: {
				50: string;
				100: string;
				200: string;
				500: string;
				800: string;
			};

			white: string;
			black: string;
		};
	}
}
