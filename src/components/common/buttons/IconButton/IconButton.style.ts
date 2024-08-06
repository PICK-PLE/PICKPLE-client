import { css, Theme } from '@emotion/react';

import { flexGenerator } from '@styles/generator';

export const buttonStyle = (theme: Theme) => css`
  width: 10.5rem;
  ${flexGenerator()};
  gap: 0.7rem;
  padding: 0.8rem 1rem;

  ${theme.font['subhead05-sb-14']};
  background-color: ${theme.color.white};
  color: ${theme.color.purple1};

  border: 1px solid ${theme.color.purple1};
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

export const iconWrapperStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;
