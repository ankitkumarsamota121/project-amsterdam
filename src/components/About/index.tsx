import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import {GatsbyImage} from 'gatsby-plugin-image';

import Container from '../layout/Container';
import Heading from '../layout/Heading';
import Button from '../layout/Button';
import InnerDiv from '../layout/InnerDiv';
import MotionDiv from '../layout/MotionDiv';

/**
 * * About Section Styling
 */
const Div = styled.section`
  ${tw`w-screen bg-background`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:mt-32`}
`;

const GridImage = styled.div`
  position: relative;
  ${tw`flex justify-center items-center`}
`;

const Image = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  ${tw`rounded-3xl`}
`;

const BackDiv = styled.div`
  position: absolute;
  ${tw`h-full w-full absolute top-0 left-0 bg-primary rounded-3xl transform -rotate-12`}
`;

const ShadowDiv = styled.div`
  filter: drop-shadow(4px 4px 20px #000000);
`;

const GridText = styled.div`
  font-family: 'Space Grotesk';
  ${tw`md:text-2xl font-normal text-left text-secondary`}
`;

const Ul = styled.ul`
  ${tw`mt-4 md:mt-6`}
`;

const Li = styled.li`
  &::before {
    content: '';
    ${tw`h-2 md:h-3 w-2 md:w-3 mr-2 md:mr-2 inline-block bg-primary rounded-full`}
  }
  ${tw``}
`;

/**
 * * About Section Styling
 */
const About = () => {
  const data = useStaticQuery(
    graphql`
      query Ankit {
        file(relativePath: {eq: "ankit.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `,
  );

  const imageData = data.file.childImageSharp.gatsbyImageData;
  return (
    <Div id="about-section">
      <Container>
        <InnerDiv>
          <MotionDiv>
            <Heading classes="text-center justify-self-start">About Me</Heading>
            <Grid>
              <GridImage>
                <Image>
                  <BackDiv />
                  <ShadowDiv>
                    <GatsbyImage
                      image={imageData}
                      alt="Me"
                      className="w-48 md:w-52 xl:w-72 max-w-xs rounded-3xl"
                    />
                  </ShadowDiv>
                </Image>
              </GridImage>
              <GridText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                purus cras curabitur eget facilisis nisl. Neque a porttitor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <Ul>
                  <Li key="1">Programmer</Li>
                  <Li key="2">Developer</Li>
                  <Li key="3">Designer</Li>
                </Ul>
                <Button classes="mt-8 md:mt-12">My Projects</Button>
              </GridText>
            </Grid>
          </MotionDiv>
        </InnerDiv>
      </Container>
    </Div>
  );
};

export default About;
