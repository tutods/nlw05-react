export type Episode = {
	id: string;
	title: string;
	members: string;
	published_at: string;
	thumbnail: string;
	description: string;
	file: {
		url: string;
		type: string;
		duration: number;
	};
};

export type FormattedEpisode = {
	id: string;
	title: string;
	thumbnail: string;
	members: string;
	publishedAt: string;
	duration: number;
	durationAsString: string;
	description?: string;
	url: string;
};

export type PlayerEpisodeInfo = {
	title: string;
	thumbnail: string;
	members: string;
	duration: number;
	durationAsString: string;
	url: string;
};
