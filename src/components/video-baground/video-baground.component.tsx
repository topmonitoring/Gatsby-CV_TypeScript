import React from 'react';
import VideoBgr from '@/static/assets/pexels-michal-marek-1409899-3840x2160-25fps.mp4';
import {
  StyledVideo,
  HederOverlay,
  HederTextContainer,
} from './video-baground.styles';

const VideoBaground: React.FC = () => (
  <div>
    <StyledVideo >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        width="1800"
        height="700"
      >
        <source src={VideoBgr} type="video/mp4" />
      </video>
    </StyledVideo>
    <HederOverlay />
    <HederTextContainer>
      <h1>Hello, Im Dobrin!</h1>
    </HederTextContainer>
  </div>
);

export default VideoBaground;
