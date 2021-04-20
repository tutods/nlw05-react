import { shade } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	/* ==> Scroll <== */
	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${(props) => shade(0.5, props.theme.colors.boxBackground)};
		border-radius: 25px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 25px;
		background: ${(props) => shade(0.5, props.theme.colors.primary[400])};
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: ${(props) => props.theme.colors.primary[800]};
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: ${(props) => props.theme.colors.background};
		color: ${(props) => props.theme.colors.text};
	}
`;
