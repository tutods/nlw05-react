import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { rgba } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	${flexSettings('column')};
	${flexAlignment('center', 'center')}

	background-image: url("/podcast.jpeg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${({ theme }) => rgba(theme.colors.black, 0.75)};
	background-blend-mode: overlay;

	color: ${({ theme }) => theme.colors.white};

	h1,
	h2 {
		color: ${({ theme }) => theme.colors.white};
	}

	h1 {
		margin: 2rem 0 0.5rem;

		font-size: 6rem;
	}

	h2 {
		margin: 0rem 0 1.5rem;

		font-size: 2rem;
	}

	p {
		font-weight: 300;
		font-size: 1.25rem;
	}

	a {
		${flexSettings()};
		${flexAlignment('center')}

		margin-top: 3rem;
		padding: 0.75rem 2rem;
		border-radius: 0.5rem;
		border: 0;
		box-shadow: 0 0 0.8rem ${({ theme }) => rgba(theme.colors.white, 0.25)};

		color: ${({ theme }) => theme.colors.white};
		background-color: ${({ theme }) => theme.colors.primary[500]};
		font-size: 0.9rem;
		font-weight: 400;
		text-transform: uppercase;

		transition: all 0.35s ease;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary[800]};
		}

		> svg {
			margin-left: 0.75rem;

			color: ${({ theme }) => theme.colors.white};
			width: 0.9rem;
			height: 0.9rem;

			transform: rotate(180deg);
		}
	}
`;

export const Logo = styled.div`
	> svg {
		width: 15rem;
		height: auto;
	}
`;
