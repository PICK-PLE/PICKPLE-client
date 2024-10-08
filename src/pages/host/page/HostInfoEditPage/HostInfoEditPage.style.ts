import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const hostInfoLayout = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')}
  gap: 7.2rem;
  padding-top: 6rem;
  width: 100%;
`;

export const hostInfoContainer = css`
  width: 100%;
`;

export const hostImageWrapper = css`
  position: relative;
`;

export const hostBackgroundImage = css`
  width: 100%;
  height: 11.6rem;
`;

export const hostProfileImage = css`
  position: absolute;
  top: 7.4rem;
  left: 2rem;
`;

export const hostInfoEditIcon = css`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 12.6rem;
  left: 8.7rem;

  cursor: pointer;
`;

export const hostInfoEditInput = css`
  display: none;
`;

export const hostInputContainer = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 5.4rem;
  width: 100%;
  padding: 0 2rem 3rem 2rem;
`;

export const hostInputWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 2.2rem;
  width: 100%;
`;

export const hostTextAreaWrapper = css`
  ${flexGenerator('column', 'flex-start', 'flex-start')};
  gap: 0.8rem;
  width: 100%;
`;

export const hostTextAreaLabelStyle = (theme: Theme) => css`
  ${theme.font['subhead05-sb-14']};
  color: ${theme.color.midgray2};
`;
