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
  width: 30.1rem;
  height: 17.5rem;
  padding: 1rem 0.7rem 0rem 2rem;
`;

export const ulStyle = (theme: Theme) => css`
  overflow-y: auto;
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 1.4rem;
  width: 100%;
  height: 100%;

  &::-webkit-scrollbar {
    display: block;
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.lightgray0};
    border-radius: 3px;
  }
`;

export const liStyle = css`
  width: 100%;
  list-style: none;
`;
