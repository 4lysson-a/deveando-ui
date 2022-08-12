import styled, { keyframes, css } from 'styled-components';
import { IType } from '../types';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(50px);
  }
`;

const fadeWithDelay = keyframes`
  from {
    width: 100%;
  } to {
    width: 0;
  }
`;

export const TimeLine = styled.div<{
  time: number;
  stop?: boolean;
  type: IType;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;

  ${({ type }) => type === 'success'
    && css`
      background: ${({ theme }) => theme.toasts.success.hex()};
    `}

  ${({ type }) => type === 'error'
    && css`
      background: ${({ theme }) => theme.toasts.error.hex()};
    `}
  
  ${({ type }) => type === 'info'
    && css`
      background: ${({ theme }) => theme.toasts.info.hex()};
    `}

  ${({ stop, time }) => stop === false
    && css`
      animation-name: ${fadeWithDelay};
      animation-duration: ${time}ms;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
    `}
`;

const fadeAnimationDuration = '0.33s';
export const Container = styled.div<{
  fadeIn: boolean;
  delay: number;
}>`
  width: 360px;
  height: fit-content;
  padding: 30px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;

  transition: all ${fadeAnimationDuration};

  border-radius: 7px;
  overflow: hidden;
  opacity: 0;

  background: '#f1f1f1';

  ${({ fadeIn, delay }) => fadeIn
    && css`
      animation-name: ${fadeInAnimation};
      animation-duration: ${fadeAnimationDuration};
      animation-fill-mode: forwards;
      animation-delay: ${delay * 0.07}s;
      animation-timing-function: ease;
    `}

  ${({ fadeIn }) => fadeIn === false
    && css`
      animation-name: ${fadeOutAnimation};
      animation-duration: ${fadeAnimationDuration};
      animation-delay: 0s;
      animation-fill-mode: forwards;
      animation-timing-function: ease;
    `}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const AnimationContainer = styled.div`
  width: fit-content;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ToastComponentTitle = styled.h1<{
  type: IType;
}>`
  ${({ type }) => type === 'success'
    && css`
      color: ${({ theme }) => theme.toasts.success.hex()};
    `}

  ${({ type }) => type === 'error'
    && css`
      color: ${({ theme }) => theme.toasts.error.hex()};
    `}

    ${({ type }) => type === 'info'
    && css`
      color: ${({ theme }) => theme.toasts.info.hex()};
    `}

  font-size: 1.4rem;
  font-weight: 520;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.general.grey.hex()};
  font-size: 1.1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background: transparent;

  h1 {
    color: ${({ theme }) => theme.general.grey.hex()};
    font-size: 1.2rem;
    transition: 0.6s;
    font-weight: 600;
    font-stretch: expanded;
    transform-origin: center center;
  }

  &:hover {
    h1 {
      cursor: pointer;
      transform: rotate(180deg);
      transform-origin: center center;
      color: ${({ theme }) => theme.toasts.error.hex()};
    }
  }
`;
