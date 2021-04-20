import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
	width: 26.5rem;
	height: 100vh;

	${flexSettings('column')};
	${flexAlignment('center', 'space-between')}

	padding: 3rem 4rem;

	background-color: ${({ theme }) => theme.colors.primary[500]};
	color: ${({ theme }) => theme.colors.white};
`;

export const PlayerHeader = styled.header`
	${flexSettings()};
	${flexAlignment('center')};

	gap: 1rem;

	> svg {
		width: 32px;
		height: 32px;

		color: ${({ theme }) => theme.colors.white};
	}
`;

export const EmptyPlayer = styled.div``;

export const PlayerFooter = styled.footer``;
