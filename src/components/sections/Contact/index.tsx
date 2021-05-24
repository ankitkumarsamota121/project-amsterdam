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
const StyledContentDiv = styled.div`
  ${tw`mt-10 md:mt-10 max-w-2xl flex flex-col justify-center items-center`}
`;

const StyledText = styled.div`
  font-family: 'Space Grotesk';
  ${tw`text-secondary text-center text-xl md:text-2xl`};
`;

const StyledLinksDiv = styled.div`
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
    <div id="contact-section" tw="w-screen py-32 bg-background">
      <Container>
        <MotionDiv>
          <Heading classes="text-center justify-self-start">
            Get In Touch
          </Heading>
          <StyledContentDiv>
            <StyledText>
              I'm currently looking for full time job opporunities and I
              occasionally take on freelance projects. Whether you have an
              opportunity for me or just want to say hi, my inbox is always
              open.
            </StyledText>
            <StyledLinksDiv>
              <a href="mailto:ankitkumarsamota121@gmail.com">
                <Button>Let's Chat!</Button>
              </a>
              {/* <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <LinkedinIcon />
                </Icon>
                <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <GithubIcon />
                </Icon>
                <Icon whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                  <InstaIcon />
                </Icon> */}
            </StyledLinksDiv>
          </StyledContentDiv>
        </MotionDiv>
      </Container>
    </div>
  );
};

export default Contact;
