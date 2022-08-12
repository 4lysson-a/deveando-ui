import React from 'react';
import Lottie from 'react-lottie';

import animationSource from '../source/errorAnimationIcon.json';

export const ErrorAnimationIcon = () => {
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
        height={30}
        width={30}
      />
    </>
  );
};
