import React from 'react';

import {
  InfoAnimation,
  CheckAnimation,
  ErrorAnimationIcon,
} from '../../../animations';

import { 
  ID, 
  IType, 
  ICustomIcon, 
} from '../types';

import {
  Close,
  Content,
  TimeLine,
  Container,
  Description,
  AnimationContainer,
  ToastComponentTitle,
} from './styles';

interface IToastComponent {
  id: ID;
  type: IType;
  title: string;
  description: string;
  onClose: () => void;
  customMaxTime?: number;
  customIcon?: ICustomIcon;
}

const MAXTIME = 5000;
const TIMETOCLOSEAFTERFINISHANIMATION = 700;

const ToastComponent = ({
  id,
  type,
  title,
  onClose,
  customIcon,
  description,
  customMaxTime,
}: IToastComponent) => {
  const [fadeOut, setFadeOut] = React.useState(false);
  const [stopTimeLine, setStopTimeLine] = React.useState(false);
  const [startMouseFlow, setStartMouseFlow] = React.useState(false);

  const timer = React.useRef<any>();
  const isMounted = React.useRef(true);

  const stopTimer = React.useCallback(() => {
    if (timer.current) {
      setStopTimeLine(true);
      setStartMouseFlow(true);
      clearTimeout(timer.current);
    }
  }, [timer, startMouseFlow, fadeOut]);

  const startTimer = React.useCallback(() => {
    if (startMouseFlow) {
      setStopTimeLine(false);
      timer.current = setTimeout(() => {
        setFadeOut(true);
      }, customMaxTime || MAXTIME);
    }
  }, [timer, startMouseFlow, fadeOut]);

  React.useEffect(() => {
    if (isMounted.current) {
      startTimer();

      timer.current = setTimeout(() => {
        setFadeOut(true);
      }, customMaxTime || MAXTIME);

      return () => {
        clearTimeout(timer.current);
      };
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  React.useEffect(() => {
    let closeTimer: any;
    if (fadeOut) {
      closeTimer = setTimeout(() => {
        onClose();
      }, TIMETOCLOSEAFTERFINISHANIMATION);
    }

    return () => {
      clearTimeout(closeTimer);
    };
  }, [fadeOut]);

  // return

  const CustomIcon = () => {
    if (customIcon) {
      return customIcon;
    }
    return null;
  };

  const DefaultIcon = () => {
    switch (type) {
      case 'success':
        return <CheckAnimation />;
      case 'error':
        return <ErrorAnimationIcon />;
      case 'info':
        return <InfoAnimation />;
      default:
        return null;
    }
  };
  return (
    <Container
      delay={id}
      fadeIn={!fadeOut}
      onMouseLeave={startTimer}
      onMouseEnter={stopTimer}
    >
      <Close type="button" onClick={onClose}>
        <h1>
          x
        </h1>
      </Close>
      <AnimationContainer>
        {customIcon ? <CustomIcon /> : <DefaultIcon />}
      </AnimationContainer>
      <Content>
        <ToastComponentTitle type={type}>{title}</ToastComponentTitle>
        <Description>{description}</Description>
      </Content>

      <TimeLine type={type} stop={stopTimeLine} time={MAXTIME} />
    </Container>
  );
};

ToastComponent.defaultProps = {
  customIcon: undefined,
  customMaxTime: undefined,
};

export default ToastComponent;
