import React, { MutableRefObject, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, useTransform, useViewportScroll, useCycle } from 'framer-motion';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from './Logo';
import MenuToggle from './MenuToggle';
import { useDimensions } from '../../hooks/useDimensions';

// interface Props {

// }
/**
 * * Mobile Navbar Styling
 */
const Nav = styled(motion.nav)`
  ${tw`container m-5 flex justify-around items-center`}
`;

const Div = styled(motion.div)`
  ${tw`relative h-5 w-5`}
`;

const Sidebar = styled(motion.div)`
  position: absolute;
  top: -100vh;
  right: -100vw;
  bottom: 0;
  width: 200vw;
  height: 200vh;
  z-index: 100;
  background: #000;
`;

const Ul = tw.ul`
flex flex-row
`;

const Li = tw.li`
pr-5
`;

/**
 * * Variants
 */
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

/**
 * * Mobile Navbar Component
 */
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef: MutableRefObject<HTMLElement | null> = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Nav>
      <Logo />
      <Div initial={false} animate={isOpen ? 'open' : 'closed'} custom={height}>
        <Sidebar variants={sidebar} />
        {/* <Navigation /> */}
        <MenuToggle toggle={() => toggleOpen()} />
      </Div>
    </Nav>
  );
};

export default Navbar;
