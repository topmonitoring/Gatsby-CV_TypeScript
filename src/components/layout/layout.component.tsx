import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../SEO/seo';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
