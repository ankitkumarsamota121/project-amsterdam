import React, {useEffect} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {graphql, useStaticQuery} from 'gatsby';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {IGatsbyImageData} from 'gatsby-plugin-image';

import Container from '../layout/Container';
import Heading from '../layout/Heading';
import InnerDiv from '../layout/InnerDiv';
import ProjectDetails from './ProjectDetails';
import MotionDiv from '../layout/MotionDiv';

interface QueryData {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string;
        description: string;
        github: string;
        link: string;
        thumb: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }[];
  };
}

/**
 * * Projects Section Styling
 */
const Div = styled.section`
  ${tw`min-h-screen w-screen bg-background py-20`}
`;

const Grid = styled(motion.div)`
  ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 mt-20 md:mt-32`}
`;

const gridVariants = {
  final: {
    transition: {
      delay: 0.25,
      staggerChildren: 0.3,
      type: 'tween',
    },
  },
};
/**
 * * Projects Section Component
 */
const Projects = () => {
  const controls = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('final');
    }
  }, [inView]);

  const data: QueryData = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/.*\\.md$/"}}) {
      nodes {
        frontmatter {
          title
          github
          description
          link
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
          }
          }
        }
      }
    }
  }
  `);
  const {nodes} = data.allMarkdownRemark;
  return (
    <Div id="projects-section">
      <Container>
        <InnerDiv>
          <MotionDiv>
            <Heading classes="text-center">My Projects</Heading>
            <Grid
              ref={ref}
              variants={gridVariants}
              initial="initial"
              animate={controls}
            >
              {nodes.map(node => {
                const {title, description, github, link} = node.frontmatter;
                return (
                  <ProjectDetails
                    title={title}
                    description={description}
                    github={github}
                    link={link}
                    thumb={
                      node.frontmatter.thumb.childImageSharp.gatsbyImageData
                    }
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

export default Projects;
