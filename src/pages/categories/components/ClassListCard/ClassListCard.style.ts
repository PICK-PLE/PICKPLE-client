import { css, Theme } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const classListContainer = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start')};
  width: 100%;
  gap: 2.1rem;
  padding: 1.3rem;
  padding-right: 2.8rem;
  background-color: ${theme.color.background};
  border-radius: 10px;
`;

export const classListTextContainer = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 0.7rem;
`;

export const classCardCustomStyle = css`
  object-position: right;
`;

export const classListTextWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 0.8rem
`;

export const titleTextWrapper = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']}
  color: ${theme.color.black};
`;

export const timeTextWraaper = (theme: Theme) => css`
  ${theme.font['body04-m-12']}
  color: ${theme.color.midgray1}
`;
