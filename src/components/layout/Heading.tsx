import React, {ReactNode} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  children: ReactNode;
}

/**
 * * Heading Styling
 */
const H1 = styled.h1`
  font-family: 'Space Grotesk';
  ${tw`text-5xl md:text-6xl lg:text-7xl font-bold text-left text-primary`};
`;

/**
 * * Heading Component
 */
const Heading = ({children}: Props) => {
  return <H1>{children}</H1>;
};

export default Heading;
