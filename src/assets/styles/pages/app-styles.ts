import styled from 'styled-components';
import { flexSettings } from '../mixins';

export const AppWrapper = styled.div`
	${flexSettings()};

	> main {
		flex: 1;
	}
`;
