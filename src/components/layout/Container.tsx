import React, {ReactNode} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  children: ReactNode;
  classes?: string;
}

const defaultContainerProps = {
  classes: '',
};

/**
 * * Container Styling
 */
const Div = styled.div`
  ${tw`container mx-auto px-5 lg:p-0 lg:w-3/4`};
`;

/**
 * * Container Components
 */
const Container = ({children, classes}: Props) => {
  return <Div className={classes}>{children}</Div>;
};
Container.defaultProps = defaultContainerProps;

export default Container;
