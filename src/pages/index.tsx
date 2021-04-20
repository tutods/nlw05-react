import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text};
`;

const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
`;

const Home: React.FC = () => {
	return (
		<Container>
			<Title>teste</Title>
		</Container>
	);
};

export default Home;
