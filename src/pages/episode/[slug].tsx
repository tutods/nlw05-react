import {
	Container,
	Content,
	Description,
	PlayButton,
	PreviousButton,
	ThumbnailContainer,
	ThumbnailInfo
} from 'assets/styles/pages/episode';
import { Icon } from 'components/icons/Icon';
import BaseLayout from 'components/layouts/base';
import { SEOTags } from 'components/SEOTags';
import { usePlayer } from 'contexts/PlayerContext';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { api } from 'services/api';
import { convertDurationToTimeString } from 'utils/functions/convertDurationToTimeString';
import { FormattedEpisode } from 'utils/types/episode';
import { Page } from 'utils/types/page';

type Props = {
	episode: FormattedEpisode;
};

const Episode: Page<Props> = ({ episode }) => {
	const { play } = usePlayer();

	return (
		<Container>
			<SEOTags title={episode.title} />
			<Content>
				<ThumbnailContainer thumbnail={episode.thumbnail}>
					<ThumbnailInfo>
						<h1>{episode.title}</h1>

						<span>{episode.members}</span>
						<span>{episode.publishedAt}</span>
						<span>{episode.durationAsString}</span>
					</ThumbnailInfo>

					<Link href='/'>
						<PreviousButton>
							<Icon name='previous' />
						</PreviousButton>
					</Link>

					<PlayButton onClick={() => play(episode)}>
						<Icon name='play' />
					</PlayButton>
				</ThumbnailContainer>

				<Description dangerouslySetInnerHTML={{ __html: episode.description! }} />
			</Content>
		</Container>
	);
};

Episode.layout = BaseLayout;

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
