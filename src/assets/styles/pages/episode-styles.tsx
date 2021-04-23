import { rgba, shade } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
	height: calc(100vh - 6.5rem);

	overflow-y: auto;
`;

export const Content = styled.div`
	max-width: 1400px;
	margin-right: auto;
	margin-left: auto;

	padding: 2rem 4rem;
`;

interface IThumbnailProps {
	thumbnail: string;
}

export const ThumbnailContainer = styled.div<IThumbnailProps>`
	position: relative;

	height: 700px;
	border-radius: 1rem;

	background-image: url(${({ thumbnail }) => thumbnail});
	background-color: ${({ theme }) => rgba(theme.colors.black, 0.65)};
	background-blend-mode: overlay;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const buttonCSS = css`
	position: absolute;

	width: 3rem;
	height: 3rem;

	border-radius: 0.75rem;
	border: 0;

	font-size: 0;
	z-index: 5;
	transition: all 0.35s ease-in-out;

	svg {
		color: ${({ theme }) => theme.colors.white};
		width: 1.5rem;
		height: 1.5rem;
	}
`;

export const PreviousButton = styled.button`
	${buttonCSS};

	left: 0;
	top: 50%;
	transform: translate(-50%, -50%);

	background-color: ${({ theme }) => theme.colors.primary[500]};

	&:hover {
		background-color: ${({ theme }) => shade(0.25, theme.colors.primary[500])};
	}
`;

export const PlayButton = styled.button`
	${buttonCSS};

	right: 0;
	top: 50%;
	transform: translate(50%, -50%);

	background-color: ${({ theme }) => theme.colors.green[500]};

	&:hover {
		background-color: ${({ theme }) => shade(0.25, theme.colors.green[500])};
	}
`;

export const ThumbnailInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	margin: 0 2rem 2rem;

	h1 {
		color: ${({ theme }) => theme.colors.white};
		margin-bottom: 0.75rem;
	}

	span {
		display: inline-block;
		font-size: 0.875rem;

		color: ${({ theme }) => shade(0.15, theme.colors.white)};

		& + span {
			position: relative;

			margin-left: 1rem;
			padding-left: 1rem;

			&::before {
				content: '';

				position: absolute;
				top: 50%;
				left: 0;

				width: 4px;
				height: 4px;
				transform: translate(-50%, -50%);

				border-radius: 50%;

				background-color: ${({ theme }) => theme.colors.gray[100]};
			}
		}
	}
`;

export const Description = styled.div`
	margin-top: 2rem;

	line-height: 1.675rem;
	color: ${({ theme }) => theme.colors.text};

	p {
		margin: 1.5rem 0;
	}
`;
