import Image from 'next/image';
import { rgba, shade, tint } from 'polished';
import styled from 'styled-components';
import { flexAlignment, flexSettings } from 'assets/styles/mixins';

export const HomePage = styled.div`
	height: calc(100vh - 6.5rem);

	overflow-y: auto;
`;

export const Container = styled.div`
	max-width: 1400px;
	margin-right: auto;
	margin-left: auto;

	padding: 0 4rem;
`;

export const LatestEpisodes = styled.section`
	> h2 {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
	}
`;

export const ListLastEpisodes = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	list-style: none;

	> li {
		position: relative;

		${flexSettings()};
		${flexAlignment('center')};

		padding: 1rem 1.5rem;
		border-radius: 1.5rem;

		border: 1px solid ${({ theme }) => theme.colors.gray[100]};
		background-color: ${({ theme }) => theme.colors.boxBackground};
	}
`;

export const EpisodeImage = styled(Image)`
	width: 6rem;
	height: 6rem;

	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const EpisodeDetails = styled.div`
	flex: 1;
	margin-left: 1.5rem;

	> a {
		display: block;

		font-family: Lexend, sans-serif;
		font-weight: 600;
		line-height: 1.4rem;
		color: ${({ theme }) => theme.colors.text};

		&:hover {
			text-decoration: underline;
		}
	}

	> p {
		max-width: 70%;
		margin-top: 0.75rem;

		font-size: 0.875rem;
		text-overflow: ellipsis;

		white-space: nowrap;
		overflow: hidden;
	}

	> span {
		display: inline-block;
		margin-top: 0.5rem;

		font-size: 0.875rem;

		&:last-child {
			margin-left: 0.5rem;
			padding-left: 0.5rem;

			position: relative;

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

export const PlayButton = styled.button`
	position: absolute;
	right: 2rem;
	bottom: 2rem;

	width: 2.5rem;
	height: 2.5rem;
	border: 1px solid ${({ theme }) => rgba(theme.colors.gray[100], 0.5)};
	border-radius: 0.675rem;

	font-size: 0;
	box-shadow: 0;
	background-color: ${({ theme }) => rgba(shade(0.15, theme.colors.boxBackground), 0.5)};

	transition: all 0.35s ease-in-out;

	&:hover  {
		border: 1px solid ${({ theme }) => theme.colors.gray[100]};
		background-color: ${({ theme }) => shade(0.5, theme.colors.boxBackground)};
	}

	> svg {
		width: 1.5rem;
		height: 1.5rem;

		color: ${({ theme }) => theme.colors.green[500]};
	}
`;

export const AllEpisodes = styled.section`
	padding-bottom: 2rem;

	> h2 {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
	}
`;

export const EpisodesTable = styled.table`
	width: 100%;

	th,
	td {
		padding: 0.75rem 1rem;

		border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
	}

	th {
		color: ${({ theme }) =>
			theme.title === 'light'
				? tint(0.5, theme.colors.text)
				: shade(0.45, theme.colors.text)};

		text-transform: uppercase;
		font: 500 0.75rem Lexend, sans-serif;
		text-align: left;
	}

	td {
		font-size: 0.875rem;
		line-height: 1.5rem;
	}

	a {
		color: ${({ theme }) =>
			theme.title === 'light' ? theme.colors.gray[800] : shade(0.25, theme.colors.text)};
		font-family: Lexend, sans-serif;
		font-weight: 600;
		line-height: 1.4rem;
		font-size: 1rem;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const TableEpisodeImage = styled(Image)`
	width: 2.5rem;
	height: 2.5rem;

	border-radius: 0.5rem;
	box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const TablePlayButton = styled.button`
	width: 2rem;
	height: 2rem;
	border: 1px solid ${({ theme }) => rgba(theme.colors.gray[100], 0.5)};
	border-radius: 0.675rem;

	font-size: 0;
	box-shadow: 0;
	background-color: ${({ theme }) => rgba(shade(0.15, theme.colors.boxBackground), 0.5)};

	transition: all 0.35s ease-in-out;

	&:hover  {
		border: 1px solid ${({ theme }) => theme.colors.gray[100]};
		background-color: ${({ theme }) => shade(0.5, theme.colors.boxBackground)};
	}

	> svg {
		width: 1.25rem;
		height: 1.25rem;

		color: ${({ theme }) => theme.colors.green[500]};
	}
`;
