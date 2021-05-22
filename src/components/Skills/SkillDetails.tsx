import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
  title: string;
  skills: string[];
  icon: string;
}

const Div = styled.div`
  box-shadow: 0px 4px 20px rgba(196, 196, 196, 0.25);
  ${tw`h-96 w-96 bg-background`}
`;

const SkillDetails = ({title, skills, icon}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      {skills.map(skill => (
        <h3>{skill}</h3>
      ))}
      <h3>{icon}</h3>
    </div>
  );
};

export default SkillDetails;
