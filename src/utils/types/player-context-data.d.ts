import { PlayerEpisodeInfo } from './episode';

export type PlayerContextData = {
	episodeList: PlayerEpisodeInfo[];
	currentEpisodeIndex: number;

	isPlaying: boolean;
	isLooping: boolean;
	isShuffling: boolean;

	hasPrevious: boolean;
	hasNext: boolean;

	play: (episode: PlayerEpisodeInfo) => void;
	playList: (episodes: PlayerEpisodeInfo[], index: number) => void;

	playNext: () => void;
	playPrevious: () => void;

	togglePlay: () => void;
	toggleLoop: () => void;
	toggleShuffle: () => void;

	setPlayingState: (state: boolean) => void;
	clearPlayerState: () => void;
};
