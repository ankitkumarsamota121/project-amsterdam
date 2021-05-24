import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

// @ts-expect-error : Just a friendly SVG
import NeuralIcon from '../../../images/neural.svg';
// @ts-expect-error : Just a friendly SVG
import CodingIcon from '../../../images/coding.svg';
// @ts-expect-error : Just a friendly SVG
import WebIcon from '../../../images/web.svg';

/**
 * * Skills Details Styling
 */
const StyledDiv = styled(motion.div)`
  box-shadow: 0px 0px 30px -5px rgba(196, 196, 196, 0.25);
  min-height: 24rem;
  ${tw`max-w-sm bg-background flex flex-col items-center rounded-2xl`}
`;

const StyledIconBox = styled.div`
  ${tw`h-20 w-20 sm:h-24 sm:w-24 p-4 relative bg-primary transform -translate-y-8 rounded-xl -mb-4`}
`;

const Grid = styled.div`
  ${tw`flex flex-wrap pl-6 pr-8 mt-8`}
`;

const StyledTitle = styled.h2`
  font-family: 'Space Grotesk';
  ${tw`text-primary text-2xl font-semibold`}
`;

const StyledPill = styled.span`
  font-family: 'Space Grotesk';
  ${tw`px-3 py-1 ml-2 mt-2 text-primary bg-primary rounded-full`}
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
 * * Skill Details Component
 */
interface Props {
  title: string;
  skills: string[];
  icon: string;
}

const SkillDetails = ({title, skills, icon}: Props) => {
  return (
    <StyledDiv variants={divVariants}>
      <StyledIconBox>
        {icon === 'web' && <WebIcon tw="h-full w-full" />}
        {icon === 'coding' && <CodingIcon tw="h-full w-full" />}
        {icon === 'neural' && <NeuralIcon tw="h-full w-full" />}
      </StyledIconBox>
      <StyledTitle>{title}</StyledTitle>

      <Grid>
        {skills.map(skill => (
          <StyledPill key={skill}>{skill}</StyledPill>
        ))}
      </Grid>
    </StyledDiv>
  );
};

export default SkillDetails;
