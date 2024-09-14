import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const profileContainer = css`
  ${flexGenerator('row', 'space-between', 'center')};
  width: 100%;
`;

export const profileWrapper = css`
  ${flexGenerator('row', 'flex-start')};
  gap: 0.7rem;
`;

export const profileTextBox = css`
  ${flexGenerator('column', 'center', 'flex-start')};
`;

export const profilePosition = (theme: Theme) => css`
  ${theme.font['body04-m-12']};
  color: ${theme.color.midgray2};
`;

export const profileName = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.blackgray};
`;

export const iconWrapper = css`
  position: relative;
`;

export const iconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  right: 0.3rem;

  cursor: pointer;
`;
export const spickerIconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const profileNameWrapper = css`
  display: flex;
  gap: 0.3rem;
`;
