import React, { useEffect } from 'react';

export function useAnimatedUnmount(visible: boolean){
  const overlayRef = React.useRef(null);
  const [shouldRender, setShouldRender] = React.useState(visible)

  useEffect(() => {
    const handleAnimatedEnd = () => {
      setShouldRender(false)
    }

    if (visible){
      setShouldRender(true)
    }

    const overlayElement: any = overlayRef.current;
    if (!visible && overlayElement){
      overlayElement.addEventListener('animationEnd', handleAnimatedEnd);
    }

    return () => {
      if (overlayElement){
        overlayElement.removeEventListener('animationEnd', handleAnimatedEnd);
      }
    }
  }, [visible]);

  return {
    shouldRender,
    overlayRef,
  }
}
