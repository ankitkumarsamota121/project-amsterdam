import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// @ts-expect-error : Just importing an SVG
import Img from '../../images/sketch.svg';
import Container from '../layout/Container';
import Heading from '../layout/Heading';
import Button from '../layout/Button';

/**
 * * Landing Styling
 */
const Div = styled.div`
  ${tw`mt-10 sm:mt-0 min-h-screen w-screen bg-background flex justify-center items-center`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-8 xl:gap-x-0`}
`;

const GridDivText = styled.div`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-2 md:row-start-1 md:col-start-1 md:col-span-2 `}
`;

const GridDivImage = styled.div`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-1 md:col-start-3`}
`;

const Image = styled(Img)`
  ${tw`h-60 md:h-96 max-h-96 max-w-full`}
`;

const SubHeading = styled.h3`
  font-family: 'Space Grotesk';
  ${tw`max-w-2xl mt-8 md:mt-12 md:text-2xl font-normal text-left text-secondary`}
`;

/**
 * * Landing Component
 */
const Landing = () => {
  return (
    <Div>
      <Container>
        <Grid>
          <GridDivText className="">
            <Heading>
              Hey! I’m Ankit, <br />a developer.
            </Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus
              cras curabitur eget facilisis nisl.
            </SubHeading>
            <Button classes="mt-8 md:mt-12 hidden md:flex">Contact Me</Button>
          </GridDivText>
          <GridDivImage>
            <Image />
          </GridDivImage>
        </Grid>
      </Container>
    </Div>
  );
};

export default Landing;
