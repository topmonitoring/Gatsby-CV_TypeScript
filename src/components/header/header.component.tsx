import React, { useState } from 'react';
import HamburgerMenu from './hamburgerMenu.component';
import MobileNav from './mobileNav.component';
import { StyledHeder, StyledBlurSection } from './header.styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <StyledHeder>
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
