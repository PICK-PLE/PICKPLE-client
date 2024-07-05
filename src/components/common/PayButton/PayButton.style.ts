import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const payButtonStyle = () => css`
  ${flexGenerator('column')}
  width: 12.2rem;
  padding: 1.8rem 1rem;
  gap: 0.5rem;

  border: none;
  outline: none;
  border-radius: 10px;

  cursor: pointer;
`;

export const iconStyle = () => css`
  width: 6rem;
  height: 2.5rem;
`;
