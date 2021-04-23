import { Header } from 'components/layout/Header';
import { Player } from 'components/layout/Player';
import { PlayerContextProvider } from 'contexts/PlayerContext';
import React, { FC, ReactNode, useState } from 'react';
import { PlayerEpisodeInfo } from 'utils/types/episode';
import { Wrapper } from './styles';

type Props = {
	children: ReactNode;
};

const BaseLayout: FC<Props> = ({ children }) => {
	const [episodeList, setEpisodeList] = useState<PlayerEpisodeInfo[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<PlayerContextProvider>
			<Wrapper>
				<main>
					<Header />
					{children}
				</main>

				<Player />
			</Wrapper>
		</PlayerContextProvider>
	);
};

export default BaseLayout;
