import SEO from '../components/SEO/seo';
import VideoBaground from '../components/video-baground/video-baground.component';
import AboutSection from '../sections/about/about.component';
import Header from '../components/header/header.component';
import ParallaxComponent from '../components/paralax/paralax.component';
//import GlobalStyle from '../globalStyles';
import Layout from '@/components/layout/layout';

const IndexPage = () => (
  <Layout>
    <Header />
    <ParallaxComponent
      homeSection={<VideoBaground />}
      aboutSection={<AboutSection />}
    />
  </Layout>
);

export default IndexPage;
