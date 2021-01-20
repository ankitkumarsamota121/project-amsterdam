import React from 'react';
import { Container, Text } from 'theme-ui';

interface Props {}

export const HomeScreen: React.FC = (props: Props) => {
  return (
    <Container>
      <Text variant="title">Welcome to Project-Amsterdam</Text>
    </Container>
  );
};
