import SEO from '../components/SEO/seo';
import VideoBaground from '../sections/video-baground/video-baground.component';
import AboutSection from '../sections/about-section/about-section.component';
import Header from '../components/header/header.component';
import ParallaxComponent from '../components/paralax/paralax.component';
import GlobalStyle from '../globalStyles';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <GlobalStyle />
    <Header />
    <ParallaxComponent
      homeSection={<VideoBaground />}
      aboutSection={<AboutSection />}
    />
  </>
);

export default IndexPage;
