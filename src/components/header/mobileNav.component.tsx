import React, { useEffect } from 'react';
import { useTransition } from '@react-spring/web';
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5';
import {
  AnimatedMobileNav,
  StyledContentWraper,
  AnimatedList,
  StyledListItem,
  AnimatedIconWraper,
} from './header.styles';

const headings = [`Home`, `About`, `Work`, `Blog`, `Contact`];

const MobileNav: React.FC<any> = ({ open }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = `hidden`;
      return;
    }
    document.body.style.overflowY = `auto`;
  }, [open]);

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: `translateY(50px)`,
      transformFoot: `translateY(200px)`,
    },
    enter: {
      opacity: 1,
      transformMain: `translateY(0px)`,
      transformFoot: `translateY(0px)`,
    },
    leave: {
      opacity: 0,
      transformMain: `translateY(50px)`,
      transformFoot: `translateY(200px)`,
    },
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) => {
    return visible ? (
      <AnimatedMobileNav style={{ opacity }}>
        <StyledContentWraper >
          <AnimatedList style={{ transform: transformMain }} >
            {headings.map((heading) => (
              <StyledListItem key={heading}>{heading}</StyledListItem>
            ))}
          </AnimatedList>
          <AnimatedIconWraper style={{ transform: transformFoot }}>
            <IoLogoInstagram className="icon" />
            <IoLogoGithub className="icon" />
            <IoLogoFacebook className="icon" />
          </AnimatedIconWraper>
        </StyledContentWraper>
      </AnimatedMobileNav>
    ) : null;
  });
};

export default MobileNav;
