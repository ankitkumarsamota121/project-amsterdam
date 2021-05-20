import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';
import Heading from '../layout/Heading';

// interface Props {

// }

const Div = styled.section`
  ${tw`h-screen w-screen bg-background`}
`;

const Container = tw.div`
  container mx-auto
`;

const index = () => {
  return (
    <Div id="about-section">
      <Container>
        <Heading>About Me</Heading>
      </Container>
    </Div>
  );
};

export default index;
