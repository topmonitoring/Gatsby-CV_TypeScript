import HomeSection from '../sections/home/home.component';
import AboutSection from '../sections/about/about.component';
import ParallaxComponent from '../components/paralax/paralax.component';
import GlobalStyle from '../globalStyles';
import Layout from '@/components/layout/layout.component';
import Footer from '@/components/footer/footer.component';
import Header from '@/components/header/header.component';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Header />
    <ParallaxComponent
      homeSection={<HomeSection />}
      aboutSection={<AboutSection />}
      footerSection={<Footer />}
    />
  </Layout>
);

export default IndexPage;
