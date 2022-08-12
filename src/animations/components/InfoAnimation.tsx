import React from 'react';
import Lottie from 'react-lottie';

import animationSource from '../source/infoAnimation.json';

export const InfoAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationSource,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie
        isClickToPauseDisabled
        options={defaultOptions}
        height={35}
        width={35}
      />
    </>
  );
};
