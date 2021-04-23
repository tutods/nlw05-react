import {
	AllEpisodes,
	Container,
	EpisodeDetails,
	EpisodeImage,
	EpisodesTable,
	HomePage,
	LatestEpisodes,
	ListLastEpisodes,
	PlayButton,
	TableEpisodeImage,
	TablePlayButton
} from 'assets/styles/pages';
import { Icon } from 'components/icons/Icon';
import BaseLayout from 'components/layouts/base';
import { SEOTags } from 'components/SEOTags';
import { usePlayer } from 'contexts/PlayerContext';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { api } from 'services/api';
import { convertDurationToTimeString } from 'utils/functions/convertDurationToTimeString';
import { Episode, FormattedEpisode } from 'utils/types/episode';
import { Page } from 'utils/types/page';

type Home = {
	allEpisodes: FormattedEpisode[];
	latestEpisodes: FormattedEpisode[];
};

const Home: Page<Home> = ({ allEpisodes, latestEpisodes }) => {
	const { playList } = usePlayer();

	// Join latest episodes with rest of episodes
	const episodeList = [...latestEpisodes, ...allEpisodes];

	return (
		<HomePage>
			<SEOTags />
			<Container>
				<LatestEpisodes>
					<h2>Últimos Lançamentos</h2>

					<ListLastEpisodes>
						{latestEpisodes.map((episode: FormattedEpisode, index) => (
							<li key={index}>
								<EpisodeImage
									width={192}
									height={192}
									src={episode.thumbnail}
									alt={episode.title}
									objectFit='cover'
								/>

								<EpisodeDetails>
									<Link href={`/episode/${episode.id}`}>
										<a>{episode.title}</a>
									</Link>

									<p>{episode.members}</p>

									<span>{episode.publishedAt}</span>
									<span>{episode.durationAsString}</span>
								</EpisodeDetails>

								<PlayButton onClick={() => playList(episodeList, index)}>
									<Icon name='play' />
								</PlayButton>
							</li>
						))}
					</ListLastEpisodes>
				</LatestEpisodes>

				<AllEpisodes>
					<h2>Todos os Episódios</h2>

					<EpisodesTable cellSpacing={0}>
						<thead>
							<tr>
								<th></th>
								<th>Podcast</th>
								<th>Integrantes</th>
								<th>Data</th>
								<th>Duração</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{allEpisodes.map((episode: FormattedEpisode, index) => (
								<tr key={index}>
									<td>
										<TableEpisodeImage
											width={120}
											height={120}
											src={episode.thumbnail}
											alt={episode.title}
											objectFit='cover'
										/>
									</td>
									<td>
										<Link href={`/episode/${episode.id}`}>
											<a>{episode.title}</a>
										</Link>
									</td>
									<td>{episode.members}</td>
									<td style={{ width: '7rem' }}>{episode.publishedAt}</td>
									<td>{episode.durationAsString}</td>
									<td>
										<TablePlayButton
											type='button'
											onClick={() =>
												playList(episodeList, index + latestEpisodes.length)
											}
										>
											<Icon name='play' />
										</TablePlayButton>
									</td>
								</tr>
							))}
						</tbody>
					</EpisodesTable>
				</AllEpisodes>
			</Container>
		</HomePage>
	);
};

Home.layout = BaseLayout;

/**
 * SSG
 */
export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get('episodes', {
		params: {
			_limit: 12,
			_store: 'published_at',
			_order: 'desc'
		}
	});

	const episodes = data.map((episode: Episode) => {
		return {
			id: episode.id,
			title: episode.title,
			thumbnail: episode.thumbnail,
			members: episode.members,
			publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: pt }),
			durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
			description: episode.description,
			url: episode.file.url
		};
	});

	const latestEpisodes = episodes.slice(0, 2);
	const allEpisodes = episodes.slice(2, episodes.length);

	return {
		props: {
			allEpisodes,
			latestEpisodes
		},
		revalidate: 60 * 60 * 8 // new request every 8 hours
	};
};

export default Home;
