import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { ScrollAnimation } from './paralax.styles';
import { useStaticQuery, graphql } from 'gatsby';

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
            bubbleImg
            fishImg
            tresureChestImg
            backgraundImg
          }
        }
      }
    `,
  );
  const BubbleImg = data.markdownRemark.frontmatter.bubbleImg;
  const FishImg = data.markdownRemark.frontmatter.fishImg;
  const TresureChestImg = data.markdownRemark.frontmatter.tresureChestImg;
  const BackgraundImg = data.markdownRemark.frontmatter.backgraundImg;
  console.log(BackgraundImg);
  console.log(TresureChestImg);
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
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url(BackgraundImg),
            backgroundSize: `cover`,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: `none` }}
        >
          <img src={FishImg} style={{ width: `15%`, marginLeft: `70%` }} />
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
            src={BubbleImg}
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
            src={BubbleImg}
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
            src={TresureChestImg}
            style={{ width: `30%`, marginTop: `280px`, marginRight: `50%` }}
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
