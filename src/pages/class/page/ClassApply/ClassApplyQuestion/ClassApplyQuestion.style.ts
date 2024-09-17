import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const questionArticleLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 5.4rem;
  padding: 3.2rem 2rem 3rem 2rem;
  width: 100%;
  min-height: calc(100dvh - 6.3rem);
`;

export const questionWrapperStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  gap: 3.8rem;
`;

export const headerStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.3rem;
`;

export const questionSpanStyle = (theme: Theme) => css`
  color: ${theme.color.purple2};
  ${theme.font['subhead05-sb-14']}
`;

export const questionHStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']}
`;

export const questionMainStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 3rem;
  width: 100%;
`;

export const questionDataStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 3rem;
  width: 100%;
`;

export const eachQuestionWrapper = css`
  ${flexGenerator('column')}
  gap: 1rem;
  width: 100%;
`;

export const questionCautionStyle = (theme: Theme) => css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  gap: 1rem;

  padding: 1rem;
  color: ${theme.color.midgray2};
  background-color: ${theme.color.lightgray0};
  border-radius: 10px;
  ${theme.font['body02-r-14']};
`;

export const questionCautionIconStyle = css`
  width: 2.4rem;
  min-width: 2.4rem;
`;

export const questionCautionTextStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['body02-r-14']}
`;

export const question4WrapperStyle = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  gap: 1.5rem;
`;

export const questionRefundStyle = () => css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  gap: 1.5rem;
`;

export const questionRefundTextStyle = (theme: Theme) => css`
  ${theme.font['body02-r-14']};
  color: ${theme.color.midgray1};
`;

export const questionFooterStyle = css`
  width: 100%;
  margin-top: auto;
`;
