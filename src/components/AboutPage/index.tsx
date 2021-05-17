import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

// interface Props {

// }

const Div = tw.div`
  h-screen w-screen bg-red-200
`;

const index = () => {
  return (
    <Div>
      <h1>About Me</h1>
    </Div>
  );
};

export default index;
