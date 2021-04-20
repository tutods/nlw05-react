import styled from 'styled-components';

interface ISvgProps {
	width?: string;
	height?: string;
}

export const Svg = styled.svg<ISvgProps>`
	${({ width }) => width && `width: ${width}`};
	${({ height }) => height && `height: ${height}`};

	/* fill: ${({ theme }) => theme.colors.white}; */
`;
