import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const timeSelectContainer = css`
  ${flexGenerator()}
  gap: 1.1rem;
`;

export const timeSelectWrapper = (theme: Theme) => css`
  ${flexGenerator('column', 'center', 'flex-start')};
  width: 16.2rem;
  padding: 1rem 1.6rem;
  gap: 0.3rem;
  border: 1px solid ${theme.color.lightgray1};
  border-radius: 10px;
`;

export const selectStyle = (theme: Theme) => css`
  width: 13rem;
  border: none;
  border-radius: 4px;
  color: ${theme.color.midgray1};
  ${theme.font['body01-r-15']};
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']};
`;