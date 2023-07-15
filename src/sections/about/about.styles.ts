import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  height: fit-content;
  border-radius: 15px;
  background-color: aliceblue;
  padding: 4rem;
  align-content: center;
`;

export const StyledMarkdown = styled(ReactMarkdown)`
  width: 60%;
  p {
    margin-top: 10px;
  }
`;

export const StyledImage = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  h1,
  img {
    margin: 0px auto;
  }
`;
