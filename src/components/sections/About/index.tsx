import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import tw, {styled} from 'twin.macro';
import {GatsbyImage} from 'gatsby-plugin-image';
import {Link} from 'react-scroll';

import Container from '../../layout/Container';
import Heading from '../../layout/Heading';
import Button from '../../layout/Button';
import InnerDiv from '../../layout/InnerDiv';
import MotionDiv from '../../layout/MotionDiv';

/**
 * * About Section Styling
 */
const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 md:mt-32`}
`;

const GridImage = styled.div`
  ${tw`flex justify-center items-center`}
`;

const StyledImage = styled.div`
  width: fit-content;
  height: fit-content;
  ${tw`relative rounded-3xl`}
`;

const BackDiv = styled.div`
  ${tw`h-full w-full absolute top-0 left-0 bg-primary rounded-3xl transform -rotate-12`}
`;

const ShadowDiv = styled.div`
  filter: drop-shadow(4px 4px 20px #000000);
`;

const StyledText = styled.div`
  font-family: 'Space Grotesk';
  ${tw`md:text-xl font-normal text-left text-secondary`}
`;

const StyledLi = styled.li`
  &::before {
    content: '';
    ${tw`h-2 md:h-3 w-2 md:w-3 mr-2 md:mr-2 inline-block bg-primary rounded-full`}
  }
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
    <div id="about-section" tw="w-screen bg-background">
      <Container>
        <InnerDiv>
          <MotionDiv>
            <Heading classes="text-center justify-self-start">About Me</Heading>
            <Grid>
              <GridImage>
                <StyledImage>
                  <BackDiv />
                  <ShadowDiv>
                    <GatsbyImage
                      image={imageData}
                      alt="Ankit Samota"
                      className="w-60 md:w-72 xl:w-96 max-w-xs rounded-3xl"
                    />
                  </ShadowDiv>
                </StyledImage>
              </GridImage>
              <StyledText>
                <p>
                  <strong>Hey! My name is Ankit Samota,</strong> and I’m a
                  final-year student for Industrial Design at NIT Rourkela.
                </p>
                <p tw="mt-4 md:mt-6">
                  <strong>I love to solve problems and build things.</strong> I
                  have been developing software for the past 2 years and my main
                  focus these days is to write performant and industry standard
                  code mainly in JavaScript. Whether it’s web development or
                  competitive programming, I love the challenge of finding a way
                  and discovering solutions.
                </p>

                <ul tw="mt-4 md:mt-6">
                  <strong>TL;DR, I'm a - </strong>
                  <StyledLi key="1" tw="ml-4">
                    Programmer
                  </StyledLi>
                  <StyledLi key="2" tw="ml-4">
                    Developer
                  </StyledLi>
                  <StyledLi key="3" tw="ml-4">
                    Designer
                  </StyledLi>
                </ul>
                <Link to="projects-section" spy smooth duration={500}>
                  <Button classes="mt-8 md:mt-12">My Projects</Button>
                </Link>
              </StyledText>
            </Grid>
          </MotionDiv>
        </InnerDiv>
      </Container>
    </div>
  );
};

export default About;
