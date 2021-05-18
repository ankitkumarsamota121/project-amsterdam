import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// interface Props {

// }
/**
 * * Styling
 */
const ContainerDiv = styled(motion.div)`
  transform: translateY(-32);
  /* background-color: #16101d; */
  &::after {
    ${tw`filter brightness-50`}
  }
  ${tw`fixed bg-background top-0 z-10 flex justify-center w-full text-white`}
`;

const Navbar = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [-72, 0]);
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  return (
    <ContainerDiv style={{ y, opacity }}>
      {/* <DesktopNav /> */}
      <MobileNav />
    </ContainerDiv>
  );
};

export default Navbar;
