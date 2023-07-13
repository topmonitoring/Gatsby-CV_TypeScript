import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const StyledHeder = styled.header`
  position: fixed;
  display: flex;
  top: 0.4rem;
  left: 0;
  right: 0.4rem;
  padding: 2rem;
  margin: 0 auto;
  z-index: 20;
  justify-content: space-between;
`;

export const StyledBlurSection = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: whitesmoke;
  opacity: 0.4;
`;

export const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  margin-top: 1rem;

  & span {
    background: white;
    display: block;
    position: relative;
    width: 2rem;
    height: 0.1rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -13px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 13px;
  }
`;

export const AnimatedMobileNav = styled(animated.nav)`
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 2rem 2rem 6rem 2rem;
  z-index: 10;
`;

export const StyledContentWraper = styled.div`
  margin-top: 3rem;
  background-color: black;
  opacity: 0.9;
  border-radius: 5px;
  width: 800px;
  margin: 8rem auto;
  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

export const AnimatedList = styled(animated.ul)`
  list-style: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  font-size: 2.25rem;
  font-weight: bold;
  font-family: sans-serif;
  margin: 2rem 0;
  text-align: center;
  color: white;
  cursor: pointer;
  :hover {
    color: aqua;
    text-decoration: underline;
  }
`;

export const AnimatedIconWraper = styled(animated.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  .icon {
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    margin: 1rem;
    cursor: pointer;
  }
  .icon:hover {
    fill: aqua;
  }
`;
