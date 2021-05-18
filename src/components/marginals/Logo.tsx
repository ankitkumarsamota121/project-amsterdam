import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { animateScroll as scroll } from 'react-scroll';

/**
 * * Logo Styling
 */
const LogoDiv = styled.div`
  font-family: 'raleway';
  cursor: pointer;
  ${tw`text-2xl font-semibold text-blue-400`}
`;

/**
 * * Logo Component
 */
const Logo = () => {
  return <LogoDiv onClick={() => scroll.scrollToTop()}>Ankit Samota</LogoDiv>;
};

export default Logo;
