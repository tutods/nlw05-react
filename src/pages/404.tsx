import { Container, Logo } from 'assets/styles/pages/404';
import { Icon } from 'components/icons/Icon';
import PodcastrLogo from 'components/icons/PodcastrLogo';
import { SEOTags } from 'components/SEOTags';
import Link from 'next/link';
import React from 'react';

const Custom404: React.FC = () => {
	return (
		<Container>
			<SEOTags title='Erro 404' />
			<Logo>
				<PodcastrLogo darkVersion />
			</Logo>

			<h1>404</h1>
			<h2>Página não encontra</h2>

			<p>A página que procura não existe ou foi removida!</p>

			<Link href='/'>
				<a>
					Voltar a home
					<Icon name='arrow_left' />
				</a>
			</Link>
		</Container>
	);
};

export default Custom404;
