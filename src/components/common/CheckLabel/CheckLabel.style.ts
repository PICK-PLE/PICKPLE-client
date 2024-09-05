import { Theme, css } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const inputStyle = css`
  display: none;
`;

export const checkLabelWrapper = css`
  ${flexGenerator()};
  width: fit-content;
  margin-top: 1rem;
  gap: 0.4rem;

  cursor: pointer;
`;

export const iconWrapperStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const textStyle = (theme: Theme) => css`
  ${theme.font['body01-r-15']};
  color: ${theme.color.midgray1};
`;
