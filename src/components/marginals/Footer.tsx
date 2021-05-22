import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Div = styled.div`
  ${tw`w-screen h-40 bg-primary flex flex-col justify-center items-center`}
`;

const Text = styled.a`
  font-family: 'Space Grotesk';
  ${tw`text-primary`}
`;

const Footer = () => {
  return (
    <Div>
      <Text href="https://github.com/ankitkumarsamota121/project-amsterdam">
        Designed & Developed by{' '}
        <strong className="text-white underline">Ankit Samota</strong>
      </Text>
      <Text href="https://www.flaticon.com/">
        Icons from <strong className="text-white underline">Flaticon</strong>
      </Text>
    </Div>
  );
};

export default Footer;
