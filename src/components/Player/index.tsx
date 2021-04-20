import Icon from 'components/icons/Icon';
import React from 'react';
import { Container, EmptyPlayer, PlayerHeader, PlayerFooter } from './styles';

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

			<PlayerFooter></PlayerFooter>
		</Container>
	);
};

export { Player };
