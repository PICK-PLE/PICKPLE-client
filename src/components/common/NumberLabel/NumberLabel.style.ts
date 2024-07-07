import { css, Theme } from '@emotion/react';

export const wrapperStyle = css`
  position: relative;
  display: inline-block;
`;

export const iconStyle = css`
  display: block;
  width: 4.4rem;
  height: 4.4rem;
`;

export const textStyle = (theme: Theme) => css`
  position: absolute;
  top: 50%; /* 아이콘 가운데 정렬 */
  left: 50%; /* 아이콘 가운데 정렬 */
  transform: translate(-50%, -50%); /* 정확한 가운데 정렬 */
  color: ${theme.color.purple1};
  ${theme.font['head03-b-18']}
`;
