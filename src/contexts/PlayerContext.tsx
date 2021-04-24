import { createContext, ReactNode, useContext, useState } from 'react';
import { PlayerEpisodeInfo } from 'utils/types/episode';
import { PlayerContextData } from 'utils/types/player-context-data';

type Props = {
	children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerContextProvider = ({ children }: Props) => {
	//
	const [episodeList, setEpisodeList] = useState<PlayerEpisodeInfo[]>([]);

	//
	const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);

	//
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	//
	const [isLooping, setIsLooping] = useState<boolean>(false);

	//
	const [isShuffling, setIsShuffling] = useState<boolean>(false);

	//
	const play = (episode: PlayerEpisodeInfo) => {
		setEpisodeList([episode]);
		setIsPlaying(true);
		setCurrentEpisodeIndex(0);
	};

	//
	const playList = (episodes: PlayerEpisodeInfo[], index: number) => {
		setEpisodeList(episodes);
		setCurrentEpisodeIndex(index);
		setIsPlaying(true);
	};

	// Validate if have a previous podcast
	const hasPrevious = currentEpisodeIndex > 0;

	// Validate if have a next podcast
	const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

	//
	const playNext = () => {
		if (isShuffling) {
			const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
			setCurrentEpisodeIndex(nextRandomEpisodeIndex);
		} else if (hasNext) {
			setCurrentEpisodeIndex(currentEpisodeIndex + 1);
		}
	};

	//
	const playPrevious = () => {
		if (hasPrevious) {
			setCurrentEpisodeIndex(currentEpisodeIndex - 1);
		}
	};

	//
	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	//
	const toggleLoop = () => {
		setIsLooping(!isLooping);
	};

	//
	const toggleShuffle = () => {
		setIsShuffling(!isShuffling);
	};

	//
	const setPlayingState = (state: boolean) => {
		setIsPlaying(state);
	};

	//
	const clearPlayerState = () => {
		setEpisodeList([]);
		setCurrentEpisodeIndex(0);

		setIsPlaying(false);
		setIsLooping(false);
		setIsShuffling(false);
	};

	return (
		<PlayerContext.Provider
			value={{
				episodeList,
				currentEpisodeIndex,

				hasPrevious,
				hasNext,

				isPlaying,
				isLooping,
				isShuffling,

				play,
				playList,

				playNext,
				playPrevious,

				togglePlay,
				toggleLoop,
				toggleShuffle,

				setPlayingState,
				clearPlayerState
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
};

export const usePlayer = () => useContext(PlayerContext);
