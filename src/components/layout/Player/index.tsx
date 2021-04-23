import { Icon } from 'components/icons/Icon';
import { PlayerContext } from 'contexts/PlayerContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useContext, useEffect, useRef } from 'react';
import {
	Button,
	Buttons,
	Container,
	EmptyPlayer,
	EmptySlider,
	PlayButton,
	PlayerFooter,
	PlayerHeader,
	Playing,
	ProgressBar,
	SliderContainer,
	ThumbnailContainer
} from './styles';

const Player: React.FC = () => {
	const { episodeList, currentEpisodeIndex, isPlaying, setPlayingState, togglePlay } = useContext(
		PlayerContext
	);
	const episode = episodeList[currentEpisodeIndex];

	// Reference to audio tag
	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (!audioRef.current) {
			return;
		}

		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<Container>
			<PlayerHeader>
				<Icon name='playing' />

				<strong>Tocando agora</strong>
			</PlayerHeader>

			{!episode ? (
				<EmptyPlayer>
					<strong>Selecione um podcast para ouvir</strong>
				</EmptyPlayer>
			) : (
				<Playing>
					<ThumbnailContainer thumbnail={episode.thumbnail} />

					<strong>{episode.title}</strong>
					<span>{episode.members}</span>
				</Playing>
			)}

			<PlayerFooter empty={!episode}>
				<ProgressBar>
					<span>00:00</span>

					<SliderContainer>
						{episode ? (
							<Slider
								trackStyle={{ backgroundColor: '#04d361' }}
								railStyle={{ backgroundColor: '#9F75FF' }}
								handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
							/>
						) : (
							<EmptySlider />
						)}
					</SliderContainer>

					<span>00:00</span>
				</ProgressBar>

				{episode && (
					<audio
						ref={audioRef}
						src={episode.url}
						autoPlay
						onPlay={() => setPlayingState(true)}
						onPause={() => setPlayingState(false)}
					/>
				)}

				<Buttons>
					<Button type='button' disabled={!episode}>
						<Icon name='shuffle' />
					</Button>

					<Button type='button' disabled={!episode}>
						<Icon name='previous' />
					</Button>

					<PlayButton
						playing={isPlaying}
						type='button'
						disabled={!episode}
						onClick={togglePlay}
					>
						<Icon name={isPlaying ? 'pause' : 'play'} />
					</PlayButton>

					<Button type='button' disabled={!episode}>
						<Icon name='next' />
					</Button>

					<Button type='button' disabled={!episode}>
						<Icon name='repeat' />
					</Button>
				</Buttons>
			</PlayerFooter>
		</Container>
	);
};

export { Player };
