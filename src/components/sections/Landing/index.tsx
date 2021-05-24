import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

// @ts-expect-error : Just importing an SVG
import Sketch from '../../../images/sketch.svg';
import Container from '../../layout/Container';
import Heading from '../../layout/Heading';
import Button from '../../layout/Button';

/**
 * * Landing Styling
 */
const StyledOuterDiv = styled.div`
  ${tw`mt-5 sm:mt-0 min-h-screen w-screen bg-background flex justify-center items-center`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-8 xl:gap-x-0`}
`;

const GridText = styled.div`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-2 md:row-start-1 md:col-start-1 md:col-span-2 `}
`;

const GridImage = styled(motion.div)`
  ${tw`w-full w-full flex flex-col justify-center items-start row-start-1 md:col-start-3`}
`;

const StyledImage = styled(Sketch)`
  filter: drop-shadow(0px 0px 250px #6a4ffe)
    drop-shadow(-10px -10px 100px #6a4ffe);
  background: transparent;
  ${tw`h-48 md:h-60 xl:h-96 max-h-96 max-w-full`}
`;

const StyledSubHeading = styled.h3`
  font-family: 'Space Grotesk';
  ${tw`max-w-2xl mt-8 md:mt-12 md:text-2xl font-normal text-left text-secondary`}
`;

/**
 * * Landing Component
 */
const Landing = () => {
  return (
    <StyledOuterDiv>
      <Container>
        <Grid>
          <GridText>
            <Heading classes="text-left">
              Hey! I’m Ankit, <br />a developer.
            </Heading>
            <StyledSubHeading>
              I'm a student developer currently studying at NIT Rourkela. I
              specialize in building modern and performant web applications.
            </StyledSubHeading>
            <Link to="contact-section" spy smooth duration={500}>
              <Button classes="mt-8 md:mt-12">Contact Me</Button>
            </Link>
          </GridText>
          <GridImage
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
            <StyledImage />
          </GridImage>
        </Grid>
      </Container>
    </StyledOuterDiv>
  );
};

export default Landing;
