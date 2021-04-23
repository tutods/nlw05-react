import { PlayerEpisodeInfo } from './episode';

export type PlayerContextData = {
	episodeList: PlayerEpisodeInfo[];
	currentEpisodeIndex: number;

	isPlaying: boolean;

	play: (episode: PlayerEpisodeInfo) => void;
	togglePlay: () => void;
	setPlayingState: (state: boolean) => void;
	updateCurrentIndex: (index: number) => void;
};
