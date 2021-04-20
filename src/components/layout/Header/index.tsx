import PodcastrLogo from 'components/icons/PodcastrLogo';
import { ThemeSwitch } from 'components/ThemeSwitch';
import format from 'date-fns/format';
import { pt } from 'date-fns/locale';
import React from 'react';
import { Container, HeaderDate, HeaderText, RightContent } from './styles';

const Header: React.FC = () => {
	const currentDate = format(new Date(), 'EEEE, d MMMM', { locale: pt });

	return (
		<Container>
			<PodcastrLogo />

			<HeaderText>O melhor para você ouvir, sempre</HeaderText>

			<RightContent>
				<HeaderDate>{currentDate}</HeaderDate>

				<ThemeSwitch />
			</RightContent>
		</Container>
	);
};

export { Header };
