import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.header`
	height: 6.5rem;

	${flexSettings()};
	${flexAlignment('center')};

	padding: 2rem 4rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

	background-color: ${({ theme }) => theme.colors.boxBackground};

	> svg {
		width: 163px;
		height: 40px;
	}
`;

export const HeaderText = styled.p`
	margin-left: 2rem;
	padding: 0.25rem 0 0.25rem 2rem;
	border-left: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const HeaderDate = styled.span`
	margin-left: auto;
	text-transform: capitalize;
`;
