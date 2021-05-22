import React, {useEffect} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {graphql, useStaticQuery} from 'gatsby';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import Container from '../layout/Container';
import Heading from '../layout/Heading';
import InnerDiv from '../layout/InnerDiv';
import SkillDetails from './SkillDetails';
import MotionDiv from '../layout/MotionDiv';

interface QueryData {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        slug: string;
        title: string;
        skills: string[];
        icon: string;
      };
    }[];
  };
}

/**
 * * Skills Section Styling
 */
const Div = styled.section`
  ${tw`min-h-screen w-screen bg-background py-20`}
`;

const Grid = styled(motion.div)`
  ${tw`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 lg:gap-12 xl:gap-20 mt-20 md:mt-32`}
`;

const gridVariants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.2,
      type: 'spring',
    },
  },
};

/**
 * * Skills Section Component
 */
const Skills = () => {
  const controls = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('final');
    } else {
      controls.start('initial');
    }
  }, [inView]);

  const data: QueryData = useStaticQuery(graphql`
    query Skills {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/skills/.*\\.md$/"}}) {
        nodes {
          frontmatter {
            slug
            title
            skills
            icon
          }
        }
      }
    }
  `);
  const {nodes} = data.allMarkdownRemark;
  return (
    <Div id="skills-section">
      <Container>
        <InnerDiv>
          <MotionDiv>
            <Heading classes="text-center">My Expertise</Heading>
            <Grid
              ref={ref}
              variants={gridVariants}
              initial="initial"
              animate={controls}
            >
              {nodes.map(node => {
                const {title, skills, icon} = node.frontmatter;
                return (
                  <SkillDetails
                    title={title}
                    skills={skills}
                    icon={icon}
                    key={title}
                  />
                );
              })}
            </Grid>
          </MotionDiv>
        </InnerDiv>
      </Container>
    </Div>
  );
};

export default Skills;
