import React, {ReactNode} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

interface Props {
  children: ReactNode;
  classes: string;
}

/**
 * * Button Styling
 */
const Btn = styled(motion.button)`
  font-family: 'Space Grotesk';
  outline: none;
  &:focus {
    outline: none;
  }
  ${tw`bg-primary text-primary text-xl px-10 py-4 rounded-lg justify-center items-center`}
`;

/**
 * * Button Component
 */
const Button = ({children, classes}: Props) => {
  return (
    <Btn whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className={classes}>
      {children}
    </Btn>
  );
};

export default Button;
