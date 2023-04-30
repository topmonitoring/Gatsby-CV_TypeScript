import React from 'react';
import PayPalButton from '../paypal/paypal-button.component';
import {StyledFooter, StyledFooterEnd, FooterGrid} from './footer.styles'

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterGrid>
      <div className="info">
        <h3>ABOUT THIS SITE</h3>
        <span>
          This site source code is available on{` `}
          <a
            href="https://github.com/topmonitoring/gatsbyCV"
            title="github link"
            target="blank"
          >
            GitHub
          </a>
          . Follow the link to see all the technologies behind this project and
          how to set it up for yourself. Creating beautiful sites take a lot of
          time and effort, feel free to donate to my hard work here.{` `}
          <PayPalButton />
        </span>
      </div>
      <div className="socials">
        <h3>FOLLOW ME</h3>
      </div>
      <div className="links">
        <h3>USFULL LINKS</h3>
      </div>
    </FooterGrid>
    <StyledFooterEnd>
      Created by{` `}
      <b>
        <a href="https://github.com/topmonitoring" target="blank">
          <strong> Dobrin Dobrev</strong>
        </a>
      </b>
      {` `}© {new Date().getFullYear()} Powerd by Gatsby and Netlify CMS{` `}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </StyledFooterEnd>
  </StyledFooter>
);

export default Footer;
