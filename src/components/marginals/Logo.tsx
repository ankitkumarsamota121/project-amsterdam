import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import scrollTo from 'gatsby-plugin-smoothscroll';

// interface Props {}

const LogoDiv = styled.div`
  font-family: 'raleway';
  cursor: pointer;
  ${tw`text-2xl font-semibold text-blue-400`}
`;

const Logo = () => {
  return <LogoDiv onClick={() => scrollTo('#landing-page')}>Ankit Samota</LogoDiv>;
};

export default Logo;
