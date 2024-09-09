import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const reviewWriteLayout = css`
  padding-top: 6rem;
`;

export const reviewWriteContainer = css`
  ${flexGenerator('column')}
  width: 100%;
  min-width: 33.5rem;
  padding: 3rem 2rem;
`;

export const mainStyle = css`
  ${flexGenerator('column')}
  gap: 6rem;
  width: 100%;

  margin-top: 3rem;
  margin-bottom: 5.4rem;
`;

export const tagSectionStyle = css`
  ${flexGenerator('column', 'center', 'start')}
  gap: 2.4rem;
  width: 100%;
`;

export const sectionTitleStyle = css`
  ${flexGenerator()}
  gap: 0.7rem;
`;

export const bigSpan = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['subhead01-sb-18']}
`;

export const smallSpan = (theme: Theme) => css`
  color: ${theme.color.midgray1};
  ${theme.font['body03-r-12']}
`;

export const tagWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 0.6rem;
  width: 100%;
`;

export const writeReviewSection = css`
  ${flexGenerator('column', 'center', 'start')}
  gap: 1.5rem;
  width: 100%;
`;

export const textareaAndImageWrapper = css`
  ${flexGenerator('column')}
  gap: 2rem;
  width: 100%;
`;
