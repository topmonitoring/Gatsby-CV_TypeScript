import React, { useState } from 'react';
import HamburgerMenu from './hamburgerMenu.component';
import MobileNav from './mobileNav.component';
import { StyledHeder } from './header.styles';

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
    </>
  );
};

export default Header;
