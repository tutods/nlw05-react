import { Icon } from 'components/icons/Icon';
import { usePlayer } from 'contexts/PlayerContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useEffect, useRef, useState } from 'react';
import { convertDurationToTimeString } from 'utils/functions/convertDurationToTimeString';
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
	RepeatButton,
	ShuffleButton,
	SliderContainer,
	ThumbnailContainer
} from './styles';

const Player: React.FC = () => {
	const {
		episodeList,
		currentEpisodeIndex,
		isPlaying,
		isLooping,
		isShuffling,
		hasNext,
		hasPrevious,
		togglePlay,
		toggleLoop,
		toggleShuffle,
		playNext,
		playPrevious,
		setPlayingState,
		clearPlayerState
	} = usePlayer();

	const episode = episodeList[currentEpisodeIndex];

	// Reference to audio tag
	const audioRef = useRef<HTMLAudioElement>(null);

	const [progress, setProgress] = useState(0);

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

	const setupProgressListener = () => {
		// if (!audioRef.current) {
		// 	return;
		// }

		audioRef.current!.currentTime = 0;

		audioRef.current!.addEventListener('timeupdate', () => {
			setProgress(Math.floor(audioRef.current!.currentTime));
		});
	};

	const handleSeek = (amount: number) => {
		audioRef.current!.currentTime = amount;
		setProgress(amount);
	};

	const handleEpisodeEnded = () => {
		if (hasNext) {
			playNext();
		} else {
			clearPlayerState();
		}
	};

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
					<span>{convertDurationToTimeString(progress)}</span>

					<SliderContainer>
						{episode ? (
							<Slider
								max={episode.duration}
								value={progress}
								onChange={handleSeek}
								trackStyle={{ backgroundColor: '#04d361' }}
								railStyle={{ backgroundColor: '#9F75FF' }}
								handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
							/>
						) : (
							<EmptySlider />
						)}
					</SliderContainer>

					<span>{convertDurationToTimeString(episode?.duration || 0)}</span>
				</ProgressBar>

				{episode && (
					<audio
						ref={audioRef}
						src={episode.url}
						autoPlay
						loop={isLooping}
						onPlay={() => setPlayingState(true)}
						onPause={() => setPlayingState(false)}
						onEnded={handleEpisodeEnded}
						onLoadedMetadata={setupProgressListener}
					/>
				)}

				<Buttons>
					{/* Shuffle Button */}
					<ShuffleButton
						isActive={isShuffling}
						onClick={() => toggleShuffle()}
						type='button'
						disabled={!episode || episodeList.length === 1}
					>
						<Icon name='shuffle' />
					</ShuffleButton>

					{/* Previous Button */}
					<Button
						type='button'
						onClick={() => playPrevious()}
						disabled={!episode || !hasPrevious}
					>
						<Icon name='previous' />
					</Button>

					{/* Play Button */}
					<PlayButton
						playing={isPlaying}
						type='button'
						disabled={!episode}
						onClick={togglePlay}
					>
						<Icon name={isPlaying ? 'pause' : 'play'} />
					</PlayButton>

					{/* Next Button */}
					<Button
						type='button'
						onClick={() => playNext()}
						disabled={!episode || !hasNext}
					>
						<Icon name='next' />
					</Button>

					{/* Repeat Button */}
					<RepeatButton
						isActive={isLooping}
						type='button'
						onClick={() => toggleLoop()}
						disabled={!episode}
					>
						<Icon name='repeat' />
					</RepeatButton>
				</Buttons>
			</PlayerFooter>
		</Container>
	);
};

export { Player };
