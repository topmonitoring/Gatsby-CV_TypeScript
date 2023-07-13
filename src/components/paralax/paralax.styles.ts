import styled from 'styled-components';

export const ScrollAnimation = styled.div`
  margin: 0px auto;
  z-index: 1;
  width: 60px;
  height: 60px;
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  cursor: pointer;
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
