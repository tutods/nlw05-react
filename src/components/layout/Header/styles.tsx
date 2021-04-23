import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Container = styled.header`
	height: 6.5rem;

	padding: 2rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

	background-color: ${({ theme }) => theme.colors.boxBackground};
`;

export const MaxContent = styled.div`
	max-width: 1400px;
	margin-right: auto;
	margin-left: auto;

	padding: 0 4rem;

	${flexSettings()};
	${flexAlignment('center')};

	> a {
		> svg {
			width: 163px;
			height: 40px;
		}
	}
`;

export const HeaderText = styled.p`
	margin-left: 2rem;
	padding: 0.25rem 0 0.25rem 2rem;
	border-left: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const RightContent = styled.div`
	${flexSettings()};
	${flexAlignment('center')};

	margin-left: auto;

	> * + * {
		margin-left: 0.75rem;
	}
`;

export const HeaderDate = styled.span`
	text-transform: capitalize;
`;
