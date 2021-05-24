import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Container from '../../layout/Container';
import Heading from '../../layout/Heading';
import Button from '../../layout/Button';
import MotionDiv from '../../layout/MotionDiv';

// // @ts-expect-error : Just importing an SVG
// import Linkedin from '../../images/linkedin.svg';
// // @ts-expect-error : Just importing an SVG
// import Github from '../../images/github.svg';
// // @ts-expect-error : Just importing an SVG
// import Insta from '../../images/instagram.svg';

/**
 * * About Section Styling
 */
const Div = styled.section`
  ${tw`w-screen py-32 bg-background`}
`;

const ContentDiv = styled.div`
  ${tw`mt-10 md:mt-20 max-w-2xl flex flex-col justify-center items-center`}
`;

const Text = styled.div`
  font-family: 'Space Grotesk';
  ${tw`text-secondary text-center text-xl md:text-2xl`};
`;

const LinksDiv = styled.div`
  ${tw`mt-6 md:mt-8 flex gap-6 md:gap-8`}
`;

// const Icon = styled(motion.div)`
//   cursor: pointer;
//   ${tw`h-16 w-16`}
// `;

// const LinkedinIcon = styled(Linkedin)`
//   ${tw`h-full w-full`}
// `;
// const GithubIcon = styled(Github)`
//   ${tw`h-full w-full`}
// `;
// const InstaIcon = styled(Insta)`
//   ${tw`h-full w-full`}
// `;

/**
 * * About Section Styling
 */
const Contact = () => {
  return (
    <Div id="contact-section">
      <Container>
        <MotionDiv>
          <Heading classes="text-center justify-self-start">Let's Talk</Heading>
          <ContentDiv>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus
              cras curabitur eget facilisis nisl. Neque a porttitor. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Text>
            <LinksDiv>
              <Button>Let's Talk</Button>
              {/* <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <LinkedinIcon />
                </Icon>
                <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <GithubIcon />
                </Icon>
                <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <InstaIcon />
                </Icon> */}
            </LinksDiv>
          </ContentDiv>
        </MotionDiv>
      </Container>
    </Div>
  );
};

export default Contact;
