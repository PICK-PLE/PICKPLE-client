import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostInfoLayout = css`
  padding-top: 6rem;
`;

export const hostImageWrapper = css`
  position: relative;
`;

export const hostBackgroundImage = css`
  width: 100%;
  height: 11.6rem;
  border-radius: 0;
`;

export const hostProfileImage = css`
  position: absolute;
  top: 7.4rem;
  left: 2rem;
`;

export const hostProfileContainer = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 1rem;
  padding: 5rem 2rem 0rem 2rem;
`;

export const hostProfileWrapper = css`
  ${flexGenerator('column', 'center', 'flex-start')};
  gap: 2rem;
`;

export const hostProfileStyle = css`
  ${flexGenerator('column', 'center', 'flex-start')}
  gap: 0.4rem;
`;

export const hostNameMarkWrapper = css`
  ${flexGenerator('row', 'flex-start')}
  gap: 0.8rem;
`;

export const hostNameWrapper = css`
  ${flexGenerator()}
  gap: 0.4rem
`;

export const hostNameStyle = (theme: Theme) => css`
  color: ${theme.color.black};
  ${theme.font['head01-b-22']};
`;

export const hostMarkIconStyle = css`
  width: 1.9rem;
  height: 1.9rem;
`;

export const hostMarkMessageWrapper = (theme: Theme) => css`
  ${flexGenerator()}
  width: 4.8rem;
  height: 2.1rem;
  background-color: ${theme.color.purple5};
  border-radius: 5px;
`;

export const hostMarkMessageStyle = (theme: Theme) => css`
  color: ${theme.color.purple1};
  ${theme.font['body03-r-12']}
`;

export const hostKeywordStyle = (theme: Theme) => css`
  color: ${theme.color.midgray2};
  ${theme.font['subhead05-sb-14']}/* subhead06 으로 변경 */
`;

export const hostDescriptionWrapper = (theme: Theme) => css`
  background-color: ${theme.color.background};
  border-radius: 10px;
  padding: 1.4rem 2rem;
  height: 9.7rem;
`;

export const hostDescriptionStyle = (theme: Theme) => css`
  ${theme.font['body02-r-14']};
  color: ${theme.color.darkgray};
`;
