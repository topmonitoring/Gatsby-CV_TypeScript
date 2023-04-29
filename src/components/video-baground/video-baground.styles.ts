import styled from 'styled-components';

export const StyledVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  video {
    width: 100%;
    height: auto;
    @media (max-aspect-ratio: 16/9) {
      width: auto;
      height: 100%;
    }
  }
`;
export const HederOverlay = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  background: black;
  opacity: 0.7;
  width: 100%;
`;

export const HederTextContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  text-align: center;
  font-size: 3rem;
  color: whitesmoke;
  margin: 15rem auto;
`;

export const ScrollAnimation = styled.div`
  margin: 40vh auto;
  z-index: 1;
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(-45deg);
  }

  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }
`;
