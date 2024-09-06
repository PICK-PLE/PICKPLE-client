import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const footerContainer = (theme: Theme) => css`
  ${flexGenerator()};
  width: 100%;
  height: 14rem;
  padding: 2.4rem 2rem 2.6rem 2rem;
  margin-top: auto;
  bottom: 0;

  background: ${theme.color.bg_white0};
`;

export const footerWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  align-self: stretch;
`;

export const logoStyle = css`
  ${flexGenerator()};
  height: 1.8rem;
  gap: 0.1303px;
`;

export const termsOfUseStyle = css`
  ${flexGenerator()};
  gap: 0.8rem;
`;

export const textStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body03-r-12']}
`;

export const contactWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
`;

export const contactTextStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['body03-r-12']}
`;
