import React, {useState} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image';

// @ts-expect-error : Just a friendly SVG
import Github from '../../images/github.svg';
// @ts-expect-error : Just a friendly SVG
import LinkIco from '../../images/link.svg';

interface Props {
  title: string;
  description: string;
  github: string;
  link: string;
  thumb: IGatsbyImageData;
}

const Div = styled(motion.div)`
  box-shadow: 0px 4px 30px -10px rgba(196, 196, 196, 0.25);
  min-height: 24rem;
  ${tw`max-w-md bg-background flex flex-col items-start rounded-2xl`}
`;

const Image = styled.div`
  ${tw`bg-primary p-6 rounded-t-2xl`}
`;

const MotionImg = styled(motion.a)`
  filter: drop-shadow(4px 4px 20px #000000);
  ${tw`h-full w-full block transform -rotate-6 rounded-xl`}
`;

const Img = styled(GatsbyImage)`
  ${tw`rounded-xl`}
`;

const ContentDiv = styled.div`
  ${tw`p-8 flex flex-col gap-4`}
`;

const Title = styled.h2`
  font-family: 'Space Grotesk';
  ${tw`text-accent text-2xl font-semibold`}
`;

const Text = styled.div`
  font-family: 'Space Grotesk';
  ${tw`text-secondary`}
`;

const LinkDiv = styled.div`
  ${tw`flex space-x-4`}
`;

const Link = styled(motion.a)`
  ${tw`block h-7 w-7`}
`;

const GithubIcon = styled(Github)`
  ${tw`h-full w-full inline-block`}
`;

const LinkIcon = styled(LinkIco)`
  ${tw`h-full w-full inline-block`}
`;

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

const ProjectDetails = ({title, description, github, link, thumb}: Props) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Div variants={divVariants}>
      <Image>
        <MotionImg
          animate={{rotate: isHovered ? 6 : -6, scale: isHovered ? 1.1 : 1}}
          href={link.length > 0 ? link : github}
        >
          <Img
            image={thumb}
            alt="Application Screenshot"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </MotionImg>
      </Image>
      <ContentDiv>
        <Title>{title}</Title>
        <Text>{description}</Text>

        <LinkDiv>
          {github.length > 0 && (
            <Link href={github} whileHover={{scale: 1.1}}>
              <GithubIcon />
            </Link>
          )}
          {link.length > 0 && (
            <Link href={github} whileHover={{scale: 1.1}}>
              <LinkIcon />
            </Link>
          )}
        </LinkDiv>
      </ContentDiv>
    </Div>
  );
};

export default ProjectDetails;
