import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import tw from 'twin.macro';

import Container from '../layout/Container';
import Heading from '../layout/Heading';
import Button from '../layout/Button';
import InnerDiv from '../layout/InnerDiv';

/**
 * * About Section Styling
 */
const Div = styled.section`
  ${tw`min-h-screen w-screen bg-background`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20`}
`;

const GridImage = styled.div`
  position: relative;
  ${tw`flex justify-center lg:justify-start items-center`}
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );
  // console.log(data);
  const imageData = data.file.childImageSharp.fluid;
  return (
    <Div id="about-section">
      <Container>
        <InnerDiv>
          <Heading classes="text-center justify-self-start">About Me</Heading>
          <Grid>
            <GridImage>
              <Image>
                <BackDiv />
                <ShadowDiv>
                  <Img
                    fluid={imageData}
                    className="w-48 md:w-52 xl:w-72 max-w-xs rounded-3xl"
                  />
                </ShadowDiv>
              </Image>
            </GridImage>
            <GridText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus
              cras curabitur eget facilisis nisl. Neque a porttitor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
              <Ul>
                <Li>Programmer</Li>
                <Li>Developer</Li>
                <Li>Designer</Li>
              </Ul>
              <Button classes="mt-8 md:mt-12">My Projects</Button>
            </GridText>
          </Grid>
        </InnerDiv>
      </Container>
    </Div>
  );
};

export default About;
