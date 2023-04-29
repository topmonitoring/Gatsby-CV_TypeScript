import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO/seo';
import Footer from '../footer/footer.component';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
