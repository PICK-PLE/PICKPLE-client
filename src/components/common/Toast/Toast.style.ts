import { css, keyframes, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const toastWrapperStyle = (isVisible: boolean, toastBottom: number) => (theme: Theme) => css`
  ${flexGenerator()};
  gap: 0.4rem;
  min-width: 33.5rem;
  width: calc(100dvw - 4rem);
  height: 4.5rem;
  padding: 0.8rem;

  position: fixed;
  left: 50%;
  bottom: ${toastBottom}rem;
  transform: translateX(-50%);
  background-color: ${theme.color.midgray2};
  border-radius: 10px;
  display: ${isVisible ? 'flex' : 'none'};
  animation: ${isVisible && toastShow} 2s forwards;
  z-index: 10;

  @media screen and (min-width: 430px) {
    width: 39rem;
  }
`;

const toastShow = keyframes`
  0% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
  20% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  80% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 100%);
    opacity: 0;
  }
`;

export const toastIconStyle = css`
  width: 2.2rem;
  height: 2.2rem;
`;

export const toastMessageStyle = (theme: Theme) => css`
  color: ${theme.color.white};
  ${theme.font['body02-r-14']}
`;
