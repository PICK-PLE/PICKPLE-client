import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const modalContainerStyle = css`
  ${flexGenerator('column')}
  gap: 3.5rem;
  padding: 4.2rem 1.7rem 1.7rem 1.7rem;
`;

export const sectionStyle = css`
  ${flexGenerator('column')}
  gap: 2rem;
`;

export const headerStyle = css`
  ${flexGenerator('column')}
  gap: 1.2rem
`;

export const iconStyle = css`
  width: 3.2rem;
  height: 3.2rem;
`;

export const textDivStyle = css`
  ${flexGenerator('column')}
  gap: 0.6rem
`;
export const modalCommentTitleStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']};
`;
export const countTextStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['head03-b-18']}
`;

export const applicantCountStyle = (theme: Theme) => css`
  color: ${theme.color.darkgray};
  ${theme.font['head03-b-18']};
`;

export const mainStyle = css`
  ${flexGenerator()};
  min-width: 30.1rem;
  padding: 1rem;
`;
export const ulStyle = css`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 2rem 1.5rem;
  min-width: 28.1rem;
  width: 100%;
  padding: 0 0.7rem;
`;

export const liStyle = css`
  width: 100%;
  list-style: none;
`;
