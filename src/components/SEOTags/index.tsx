import Head from 'next/head';
import React from 'react';

type Props = {
	title?: string;
};

const SEOTags: React.FC<Props> = ({ title }) => {
	const finalTitle = title ? [title, '|', 'Podcastr'].join(' ') : 'Podcastr';

	return (
		<Head>
			<title>{finalTitle}</title>

			<link rel='shortcut icon' href='/favicon.svg' />
			<meta name='keywords' content='tutods, nlw, podcastr, react, rocktseat' />
			<meta name='description' content='Project developed on React to NLW 05 of Rocketseat' />

			<meta property='og:site_name' content='Podcastr' />
			<meta property='og:title' content={finalTitle} />
			<meta
				property='og:description'
				content='Project developed on React to NLW 05 of Rocketseat'
			/>
			<meta property='og:image' content='/podcastr.png' />
			<meta property='og:image:type' content='image/svg' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />

			<meta name='twitter:image' content='/podcastr.png' />
			<meta name='twiiter:image:alt' content='Podcastr' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content='Podcastr' />
			<meta name='twitter:description' content='A app to make you move.' />
			<meta name='twiiter:create' content='Daniel Sousa @TutoDS' />
		</Head>
	);
};

export { SEOTags };
