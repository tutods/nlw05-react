import { createContext, ReactNode, useState } from 'react';
import { PlayerEpisodeInfo } from 'utils/types/episode';
import { PlayerContextData } from 'utils/types/player-context-data';

type Props = {
	children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerProvider = ({ children }: Props) => {
	const [episodeList, setEpisodeList] = useState<PlayerEpisodeInfo[]>([]);
	const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const play = (episode: PlayerEpisodeInfo) => {
		setEpisodeList([episode]);
		setIsPlaying(true);
		setCurrentEpisodeIndex(0);
	};

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const setPlayingState = (state: boolean) => {
		setIsPlaying(state);
	};

	const updateCurrentIndex = (index: number) => {
		setCurrentEpisodeIndex(index);
	};

	return (
		<PlayerContext.Provider
			value={{
				episodeList,
				currentEpisodeIndex,
				isPlaying,
				play,
				togglePlay,
				setPlayingState,
				updateCurrentIndex
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
};
