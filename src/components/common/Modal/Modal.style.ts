import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const backdropStyle = css`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  background: rgba(0, 0, 0, 0.54);
`;

export const modalContentStyle = (theme: Theme) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  ${flexGenerator()}

  border-radius: 10px;
  background-color: ${theme.color.white};
`;
