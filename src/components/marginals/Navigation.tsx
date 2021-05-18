import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import MenuItem from './MenuItem';

/**
 * * Navigation Styling
 */
const Container = styled.div`
  z-index: 900;
  ${tw`h-screen w-screen fixed top-0 left-0 container mx-auto flex items-center`};
`;

const MotionUl = styled(motion.ul)`
  z-index: 900;
  ${tw`absolute right-0 pr-5`}
`;

/**
 * * Navigation Variants
 */
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = ['About', 'Skills', 'Projects', 'Contact'];

/**
 * * Navigation Component
 */
const Navigation = () => (
  <Container>
    <MotionUl variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </MotionUl>
  </Container>
);

export default Navigation;
