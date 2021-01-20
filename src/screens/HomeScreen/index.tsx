import React from 'react';
import { Container, Text } from 'theme-ui';

import HeroSection from './HeroSection';

interface Props {}

export const HomeScreen: React.FC = (props: Props) => {
  return (
    <>
      <HeroSection />
      <Container>
        <Text variant="title">Welcome to Project-Amsterdam</Text>
      </Container>
    </>
  );
};
