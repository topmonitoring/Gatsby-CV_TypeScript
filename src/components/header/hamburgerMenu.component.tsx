import React from 'react';
import { Wrapper } from './header.styles';

const HamburgerMenu: React.FC<any> = ({ open, toggle }) => {
  return (
    <Wrapper onClick={toggle}>
      <div className={open ? `open` : ``}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default HamburgerMenu;
