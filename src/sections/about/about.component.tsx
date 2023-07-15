import React from 'react';
import {
  StyledAboutSection,
  StyledMarkdown,
  StyledImage,
} from './about.styles';
import remarkGfm from 'remark-gfm';
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
        <StyledMarkdown remarkPlugins={[remarkGfm]}>
          {frontmatter.description}
        </StyledMarkdown>
        <StyledImage>
          <h1 className="text-3xl font-bold underline">
            {frontmatter.authorName}
          </h1>
          <img
            style={{ width: `300px`, height: `300px` }}
            src={frontmatter.authorPick}
          />
        </StyledImage>
      </StyledAboutSection>
    </>
  );
};
export default AboutSection;
