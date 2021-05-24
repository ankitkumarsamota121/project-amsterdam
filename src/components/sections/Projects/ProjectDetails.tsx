import React, {useState} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image';

// @ts-expect-error : Just a friendly SVG
import GithubIcon from '../../../images/github.svg';
// @ts-expect-error : Just a friendly SVG
import LinkIcon from '../../../images/link.svg';

/**
 * * Project Details Styling
 */
const StyledOuterDiv = styled(motion.div)`
  box-shadow: 0px 0px 30px -5px rgba(196, 196, 196, 0.25);
  max-height: 32rem;
  ${tw`max-w-md bg-background flex flex-col items-start rounded-2xl`}
`;

const StyledImageDiv = styled.div`
  ${tw`h-1/2 bg-primary p-6 rounded-t-2xl`}
`;

const StyledMotionImg = styled(motion.a)`
  filter: drop-shadow(4px 4px 20px #000000);
  ${tw`h-full max-w-full block transform -rotate-6 rounded-xl`}
`;

const StyledContentDiv = styled.div`
  ${tw`p-8 flex flex-col gap-4`}
`;

const StyledTitle = styled.h2`
  font-family: 'Space Grotesk';
  ${tw`text-accent text-2xl font-semibold`}
`;

const StyledText = styled.div`
  font-family: 'Space Grotesk';
  ${tw`text-secondary`}
`;

/**
 * * Motion Variants
 */
const divVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

/**
 * * Project Details Component
 */
interface Props {
  title: string;
  description: string;
  github: string;
  link: string;
  thumb: IGatsbyImageData;
}

const ProjectDetails = ({title, description, github, link, thumb}: Props) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <StyledOuterDiv variants={divVariants}>
      <StyledImageDiv>
        <StyledMotionImg
          animate={{rotate: isHovered ? 6 : -6, scale: isHovered ? 1.1 : 1}}
          href={link.length > 0 ? link : github}
        >
          <GatsbyImage
            image={thumb}
            tw="rounded-xl max-w-full max-h-full"
            alt="Application Screenshot"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </StyledMotionImg>
      </StyledImageDiv>

      <StyledContentDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{description}</StyledText>

        <div tw="flex space-x-4">
          {github.length > 0 && (
            <motion.a
              href={github}
              whileHover={{scale: 1.1}}
              tw="block h-7 w-7"
            >
              <GithubIcon tw="h-full w-full inline-block" />
            </motion.a>
          )}
          {link.length > 0 && (
            <motion.a
              href={github}
              whileHover={{scale: 1.1}}
              tw="block h-7 w-7"
            >
              <LinkIcon tw="h-full w-full inline-block" />
            </motion.a>
          )}
        </div>
      </StyledContentDiv>
    </StyledOuterDiv>
  );
};

export default ProjectDetails;
