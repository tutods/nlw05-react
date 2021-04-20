import { shade } from 'polished';
import styled, { DefaultTheme } from 'styled-components';

type SwitchThemeProps = {
	darkColor?: string;
	lightColor?: string;
	theme: DefaultTheme;
};

export const SwitchTheme = styled.button<SwitchThemeProps>`
	width: 40px;
	height: 40px;

	border-radius: 50%;
	border: none;

	background-color: transparent;

	color: ${({ theme, darkColor, lightColor }) => {
		switch (theme.title) {
			case 'light':
				return lightColor ? lightColor : theme.colors.text;
			case 'dark':
				return darkColor ? darkColor : theme.colors.text;
			default:
				return theme.colors.text;
		}
	}};

	color: ${(props) => (props.theme.title === 'light' ? props.lightColor : props.darkColor)};

	cursor: pointer;
	transition: all 0.5s ease;
	line-height: 0;

	> svg {
		width: 24px;
		height: 24px;
	}

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${(props) => shade(0.5, props.theme.colors.primary[400])};
		color: ${(props) => props.theme.colors.white};
	}
`;
