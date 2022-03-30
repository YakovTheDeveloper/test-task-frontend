import React, { CSSProperties, FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

type Props = {
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
	align?: 'normal' | 'stretch' | 'center' | 'start' | 'end'
	justify?: 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
	wrap?: 'wrap' | 'nowrap'
	gap?: string
	margin?: string
	padding?: string
}

const Container = styled.div<Props>`
	display: flex;
	flex-direction: ${({direction}) => direction || 'row'};
	align-items: ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-wrap: ${({wrap}) => wrap || 'stretch'};
	gap: ${({gap}) => gap || '0'};
	margin: ${({margin}) => margin || '0'};
	padding: ${({padding}) => padding || '0'};
`;

const Flex: FC<Props> = (props) => {
	return (
		<Container {...props}/>
	);
};

export default Flex;