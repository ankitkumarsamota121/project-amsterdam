import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

// @ts-expect-error : Just a friendly SVG
import Neural from '../../images/neural.svg';
// @ts-expect-error : Just a friendly SVG
import Coding from '../../images/coding.svg';
// @ts-expect-error : Just a friendly SVG
import Web from '../../images/web.svg';

interface Props {
  title: string;
  skills: string[];
  icon: string;
}

const Div = styled(motion.div)`
  box-shadow: 0px 4px 20px rgba(196, 196, 196, 0.25);
  min-height: 24rem;
  ${tw`max-w-sm bg-background flex flex-col items-center rounded-3xl`}
`;

const Box = styled.div`
  ${tw`h-20 w-20 sm:h-24 sm:w-24 p-4 relative bg-primary transform -translate-y-8 rounded-2xl -mb-4`}
`;

const SkillGrid = styled.div`
  ${tw`flex flex-wrap justify-start px-8 gap-2 mt-8`}
`;

const Title = styled.h2`
  font-family: 'Space Grotesk';
  ${tw`text-primary text-2xl font-semibold`}
`;

const Pill = styled.span`
  font-family: 'Space Grotesk';
  ${tw`px-3 py-1 text-primary bg-primary rounded-full`}
`;

const WebIcon = styled(Web)`
  ${tw`h-full w-full`}
`;

const CodingIcon = styled(Coding)`
  ${tw`h-full w-full`}
`;

const NeuralIcon = styled(Neural)`
  ${tw`h-full w-full`}
`;

const divVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SkillDetails = ({title, skills, icon}: Props) => {
  return (
    <Div variants={divVariants}>
      <Box>
        {icon === 'web' && <WebIcon />}
        {icon === 'coding' && <CodingIcon />}
        {icon === 'neural' && <NeuralIcon />}
      </Box>
      <Title>{title}</Title>

      <SkillGrid>
        {skills.map(skill => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </SkillGrid>
    </Div>
  );
};

export default SkillDetails;
