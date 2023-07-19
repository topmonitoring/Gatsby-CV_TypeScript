import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { ScrollAnimation } from './paralax.styles';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? `url(` : ``
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? `)` : ``
  }`;

const ParallaxComponent: React.FC<any> = ({
  homeSection,
  aboutSection,
  footerSection,
}) => {
  const parallax = useRef<IParallax>(null!);
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(
          frontmatter: { templateKey: { eq: "parallax-section" } }
        ) {
          frontmatter {
            fishImg
            bubbleImgOne
            bubbleImgMultiple
            jellyfishOne
            jellyfishTwo
            jellyfishThree
            krakenImg
          }
        }
        seamlessBackground: file(relativePath: { eq: "ocean-floar.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );
  const BubbleImg = data.markdownRemark.frontmatter.bubbleImgOne;
  const BubbleImgMultiple = data.markdownRemark.frontmatter.bubbleImgMultiple;
  // const FishImg = data.markdownRemark.frontmatter.fishImg;
  // const JellyFishOneImg = data.markdownRemark.frontmatter.jellyfishOne;
  const JellyFishTwoImg = data.markdownRemark.frontmatter.jellyfishTwo;
  const JellyFishThreeImg = data.markdownRemark.frontmatter.jellyfishThree;
  const KrakenImg = data.markdownRemark.frontmatter.krakenImg;
  const BackgraundImg = data.seamlessBackground.childImageSharp.fluid;
  return (
    <>
      <Parallax ref={parallax} pages={6}>
        {homeSection}
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: `#87BCDE` }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: `#87BCDE` }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: `#87BCDE` }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: `#87BCDE` }}
        />
        <ParallaxLayer
          offset={5}
          speed={-0}
          style={{
            display: `flex`,
            alignItems: `end`,
            justifyContent: `end`,
          }}
        >
          {footerSection}
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={3}
          style={{
            height: `80%`,
          }}
        >
          <BackgroundImage
            Tag={`section`}
            id={`test`}
            fluid={BackgraundImg}
            style={{
              height: `100%`,
              width: `100vw`,
              opacity: `0.8`,
              backgroundRepeat: `no-repeat`,
            }}
          ></BackgroundImage>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: `none` }}
        >
          <img
            src={JellyFishTwoImg}
            style={{ width: `15%`, marginLeft: `85%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `20%`, marginLeft: `55%` }}
          />
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `10%`, marginLeft: `15%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={BubbleImgMultiple}
            style={{ display: `block`, width: `20%`, marginLeft: `70%` }}
          />
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `20%`, marginLeft: `40%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `10%`, marginLeft: `10%` }}
          />
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `20%`, marginLeft: `75%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `20%`, marginLeft: `60%` }}
          />
          <img
            src={BubbleImgMultiple}
            style={{ display: `block`, width: `25%`, marginLeft: `30%` }}
          />
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `10%`, marginLeft: `80%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `20%`, marginLeft: `5%` }}
          />
          <img
            src={BubbleImg}
            style={{ display: `block`, width: `15%`, marginLeft: `75%` }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            pointerEvents: `none`,
          }}
        >
          <img
            src={JellyFishThreeImg}
            style={{
              width: `20%`,
              marginTop: `280px`,
              marginRight: `50%`,
              opacity: `0.5`,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={-0.1}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            pointerEvents: `none`,
          }}
        >
          <img
            src={JellyFishThreeImg}
            style={{
              width: `20%`,
              marginTop: `80px`,
              marginLeft: `50%`,
              opacity: `0.5`,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          speed={-0.1}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            pointerEvents: `none`,
          }}
        >
          <img
            src={KrakenImg}
            style={{
              width: `1000px`,
              marginTop: `680px`,
              marginRight: `50%`,
              opacity: `0.9`,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: `80%`,
            backgroundPosition: `center`,
            backgroundImage: url(`clients`, true),
          }}
        />
        <ScrollAnimation onClick={() => parallax.current.scrollTo(1)} />
        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            flexDirection: `column`,
          }}
        >
          {aboutSection}
          <ScrollAnimation onClick={() => parallax.current.scrollTo(2)} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            flexDirection: `column`,
          }}
          // onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url(`clients-main`)} style={{ width: `40%` }} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default ParallaxComponent;
