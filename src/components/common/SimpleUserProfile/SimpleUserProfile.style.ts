import { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const profileWrapperStyle = css`
  ${flexGenerator('row', 'flex-start', 'center')}
  gap: 1rem;
  width: 13rem;
`;

export const imgStyle = css`
  width: 4.2rem;
  height: 4.2rem;

  border-radius: 100%;
  object-fit: cover;
`;

export const usernameStyle = (theme: Theme) => css`
  ${theme.font['subhead02-sb-16']}
  color: ${theme.color.blackgray}
`;
