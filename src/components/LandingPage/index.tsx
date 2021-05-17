import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

// interface Props {}

const Div = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;
`;

const Container = tw.div`
  container mx-auto flex justify-center items-center h-full
`;

const Heading = tw.h1`
  text-6xl font-extrabold text-center text-blue-400
`;

const SubHeading = tw.h3`
  text-2xl font-normal text-center text-gray-300 tracking-wide
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

  return (
    <Div Tag="section" fluid={imageData} backgroundColor={`#040e18`}>
      <Container>
        <div>
          <Heading style={{ fontFamily: 'poppins' }}>Hey, I'm Ankit</Heading>
          <SubHeading style={{ fontFamily: 'poppins' }}>
            programmer, developer & designer
          </SubHeading>
        </div>
      </Container>
    </Div>
  );
};

export default LandingPage;
