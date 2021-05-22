import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {graphql, useStaticQuery} from 'gatsby';

import Container from '../layout/Container';
import Heading from '../layout/Heading';
import InnerDiv from '../layout/InnerDiv';
import SkillDetails from './SkillDetails';

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

const Grid = styled.div`
  ${tw`grid grid-cols-3 gap-8 mt-10 md:mt-20`}
`;

/**
 * * Skills Section Styling
 */
const Skills = () => {
  const data: QueryData = useStaticQuery(graphql`
    query Skills {
      allMarkdownRemark {
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
          <Heading classes="text-center">My Expertise</Heading>
          <Grid>
            {nodes.map(node => {
              const {title, skills, icon} = node.frontmatter;
              return <SkillDetails title={title} skills={skills} icon={icon} />;
            })}
          </Grid>
        </InnerDiv>
      </Container>
    </Div>
  );
};

export default Skills;
