import React, {ReactNode} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  children: ReactNode;
  classes?: string;
}

const defaultInnerDivProps = {
  classes: '',
};

/**
 * * InnerDiv Styling
 */
const Div = styled.div`
  ${tw`min-h-screen py-20 flex flex-col justify-center items-center`};
`;

/**
 * * InnerDiv Components
 */
const InnerDiv = ({children, classes}: Props) => {
  return <Div className={classes}>{children}</Div>;
};
InnerDiv.defaultProps = defaultInnerDivProps;

export default InnerDiv;
