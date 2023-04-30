import React from 'react';
import { StyledAboutSection } from './about.styles';
import ReactMarkdown from 'react-markdown';
import { useStaticQuery, graphql } from 'gatsby';

const AboutSection: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "about-section" } }) {
          frontmatter {
            authorName
            authorPick
            description
          }
        }
      }
    `,
  );
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <>
      <StyledAboutSection>
        <div className="text-3xl font-bold underline ">
          {frontmatter.authorName}
        </div>
        <img
          style={{ width: `300px`, height: `300px` }}
          src={frontmatter.authorPick}
        ></img>
        <ReactMarkdown>{frontmatter.description}</ReactMarkdown>
      </StyledAboutSection>
    </>
  );
};
export default AboutSection;
