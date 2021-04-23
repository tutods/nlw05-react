import { PlayerEpisodeInfo } from './episode';

export type PlayerContextData = {
	episodeList: PlayerEpisodeInfo[];
	currentEpisodeIndex: number;

	isPlaying: boolean;
	isLooping: boolean;

	hasPrevious: boolean;
	hasNext: boolean;

	play: (episode: PlayerEpisodeInfo) => void;
	playList: (episodes: PlayerEpisodeInfo[], index: number) => void;

	playNext: () => void;
	playPrevious: () => void;

	togglePlay: () => void;
	toggleLoop: () => void;
	setPlayingState: (state: boolean) => void;
};
