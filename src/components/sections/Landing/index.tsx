import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

// @ts-expect-error : Just importing an SVG
import Img from '../../../images/sketch.svg';
import Container from '../../layout/Container';
import Heading from '../../layout/Heading';
import Button from '../../layout/Button';

/**
 * * Landing Styling
 */
const Div = styled.div`
  ${tw`mt-5 sm:mt-0 min-h-screen w-screen bg-background flex justify-center items-center`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-8 xl:gap-x-0`}
`;

const GridDivText = styled.div`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-2 md:row-start-1 md:col-start-1 md:col-span-2 `}
`;

const GridDivImage = styled(motion.div)`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-1 md:col-start-3`}
`;

const Image = styled(Img)`
  filter: drop-shadow(0px 0px 250px #6a4ffe)
    drop-shadow(-10px -10px 100px #6a4ffe);
  /* --webkit-filter: drop-shadow(10px 10px 400px #6a4ffe)
    drop-shadow(-10px -10px 100px #6a4ffe);
  --moz-filter: drop-shadow(10px 10px 400px #6a4ffe)
    drop-shadow(-10px -10px 100px #6a4ffe);
  box-shadow: none; */
  /* --webkit-appearance: none; */
  background: transparent;
  ${tw`h-48 md:h-60 xl:h-96 max-h-96 max-w-full`}
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
          <GridDivText>
            <Heading classes="text-left">
              Hey! I’m Ankit, <br />a developer.
            </Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus
              cras curabitur eget facilisis nisl.
            </SubHeading>
            <Button classes="mt-8 md:mt-12">Contact Me</Button>
          </GridDivText>
          <GridDivImage
            animate={{
              y: [0, -20],
              opacity: [1, 0.8],
              transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut',
                type: 'tween',
              },
            }}
          >
            <Image />
          </GridDivImage>
        </Grid>
      </Container>
    </Div>
  );
};

export default Landing;
