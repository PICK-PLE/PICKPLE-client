import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const backdropStyle = css`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 3;

  background: rgba(0, 0, 0, 0);
`;

export const modalContentStyle = (theme: Theme) => css`
  position: fixed;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  ${flexGenerator()}

  border-radius: 10px;
  background-color: ${theme.color.white};
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.20);
`;
