import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useViewportScroll, motion, useTransform } from 'framer-motion';

import NavigationPill from './NavigationPill';

// interface Props {}

const Background = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;

  &::after {
    ${tw`filter brightness-50`}
  }

  ${tw`max-w-full place-content-center`};
`;

const Container = styled(motion.div)`
  ${tw`container flex justify-center items-center h-full w-full`}
`;

const Heading = tw.h1`
  text-4xl md:text-6xl font-extrabold text-center text-blue-400 filter drop-shadow
`;

const SubHeading = tw.h3`
  md:text-2xl font-normal text-center text-gray-300 tracking-wide mt-2
`;

const Div = styled.div`
  ${tw`h-1/2 w-full flex flex-col justify-around items-center`}
`;

const LandingPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.desktop.childImageSharp.fluid;

  const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <Background Tag="section" fluid={imageData}>
      <Container style={{ y: y2, x: 50 }}>
        <Div>
          <div>
            <Heading>Hey, I'm Ankit</Heading>
            <SubHeading>programmer, developer & designer</SubHeading>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <NavigationPill title="About" icon="about" />
            <NavigationPill title="Skills" icon="skills" />
            <NavigationPill title="Projects" icon="projects" />
            <NavigationPill title="Contact" icon="contact" />
          </div>
        </Div>
      </Container>
    </Background>
  );
};

export default LandingPage;
