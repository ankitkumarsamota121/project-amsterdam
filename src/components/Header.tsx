import React from 'react';
import styled from 'styled-components';
import { Container, Flex, Text, Box, Image } from 'theme-ui';

import theme from '../lib/theme';

const Div = styled.div`
  background-color: rgba(239, 237, 255, 0.1);
  height: 4rem;
  display: flex;
  align-items: center;
`;

interface IPill {
  selected?: boolean;
}

const Pill = styled.div<IPill>`
  background-color: ${(props: any) =>
    props.selected ? theme.colors.primary : 'transparent'};
  color: ${theme.colors.text};
  margin: auto 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

interface Props {}

const Header: React.FC = (props: Props) => {
  return (
    <Div>
      <Container>
        <Flex
          sx={{
            justifyContent: 'space-between',
            maxHeight: '3rem',
            overflow: 'hidden'
          }}
        >
          <Box>
            <Image
              src="/logos/android-chrome-192x192.png"
              sx={{ height: '100%', maxHeight: '3rem' }}
            />
          </Box>
          <Flex>
            <Pill selected>Hello!</Pill>
            <Pill>Skills</Pill>
            <Pill>Projects</Pill>
            <Pill>Contacts</Pill>
          </Flex>
        </Flex>
      </Container>
    </Div>
  );
};

export default Header;
