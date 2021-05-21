import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Container from '../layout/Container';
import Heading from '../layout/Heading';

/**
 * * Skills Section Styling
 */
const Div = styled.section`
  ${tw`min-h-screen w-screen bg-background py-20`}
`;

/**
 * * Skills Section Styling
 */
const Skills = () => {
  return (
    <Div id="skills-section">
      <Container>
        <Heading classes="text-center">My Expertise</Heading>
      </Container>
    </Div>
  );
};

export default Skills;
