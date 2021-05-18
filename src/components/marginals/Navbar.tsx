import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

/**
 * * Navbar Styling
 */
const ContainerDiv = styled(motion.div)`
  transform: translateY(-32);
  &::after {
    ${tw`filter brightness-50`}
  }
  ${tw`fixed bg-background top-0 z-10 flex justify-center w-full`}
`;

/**
 * * Navbar Component
 */
const Navbar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(() => window.screen.width);
  }, []);

  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [-72, 0]);
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  return (
    <ContainerDiv style={{ y, opacity }}>
      {width > 768 && <DesktopNav />}
      {width <= 768 && <MobileNav />}
    </ContainerDiv>
  );
};

export default Navbar;
