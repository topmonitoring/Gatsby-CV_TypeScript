import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StyledVideo, HederOverlay } from './video-baground.styles';

const VideoBaground: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "home-section" } }) {
          frontmatter {
            video_bgr
          }
        }
      }
    `,
  );
  return (
    <>
      <StyledVideo>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width="1800"
          height="700"
        >
          <source
            src={data.markdownRemark.frontmatter.video_bgr}
            type="video/mp4"
          />
        </video>
      </StyledVideo>
      <HederOverlay />
    </>
  );
};
export default VideoBaground;
