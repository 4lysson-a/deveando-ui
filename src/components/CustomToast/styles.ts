import styled from 'styled-components';

export const ToastPlaceContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99999999999;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  margin: 15px;

  transition: all 0.33s;

  @media (max-width: 900px) {
    margin: 10px;
  }
`;
