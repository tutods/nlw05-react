import { Header } from 'components/layout/Header';
import { Player } from 'components/layout/Player';
import React, { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
	children: ReactNode;
};

const BaseLayout: FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<main>
				<Header />
				{children}
			</main>

			<Player />
		</Wrapper>
	);
};

export default BaseLayout;
