import styled from "styled-components";

export const StyledFooter=styled.footer`
  align-content: center;
  fill-opacity: "0.7";
  background-color: lightblue;
  width: 100%;
`
export const StyledFooterEnd=styled.footer`
  text-align: center;
  margin: auto;
  font-size: 16px;
  font-weight: bold;
`
export const FooterGrid=styled.div`
margin: auto;
  display: grid;
  grid-template-areas: "info socials links ";
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 50px;
  padding: 20px 200px 20px;
  align-content: center;
  @media screen and (max-width: 800px) {
    grid-gap: 20px;
    padding: 20px;
    h2 {
      font-size: 15px;
    }
  }
`