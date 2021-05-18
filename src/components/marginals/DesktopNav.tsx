import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import { Link } from 'react-scroll';

import Logo from './Logo';

/**
 * * DesktopNav Styling
 */
const Nav = styled.nav`
  ${tw`container m-5 flex justify-around items-center`}
`;

const Ul = styled.ul`
  ${tw`flex flex-row`}
`;

const Li = styled(Link)`
  color: #efedff;
  font-family: 'Poppins';
  cursor: pointer;
`;

/**
 * * DesktopNav Component
 */
const DesktopNav = () => {
  return (
    <Nav>
      <Logo />
      <Ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Li className="pr-5" to="about-section" spy smooth duration={500}>
            About
          </Li>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Li className="pr-5" to="skills-section" spy smooth duration={500}>
            Skills
          </Li>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Li className="pr-5" to="projects-section" spy smooth duration={500}>
            Projects
          </Li>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Li to="contact-section" spy smooth duration={500}>
            Contact
          </Li>
        </motion.li>
      </Ul>
    </Nav>
  );
};

export default DesktopNav;
