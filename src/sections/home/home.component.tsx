import React from 'react';
import VideoBaground from '../../components/video-baground/video-baground.component';
import { useStaticQuery, graphql } from 'gatsby';
import { HederTextContainer } from './home.styles';
// we use React.FC when we need to use children prop

const HomeSection: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "home-section" } }) {
          frontmatter {
            authorName
            authorRole
          }
        }
      }
    `,
  );
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <div>
      <VideoBaground />
      <HederTextContainer>
        <h1>{frontmatter.authorName}</h1>
        <h2>{frontmatter.authorRole}</h2>
      </HederTextContainer>
    </div>
  );
};

export default HomeSection;
