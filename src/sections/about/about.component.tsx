import React from 'react';
import { StyledAboutSection } from './about.styles';
import ReactMarkdown from 'react-markdown';

const AboutSection: React.FC = () => {
  return (
    <>
      <StyledAboutSection className="blur-md" >
        <ReactMarkdown >##Msadasdsadsa</ReactMarkdown>
        <div className="text-3xl font-bold underline "> Welcome</div>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" >

  </svg>
      </StyledAboutSection>
    </>
  );
};
export default AboutSection;
