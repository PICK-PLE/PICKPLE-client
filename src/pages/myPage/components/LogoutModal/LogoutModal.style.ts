import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const layoutStyle = css`
  ${flexGenerator('column')}
  gap: 2.9rem;
  padding: 1rem;
`;

export const textWrapperStyle = css`
  ${flexGenerator('column')}
  gap: 0.6rem;

  margin-top: 2.7rem;
`;

export const titleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}
`;

export const subTitleStyle = (theme: Theme) => css`
  color: ${theme.color.blackgray};
  ${theme.font['body01-r-15']}
`;

export const buttonWrapper = css`
  ${flexGenerator()}
  min-width: 26.3rem;
  width: 100%;
  gap: 0.9rem;
`;

export const cancelButtonStyle = (theme: Theme) => css`
  background-color: ${theme.color.lightgray1};
  color: ${theme.color.midgray2};
`;
