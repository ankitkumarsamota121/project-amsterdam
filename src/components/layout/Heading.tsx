import React, {ReactNode} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  children: ReactNode;
  classes: string;
}

/**
 * * Heading Styling
 */
const H1 = styled.h1`
  font-family: 'Space Grotesk';
  ${tw`text-5xl md:text-6xl lg:text-7xl font-bold text-primary`};
`;

/**
 * * Heading Component
 */
const Heading = ({children, classes}: Props) => {
  return <H1 className={classes}>{children}</H1>;
};

export default Heading;
