import React, { useEffect } from 'react';

import styled, { keyframes } from 'styled-components';

import { useAppDispatch } from '../../hooks/appDispatch';
import { useAppSelector } from '../../hooks/appSelector';
import { toggleSnackbarClose } from '../../store/app/actions';
import { Text } from '../../styled/Text';

interface IErrorSnackbar {
  timeout: number;
}

interface IContainerProps {
  time: string;
}

const fadein = keyframes`
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 1rem;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      bottom: 1rem;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
`;
const Container = styled.div<IContainerProps>`
  position: fixed;
  z-index: 1000;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  height: auto;
  padding: 0.625rem 1rem;
  border-radius: 0.75rem;
  border: transparent;
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadein} 0.5s, ${fadeout} 0.5s ${props => props.time};
`;

const StyledText = styled(Text)`
  color: white;
`;

export const ErrorSnackbar: React.FC<IErrorSnackbar> = ({ timeout }) => {
  const dispatch = useAppDispatch();

  const isErrorSnackbar = useAppSelector(state => state.app.isErrorSnackbar);
  const errorMessage = useAppSelector(state => state.app.snackbarMessage);

  // convert the timeout prop to pass into the styled component
  const TIME = `${(timeout - 500) / 1000}s`;

  let TIMER: any;
  function handleTimeout() {
    TIMER = setTimeout(() => {
      dispatch(toggleSnackbarClose());
    }, timeout);
  }

  useEffect(() => {
    if (isErrorSnackbar) {
      handleTimeout();
    }
    return () => {
      clearTimeout(TIMER);
    };
  }, [isErrorSnackbar, TIMER]);

  return isErrorSnackbar ? (
    <Container time={TIME}>
      <StyledText>{errorMessage}</StyledText>
    </Container>
  ) : (
    <div>{null}</div>
  );
};
