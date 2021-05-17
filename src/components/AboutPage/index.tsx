import React from 'react';

// import styled from 'styled-components';
import tw from 'twin.macro';

// interface Props {

// }

const Div = tw.div`
  h-screen w-screen bg-red-200 max-w-full
`;

const Container = tw.div`
  container mx-auto
`;

const index = () => {
  return (
    <Div id="about-page">
      <Container>
        <h1>About Me</h1>
      </Container>
    </Div>
  );
};

export default index;
