import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../footer/footer.component';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
