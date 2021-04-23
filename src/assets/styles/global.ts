import { shade, tint } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	/* ==> Scroll <== */
	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${({ theme }) => shade(0.15, theme.colors.boxBackground)};
		border-radius: 25px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background: ${({ theme }) =>
			theme.title === 'light' ? theme.colors.text : shade(0.05, theme.colors.text)};
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) =>
			theme.title === 'light'
				? tint(0.25, theme.colors.text)
				: shade(0.25, theme.colors.text)};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%; // 16px x 0.9376 = 15px (reduce  font size)
		}
	}

	@media (min-width: 2000px) {
		html {
			font-size: 100%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%; // 16px x 0.8750 = 14px (reduce  font size)
		}
	}

	body {
		background: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.text};
	}

	body, input, textarea, button {
		font: 500 1rem Inter, sans-serif;
		color: ${({ theme }) => theme.colors.gray[500]};
	}

	a {
		text-decoration: none;
	}

	button {
		outline: 0;
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 600;
		font-family: Lexend, sans-serif;
		color: ${({ theme }) => theme.colors.text};
	}

	h1 {
		font-size: 2rem; // 16 + 16 => 32px
	}

	h2 {
		font-size: 1.5rem  // 16 + 8 (16/2) => 24px
	}

	button {
		cursor: pointer;
	}
`;
