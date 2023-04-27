import React from 'react';
import { StyledAboutSection } from './about-section.styles';
import ReactMarkdown from 'react-markdown';

const AboutSection: React.FC = () => {
  return (
    <>
      <StyledAboutSection>
        <ReactMarkdown>##ME</ReactMarkdown>
      </StyledAboutSection>
    </>
  );
};
export default AboutSection;
