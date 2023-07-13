import React, { useState } from 'react';
import HamburgerMenu from './hamburgerMenu.component';
import MobileNav from './mobileNav.component';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledHeder, StyledBlurSection } from './header.styles';

const Header: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { templateKey: { eq: "home-section" } }) {
          frontmatter {
            logo
          }
        }
      }
    `,
  );
  const LogoImg = data.markdownRemark.frontmatter.logo;
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <StyledHeder>
        <img src={LogoImg} style={{ height: `50px`, width: `50px` }}></img>
        <HamburgerMenu open={open} toggle={handleNavbar} />
      </StyledHeder>
      <MobileNav open={open} />
      <StyledBlurSection
        className={open ? `blur-2xl` : ``}
        style={open ? { zIndex: `5`, cursor: `pointer` } : { zIndex: `0` }}
        onClick={handleNavbar}
      />
    </>
  );
};

export default Header;
