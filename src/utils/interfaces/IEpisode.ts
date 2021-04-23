export interface IEpisode {
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
}

export interface IFormattedEpisode {
	id: string;
	title: string;
	thumbnail: string;
	members: string;
	publishedAt: string;
	duration: number;
	durationAsString: string;
	description?: string;
	url: string;
}
