import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

// interface Props {

// }

const Div = styled.section`
  background-color: #16101d;

  &::after {
    ${tw`filter brightness-50`}
  }

  ${tw`h-screen w-screen max-w-full`}
`;

const Container = tw.div`
  container mx-auto
`;

const index = () => {
  return (
    <Div id="about-section">
      <Container>
        <h1 className="text-white">About Me</h1>
      </Container>
    </Div>
  );
};

export default index;
