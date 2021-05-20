import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Container from '../layout/Container';

/**
 * * Navbar Styling
 */
const Div = styled.div`
  ${tw`fixed top-0 w-full h-20  z-10 flex justify-center items-center bg-background`}
`;

/**
 * * Navbar Component
 */
const Navbar = () => {
  return (
    <Div>
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    </Div>
  );
};

export default Navbar;
