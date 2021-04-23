import { Icon } from 'components/icons/Icon';
import React from 'react';
import {
	Button,
	Buttons,
	Container,
	EmptyPlayer,
	EmptySlider,
	PlayButton,
	PlayerFooter,
	PlayerHeader,
	ProgressBar,
	Slider
} from './styles';

const Player: React.FC = () => {
	return (
		<Container>
			<PlayerHeader>
				<Icon name='playing' />

				<strong>Tocando agora</strong>
			</PlayerHeader>

			<EmptyPlayer>
				<strong>Selecione um podcast para ouvir</strong>
			</EmptyPlayer>

			<PlayerFooter empty>
				<ProgressBar>
					<span>00:00</span>

					<Slider>
						<EmptySlider />
					</Slider>

					<span>00:00</span>
				</ProgressBar>

				<Buttons>
					<Button type='button'>
						<Icon name='shuffle' />
					</Button>

					<Button type='button'>
						<Icon name='previous' />
					</Button>

					<PlayButton type='button'>
						<Icon name='play' />
					</PlayButton>

					<Button type='button'>
						<Icon name='next' />
					</Button>

					<Button type='button'>
						<Icon name='repeat' />
					</Button>
				</Buttons>
			</PlayerFooter>
		</Container>
	);
};

export { Player };
