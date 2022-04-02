import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
	direction?: React.CSSProperties['flexDirection']
	align?: React.CSSProperties['alignItems'];
	justify?: React.CSSProperties['justifyContent'];
	wrap?: React.CSSProperties['flexWrap'];
	gap?: string
	margin?: string
	padding?: string
	width?: string
}

const Container = styled.div<Props>`
	width: 100%;
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	align-items: ${({ align }) => align || 'stretch'};
	justify-content: ${({ justify }) => justify || 'stretch'};
	flex-wrap: ${({ wrap }) => wrap || 'stretch'};
	gap: ${({ gap }) => gap || '0'};
	margin: ${({ margin }) => margin || '0'};
	padding: ${({ padding }) => padding || '0'};
`;

const Flex: FC<Props> = (props) => {
	return (
		<Container {...props} />
	);
};

export default Flex;