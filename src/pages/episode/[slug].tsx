import {
	Container,
	Content,
	Description,
	EpisodeHeader,
	PlayButton,
	PreviousButton,
	ThumbnailContainer
} from 'assets/styles/pages/episode-styles';
import { Icon } from 'components/icons/Icon';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { api } from 'services/api';
import { convertDurationToTimeString } from 'utils/functions/convertDurationToTimeString';
import { IFormattedEpisode } from 'utils/interfaces/IEpisode';

interface IEpisodeProps {
	episode: IFormattedEpisode;
}

const Episode: React.FC<IEpisodeProps> = ({ episode }) => {
	const router = useRouter();

	return (
		<Container>
			<Content>
				<ThumbnailContainer thumbnail={episode.thumbnail}>
					<h1>{episode.title}</h1>

					<Link href='/'>
						<PreviousButton>
							<Icon name='previous' />
						</PreviousButton>
					</Link>

					<PlayButton>
						<Icon name='play' />
					</PlayButton>
				</ThumbnailContainer>

				<EpisodeHeader>
					<span>{episode.members}</span>
					<span>{episode.publishedAt}</span>
					<span>{episode.durationAsString}</span>
				</EpisodeHeader>

				<Description dangerouslySetInnerHTML={{ __html: episode.description! }} />
			</Content>
		</Container>
	);
};

export default Episode;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params!;
	const { data } = await api.get(`episodes/${slug}`);

	const episode = {
		id: data.id,
		title: data.title,
		thumbnail: data.thumbnail,
		members: data.members,
		publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: pt }),
		duration: Number(data.file.duration),
		durationAsString: convertDurationToTimeString(Number(data.file.duration)),
		description: data.description,
		url: data.file.url
	};

	return {
		props: { episode },
		revalidate: 60 * 60 * 24 // new request every 24 hours
	};
};
