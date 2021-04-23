import { flexSettings } from 'assets/styles/mixins';
import styled from 'styled-components';

export const Wrapper = styled.div`
	${flexSettings()};

	> main {
		flex: 1;
	}
`;
