import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from './Logo';

// interface Props {

// }
/**
 * * Styling
 */
const Nav = styled.nav`
  ${tw`container m-5 flex justify-around items-center`}
`;

const Ul = tw.ul`
flex flex-row
`;

const Li = tw.li`
pr-5
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Ul>
        <Li className="pr-5">Services</Li>
        <Li className="pr-5">Porfolio</Li>
        <Li className="pr-5">About</Li>
        <Li>Contact</Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
