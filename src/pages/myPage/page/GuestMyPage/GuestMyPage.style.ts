import { Theme, css } from '@emotion/react';
import { flexGenerator } from '@styles/generator';

export const GuestMyPageLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 2.8rem;
`;

export const userDistinguishWrapper = css`
  ${flexGenerator('row', 'flex-start', 'flex-start')};
  padding-left: 2rem;
  gap: 2rem;
`;

export const userSelectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;

export const userUnselectedTextStyle = (theme: Theme) => css`
  color: ${theme.color.lightgray2};
  ${theme.font['head03-b-18']}

  cursor: pointer;
`;

export const simpleUserProfileWrapper = css`
  margin-top: 3rem;
  padding-left: 2rem;
`;

export const navigateBoxWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  width: 100%;
  padding: 0 2rem;
  gap: 2.8rem;
`;

export const line = (theme: Theme) => css`
  ${flexGenerator('row', 'center')};
  width: 100%;
  height: 0.8rem;

  background-color: ${theme.color.background};
`;
