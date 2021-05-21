import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {animateScroll as scroll} from 'react-scroll';

/**
 * * Logo Styling
 */
const LogoDiv = styled.div`
  font-family: 'poppins';
  cursor: pointer;
  ${tw`text-2xl md:text-3xl lg:text-4xl font-bold text-accent`}
`;

/**
 * * Logo Component
 */
const Logo = () => {
  return <LogoDiv onClick={() => scroll.scrollToTop()}>ankit samota</LogoDiv>;
};

export default Logo;
